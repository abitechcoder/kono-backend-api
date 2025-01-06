const { News } = require('../models');
const { uploadFile } = require('../utils/fileUpload');

exports.createNews = async (req, res) => {
  try {
    let imageUrl, documentUrl;

    if (req.files.image) {
      imageUrl = await uploadFile(req.files.image[0], 'images');
    }

    if (req.files.report) {
      documentUrl = await uploadFile(req.files.report[0], 'documents');
    }

    const news = await News.create({
      title: req.body.title,
      description: req.body.description,
      image: imageUrl,
      report: documentUrl,
    });

    res.status(201).json(news);
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error creating news', error: error.message });
  }
};

exports.getAllNews = async (req, res) => {
  try {
    const news = await News.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.json(news);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving all news',
      error: error.message,
    });
  }
};

exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (news) {
      res.json(news);
    } else {
      res.status(404).json({ message: 'news not found' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving news',
      error: error.message,
    });
  }
};

exports.updateNews = async (req, res) => {
  try {
    let imageUrl, documentUrl;

    if (req.files.image) {
      imageUrl = await uploadFile(req.files.image[0], 'images');
    }

    if (req.files.report) {
      documentUrl = await uploadFile(req.files.report[0], 'documents');
    }
    const [updated] = await News.update(
      {
        title: req.body.title,
        description: req.body.description,
        image: imageUrl,
        report: documentUrl,
      },
      {
        where: { id: req.params.id },
      }
    );
    if (updated) {
      const updatedNews = await News.findByPk(req.params.id);
      res.json(updatedNews);
    } else {
      res.status(404).json({ message: 'News not found' });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error updating News', error: error.message });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const deleted = await News.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send('News deleted');
    } else {
      res.status(404).json({ message: 'News not found' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error deleting News', error: error.message });
  }
};
