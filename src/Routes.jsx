import { createBrowserRouter } from "react-router";
import RootLayout from "./Components/Layouts/RootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                element: <h1>Welcome to My Portfolio</h1>

            }
        ]
    },
]);