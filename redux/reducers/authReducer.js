// Have initial state for when state is not ready to be passed
const initState = {
  error: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return {
        ...state,
        error: null,
      };
    case "LOGIN_FAIL":
      console.log("Error", action.payload);
      return {
        ...state,
        error: action.payload?.error,
      };
    case "LOGIN_ANON_SUCCESS":
      console.log("Login of anonymous user success");
      return {
        ...state,
        error: null,
      };
    case "LOGIN_ANON_FAIL":
      console.log("Could not login as anonymous user");
      return {
        ...state,
        error: action.payload,
      };
    case "SIGNOUT_SUCCESS":
      console.log("Signout success");
      return {
        ...state,
        error: null,
      };
    case "SIGNUP_SUCCESS":
      console.log("Signup success");
      return {
        ...state,
        error: null,
      };
      return state;
    case "SIGNUP_FAIL":
      console.log("Signup error", action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 InspireMedia GmbH
 */
