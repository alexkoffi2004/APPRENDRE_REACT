import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Presentation from './components/Presentation/Presentation';
import Projet from './components/Projet/Projet';
import Contact from './components/Contact/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path:"/",
    Component: App,
    children: [
      {
        path: "/Presentation",
        Component: Presentation
      },
      {
        path: "/Projet",
        Component: Projet
      },
      {
        path: "/Contact",
        Component: Contact
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
