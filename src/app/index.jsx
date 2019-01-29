import React from "react";
import ReactDOM from "react-dom";
import ApplicationContainer from "./container/ApplicationContainer";
import _ from "lodash";

ReactDOM.render(
  <ApplicationContainer textToShow={_.join(["Hello", "webpack"], " ")} />,
  document.getElementById("root")
);
