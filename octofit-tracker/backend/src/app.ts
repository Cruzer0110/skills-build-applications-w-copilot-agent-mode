import cors from 'cors';
import express from 'express';
import { getPublicBaseUrl } from './config/publicUrl.js';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/api/health', (_request, response) => {
    response.json({
      ok: true,
      service: 'octofit-tracker-backend',
      baseUrl: getPublicBaseUrl(),
      ports: {
        api: 8000,
        frontend: 5173,
        mongo: 27017
      }
    });
  });

  return app;
}