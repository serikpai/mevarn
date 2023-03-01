import { PersonDto } from '../data-source-contract/data-classes/PersonDto';

export interface GetAllEndpoint {
  handle(): Promise<PersonDto[]>;
}