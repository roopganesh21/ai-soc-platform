// Controller for log upload and basic log-related operations

// Using async function to keep API consistent once DB operations are added
async function uploadLog(req, res, next) {
  try {
    const { file } = req;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const {
      originalname,
      filename,
      size,
      path,
    } = file;

    return res.status(201).json({
      originalName: originalname,
      filename,
      size,
      path,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  uploadLog,
};
