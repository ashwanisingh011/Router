import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Routes
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';
import Main, { mainLoader } from "./layout/Main";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: mainLoader,
    children: [
      {
        path: "/",
        element: <Dashboard/>,
        loader: dashboardLoader,
      },
      {
        path: "logout",
        action: logoutAction,
      }
    ]
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
