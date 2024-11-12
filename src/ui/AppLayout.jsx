import Header from "./Header";
import CartOveriew from "../../src/features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation.state);
  const isLoading = navigation.state === "loading";
  // console.log(isLoading);

  return (
    <div className="grid h-dvh grid-rows-layout">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOveriew />
    </div>
  );
}

export default AppLayout;
