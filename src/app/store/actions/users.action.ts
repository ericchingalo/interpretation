import { Action } from '@ngrx/store';
import { User } from '../../models/users.model';
import { ErrorMessage } from '../../models/error-message.model'

export enum UsersActionTypes {
    LoadUsersSuccess = '[User] Load user success',
    LoadUserFail = '[User] Load user Fail'
}

export class LoadUsersSuccess implements Action{
    readonly type = UsersActionTypes.LoadUsersSuccess;
    constructor(public payload : User){}
}

export class LoadUserFail implements Action {
    readonly type = UsersActionTypes.LoadUserFail;
    constructor(public error : ErrorMessage){}
}

export type UserActions = LoadUserFail | LoadUsersSuccess;