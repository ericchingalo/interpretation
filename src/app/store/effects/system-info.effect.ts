import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/internal/operators';

import { SystemInfoService } from '../../modules/interpretation/services/system-info.service'

import { SystemInfo } from '../../models/SystemInfo.model';
import { LoadNotificationSuccess } from '../actions/notification.action';

import { 
    SystemInfoActionTypes,
    LoadSystemInfoSuccess
 } from '../actions/system-info.action';

 @Injectable()
 export class SystemInfoEffect{
    constructor(private systemInfoService: SystemInfoService,
        private actions$: Actions) {}

        @Effect() systemInfo: Observable<any> = this.actions$.pipe(
            ofType(SystemInfoActionTypes.LoadSystemInfo),
            switchMap(() => this.systemInfoService.getSystemInfo().pipe(
              map((systemInfo: SystemInfo) => new LoadSystemInfoSuccess(systemInfo)),
              catchError((errorNotification: any) => of(new LoadNotificationSuccess(errorNotification)))
            )))
 }