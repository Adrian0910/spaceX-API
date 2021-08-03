import React from "react";
import Header from "./components/Header";
import InfoCompany from "./components/InfoCompany";

import { ApolloProvider } from "@apollo/client";
import client from "./client";

export const About = () => {


  return (
    <div className="image-about bg-cover h-screen flex flex-col flex-grow">
      <Header />
      <ApolloProvider client={client}>
        <InfoCompany/>
      </ApolloProvider>
    </div>
  );
};
