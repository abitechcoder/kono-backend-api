const { Policy } = require('../models');
const { uploadFile } = require('../utils/fileUpload');

exports.createPolicy = async (req, res) => {
  try {
    let imageUrl, documentUrl;

    if (req.files.image) {
      imageUrl = await uploadFile(req.files.image[0], 'images');
    }

    if (req.files.document) {
      documentUrl = await uploadFile(req.files.document[0], 'documents');
    }

    const policy = await Policy.create({
      title: req.body.title,
      description: req.body.description,
      image: imageUrl,
      document: documentUrl,
      document_type: req.body.document_type,
    });

    res.status(201).json(policy);
  } catch (error) {
    console.error('Error:', error.message);
    res
      .status(400)
      .json({ message: 'Error creating Policy', error: error.message });
  }
};

exports.getPolicies = async (req, res) => {
  try {
    const policies = await Policy.findAll();
    res.json(policies);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving policies',
      error: error.message,
    });
  }
};

exports.getPolicyById = async (req, res) => {
  try {
    const policy = await Policy.findByPk(req.params.id);
    if (policy) {
      res.json(policy);
    } else {
      res.status(404).json({ message: 'policy not found' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving policy',
      error: error.message,
    });
  }
};

exports.updatePolicy = async (req, res) => {
  try {
    let imageUrl, documentUrl;

    if (req.files.image) {
      imageUrl = await uploadFile(req.files.image[0], 'images');
    }

    if (req.files.document) {
      documentUrl = await uploadFile(req.files.document[0], 'documents');
    }
    const [updated] = await Policy.update(
      {
        title: req.body.title,
        description: req.body.description,
        image: imageUrl,
        document: documentUrl,
        document_type: req.body.document_type,
      },
      {
        where: { id: req.params.id },
      }
    );
    if (updated) {
      const updatedPolicy = await Policy.findByPk(req.params.id);
      res.json(updatedPolicy);
    } else {
      res.status(404).json({ message: 'Policy not found' });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error updating policy', error: error.message });
  }
};

exports.deletePolicy = async (req, res) => {
  try {
    const deleted = await Policy.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send('Policy deleted');
    } else {
      res.status(404).json({ message: 'Policy not found' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error deleting policy', error: error.message });
  }
};
