import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';

import { getInterpretations } from '../reducers/interpretation.reducer';

export const getInterpretationState = createSelector(
    getRootState, (state: State) => state.interpretations
)

export const getAllInterpretations = createSelector(getInterpretationState, getInterpretations)