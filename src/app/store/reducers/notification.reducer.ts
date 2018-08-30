import { NotificationActionTypes, NotficationAction } from '../actions/notification.action';

export interface NotificationState {
    loading: boolean;
    loaded: boolean;
    error: any;
    notifications: {
        status: number;
        body: any;
    }[];    
}

export const initialState: NotificationState = {
    loading: false,
    loaded: false,
    error: null,
    notifications: []
}

export function notificationReducer(
    state = initialState,
    action: NotficationAction
){
    switch(action.type){
        case NotificationActionTypes.LoadNotification: 
        return{
            ...state,
            loading: true,
            loaded: false,
            error: null,
            notifications: state.notifications
        };

        case NotificationActionTypes.LoadNotificationFail: 
        return{
            ...state,
            loading: false,
            loaded: false,
            error: action.error,
            notifications: state.notifications
        };

        case NotificationActionTypes.LoadNotification: 
        return{
            ...state,
            loading: false,
            loaded: true,
            error: null,
            notifications: [...state.notifications, action.payload]
        };

        default: return state
    }
}

export const getNotifications = (state: NotificationState) => state.notifications;
export const getNotificationErrors = (state: NotificationState) => state.error;
  