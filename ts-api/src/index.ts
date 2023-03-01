import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import PersonRouter from './person-endpoint/PersonRouter';
import { GetAllEndpointImpl } from './person-endpoint/GetAllEndpointImpl';
import { MemoryPersonDataSource } from './data-source/MemoryPersonDataSource';
import { GetByIdEndpointImpl } from './person-endpoint/GetByIdEndpointImpl';

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
    new GetByIdEndpointImpl(personDataSource)
  );

  app.use('/person', personMiddleware);

// app //
//   .route('/people')
//   .get(ctrl.getAll)
//   .put(ctrl.create);
//
// app //
//   .route('/people/:id')
//   .get(ctrl.getById);

  app.listen(PORT, () => {
    console.log(`[server:] Server is running at http://localhost:${PORT}`);
  });

})();


