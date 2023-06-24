


import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import { Provider as AuthProvider } from 'next-auth/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { GlobalStyles } from 'twin.macro';
import { RecoilRoot } from 'recoil';

import { store } from '../store';
import { AuthLayout } from '../layouts';
import { SEO } from '../components';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

const queryClient = new QueryClient();

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
      },
    }),
  },
});

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <ChakraProvider theme={theme}>
        <DefaultSeo {...SEO} />
        <GlobalStyles />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <AnimatePresence exitBeforeEnter>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <AuthProvider session={pageProps.session}>
                  <RecoilRoot>
                    <AuthLayout>
                      <Component {...pageProps} key={router.route} />
                    </AuthLayout>
                  </RecoilRoot>
                </AuthProvider>
              </Hydrate>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </Provider>
        </AnimatePresence>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);

