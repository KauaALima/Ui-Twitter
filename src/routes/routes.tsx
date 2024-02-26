import { createBrowserRouter } from "react-router-dom";
import { Default } from "../layouts/defaults";
import { Timeline } from "../pages/timeline";
import { Status } from "../pages/status";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Timeline />
            },

            {
                path: '/status',
                element: <Status />
            }
        ]
    }
])