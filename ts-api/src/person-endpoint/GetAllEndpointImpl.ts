import { GetAllEndpoint } from '../person-endpoint-contract/GetAllEndpoint';
import { PersonDto } from '../data-source-contract/data-classes/PersonDto';
import { PersonDataSource } from '../data-source-contract/PersonDataSource';

export class GetAllEndpointImpl implements GetAllEndpoint {

  constructor(private persons: PersonDataSource) {
  }

  handle = async (): Promise<PersonDto[]> =>
    await this.persons.readAll();
}