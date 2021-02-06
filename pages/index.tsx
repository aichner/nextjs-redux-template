//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
//> NextJS
import Head from "next/head";
//> Redux
// Basic Redux provider
import { useSelector, useDispatch } from "react-redux";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBCard, MDBCardBody } from "mdbreact";
//> Lottie
import Lottie from "lottie-react-web";

//> Redux
import { wrapper } from "../store/index";
// Types
import { RootState } from "../store/types";
// Actions
import { asyncIncrement, asyncDecrement } from "../store/actions/authActions";
//> Lottie
import animationData from "../assets/lottie/logo.json";
//#endregion

//#region > Page
const Home: React.FC<{}> = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch();
  const { value } = useSelector<RootState, RootState>((state) => state).auth;

  return (
    <MDBContainer fluid id="home">
      <Head
        children={
          <>
            <title>NextJS Redux Template</title>
            <link
              rel="icon"
              href="https://avatars1.githubusercontent.com/u/50574311?s=200&v=4"
            />
          </>
        }
      />
      <main>
        <div className="logo">
          <Lottie
            options={defaultOptions}
            height={100}
            width={200}
            speed={2.5}
            ariaRole="img"
          />
        </div>
        <h1>
          Welcome to{" "}
          <a href="https://nextjs.org" target="_blank">
            Next.js
          </a>{" "}
          Redux!
        </h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>

        <MDBCard className="mt-3">
          <MDBCardBody className="text-center">
            <p className="h3-responsive">
              Redux Counter <span className="font-weight-bold">{value}</span>
            </p>
            <div>
              <p color="elegant" onClick={() => dispatch(asyncDecrement())}>
                Decrease
              </p>
              <p color="elegant" onClick={() => dispatch(asyncIncrement())}>
                Increase
              </p>
            </div>
          </MDBCardBody>
        </MDBCard>
      </main>
    </MDBContainer>
  );
};
//#endregion

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch<any>(asyncIncrement());
  }
);

//#region > Exports
export default Home;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 InspireMedia GmbH
 */
