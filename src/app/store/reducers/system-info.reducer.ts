import * as fromSystemInfoAction from '../actions/system-info.action'; 
/**
 * System info model
 */
export interface SystemInfoState {
    rootUrl:string; 
    apiRootUrl:string; 
    currentVersion:number; 
    maxSupportedVersion:number; 
    minSupportedVersion:number; 
}

/**
 * System info initial details
 * @type {{rootUrl: any; apiRootUrl: any; currentVersion: number; maxSupportedVersion: number; minSupportedVersion: number; loaded: boolean}}
 */
export const INITIAL_SYSTEM_INFO:SystemInfoState =  {
    rootUrl:undefined, 
    apiRootUrl:undefined, 
    currentVersion:2.29, 
    maxSupportedVersion:2.29, 
    minSupportedVersion:2.26, 
}; 


/**
 * System info reducers
 * @param {State} state
 * @param action
 * @returns {State}
 */
export function systemInfoReducer(state:SystemInfoState = INITIAL_SYSTEM_INFO, action:any) {
    switch (action.type) {
        case fromSystemInfoAction.SystemInfoActionTypes.LoadSystemInfoSuccess:
            return {...action.payload}; 
        default: return state; 
    }
}

export const getRootUrl = (state:SystemInfoState) => state.apiRootUrl