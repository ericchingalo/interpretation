import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@hisptz/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

import { SystemInfo } from '../../../models/SystemInfo.model';
import { INITIAL_SYSTEM_INFO } from '../../../store/reducers/system-info.reducer';

@Injectable({
  providedIn: 'root'
})
export class SystemInfoService {

  constructor(private httpService: NgxDhis2HttpClientService) { }

  getSystemInfo(){
    return new Observable(observer => {
      const rootUrl = '../../../'
        this.httpService.get('system/info')
          .subscribe((systemInfo: any) => {
            const initialSystemInfo: SystemInfo = INITIAL_SYSTEM_INFO;
            observer.next({
              rootUrl: rootUrl,
              apiRootUrl: this._getApiRootUrl(rootUrl + 'api/', systemInfo.version, initialSystemInfo.maxSupportedVersion),
              minSupportedVersion: initialSystemInfo.minSupportedVersion,
              maxSupportedVersion: initialSystemInfo.maxSupportedVersion,
              currentVersion: parseFloat(systemInfo.version)
            });
            observer.complete();
          }, systemInfoError => observer.error(systemInfoError));
    })
  }

  private _getApiRootUrl(url, currentVersion, maxSupportedVersion) : any{
    let initialApiVersion = url;

    if (currentVersion > 2.24) {
      initialApiVersion += currentVersion > maxSupportedVersion ? this._getVersionDecimalPart(maxSupportedVersion) + '/' :
        this._getVersionDecimalPart(currentVersion) + '/';
    }
    return initialApiVersion;
  }

  private _getVersionDecimalPart(version: number) {
    return version.toString().split('.')[1];
  }

}

