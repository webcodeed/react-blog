import { Outlet, useLoaderData } from "react-router";
import Navbar from "./Navbar";

function App() {
  const { user } = useLoaderData();

  return (
    <>
      <Navbar user={user} />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
