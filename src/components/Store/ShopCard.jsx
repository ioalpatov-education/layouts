import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";

const ShopCard = ({ card }) => {
  const { name, price, color, img } = card;

  const btnContent = "add to cart".toUpperCase();

  return (
    <Grid className="card-container" item sm={12} md={6} lg={4}>
      <Card className="shop__card" sx={{ maxWidth: 345 }}>
        <CardHeader title={name} subheader={color} />
        <CardContent className="card__content">
          <img
            className="shop-card__img"
            src={require(`../../img/${img}`)}
            alt={name}
          />
        </CardContent>

        <CardActions className="card__actions">
          <span className="shop__price">${price}</span>
          <Button className="add-btn" variant="outlined">
            {btnContent}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ShopCard;
