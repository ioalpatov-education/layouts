import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const ShopCard = ({ card }) => {
  const { name, price, color, img } = card;

  const btnContent = "add to cart".toUpperCase();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={name} subheader={color} />
      <CardContent>
        <img
          className="shop-card__img"
          src={require(`../../img/${img}`)}
          alt={name}
        />
      </CardContent>

      <CardActions>
        <span className="shop-card__price">${price}</span>
        <Button className="add-btn" variant="outlined">{btnContent}</Button>
      </CardActions>
    </Card>
  );
};

export default ShopCard;
