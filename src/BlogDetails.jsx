import { useParams, useLoaderData, useNavigation } from "react-router";
import { Form } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const navigation = useNavigation();
  const { error, data: blog } = useLoaderData();

  return (
    <div className="blog-details">
      {error && <h1>{error}</h1>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <Form action={`/blogs/${id}`} method="delete">
            <button type="submit" disabled={navigation.state !== "idle"}>
              Delete
            </button>
          </Form>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
