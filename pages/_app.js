import SummonerProvider from '../contexts/championContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (  
    <SummonerProvider>
      <Component {...pageProps} />
    </SummonerProvider>
  )
}

export default MyApp
