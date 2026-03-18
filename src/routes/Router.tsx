import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import About from "../components/About/About.js";

const router = createBrowserRouter([
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
                path: "/about",
                element: <About/>
             },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
]);

export default router;