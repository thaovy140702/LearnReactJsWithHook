import '../views/Navigation.scss'
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/timer">Timer Apps</NavLink>
            <NavLink to="/todo">Todo Apps</NavLink>
            <NavLink to="/blog">Blogs</NavLink>
            <NavLink to="/youtube">Youtube Search</NavLink>
        </div>
    )
}
export default Navigation