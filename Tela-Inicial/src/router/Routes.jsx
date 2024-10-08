import { createBrowserRouter } from "react-router-dom"; 
import Home from "/pages/Home.jsx"

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/sobre", element: <Sobre/>},
])

export default router;