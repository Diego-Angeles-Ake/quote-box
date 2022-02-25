import React, { useState } from "react";
import NewQuote from "./NewQuote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rN from "../utils/randomNumber";
import rC from "../utils/randomColor";
import * as quotesJson from "../quotes/quotes.json";

const quotes = Object.values(quotesJson);

function QuoteBox(props) {
  const randomQuote = () => {
    return quotes[rN(0, quotes.length - 1)];
  };
  const [quoteObj, setQuote] = useState(randomQuote());
  const { quote, author } = quoteObj;
  const [colorQuote, setColorQuote] = useState(rC());

  const quoteHandler = () => {
    let newColor = rC();
    setColorQuote(newColor);
    setQuote(randomQuote());
    props.getColor(newColor);
  };

  const quoteHandlerCallback = () => {
    quoteHandler();
  };
  return (
    <>
      <div className="quote-container" style={{ color: colorQuote }}>
        <div className="container-des">
          <FontAwesomeIcon
            id="quote-logo"
            icon="fa-solid fa-quote-left"
            size="6x"
          />
          <p>{quote}</p>
        </div>
        <p id="author">
          <em>{author}</em>
        </p>
        <NewQuote do={quoteHandlerCallback}></NewQuote>
      </div>
    </>
  );
}

export default QuoteBox;
