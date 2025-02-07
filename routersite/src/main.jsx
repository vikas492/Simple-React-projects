import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact.jsx';
import User from './Components/User/User.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '', // This renders Home at the root path "/"
        element: <Home />,
      },
      {
        path: 'about', // This renders About at the path "/about"
        element: <About />,
      },
      {
        path : 'contact',
        element: <Contact />
      },
      {
        path : 'user/:userid',
        element: <User />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
