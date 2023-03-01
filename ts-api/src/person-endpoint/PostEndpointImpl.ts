import { PostEndpoint } from '../person-endpoint-contract/PostEndpoint';
import { PersonDto } from '../data-source-contract/data-classes/PersonDto';
import { PersonDataSource } from '../data-source-contract/PersonDataSource';

export class PostEndpointImpl implements PostEndpoint {

  constructor(private persons: PersonDataSource) {
  }

  async handle(person: PersonDto): Promise<PersonDto> {
    if (!person) {
      throw 'empty body';
    }
    if (!person.forename) {
      throw 'no forename provided'
    }

    return await this.persons.create(person);
  }
}