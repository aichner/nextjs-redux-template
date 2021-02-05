//#region > Imports
//> Redux
// Allows to React components read data from a Redux store, and dispatch actions
// to the store to update data.
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore } from "redux";
import rootReducer, { RootState } from "./reducers/rootReducer";
import thunkMiddleware from "redux-thunk";
// create a makeStore function
// type AppThunkDispatch = ThunkDispatch<ApplicationState, void, AnyAction>;

const makeStore: MakeStore<RootState> = (context: Context) =>
  createStore(rootReducer, applyMiddleware(thunkMiddleware));

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
