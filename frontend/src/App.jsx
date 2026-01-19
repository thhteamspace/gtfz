import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalLayout from './components/GlobalLayout';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Ethos = lazy(() => import('./pages/Ethos'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Impact = lazy(() => import('./pages/Impact'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#111111'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(197, 160, 89, 0.2)',
      borderTopColor: '#C5A059',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<PageLoader />}><Home /></Suspense>,
      },
      {
        path: "ethos",
        element: <Suspense fallback={<PageLoader />}><Ethos /></Suspense>,
      },
      {
        path: "solutions",
        element: <Suspense fallback={<PageLoader />}><Solutions /></Suspense>,
      },
      {
        path: "impact",
        element: <Suspense fallback={<PageLoader />}><Impact /></Suspense>,
      },
      {
        path: "contact",
        element: <Suspense fallback={<PageLoader />}><ContactPage /></Suspense>,
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
