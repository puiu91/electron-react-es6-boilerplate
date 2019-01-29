import React, { Component } from "react";
import PropTypes from "prop-types";
import HeadingOneTag from "../components/HeadingOneTag";

class ApplicationContainer extends Component {
  static propTypes = {
    textToShow: PropTypes.string.isRequired
  };

  constructor() {
    super();
  }

  render() {
    const { textToShow } = this.props;
    return <HeadingOneTag text={textToShow} />;
  }
}
export default ApplicationContainer;
