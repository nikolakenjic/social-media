import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Login, Profile, Register } from './pages';
import LoginPage from './pages/LoginPage';

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

  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/profile/:username', element: <Profile /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
