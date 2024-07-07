import Footer from './Footer';
import Header from './Header';

const RootLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <Header />
      <main className='flex-grow mb-5'>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
