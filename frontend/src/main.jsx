import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Login from "./routes/Login.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import { AdminPage } from "./routes/AdminPage.jsx";
import { Postulaciones } from "./routes/Postulaciones.jsx";
import PostulacionForm from "./components/PostulacionForm.jsx";
import { MisPostulaciones } from "./routes/MisPostulaciones.jsx";
import EmpresaForm from "./components/EmpresaForm.jsx";
import { MisEmpresas } from "./routes/MisEmpresas.jsx";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/postular",
        element: <PostulacionForm />,
      },
      {
        path: "/crearempresa",
        element: <EmpresaForm />,
      },
      {
        path: "/misempresas",
        element: <MisEmpresas />,
      },
      {
        path: "/mispostulaciones",
        element: <MisPostulaciones />,
      },
      {
        path: "/admin",
        element: (
          <AdminRoute>
            <AdminPage />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/postulaciones",
        element: (
          <AdminRoute>
            <Postulaciones />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
