import React from "react";
import Logo from "@assets/logo.svg";
import { loading } from "@styles/loading_style";

const Loading = () => {
  return (
    <div className={loading()}>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Loading;
