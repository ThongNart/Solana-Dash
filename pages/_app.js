import Head from 'next/head'

import '@/styles/globals.css'
import Layout from './layout/layout'

export default function App({ Component, pageProps }) {
  return <Layout className="bg-black">
    <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Solana Dash_</title>
        <link rel="icon" type="image/x-icon" href="solana-dash-logo.png"></link>
    </Head>
    <Component {...pageProps} />
    </Layout>
}
