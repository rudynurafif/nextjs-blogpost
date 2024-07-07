import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { store } from '@/store/store';

export default function App({ Component, pageProps }) {
  const options = {
    cssTransition: false,
  };

  return (
    <Provider store={store}>
      <PrimeReactProvider value={options}>
        <Component {...pageProps} />
      </PrimeReactProvider>
    </Provider>
  );
}
