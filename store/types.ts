import { HYDRATE } from "next-redux-wrapper";

//#region > General
export type { RootState } from "./reducers/rootReducer";

export interface ErrorState {
  error?: {
    message: string;
    code?: number;
  };
  errorDetails?: any;
}
//#endregion

//#region > Redux

export interface AuthState extends ErrorState {
  value?: number;
}

export enum AuthActionTypes {
  INCREMENT_COUNTER_REQUEST = "INCREMENT_COUNTER_REQUEST",
  INCREMENT_COUNTER_SUCCESS = "INCREMENT_COUNTER_SUCCESS",
  INCREMENT_COUNTER_FAILURE = "INCREMENT_COUNTER_FAILURE",
  DECREMENT_COUNTER_REQUEST = "DECREMENT_COUNTER_REQUEST",
  DECREMENT_COUNTER_SUCCESS = "DECREMENT_COUNTER_SUCCESS",
  DECREMENT_COUNTER_FAILURE = "DECREMENT_COUNTER_FAILURE",
}

export type AuthAction = {
  type:
    | typeof HYDRATE
    | AuthActionTypes.INCREMENT_COUNTER_REQUEST
    | AuthActionTypes.INCREMENT_COUNTER_SUCCESS
    | AuthActionTypes.INCREMENT_COUNTER_FAILURE
    | AuthActionTypes.DECREMENT_COUNTER_REQUEST
    | AuthActionTypes.DECREMENT_COUNTER_SUCCESS
    | AuthActionTypes.DECREMENT_COUNTER_FAILURE;
  payload?: AuthState;
};

//#endregion
