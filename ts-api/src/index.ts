import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import { MemoryPersonDataSource } from './data-source/MemoryPersonDataSource';
import { GetAllEndpointImpl, GetByIdEndpointImpl, PersonRouter, PostEndpointImpl } from './person-endpoint';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/alive', (req: Request, res: Response) => {
  res.status(200).send({ alive: 'yes' });
});

(async () => {

  const personDataSource = new MemoryPersonDataSource();

  const personMiddleware = PersonRouter(
    new GetAllEndpointImpl(personDataSource),
    new GetByIdEndpointImpl(personDataSource),
    new PostEndpointImpl(personDataSource)
  );

  app.use('/person', personMiddleware);

  app.listen(PORT, () => {
    console.log(`[server:] Server is running at http://localhost:${PORT}`);
  });

})();


