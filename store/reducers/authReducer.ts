//#region > Imports
//> Action Types
import { HYDRATE } from "next-redux-wrapper";
import { AuthState, AuthAction, AuthActionTypes } from "../types";
//#endregion

//#region > Config
// Have initial state for when state is not ready to be passed
const INIT_STATE: AuthState = {
  value: 0,
};
//#endregion

//#region > Functions
export default (state = INIT_STATE, action: AuthAction): AuthState => {
  const { type, payload } = action;

  switch (type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case AuthActionTypes.INCREMENT_COUNTER_REQUEST:
    case AuthActionTypes.DECREMENT_COUNTER_REQUEST:
    case AuthActionTypes.INCREMENT_COUNTER_SUCCESS:
      return { ...state, value: state.value + 1 };
    case AuthActionTypes.DECREMENT_COUNTER_SUCCESS:
      return { ...state, value: state.value - 1 };
    case AuthActionTypes.INCREMENT_COUNTER_FAILURE:
    case AuthActionTypes.DECREMENT_COUNTER_FAILURE:
    default:
      return { ...state };
  }
};
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 InspireMedia GmbH
 */
