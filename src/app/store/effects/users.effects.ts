import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/internal/operators';

import { UsersService } from '../../modules/interpretation/services/users.service';

import { CurrentUserActionTypes } from '../actions/current-user.action'
import { LoadUsersSuccess, LoadUserFail } from '../actions/users.action';

@Injectable()
export class UsersEffect{
    constructor(private actions$ : Actions, private usersServices : UsersService){}
    
    @Effect()
    loadUsers$: Observable<any> = this.actions$.pipe(
        ofType(CurrentUserActionTypes.LoadCurrentUserSuccess),
        switchMap(() => this.usersServices.getAllUsers().pipe(
            map((response : any) =>{
                const { users } = response;
                return new LoadUsersSuccess(users);
            }),
            catchError((error : any) => of(new LoadUserFail(error)))
        ))
    )
}