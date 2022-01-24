import React from "react";
import { render } from "react-dom";
import Navigation from "./shared/shared/components/Navigation";

const App = () => {
  return <Navigation></Navigation>;
};

render(<App />, document.getElementById("root"));
