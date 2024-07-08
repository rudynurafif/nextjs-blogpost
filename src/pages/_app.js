import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';
import { PrimeReactProvider } from 'primereact/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from '@/store/store';
import RootLayout from '@/components/RootLayout';
import { HelmetProvider } from 'react-helmet-async';

export default function App({ Component, pageProps }) {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <PrimeReactProvider>
          <RootLayout>
            <Component {...pageProps} />
            <ToastContainer />
          </RootLayout>
        </PrimeReactProvider>
      </Provider>
    </HelmetProvider>
  );
}
