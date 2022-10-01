import Alert from '../layouts/Alert'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Alert />
      <Component { ...pageProps } />
      <Footer />
    </>
  )
}

export default MyApp
