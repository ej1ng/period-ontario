import express from 'express';
import { handleContact } from './routes/contact';

export function createServer() {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check
  app.get('/api/ping', (req, res) => {
    res.json({ message: 'pong' });
  });

  // Contact form endpoint
  app.post('/api/contact', handleContact);

  return app;
}
