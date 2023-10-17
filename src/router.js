import { createBrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Details from "./component/Details";
import Login from "./component/Login";
import Admin from "./component/Admin";
import DashBoard from "./component/DashBoard";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
    },
    {
        path:'/login',  element:<Login />
    },
    {
        path:'/details',  element:<Details />
    },
    {
        path:'/dashboard',  element:<DashBoard />
    },
    {
        path:'/admin',
        element:<Admin/>,
        children:[
            {
                path:'dashboard',
                element:<DashBoard/>
            }
        ]
    }
  ]);
export default router  