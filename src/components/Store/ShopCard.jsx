import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";

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

ShopCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShopCard;
