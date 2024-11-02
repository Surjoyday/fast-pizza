/* eslint-disable no-useless-catch */
import { useLoaderData, useNavigation } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import Loader from "../../ui/Loader";

export default function Menu() {
  const menu = useLoaderData();

  // console.log(menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader(obj) {
  console.log(obj);
  const menu = await getMenu();
  return menu;
}
