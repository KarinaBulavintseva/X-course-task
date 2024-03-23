import { Container } from '../container/container';

const Footer = () => {
  return (
    <footer className='py-5'>
      <Container className='flex items-center justify-center'>
        <p className='text-gray-500'>
          Виконано в <a href='https://prometheus.org.ua/'>Prometheus</a> © 2023
        </p>
      </Container>
    </footer>
  );
};

export { Footer };
