import { PersonDto } from './data-classes/PersonDto';

export interface PersonDataSource {
  readAll(): Promise<PersonDto[]>;

  readById(id: number): Promise<PersonDto>;
}