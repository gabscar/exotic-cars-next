
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import '../public/DatePicker.css'
import '../public/Calendar.css'
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      <GlobalStyle/>
    </>
    )
}
export default MyApp
