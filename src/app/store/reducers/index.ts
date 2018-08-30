import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import { SystemInfoState, systemInfoReducer } from './system-info.reducer';
import { NotificationState, notificationReducer } from './notification.reducer';
import { currentUserReducer, CurrentUserState } from './current-user.reducer';
import { InterpretationState, interpretationReducer } from './interpretation.reducer';


/**
 * Application interface
 */
export interface State {
  systemInfo: SystemInfoState;

  notification: NotificationState;

  currentUser: CurrentUserState;
  
  interpretations: InterpretationState;
}


/**
 * reducers
 */
export const reducers: ActionReducerMap<State> = {
  systemInfo: systemInfoReducer,
  notification: notificationReducer,
  currentUser: currentUserReducer,
  interpretations: interpretationReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

  export const getRootState = (state: State) => state;