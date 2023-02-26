import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

import ctrl from './people/controller';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/alive', (req: Request, res: Response) => {
  res.status(200).send({ alive: 'yes' });
});

app //
  .route('/people')
  .get(ctrl.getAll)
  .put(ctrl.create);

app //
  .route('/people/:id')
  .get(ctrl.getById);

app.listen(PORT, () => {
  console.log(`[server:] Server is running at http://localhost:${PORT}`);
});
