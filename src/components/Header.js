import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-gray-800 text-white py-4 sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <div className='text-2xl font-bold'>
          <Link href='/'>Comments App</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
