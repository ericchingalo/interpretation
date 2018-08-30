import { CurrentUserAction, CurrentUserActionTypes} from '../actions/current-user.action';
import { CurrentUser } from '../../models/current-user.model';
export interface CurrentUserState {
  loaded: boolean;
  loading: boolean;
  error: any;
  currentUser: CurrentUser; 
}

export const initialState: CurrentUserState = {
    loaded: false,
    loading: false,
    error: null,
    currentUser: null
}

export function currentUserReducer(
    state = initialState,
    action : CurrentUserAction 
){
    switch(action.type){
        case CurrentUserActionTypes.LoadCurrentUser: 
        return {
            ...state,
            loading: true,
            loaded: false,
            error: null,
            currentUser: null
        }; 
        
        case CurrentUserActionTypes.LoadCurrentUserFail: 
        return {
            ...state,
            loading: false,
            loaded: false,
            error: action.error,
            currentUser: null
        };

        case CurrentUserActionTypes.LoadCurrentUserSuccess: 
        return {
            ...state,
            loading: false,
            loaded: true,
            error: null,
            currentUser: action.payload
        };

        default: return state
    }

}

export const getCurrentUser = (state: CurrentUserState) => state.currentUser;
export const getCurrentUserError = (state: CurrentUserState) => state.error;