import { PersonRouter } from './PersonRouter';

import { GetAllEndpoint } from '../person-endpoint-contract/GetAllEndpoint';
import { GetByIdEndpoint } from '../person-endpoint-contract/GetByIdEndpoint';
import { PostEndpoint } from '../person-endpoint-contract/PostEndpoint';

import { GetAllEndpointImpl } from './GetAllEndpointImpl';
import { GetByIdEndpointImpl } from './GetByIdEndpointImpl';
import { PostEndpointImpl } from './PostEndpointImpl';

export {
  PersonRouter,

  GetAllEndpoint, GetAllEndpointImpl,
  GetByIdEndpoint, GetByIdEndpointImpl,
  PostEndpoint, PostEndpointImpl
};