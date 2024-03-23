import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper } from './components/wrapper/wrapper';
import {
  Layout,
  SignInPage,
  BookPage,
  CartPage,
  CatalogPage,
  NotFoundPage,
} from './pages';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate to='books' />} />
          <Route path='books' element={<CatalogPage />}></Route>
          <Route path='books/:bookId' element={<BookPage />}></Route>
          <Route path='cart' element={<CartPage />} />
          <Route path='sign-in' element={<SignInPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}

export default App;
