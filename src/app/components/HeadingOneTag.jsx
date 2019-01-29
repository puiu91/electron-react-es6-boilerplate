import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const HeadingOneTag = ({ text }) => <h1 className={"hello"}>{text}</h1>;

HeadingOneTag.propTypes = {
  text: PropTypes.string.isRequired
};

export default HeadingOneTag;
