import {Injectable} from '@angular/core';

import {OpenfactUIConfig} from './config/openfact-ui-config';

@Injectable()
export class ApiLocatorService {

  public readonly DEFAULT_API_ENV_VAR_NAMES = new Map<string, string>(
    [
      ['sync', 'OPENFACT_SYNC_API_URL'],
      ['sso', 'OPENFACT_SSO_API_URL'],
      ['realm', 'OPENFACT_REALM'],
      ['branding', 'BRANDING'],

    ]
  );

  public readonly DEFAULT_API_PREFIXES = new Map<string, string>([
    ['sync', 'api'],
    ['sso', 'sso'],
  ]);

  public readonly DEFAULT_API_PATHS = new Map<string, string>([
    ['sync', 'api/']
  ]);

  private envVars = new Map<string, string>();

  constructor(private config: OpenfactUIConfig) {
    this.DEFAULT_API_ENV_VAR_NAMES.forEach((value, key) => {
      this.loadEnvVar(key);
    });
  }

  get realm(): string {
    return this.envVars.get('realm') || 'openfact';
  }

  get branding(): string {
    return this.envVars.get('branding') || 'openfact';
  }

  get syncApiUrl(): string {
    return this.config.syncApiUrl || this.buildApiUrl('sync');
  }

  get ssoApiUrl(): string {
    return this.config.ssoApiUrl || this.buildApiUrl('sso');
  }

  private loadEnvVar(key: string): void {
    this.envVars.set(key, process.env[this.DEFAULT_API_ENV_VAR_NAMES.get(key)]);
  }

  private buildApiUrl(key: string): string {
    // Return any environment specified URLs for this API
    if (this.envVars.get(key)) {
      return this.envVars.get(key);
    }
    // Simple check to trim www
    let domainname = window.location.hostname;
    if (domainname.startsWith('www')) {
      domainname = window.location.hostname.slice(4);
    }
    let url = domainname;
    if (window.location.port) {
      url += ':' + window.location.port;
    }
    if (this.DEFAULT_API_PREFIXES.has(key)) {
      url = this.DEFAULT_API_PREFIXES.get(key) + '.' + url + '/';
    }
    if (this.DEFAULT_API_PATHS.has(key)) {
      url += this.DEFAULT_API_PATHS.get(key);
    }
    url = window.location.protocol + '//' + url;
    return url;
  }

}
