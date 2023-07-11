const NewPost = ({
  handleSubmit,
  formValues,
  inputChange,
  setFormValues,
  postMealtype,
  setPostMealtype,
}) => {
  return (
    <main className="NewPost">
      <h2>New Post</h2>

      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          name="title"
          required
          value={formValues.title}
          onChange={inputChange}
        />

        <label htmlFor="postAuthor">Author:</label>
        <input
          id="postAuthor"
          type="text"
          name="author"
          required
          value={formValues.author}
          onChange={inputChange}
        />

        <label htmlFor="postDescription">Description:</label>
        <textarea
          id="postDescription"
          name="description"
          required
          value={formValues.description}
          onChange={inputChange}
        />

        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          name="body"
          required
          value={formValues.body}
          onChange={inputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
