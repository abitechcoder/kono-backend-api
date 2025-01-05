const { admin } = require('../config/firebase');
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 20 * 1024 * 1024, // 20MB file size limit
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
        new Error('Invalid file type, only JPEG, PNG and PDF is allowed!'),
        false
      );
    }
  },
});

// const uploadFile = async (file, path) => {
//   try {
//     const dateTime = Date.now();
//     const fileName = `${dateTime}-${file.originalname}`;
//     const storageRef = ref(storage, `${path}/${fileName}`);

//     const snapshot = await uploadBytes(storageRef, file.buffer);
//     const downloadURL = await getDownloadURL(snapshot.ref);

//     return downloadURL;
//   } catch (error) {
//     console.error('Error uploading file: ', error);
//     throw error;
//   }
// };

const uploadFile = async (file, path) => {
  try {
    const bucket = admin.storage().bucket();
    const dateTime = Date.now();
    const fileName = `${path}/${dateTime}-${file.originalname}`;

    const fileUpload = bucket.file(fileName);

    // Create write stream
    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
      resumable: file.size > 5 * 1024 * 1024, // Use resumable uploads for files >5MB
    });

    // Handle upload completion through Promise
    const uploadPromise = new Promise((resolve, reject) => {
      blobStream.on('error', (error) => {
        reject(error);
      });

      blobStream.on('finish', async () => {
        // Make the file publicly accessible
        await fileUpload.makePublic();

        // Get the public URL
        const downloadURL = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
        resolve(downloadURL);
      });
    });

    // Write file buffer to stream
    blobStream.end(file.buffer);

    // Wait for upload to complete
    const downloadURL = await uploadPromise;
    return downloadURL;
  } catch (error) {
    console.error('Error uploading file: ', error);
    throw error;
  }
};

module.exports = { uploadFile, upload };
