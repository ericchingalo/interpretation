import { UserActions, UsersActionTypes } from '../actions/users.action'
import { User } from '../../models/users.model';
import { ErrorMessage } from '../../models/error-message.model';

export interface UsersState {
    loaded : boolean,
    error : ErrorMessage,
    users : User[]
}

export const initialState : UsersState = {
    loaded : false,
    error : null,
    users : []

}

export function userReducer(
    state = initialState,
    action : UserActions
){
    switch(action.type){
        case UsersActionTypes.LoadUserFail: 
        return{
            ...state,
            loaded : false,
            error : action.error,
            users : state.users
        };

        case UsersActionTypes.LoadUsersSuccess:
        return{
            ...state,
            loaded : true,
            error : null,
            users : state.users.concat(action.payload)
        };

        default: return state
    }
}

export const getUsers = (state : UsersState) => state.users