//> Reducers
// Authentication
import authReducer from "./authReducer";

//> Redux
import { combineReducers, Reducer, AnyAction } from "redux";

//> Firestore reducer
import { firestoreReducer } from "redux-firestore";

//> Firebase reducer
import { firebaseReducer } from "react-redux-firebase";
import { HYDRATE } from "next-redux-wrapper";

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebaseReducer,
  auth: authReducer,
});

const reducer: Reducer<RootState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    /* client state will be overwritten
     * by server or static state hydration.
     * Implement state preservation as needed.
     * see: https://github.com/kirill-konshin/next-redux-wrapper#server-and-client-state-separation
     */
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

//#region > Exports
export type RootState = ReturnType<typeof rootReducer>;
export default reducer;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 InspireMedia GmbH
 */
