const http = require('http');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');
const { mongoConnect } = require('./services/mongo');

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
