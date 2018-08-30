import { Action } from '@ngrx/store';

export enum InterpretationActionTypes{
    LoadInterpretation = '[Interpretation] Load Interpretation',
    LoadInterpretationSuccess = '[Interpretation] Load Interpretation success',
    LoadInterpretationFail = '[Interpretation] LOad Interpretation Fail'
}

export class LoadInterpretation implements Action{
    readonly type = InterpretationActionTypes.LoadInterpretation;
    constructor(public payload: any){};
}

export class LoadInterpretationSuccess implements Action{
    readonly type = InterpretationActionTypes.LoadInterpretationSuccess;
    constructor(public payload: any){};
}

export class LoadInterpreationFail implements Action{
    readonly type = InterpretationActionTypes.LoadInterpretationFail;
    constructor(public error: any){};
}

export type InterpretationAction = LoadInterpretation | LoadInterpreationFail | LoadInterpretationSuccess;