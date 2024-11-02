import Header from "./Header";
import CartOveriew from "../../src/features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";
  // console.log(isLoading);

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        {/* <h1>Content</h1> */}
        <Outlet />
      </main>
      <CartOveriew />
    </div>
  );
}

export default AppLayout;
