import { PersonDto } from '../data-source-contract/data-classes/PersonDto';

export interface PostEndpoint {
  handle(person: PersonDto): Promise<PersonDto>;
}