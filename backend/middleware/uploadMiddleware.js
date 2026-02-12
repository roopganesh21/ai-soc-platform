const path = require('path');
const multer = require('multer');
const { uploadDir, maxFileSize } = require('../config');

// Configure storage: keep original filename with a timestamp suffix
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '.log';
    const baseName = path.basename(file.originalname, ext);
    const timestamp = Date.now();
    cb(null, `${baseName}-${timestamp}${ext}`);
  },
});

// Allow only .log files with a 10MB (from config) size limit
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext !== '.log') {
    return cb(new Error('Only .log files are allowed'));
  }
  cb(null, true);
};

const upload = multer({
  storage,
  limits: {
    fileSize: maxFileSize,
  },
  fileFilter,
});

// Middleware wrapper to provide friendly error messages
const uploadLogMiddleware = (req, res, next) => {
  upload.single('file')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ message: 'File too large. Maximum size is 10MB.' });
      }
      return res.status(400).json({ message: err.message || 'File upload error.' });
    }

    if (err) {
      return res.status(400).json({ message: err.message || 'File upload failed.' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded. Please attach a .log file with field name "file".' });
    }

    return next();
  });
};

module.exports = uploadLogMiddleware;
