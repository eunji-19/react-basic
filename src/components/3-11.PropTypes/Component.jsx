import React from "react";
import PropTypes from "prop-types";

function PropComponent(props) {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
}

PropComponent.defaultProps = {
  name: "Jin",
  age: 31,
};

PropComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default function Component() {
  return (
    <div>
      <PropComponent />
    </div>
  );
}
