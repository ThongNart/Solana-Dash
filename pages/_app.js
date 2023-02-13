import '@/styles/globals.css'
import Layout from './layout/layout'

export default function App({ Component, pageProps }) {
  return <Layout className="bg-black">
    <Component {...pageProps} />
    </Layout>
}
