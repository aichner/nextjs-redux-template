//#region > Imports
//> App
import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";

//> Store
import { wrapper } from "../store/index";
//> Global Styling
// Local
import "../styles/globals.scss";
// External
import "../styles/external.scss";
//#endregion

//#region > App
const RootApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
//#endregion

//#region > Exports
export default wrapper.withRedux(RootApp);
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 InspireMedia GmbH
 */
