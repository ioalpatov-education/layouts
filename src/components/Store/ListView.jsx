import ShopItem from "./ShopItem";
import { List } from "@mui/material";

const ListView = ({ items }) => {
  const productsList = items.map((item, itemIdx) => {
    return <ShopItem key={itemIdx} card={item} />;
  });
  return <List className="shop__list">{productsList}</List>;
};
export default ListView;
