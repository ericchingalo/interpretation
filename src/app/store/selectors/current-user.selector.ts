import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';

import { getCurrentUser } from '../reducers/current-user.reducer';

export const getCurrentUserState = createSelector(
    getRootState, (state: State) => state.currentUser
)

export const getCurrentUserDetails = createSelector(getCurrentUserState, getCurrentUser);