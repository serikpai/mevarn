import { PersonDataSource } from '../data-source-contract/PersonDataSource';
import { PersonDto } from '../data-source-contract/data-classes/PersonDto';

export class MemoryPersonDataSource implements PersonDataSource {

  personCache: PersonDto[] = [
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

  readAll(): Promise<PersonDto[]> {

    return new Promise<PersonDto[]>((resolve, reject) => {
      resolve(this.personCache);
    });
  }

  readById(id: number): Promise<PersonDto> {

    return new Promise<PersonDto>((resolve, reject) => {

      const person = this.personCache.find(x => x.id == id);

      if (!!person) {
        resolve(person);
      } else {
        reject('geht net!');
      }
    });
  }

  create(person: PersonDto): Promise<PersonDto> {
    return new Promise<PersonDto>((resolve, reject) => {

      const newPerson: PersonDto = {
        ...person,
        id: this.personCache.length + 1
      };

      this.personCache = [...this.personCache, newPerson];

      resolve(newPerson);
    });
  }

  delete(id: number): void {
    throw 'not impl';
  }

  update(id: number, person: PersonDto): Promise<PersonDto> {
    throw 'not impl';
  }
}