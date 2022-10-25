import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const index = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Search countries by name country and region. Also, you can get information the detail about the country"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href={props.icon ? props.icon : "/earth.png"} />
        <link
          rel="apple-touch-icon"
          href={props.icon ? props.icon : "/earth.png"}
        />
      </Head>
      <Navbar />
      <div className="px-3 sm:px-8 lg:px-20 pt-10 mb-10">{props.children}</div>
    </>
  );
};

export default index;
