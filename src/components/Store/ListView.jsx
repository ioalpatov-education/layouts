import ShopItem from "./ShopItem";
import { List } from "@mui/material";
import PropTypes from "prop-types";

const ListView = ({ items }) => {
  const productsList = items.map((item, itemIdx) => {
    return <ShopItem key={itemIdx} card={item} />;
  });
  return <List className="shop__list">{productsList}</List>;
};

ListView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ListView;
