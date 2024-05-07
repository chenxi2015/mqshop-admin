import {createBrowserRouter} from 'react-router-dom'
import Exception500 from "@/pages/exception/500";
import Exception401 from "@/pages/exception/401";
import Exception404 from "@/pages/exception/404";
import Exception503 from "@/pages/exception/503";

const router = createBrowserRouter([
  // Auth routes
  {
    path: '/login',
    lazy: async () => ({
      Component: (await import('./pages/auth/login')).default,
    }),
  },

  // Main routes
  {
    path: '/',
    lazy: async () => {
      return {Component: (await import('./App')).default}
    },
    errorElement: <Exception404 onErrorCapture={e => console.log(e)}/>,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('./pages/dashboard')).default,
        }),
      },
      {
        path: '/products',
        lazy: async () => ({
          Component: (await import('./pages/products')).default,
        }),
        children: [
          {
            index: true,
            path: 'index',
            lazy: async () => ({
              Component: (await import('./pages/products')).default,
            }),
          },
        ]
      },
      {
        path: '/users',
        lazy: async () => ({
          Component: (await import('./pages/users')).default,
        }),
      },
    ],
  },

  // Error routes
  {path: '/401', Component: Exception401},
  {path: '/404', Component: Exception404},
  {path: '/500', Component: Exception500},
  {path: '/503', Component: Exception503},

  // Fallback 404 route
  {path: '*', Component: Exception404},
])

export default router