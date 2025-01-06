const { Project } = require('../models');
const { uploadFile } = require('../utils/fileUpload');

exports.createProject = async (req, res) => {
  try {
    let imageUrl, documentUrl;

    console.log('Body:', req.body);

    if (req.files.image) {
      imageUrl = await uploadFile(req.files.image[0], 'images');
    }

    if (req.files.report) {
      documentUrl = await uploadFile(req.files.report[0], 'documents');
    }

    const project = await Project.create({
      title: req.body.title,
      description: req.body.description,
      image: imageUrl,
      report: documentUrl,
      category: req.body.category,
      completion_rate: req.body.completion_rate,
      budget: req.body.budget,
      starting_date: req.body.starting_date,
      date_completed: req.body.date_completed,
      status: req.body.status,
    });

    res.status(201).json(project);
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error creating project', error: error.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving all projects',
      error: error.message,
    });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'project not found' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving project',
      error: error.message,
    });
  }
};

exports.updateProject = async (req, res) => {
  try {
    let imageUrl, documentUrl;

    if (req.files.image) {
      imageUrl = await uploadFile(req.files.image[0], 'images');
    }

    if (req.files.report) {
      documentUrl = await uploadFile(req.files.report[0], 'documents');
    }
    const [updated] = await Project.update(
      {
        title: req.body.title,
        description: req.body.description,
        image: imageUrl,
        report: documentUrl,
        category: req.body.category,
        completion_rate: req.body.completion_rate,
        budget: req.body.budget,
        starting_date: req.body.starting_date,
        date_completed: req.body.date_completed,
        status: req.body.status,
      },
      {
        where: { id: req.params.id },
      }
    );
    if (updated) {
      const updatedProject = await Project.findByPk(req.params.id);
      res.json(updatedProject);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error updating project', error: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const deleted = await Project.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send('project deleted');
    } else {
      res.status(404).json({ message: 'project not found' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error deleting project', error: error.message });
  }
};
