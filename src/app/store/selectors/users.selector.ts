import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';

import { getUsers } from '../reducers/users.reducer'

export const getUserState = createSelector(
    getRootState, (state : State) => state.users
);

export const getAllUsers = createSelector( getUserState, getUsers)