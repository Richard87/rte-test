import '../styles/globals.css'
import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

const clientSideEmotionCache = (() => {
  return createCache({ key: 'css' });
})();

const lightTheme = createTheme({
  palette: {
    mode: 'light',
      background: {
        default: '#CCCCCC'
      }
  },
    components: {
    }
});

const Theme = {
    ...lightTheme,
    overrides: {
        MUIRichTextEditor: {
            editor: {
                height: '100%'
            }
        }
    }
}

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
  )
}

export default MyApp
