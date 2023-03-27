import { Grid } from "@mui/material";
import ShopCard from "./ShopCard";

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
export default CardsView;
