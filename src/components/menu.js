import { NavLink, useLocation } from "react-router-dom"

export default function Menu() {

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");


    return (
        <section>
            <nav className="menu shift" id="menu">
                <ul>
                    <li className={splitLocation[1] === "" ? "activeLink" : ""} ><span><NavLink to="/">home</NavLink></span></li>
                    <li className={splitLocation[1] === "add" ? "activeLink" : ""} ><span><NavLink to="/add">add techno</NavLink></span></li>
                    <li className={splitLocation[1] === "list" ? "activeLink" : ""} ><span><NavLink to="/list">all technos</NavLink></span></li>
                </ul>
            </nav>
        </section>
    )
}
