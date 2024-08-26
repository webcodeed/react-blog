import { Outlet } from "react-router"
import Create from "./Create"
import Home from "./Home"
import Navbar from "./Navbar"

function App() {
    return (
        <>
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
        </>
    )
}

export default App
