import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            }
        ]
    }
])