import storeProducts from "../../store/index";
import { useState } from "react";
import IconSwitch from "./IconSwitch";

const Store = () => {
  const products = storeProducts;

  const [icon, setIcon] = useState("view_module");

  const onSwitch = () => {
    const newIcon = icon === "view_module" ? "view_list" : "view_module";
    setIcon(newIcon);
  };

  return (
    <div className="store">
      <IconSwitch icon={icon} onSwitch={onSwitch} />
    </div>
  );
};

export default Store;
