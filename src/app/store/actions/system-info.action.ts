import { Action } from '@ngrx/store';

export enum SystemInfoActionTypes{
    LoadSystemInfo = '[SystemInfo] Load SystemInfo',
    LoadSystemInfoSuccess = '[SystemInfo] Load SystemInfo Success',
    LoadSystemInfoFail = '[SystemInfo] Load SystemInfo Fail',
}

export class LoadSystemInfo implements Action{
    readonly type = SystemInfoActionTypes.LoadSystemInfo;
    //constructor(public payload: any){}
}


export class LoadSystemInfoSuccess implements Action{
    readonly type = SystemInfoActionTypes.LoadSystemInfoSuccess;
    constructor(public payload: any){}
}

export class LoadSystemInfoFail implements Action{
    readonly type = SystemInfoActionTypes.LoadSystemInfoFail;
    constructor(public error: any){}
}

export type SystemInfoAction = LoadSystemInfo | LoadSystemInfoSuccess | LoadSystemInfoFail;