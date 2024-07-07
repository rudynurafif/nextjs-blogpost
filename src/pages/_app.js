import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

export default function App({ Component, pageProps }) {
  const options = {
    cssTransition: false,
  };

  return (
    <PrimeReactProvider value={options}>
      <Component {...pageProps} />
    </PrimeReactProvider>
  );
}
