import productsFromStore from "../../store/index";
import { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

const Store = () => {
  const products = productsFromStore;

  const [icon, setIcon] = useState("view_list");

  const onSwitch = () => {
    const newIcon = icon === "view_module" ? "view_list" : "view_module";
    setIcon(newIcon);
  };

  const view =
    icon === "view_module" ? (
      <ListView items={products} />
    ) : (
      <CardsView cards={products} />
    );

  return (
    <div className="store">
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {view}
    </div>
  );
};

export default Store;
