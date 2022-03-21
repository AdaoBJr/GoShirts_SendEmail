import 'dotenv/config';
import '../infra/mongodb/connection';
import express from 'express';
import { router } from '../routers';

const { PORT } = process.env;

const startServer = () => {
  const app = express();
  app.use(express.json());
  app.use(router);

  app.listen(PORT, () => {
    console.log(`🔥 Server Running on http://localhost:${PORT}`);
  });
};

export { startServer };
