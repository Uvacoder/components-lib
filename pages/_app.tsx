import type { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyles } from '../src/theme/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Creating some components</title>
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />)
        </>
    );
}

export default MyApp;
