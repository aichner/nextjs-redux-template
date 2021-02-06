//#region > Imports
//> Redux
// Allows to React components read data from a Redux store, and dispatch actions
// to the store to update data.
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import rootReducer, { RootState } from "./reducers/rootReducer";

/**
 * initStore
 * Initialise and export redux store
 */
const initStore: MakeStore<RootState> = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument({})))
  );
};

// export an assembled wrapper
export const wrapper = createWrapper(initStore);
