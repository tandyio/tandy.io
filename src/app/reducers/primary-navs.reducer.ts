import { Action, createReducer, on } from '@ngrx/store'
import * as NavActions from './../actions/primary-navs.actions'

export interface State {
    selected_nav_id: number;
}

export const initialState: State = {
    selected_nav_id: 1,
}

const primaryNavReducer = createReducer(
    initialState,
    on(NavActions.navSelect, (state, { selected_nav_id }) => ({...state, selected_nav_id: selected_nav_id}))
)

export function reducer(state: State | undefined, action: Action) {
    return primaryNavReducer(state, action);
}