import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/Header";
import Login from "../src/pages/Login";
import Signup from "./pages/Signup";
import Sidebar from "./component/Sidebar";
import EditProduct from "./pages/EditProduct";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/editproduct",
    element: <EditProduct />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
]);

function App() {
  return (
    
      <RouterProvider router={router} />

  );
}

export default App;
