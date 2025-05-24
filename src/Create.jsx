import { useActionData, Form, useNavigation } from "react-router-dom";

const Create = () => {
  const errorMsg = useActionData();
  const navigation = useNavigation();

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      {errorMsg && (
        <p style={{ fontWeight: "bold", marginBottom: "20px" }}>{errorMsg}</p>
      )}
      <Form action="/create" method="post">
        {/* Blog Titlr */}
        <label htmlFor="title">Blog Title:</label>
        <input type="text" id="title" name="title" required />
        {/* Blog Body i.e main content */}
        <label htmlFor="body">Blog Body:</label>
        <textarea id="body" name="body"></textarea>
        {/* Blog Author */}
        <label htmlFor="author">Blog Author:</label>
        <select id="author" name="author">
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {/* Submit Button */}
        <button disabled={navigation.state !== "idle"}>
          {navigation.formAction === "/create" ? "Submitting..." : "Add Blog"}
        </button>
      </Form>
    </div>
  );
};

export default Create;
