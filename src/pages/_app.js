import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from '@/store/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PrimeReactProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </PrimeReactProvider>
    </Provider>
  );
}
