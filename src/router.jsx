import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import MyProfile from './pages/MyProfile.jsx'
import UpdateProfile from './pages/UpdateProfile.jsx'
import NotFound from './pages/NotFound.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'

const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: 'products', element: <Products /> },
        {
          path: 'products/:id',
          element: (
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          ),
        },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'privacy', element: <Privacy /> },
        { path: 'terms', element: <Terms /> },
        {
          path: 'my-profile',
          element: (
            <PrivateRoute>
              <MyProfile />
            </PrivateRoute>
          ),
        },
        {
          path: 'my-profile/update',
          element: (
            <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>
          ),
        },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename },
)
