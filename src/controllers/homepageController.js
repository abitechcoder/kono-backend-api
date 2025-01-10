const { Home } = require('../models');
const { uploadFile } = require('../utils/fileUpload');

exports.createHomepage = async (req, res) => {
  try {
    let imageUrl;

    if (req.files.image) {
      imageUrl = await uploadFile(req.files.image[0], 'images');
    }

    const homepage = await Home.create({
      title: req.body.title,
      message: req.body.message,
      image: imageUrl,
    });

    res.status(201).json(homepage);
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error creating home data', error: error.message });
  }
};

exports.getHomepage = async (req, res) => {
  try {
    const homepage = await Home.findAll({});
    res.json(homepage);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving homepage information',
      error: error.message,
    });
  }
};

exports.getHomepageById = async (req, res) => {
  try {
    const homepage = await Home.findByPk(req.params.id);
    if (homepage) {
      res.json(homepage);
    } else {
      res.status(404).json({ message: 'Home data not found' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error retrieving home data', error: error.message });
  }
};

exports.updateHomepage = async (req, res) => {
  let imageUrl;
  const homeId = req.params.id;
  try {
    if (req.files.image) {
      imageUrl = await uploadFile(req.files.image[0], 'images');
    }

    console.log('Image Url:', imageUrl);

    const [updated] = await Home.update(
      {
        title: req.body.title,
        message: req.body.message,
        image: imageUrl,
      },
      {
        where: { id: homeId },
      }
    );

    if (updated) {
      const updatedHomepage = await Home.findByPk(req.params.id);
      res.json(updatedHomepage);
    } else {
      res.status(404).json({ message: 'Home data not found' });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error updating home data', error: error.message });
  }
};
