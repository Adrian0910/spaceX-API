import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";

import { ApolloProvider } from "@apollo/client";
import client from "./client";



export const Home = () => {
  return (
    <>
      <div className="rocket bg-cover h-screen">
        <Header />
        <Hero />
      </div>
        <ApolloProvider client={client}>
          <Card />
        </ApolloProvider>
    </>
  );
};
