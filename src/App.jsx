import { Outlet, useLoaderData } from "react-router";
import Navbar from "./Navbar";

function App() {
  const res = useLoaderData();

  return (
    <>
      <Navbar user={res.user} />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
