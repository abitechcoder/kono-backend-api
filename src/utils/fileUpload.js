const { supabase } = require('../config/supabase');
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 20 * 1024 * 1024, // 20MB
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'application/pdf'
    ) {
      cb(null, true);
    } else {
      cb(
        new Error('Invalid file type. Only JPEG, PNG and PDF allowed.'),
        false
      );
    }
  },
});

const uploadFile = async (file, path) => {
  try {
    const dateTime = Date.now();
    const fileName = `${path}/${dateTime}-${file.originalname}`;

    const { data, error } = await supabase.storage
      .from('kono_storage')
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
        upsert: false,
      });

    if (error) throw error;

    const {
      data: { publicUrl },
    } = supabase.storage.from('kono_storage').getPublicUrl(fileName);

    return publicUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

// Express route handler
const handleFileUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const downloadURL = await uploadFile(req.file, 'uploads');
    res.json({ url: downloadURL });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { upload, uploadFile };
