import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: []
    }
])

export default router;