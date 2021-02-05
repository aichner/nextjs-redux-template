import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { serializeError } from "serialize-error";
import { RootState } from "../reducers/rootReducer";
import { AuthAction } from "../types";

//#region > Creators
export const asyncIncrement = (): ThunkAction<
  void,
  RootState,
  {},
  AuthAction
> => {
  return async (
    dispatch: ThunkDispatch<RootState, {}, AuthAction>,
    getState,
    {}
  ) => {
    dispatch({ type: "INCREMENT_COUNTER_REQUEST" });

    try {
      dispatch({ type: "INCREMENT_COUNTER_SUCCESS" });
    } catch (ex) {
      dispatch({
        type: "INCREMENT_COUNTER_FAILURE",
        payload: {
          error: {
            message: "Fetching pages failed.",
          },
          errorDetails: serializeError(ex),
        },
      });
    }
  };
};

export const asyncDecrement = (): ThunkAction<
  void,
  RootState,
  {},
  AuthAction
> => {
  return async (
    dispatch: ThunkDispatch<RootState, {}, AuthAction>,
    getState,
    {}
  ) => {
    dispatch({ type: "INCREMENT_COUNTER_REQUEST" });

    try {
    } catch (ex) {
      dispatch({
        type: "INCREMENT_COUNTER_FAILURE",
        payload: {
          error: {
            message: "Fetching pages failed.",
          },
          errorDetails: serializeError(ex),
        },
      });
    }
  };
};
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 InspireMedia GmbH
 */
