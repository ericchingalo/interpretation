import { Action } from '@ngrx/store';

export enum CurrentUserActionTypes{
    LoadCurrentUser = '[CurrentUser] Load CurrentUser',
    LoadCurrentUserSuccess = '[CurrentUser] Load CurrentUser success',
    LoadCurrentUserFail = '[CurrentUser] LOad CurrentUser Fail'
}

export class LoadCurrentUser implements Action{
    readonly type = CurrentUserActionTypes.LoadCurrentUser;
    //constructor(public payload: any){};
}

export class LoadCurrentUserSuccess implements Action{
    readonly type = CurrentUserActionTypes.LoadCurrentUserSuccess;
    constructor(public payload: any){};
}

export class LoadCurrentUserFail implements Action{
    readonly type = CurrentUserActionTypes.LoadCurrentUserFail;
    constructor(public error: any){};
}

export type CurrentUserAction = LoadCurrentUser | LoadCurrentUserFail | LoadCurrentUserSuccess;