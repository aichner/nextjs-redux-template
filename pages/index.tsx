//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
//> NextJS
import Head from "next/head";
//> Redux
// Basic Redux provider
import { connect } from "react-redux";
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBCard, MDBCardBody } from "mdbreact";
//> Lottie
import Lottie from "react-lottie";

//> Redux
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
            isStopped={false}
            isPaused={false}
            isClickToPauseDisabled={true}
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
              Redux Counter{" "}
              {/* <span className="font-weight-bold">{this.props.counter}</span> */}
            </p>
            <div>
              {/* <MDBBtn color="elegant" onClick={this.props.decrementCounter}>
                Decrease
              </MDBBtn>
              <MDBBtn color="elegant" onClick={this.props.incrementCounter}>
                Increase
              </MDBBtn> */}
            </div>
          </MDBCardBody>
        </MDBCard>
      </main>
    </MDBContainer>
  );
};
//#endregion

//#region > Exports
export default Home;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 InspireMedia GmbH
 */
