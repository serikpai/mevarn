import { PersonDto } from './data-classes/PersonDto';

export interface PersonDataSource {

  readAll(): Promise<PersonDto[]>;

  readById(id: number): Promise<PersonDto>;

  create(person: PersonDto): Promise<PersonDto>;

  update(id: number, person: PersonDto): Promise<PersonDto>;

  delete(id: number): void;
}