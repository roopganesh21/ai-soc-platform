const path = require('path');
require('dotenv').config();

const port = process.env.PORT ? Number(process.env.PORT) : 5000;
const nodeEnv = process.env.NODE_ENV || 'development';

const uploadDir = path.join(__dirname, '..', 'uploads');

// Maximum file size for uploads (in bytes) - e.g., 10 MB
const maxFileSize = 10 * 1024 * 1024;

// Allowed file MIME types for uploads (adjust as needed)
const allowedFileTypes = [
  'application/json',
  'text/plain',
  'application/octet-stream',
];

module.exports = {
  port,
  nodeEnv,
  uploadDir,
  maxFileSize,
  allowedFileTypes,
};
