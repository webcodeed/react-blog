import { useLoaderData } from "react-router-dom";
import BlogList from "./BlogList";

const Home = () => {
  const { error, data } = useLoaderData();

  return (
    <>
      <div className="home">
        {error && <h2>Error Message: {error}</h2>}
        {data && <BlogList blogs={data.documents} title="All Blogs" />}
      </div>
    </>
  );
};

export default Home;
