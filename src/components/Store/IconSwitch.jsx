import "material-icons/iconfont/material-icons.css";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";

const IconSwitch = ({ icon, onSwitch }) => {
  const handleClick = () => {
    onSwitch();
  };
  return (
    <div className="icon-container">
      <IconButton onClick={handleClick}>
        <span className="material-icons view-icon">{icon}</span>
      </IconButton>
    </div>
  );
};

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
