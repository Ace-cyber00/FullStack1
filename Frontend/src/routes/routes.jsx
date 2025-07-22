import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout"; // adjust path if needed
import Home from "../pages/Home/Home";
import Collections from "../pages/Collections/Collections";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Sell from "../pages/Sell/Sell";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Cart from "../pages/Cart/Cart";
import PrivateRoute from "../Auth/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // 👈 wrapping with your Header/Footer
    children: [
      { index: true, element: <Home /> },
      { path: "collections", element: <Collections /> },
      { path: "contacts", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "sell", element: <PrivateRoute><Sell /></PrivateRoute> },
      { path: "cart", element: <PrivateRoute><Cart /></PrivateRoute> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <h1 className="p-10 text-xl">404 - Page Not Found</h1> },
]);

export default router;
