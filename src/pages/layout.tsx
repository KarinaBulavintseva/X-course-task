import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='grow'>main</main>
      <Footer />
    </>
  );
};

export { Layout };
