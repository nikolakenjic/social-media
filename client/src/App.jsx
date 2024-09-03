import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import { Home, Login, Profile, Register } from './pages';
import LoginPage from './pages/LoginPage';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { user } = useContext(AuthContext);

  const router = createBrowserRouter([
    // {
    //   path: '',
    //   element: <RootLayout />,
    //   errorElement: <ErrorPage />,
    //   children: [
    //     { index: true, element: <HomePage /> },
    //     {
    //       path: ':id',
    //       element: <DetailPage />,
    //       loader: detailLoader,
    //     },
    //   ],
    // },

    { index: true, element: user ? <Home /> : <Register /> },
    { path: 'login', element: user ? <Navigate to="/" /> : <Login /> },
    { path: 'register', element: user ? <Navigate to="/" /> : <Register /> },
    { path: 'profile/:username', element: <Profile /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
