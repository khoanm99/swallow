import { SiteProvider } from '../context/appContext'
import '../styles/globals.css'
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components'
import { appWithTranslation } from 'next-i18next';

function Swallows({ Component, pageProps }) {
  return ( 
    <SiteProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SiteProvider>
  )
}

export default appWithTranslation(Swallows)
