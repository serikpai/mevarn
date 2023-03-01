import express, { Request, Response, Router } from 'express';
import { GetAllEndpoint, GetByIdEndpoint, PostEndpoint } from '.';

export function PersonRouter(
  getAll: GetAllEndpoint,
  getById: GetByIdEndpoint,
  post: PostEndpoint
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

  router.post('/', async (req: Request, res: Response) => {
    try {
      const person = await post.handle(req.body);
      res.status(201).send(person);
    } catch (err) {
      res.status(406).send({
        statusCode: 406,
        msg: 'something went wrong!',
        error: err
      });
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