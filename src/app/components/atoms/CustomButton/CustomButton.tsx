import { customButtonStyle } from "@styles/CustomButton/CustomButton";
import React from "react";

type CustomButtonProps = {
  endIcon?: JSX.Element;
  startIcon?: JSX.Element;
  text?: string;
  textIcon?: string;
  altImage?: string;
  onClick?: () => void;
  variant?: "lightBlue" | "darkBlue";
};

const CustomButton = ({
  endIcon,
  startIcon,
  text,
  textIcon,
  altImage,
  variant,
  onClick,
}: CustomButtonProps) => {
  return (
    <button className={customButtonStyle({ type: variant })} onClick={onClick}>
      <span>
        <span>{startIcon}</span>
        <span>
          {textIcon ? <img src={textIcon} alt={altImage}></img> : text}
        </span>
        <span>{endIcon}</span>
      </span>
    </button>
  );
};

export default CustomButton;
