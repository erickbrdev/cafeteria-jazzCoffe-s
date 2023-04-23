import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Menu from "../components/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/historia",
    element: <About />
  },
  {
    path:"/carrinho_de_compras",
    element: <Menu />
  },  
])