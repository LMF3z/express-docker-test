import * as dotenv from 'dotenv';
dotenv.config('../');
import express from 'express';

const port = process.env.PORT || 3001;

const app = express();

app.get('/', (_req, res) => {
  res.json({ message: 'works' });
});

app.get('/api', (_req, res) => {
  res.json({ message: 'works api' });
});

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});
