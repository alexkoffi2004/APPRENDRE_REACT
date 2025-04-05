import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Presentation from './components/Presentation/Presentation';
import Projet from './components/Projet/Projet';
import Contact from './components/Contact/Contact';
import Home from './components/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([ // pour informer le naviguateur que le contenue des composant doivent être affiché si c'est cliqué
  {
    path:"/", // la page d'accueil
    Component: App,
    children: [
      {
        index:true, 
        Component: Home
      },
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
