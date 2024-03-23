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
import { RequireAuth } from './hocs';
import { AuthProvider } from './context/authProvider';

function App() {
  return (
    <AuthProvider>
      <Wrapper>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Navigate to='books' />} />
            <Route
              path='books'
              element={
                <RequireAuth>
                  <CatalogPage />
                </RequireAuth>
              }
            ></Route>
            <Route
              path='books/:bookId'
              element={
                <RequireAuth>
                  <BookPage />
                </RequireAuth>
              }
            ></Route>
            <Route
              path='cart'
              element={
                <RequireAuth>
                  <CartPage />
                </RequireAuth>
              }
            />
            <Route path='sign-in' element={<SignInPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Wrapper>
    </AuthProvider>
  );
}

export default App;
