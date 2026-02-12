// Routes for log upload and management

const express = require('express');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const { uploadLog } = require('../controllers/logController');

const router = express.Router();

// POST /api/logs/upload
router.post('/upload', uploadMiddleware, uploadLog);

module.exports = router;
