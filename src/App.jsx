import { Outlet } from "react-router-dom"
import Home from "./Home"
import Navbar from "./Navbar"

function App() {
    return (
        <>
            <Navbar />
            <div className="content">
                {/* As we change route, change the outlet a.k.a component */}
                <Outlet />
            </div>
        </>
    )
}

export default App
