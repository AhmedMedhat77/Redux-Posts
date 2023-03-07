import React, { useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../../redux/Features/Posts/postsSlice";
function PostForm() {
  const [formState, setFormState] = useState({
    formTitle: "",
    formContent: "",
    userId: "",
  });

  const users = useSelector((state) => state.users.users);

  const titleRef = useRef();
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    let { value } = e.target;
    return setFormState({ ...formState, formTitle: value });
  };

  const onContentChange = (e) => {
    let { value } = e.target;
    return setFormState({ ...formState, formContent: value });
  };

  const onAuthourChanged = (e) => {
    let { value } = e.target;

    return setFormState({ ...formState, userId: value });
  };

  // const canSave =
  //   Boolean(formState.formTitle) &&
  //   Boolean(formState.formContent) &&
  //   Boolean(formState.userId);

  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (formState.formTitle && formState.formContent) {
      dispatch(
        postAdded(formState.formTitle, formState.formContent, formState.userId)
      );
    }
    setFormState((old) => ({
      ...old,
      formTitle: "",
      formContent: "",
      userId: "",
    }));
    titleRef.current.focus();
  };

  const usersOptions = users?.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  return (
    <section className="form-section">
      <h2 className="form-title">Add A new Post</h2>
      <form className="form">
        <div className="form-item">
          <label htmlFor="postsTitle">Post Title:</label>
          <input
            ref={titleRef}
            type="text"
            placeholder="Title"
            id="postsTitle"
            value={formState.formTitle}
            name="postsTitle"
            onChange={(e) => onTitleChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="postsAuthor">Author:</label>
          <select
            className="users-select"
            id="postsAuthor"
            name="postsAuthor"
            onChange={onAuthourChanged}
          >
            <option value=""></option>
            {usersOptions}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="postsContent">Post Content:</label>
          <textarea
            type="text"
            placeholder="Content"
            id="postsContent"
            value={formState.formContent}
            name="postsContent"
            onChange={(e) => onContentChange(e)}
          />
        </div>
        <button className="save-post" onClick={(e) => onSavePostClicked(e)}>
          Save Post
        </button>
      </form>
    </section>
  );
}

export default PostForm;
