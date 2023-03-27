import { Grid } from "@mui/material";
import ShopCard from "./ShopCard";
import PropTypes from "prop-types";

const CardsView = ({ cards }) => {
  const productsList = cards.map((card, cardIdx) => {
    return <ShopCard key={cardIdx} card={card} />;
  });
  return (
    <Grid className="cards-container" container spacing={4}>
      {productsList}
    </Grid>
  );
};

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default CardsView;
