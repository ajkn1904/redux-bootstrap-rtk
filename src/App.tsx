import { Link, Outlet } from "react-router"
import { ModeToggle } from "./components/ui/mode-toggle"

 
function App() {
  return (
    <>
    <nav className="flex items-center gap-2 p-5 font-bold">
      <h1>NAVBAR</h1>
      <Link to="/">Tasks</Link>
      <Link to="/users">Users</Link>

      <ModeToggle/>
    </nav>
    <Outlet/>
    </>
  )
}
 
export default App