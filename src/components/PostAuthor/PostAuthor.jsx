import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../redux/Features/users/usersSlice";
function PostAuthor(props) {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === props.userId);

  return (
    <span className="author">by {author ? author.name : "Unknow Author"}</span>
  );
}

export default PostAuthor;
