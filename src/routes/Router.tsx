import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import WhatsIncluded from "./../components/whatsIncluded/WhatsIncluded";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/WhatsIncluded",
                element: <WhatsIncluded/>
            }
        ]
    }
])