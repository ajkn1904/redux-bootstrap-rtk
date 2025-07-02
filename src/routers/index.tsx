import App from "@/App";
import { createBrowserRouter } from "react-router";
import User from "@/pages/user"
import Task from "@/pages/task"


const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                //  path: "tasks",
                index: true,
                Component: Task
            },
            {
                path: "tasks",
                Component: Task
            },
            {
                path: "users",
                Component: User
            },
        ]
    },
]);

export default router;