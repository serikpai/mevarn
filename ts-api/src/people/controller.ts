import { Request, Response } from 'express';

import { Person, ErrorMessage } from './model';

let personCache: Person[] = [
  {
    id: 1,
    forename: 'John',
    surname: 'Doe',
    age: 18
  },
  {
    id: 2,
    forename: 'Susan',
    surname: 'Storm',
    age: 22
  },
  {
    id: 3,
    forename: 'Michael',
    surname: 'Meyers',
    age: 42
  }
];

export class PeopleController {
  // GET: /people
  getAll(req: Request, res: Response): void {
    res.send(personCache);
  }

  // PUT: /people
  create(req: Request, res: Response): void {
    const {
      body: { forename = '', surname = '', age = 18 }
    } = req;

    const person: Person = {
      id: personCache.length + 1,
      forename,
      surname,
      age
    };

    personCache = [...personCache, person];

    res.send(person).status(201);
  }

  // GET: /people/:id
  getById(req: Request, res: Response): void {
    const {
      params: { id = 0 }
    } = req;

    const person = personCache?.find((x) => x.id === +id) ?? null;

    if (!person) {
      res.status(404).send(new ErrorMessage(404, `Nobody found with id: ${id}`));
    } else {
      res.send(person);
    }
  }
}

export default new PeopleController();
