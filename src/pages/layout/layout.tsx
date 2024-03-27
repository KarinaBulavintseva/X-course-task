import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='grow'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { Layout };
