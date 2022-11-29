import { NavigationPanel } from "@components/organisms";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationPanel></NavigationPanel>
    </BrowserRouter>
  );
};
