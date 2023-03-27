import { Button, ListItem } from "@mui/material";
import PropTypes from "prop-types";

const ShopItem = ({ item }) => {
  const { name, price, color, img } = item;

  const btnContent = "add to cart".toUpperCase();

  return (
    <ListItem className="item-container">
      <img
        className="shop-list__img"
        src={require(`../../img/${img}`)}
        alt={name}
      />
      <h2>{name}</h2>

      <p>{color}</p>

      <span className="shop__price">${price}</span>
      <Button className="add-btn" variant="outlined">
        {btnContent}
      </Button>
    </ListItem>
  );
};

ShopItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShopItem;
