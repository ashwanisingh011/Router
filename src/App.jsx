import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Routes
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    loader: dashboardLoader,
  },
  {
    path: "*",
    element: <Error/>
  },  
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />,
      
    </div>
  )
}

export default App
