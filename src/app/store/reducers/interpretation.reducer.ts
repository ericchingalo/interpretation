import { InterpretationAction, InterpretationActionTypes } from '../actions/interpretation.action';
import { Interpretation } from '../../models/interpretation.model'
export interface InterpretationState{
    loading: boolean;
    loaded: boolean;
    error: any;
    interpretations: Interpretation
}

export const initialState: InterpretationState = {
    loaded: false,
    loading: false,
    error: null,
    interpretations: null
}

export function interpretationReducer(
    state = initialState,
    action : InterpretationAction
){
    switch(action.type){
        case InterpretationActionTypes.LoadInterpretation: 
        return {
            ...state,
            loading: true,
            loaded: false,
            error: null,
            interpretations : state.interpretations
        };

        case InterpretationActionTypes.LoadInterpretationFail: 
        return {
            ...state,
            loading: false,
            loaded: false,
            error: action.error,
            interpretations: state.interpretations
        }

        case InterpretationActionTypes.LoadInterpretationSuccess: 
        return{
            ...state,
            loading: false,
            loaded: true,
            error: null,
            interpretations: action.payload
        }

        default: return state
    }
}

export const getInterpretations = (state: InterpretationState) => state.interpretations;
export const getInterpetationError = (state: InterpretationState) => state.error;