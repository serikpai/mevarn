import { GetByIdEndpoint } from '../person-endpoint-contract/GetByIdEndpoint';
import { PersonDto } from '../data-source-contract/data-classes/PersonDto';
import { PersonDataSource } from '../data-source-contract/PersonDataSource';

export class GetByIdEndpointImpl implements GetByIdEndpoint {

  constructor(private persons: PersonDataSource) {
  }

  handle = async (id: number): Promise<PersonDto> =>
    await this.persons.readById(id);
}