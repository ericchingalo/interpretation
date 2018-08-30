import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';

import { getNotifications } from '../reducers/notification.reducer';

export const getNotificationState = createSelector(
    getRootState, (state: State) => state.notification
)

export const getAllNotifications = createSelector(getNotificationState, getNotifications)
