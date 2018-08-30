import { createSelector } from '@ngrx/store';
import {  State } from '../reducers';

import { getRootUrl } from '../reducers/system-info.reducer'

const systemInfo = (state: State) => state.systemInfo;

export const getApiRootUrl = createSelector(systemInfo, getRootUrl)

