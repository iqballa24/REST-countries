import React, { useEffect } from "react";
import classes from "./ButtonSwitch.module.css";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const ButtonSwitch = ({ onClick, checked }) => {
  return (
    <label className={classes.switch}>
      <input type="checkbox" onChange={onClick} checked={checked} />
      <span className={classes.slider}></span>
      {checked ? (
        <MdOutlineLightMode className={classes.icon_light} />
      ) : (
        <MdOutlineNightlight className={classes.icon_dark} />
      )}
    </label>
  );
};

export default ButtonSwitch;
