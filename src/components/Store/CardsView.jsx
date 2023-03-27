import ShopCard from "./ShopCard";

const CardsView = ({ cards }) => {
  const productsList = cards.map((card, cardIdx) => {
    return <ShopCard key={cardIdx} card={card} />;
  });
  return <>{productsList}</>;
};
export default CardsView;
