// Express server for AI-SOC Platform on port 5000

const http = require('http');
const app = require('./app');
const { port, nodeEnv } = require('./config');

const server = http.createServer(app);

server.listen(port, () => {
  // Basic startup log
  console.log(`Server running on port ${port} in ${nodeEnv} mode`);
});

// Basic error handling for the server
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please free the port or change the configuration.`);
  } else {
    console.error('Server error:', error);
  }
  process.exit(1);
});
