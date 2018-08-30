import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/internal/operators';

import { CurrentUserService } from '../../modules/interpretation/services/current-user.service'

import { CurrentUser } from '../../models/current-user.model';

import { SystemInfoActionTypes } from '../actions/system-info.action'
import {
    LoadCurrentUserSuccess,
    LoadCurrentUserFail
} from '../actions/current-user.action';

@Injectable()
export class CurrentUserEffect{
    constructor(private httpService: CurrentUserService,
    private actions$: Actions
    ){}

    @Effect()
    loadCurrentUser$: Observable<any> = this.actions$.pipe(
        ofType(SystemInfoActionTypes.LoadSystemInfoSuccess),
        switchMap((action: any)=> this.httpService.getCurrentUser(action.payload.apiRootUrl).pipe(
            map((currentUser: CurrentUser) => new LoadCurrentUserSuccess(currentUser)),
            catchError((error: any) => of(new LoadCurrentUserFail(error)))
        ))
    )
}