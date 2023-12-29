import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Login from './routes/Login.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import { AdminPage } from './routes/AdminPage.jsx';
import { Postulaciones } from './routes/Postulaciones.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/admin',
        element: (
          <AdminRoute>
            <AdminPage />
          </AdminRoute>
        )
      },
      {
        path: '/admin/postulaciones',
        element: (
          <AdminRoute>
            <Postulaciones />
          </AdminRoute>
        )
      }
    ],
  },
  {
    path: '/auth',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
