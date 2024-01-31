//button for dropdown navigation in navbar

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
export default function Button({ buttons }) {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      {buttons.map((button, index) => (
        <Dropdown.Item key={index} href={`#/action-${index + 1}`}>
          {button}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

Button.propTypes = {
  buttons: PropTypes.array.isRequired,
};
