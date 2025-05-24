import { Link } from "react-router-dom";

export default function BlogList({ blogs, title }) {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blogItem) => (
        <div className="blog-preview" key={blogItem.$id}>
          <Link to={`/blogs/${blogItem.$id}`}>
            <h2>{blogItem.title}</h2>
            <p>Written by {blogItem.author} </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
