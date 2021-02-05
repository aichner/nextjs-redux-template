//> Reducers
// Authentication
import authReducer from "./authReducer";

//> Redux
import { combineReducers } from "redux";

//> Firestore reducer
import { firestoreReducer } from "redux-firestore";

//> Firebase reducer
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  firestoreReducer,
  firebaseReducer,
  authReducer,
});

//#region > Exports
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 InspireMedia GmbH
 */
