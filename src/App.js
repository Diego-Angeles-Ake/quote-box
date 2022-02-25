import React, { useState } from "react";
import QuoteBox from "./components/QuoteBox";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faB } from "@fortawesome/free-solid-svg-icons";
import {
  faQuoteLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(faB, faQuoteLeft, faChevronCircleRight);

function App() {
  const [colorApp, setColorApp] = useState("");
  const colorCallback = (childColor) => {
    setColorApp(childColor);
  };
  return (
    <div className="App" style={{ backgroundColor: colorApp }}>
      <QuoteBox getColor={colorCallback}></QuoteBox>
    </div>
  );
}

export default App;
