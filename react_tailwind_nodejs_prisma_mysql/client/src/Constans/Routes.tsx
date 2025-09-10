import AddTodo from "../Pages/AddTodo";
import EditTodo from "../Pages/EditTodo";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

export const ROUTES = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Home /> },
  { path: "/todo/add", element: <AddTodo /> },
  { path: "/todo/edit", element: <EditTodo /> },
];
