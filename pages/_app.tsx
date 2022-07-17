import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.scss';
import { ColorModeContextProvider } from '@contexts';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>GoCoin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ColorModeContextProvider>
        <Component {...pageProps} />
      </ColorModeContextProvider>
    </>
  );
}

export default MyApp;
