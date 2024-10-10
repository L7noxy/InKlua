import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx"
import Sobre from "../pages/Sobre.jsx"
import error from "../pages/error.jsx";

const router = createBrowserRouter([

    {path: "/", element: <Home />},
    {path: "sobre", element: <Sobre/>},


])

export default router;