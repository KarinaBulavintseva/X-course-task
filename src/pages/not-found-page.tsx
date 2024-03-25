import { Container } from '../components/container/container';

const NotFoundPage = () => {
  return (
    <div className='pt-8'>
      <Container>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='mb-3 text-5xl font-bold'>404</h1>
          <h2 className='mb-3 text-2xl font-semibold text-gray-500'>
            Page not found
          </h2>
          <p className='text-center text-xl font-semibold'>
            Sorry, the page you are looking for does not exist
          </p>
        </div>
      </Container>
    </div>
  );
};

export { NotFoundPage };
