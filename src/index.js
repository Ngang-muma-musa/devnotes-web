import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddNote from './components/addnote';
import Home from './components/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/addnote",
    element: <AddNote/>,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
root.render();
reportWebVitals();
