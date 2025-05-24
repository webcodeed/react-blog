import { Outlet } from "react-router-dom"
import Home from "./Home"
import Navbar from "./Navbar"
import { useLoaderData } from "react-router-dom"

function App() {
    const {user, error} = useLoaderData()
    return (
        <>
            <Navbar user={user} />
            <div className="content">
                {/* As we change route, change the outlet a.k.a component */}
                <Outlet />
            </div>
        </>
    )
}

export default App
