import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../src/ui/Home";
import Error from "../src/ui/Error";
import Menu, { loader as menuLoader } from "../src/features/menu/Menu";
import Cart from "../src/features/cart/Cart";
import Order, { loader as orderLoader } from "../src/features/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "../src/features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />, // Route Object with no  "path" property is known as Layout Route;
    errorElement: <Error />, // errors of nested routes Bubbles up to parent
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
