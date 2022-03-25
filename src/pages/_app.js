import App from "next/app";

import { NextIntlProvider } from "next-intl";

import { DefaultSeo } from "next-seo";

import "../configs/flags.config";
import SEO from "../configs/seo.config";
import "../styles/globals.css";
import TinaProvider from "../../.tina/components/TinaDynamicProvider.js";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <TinaProvider>
        <NextIntlProvider messages={pageProps.messages}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </NextIntlProvider>
      </TinaProvider>
    );
  }
}
