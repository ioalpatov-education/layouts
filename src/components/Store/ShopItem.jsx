import { Button, ListItem } from "@mui/material";

const ShopCard = ({ card }) => {
  const { name, price, color, img } = card;

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

export default ShopCard;
