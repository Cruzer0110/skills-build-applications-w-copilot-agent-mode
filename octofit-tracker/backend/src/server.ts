import dotenv from 'dotenv';
import { connectDatabase } from './config/database.js';
import { createApp } from './app.js';

dotenv.config();

const port = Number(process.env.PORT ?? 8000);
const app = createApp();

async function startServer() {
  try {
    await connectDatabase();
    app.listen(port, () => {
      console.log(`OctoFit Tracker backend listening on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start backend server:', error);
    process.exitCode = 1;
  }
}

void startServer();