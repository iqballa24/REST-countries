import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class SpecialDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-bg-light-gray text-dark-blue dark:bg-bg-dark-blue dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SpecialDocument;
