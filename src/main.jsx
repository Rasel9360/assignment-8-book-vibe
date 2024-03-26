import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Error from './Components/ErrorPage/Error';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import Home from './Components/Home/Home';
import LoadDetails from './Components/LoadDetails/LoadDetails';
import ReadBooks from './Components/ReadBooks/ReadBooks';
import WishlistBooks from './Components/WishlistBooks/WishlistBooks';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>
          },
          {
            path: 'wishlist',
            element: <WishlistBooks></WishlistBooks>
          }
        ]
      },
      {
        path: '/book/:id',
        element: <LoadDetails></LoadDetails>,
        loader: () => fetch('../books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
