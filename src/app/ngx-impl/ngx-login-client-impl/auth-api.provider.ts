import { AUTH_API_URL } from '../../ngx/ngx-login-client';

import { ApiLocatorService } from '../../config/api-locator.service';

let authApiUrlFactory = (api: ApiLocatorService) => {
  return api.authApiUrl;
};

export let authApiUrlProvider = {
  provide: AUTH_API_URL,
  useFactory: authApiUrlFactory,
  deps: [ApiLocatorService]
};