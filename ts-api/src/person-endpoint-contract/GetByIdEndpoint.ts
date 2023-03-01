import { PersonDto } from '../data-source-contract/data-classes/PersonDto';

export interface GetByIdEndpoint {
  handle(id: number): Promise<PersonDto>;
}