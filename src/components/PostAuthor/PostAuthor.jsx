import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../redux/Features/users/usersSlice";
function PostAuthor(props) {
  
  return (
    <span className="author">by {props.author ? (props.author.name??"Unknown Author") : "Unknown Author"}</span>
  );
}

export default PostAuthor;
