import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalLayout from './components/GlobalLayout';
import Home from './pages/Home';
import Ethos from './pages/Ethos';
import Solutions from './pages/Solutions';
import Impact from './pages/Impact';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "ethos",
        element: <Ethos />,
      },
      {
        path: "solutions",
        element: <Solutions />,
      },
      {
        path: "impact",
        element: <Impact />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
