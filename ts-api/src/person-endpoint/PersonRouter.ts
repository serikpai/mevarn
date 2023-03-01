import express, { Request, Response, Router } from 'express';
import { GetAllEndpoint } from '../person-endpoint-contract/GetAllEndpoint';
import { GetByIdEndpoint } from '../person-endpoint-contract/GetByIdEndpoint';

export default function PersonRouter(
  getAll: GetAllEndpoint,
  getById: GetByIdEndpoint
): Router {
  const router = express.Router();

  router.get('/', async (req: Request, res: Response) => {
    try {
      const people = await getAll.handle();

      res.status(200).send(people);
    } catch {
      res.status(500).send('something went wrong!');
    }
  });

  router.get('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const person = await getById.handle(+id);

      res.status(200).send(person);

    } catch (err) {
      res.status(404).send({
        statusCode: 404,
        msg: 'something went wrong!',
        error: err
      });
    }
  });

  return router;
}