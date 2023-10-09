import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";
import { ContextProvider } from "./context/appcontext";
import ActiveStudents from "./ActiveStudents";
import SuspendedStudents from "./SuspendedStudents";
import NewMember from "./NewMember";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/active-users",
    element: <ActiveStudents />,
  },
  {
    path: "/suspended-users",
    element: <SuspendedStudents />,
  },
  {
    path: "/new-member",
    element: <NewMember />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
