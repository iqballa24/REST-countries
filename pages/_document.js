import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class SpecialDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-bg-light-gray text-dark-blue dark:bg-bg-dark-blue dark:text-white">
          <Main role="main"/>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SpecialDocument;
