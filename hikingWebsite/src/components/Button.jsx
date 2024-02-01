//button for dropdown navigation in navbar

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { PostContext } from "./Container.jsx";

export default function Button({ title }) {
  const { posts, currentPost, setCurrentPost } = useContext(PostContext);
  const buttons = posts.map((post) => post.title.rendered);
  return (
    <DropdownButton id="dropdown-basic-button" title={title}>
      {buttons.map((button, index) => (
        <Dropdown.Item
          onClick={() => setCurrentPost(index)}
          key={index}
          href={`#/action-${index + 1}`}
        >
          {button}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
