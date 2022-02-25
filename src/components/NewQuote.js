import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewQuote(props) {
  const clickHandler = () => {
    props.do();
  };
  return (
    <>
      <div className="btn-wrapper">
        <FontAwesomeIcon
          id="chevron"
          icon="fa-solid fa-circle-chevron-right"
          size="3x"
          type="button"
          onClick={clickHandler}
        />
      </div>
    </>
  );
}
