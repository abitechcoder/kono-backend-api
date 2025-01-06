const { About, Official } = require('../models');
const { uploadFile } = require('../utils/fileUpload');

exports.createAbout = async (req, res) => {
  try {
    let imageUrl;

    if (req?.files.image) {
      imageUrl = await uploadFile(req.files.image[0], 'images');
    } else {
      imageUrl = '';
    }

    const about = await About.create({
      title: req.body.title,
      description: req.body.description,
      image: imageUrl,
    });

    res.status(201).json(about);
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error creating About content', error: error.message });
  }
};

exports.getAbout = async (req, res) => {
  try {
    const about = await About.findAll();
    res.json(about);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving all about content',
      error: error.message,
    });
  }
};

exports.getAboutById = async (req, res) => {
  try {
    const about = await About.findByPk(req.params.id);
    if (about) {
      res.json(about);
    } else {
      res.status(404).json({ message: 'about not found' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving about',
      error: error.message,
    });
  }
};

exports.updateAbout = async (req, res) => {
  try {
    let imageUrl;

    if (req.files.image) {
      imageUrl = await uploadFile(req.files.image[0], 'images');
    }

    const [updated] = await About.update(
      {
        title: req.body.title,
        description: req.body.description,
        image: imageUrl,
      },
      {
        where: { id: req.params.id },
      }
    );
    if (updated) {
      const updatedAbout = await About.findByPk(req.params.id);
      res.json(updatedAbout);
    } else {
      res.status(404).json({ message: 'About info not found' });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Error updating About content',
      error: error.message,
    });
  }
};

exports.createOfficialAndChiefdom = async (req, res) => {
  try {
    let imageUrl;

    if (req?.files.image) {
      imageUrl = await uploadFile(req.files.image[0], 'images');
    } else {
      imageUrl = '';
    }

    const official = await Official.create({
      name: req.body.name,
      description: req.body.description,
      summary: req.body.summary,
      image: imageUrl,
    });

    res.status(201).json(official);
  } catch (error) {
    res.status(400).json({
      message: 'Error creating Offical and Chiefdom',
      error: error.message,
    });
  }
};

exports.getAllOfficials = async (req, res) => {
  try {
    const officials = await Official.findAll();
    res.json(officials);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving all officials',
      error: error.message,
    });
  }
};

exports.getOfficialById = async (req, res) => {
  try {
    const official = await Official.findByPk(req.params.id);
    if (official) {
      res.json(official);
    } else {
      res.status(404).json({ message: 'official not found' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving official',
      error: error.message,
    });
  }
};

exports.deleteOfficial = async (req, res) => {
  try {
    const deleted = await Official.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(200).send('Official deleted');
    } else {
      res.status(404).json({ message: 'official not found' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error deleting official', error: error.message });
  }
};
