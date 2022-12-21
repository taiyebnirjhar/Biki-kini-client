import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import DashAddProd from "../Pages/Dashboard/DashAddProd/DashAddProd";
import DashAdmin from "../Pages/Dashboard/DashAdmin/DashAdmin";
import DashReportItems from "../Pages/Dashboard/DashAdmin/DashReportItems";
import DashMyOrders from "../Pages/Dashboard/DashMyOrders/DashMyOrders";
import DashrRoot from "../Pages/Dashboard/DashrRoot";
import DashSeller from "../Pages/Dashboard/DashSeller/DashSeller";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/Login/LoginPage";
import Product from "../Pages/Product/Product";

import Regester from "../Pages/Regester/Regester";
import Root from "../Pages/Root/Root";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        loader: async ({ params }) => {
          return fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`);
        },
        element: (
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/regester",
        element: <Regester />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashrRoot />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <BuyerRoute>
            <DashMyOrders />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/seller/my-products",
        element: (
          <SellerRoute>
            <DashSeller />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/seller/add-products",
        element: (
          <SellerRoute>
            <DashAddProd />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/admin/user/:role",
        loader: async ({ params }) => {
          return fetch(`${import.meta.env.VITE_API_URL}/user/${params.role}`);
        },
        element: (
          <AdminRoute>
            <DashAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/reportedItems",
        element: (
          <AdminRoute>
            <DashReportItems />
          </AdminRoute>
        ),
      },
      // {
      //   path: "/dashboard/buyer/:id",
      //   loader: async ({ params }) => {
      //     return fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`);
      //   },
      //   element: (
      //     <PrivateRoute>
      //       <Product />
      //     </PrivateRoute>
      //   ),
      // },
    ],
    errorElement: <Error />,
  },
]);

export default router;
