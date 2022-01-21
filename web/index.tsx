import React from "react";
import { render } from "react-dom";
import Counter from "./shared/shared/components/counter";

const App = () => {
  return <Counter></Counter>;
};

render(<App />, document.getElementById("root"));
