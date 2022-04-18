import React from "react";
import MainContext from "./contexts/MainContext";
import Navigation from "./Navigation";

const App = () => {
  return (
    <MainContext>
      <Navigation />
    </MainContext>
  );
};

export default App;
