import { NavigationPanel } from "@components/organisms";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavigationPanel></NavigationPanel>
    </BrowserRouter>
  );
};
