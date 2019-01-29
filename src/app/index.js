import _ from "lodash";
import "./style.css";
import Add from "./Add";

const concreteAdd = new Add(2,3);

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
