import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Poppins } from 'next/font/google';
import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query';
import { store } from '@/store';
import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/global';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  style: ['normal'],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <main className={poppins.className}>
              <GlobalStyle />
              <Component {...pageProps} />
            </main>
          </ThemeProvider>
        </HydrationBoundary>
      </QueryClientProvider>
    </Provider>
  );
}