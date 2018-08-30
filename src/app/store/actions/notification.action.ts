import { Action } from '@ngrx/store';

export enum NotificationActionTypes{
    LoadNotification = '[Interpretation] Load Interpretation',
    LoadNotificationSuccess = '[Interpretation] Load Interpretation success',
    LoadNotificationFail = '[Interpretation] LOad Interpretation Fail'
}

export class LoadNotification implements Action{
    readonly type = NotificationActionTypes.LoadNotification;
    constructor(public payload: any){};
}

export class LoadNotificationSuccess implements Action{
    readonly type = NotificationActionTypes.LoadNotificationSuccess;
    constructor(public payload: any){};
}

export class LoadNotificationFail implements Action{
    readonly type = NotificationActionTypes.LoadNotificationFail;
    constructor(public error: any){};
}

export type NotficationAction = LoadNotification | LoadNotificationSuccess | LoadNotificationFail;