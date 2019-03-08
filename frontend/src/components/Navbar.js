import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

function NavItem (props) {
  return (
    <li className="nav-item mr-4 ml-4">
      <NavLink className="nav-link" to={{
        pathname: `/${props.name}`,
        state: {
          type: props.type,
        }
      }}>{props.name}</NavLink>
    </li>
  );
}

class Navbar extends Component {
  render(){
    return(
      <div>
        <div className="d-flex justify-content-center">
          <Link to="/">
            <img src={"/static/frontend/media/logo.jpg"} className="mx-auto d-block logo-pic" alt="" />
          </Link>
        </div>
        <nav className="navbar navbar-expand-sm navbar-light justify-content-center">
          <ul className="navbar-nav p-0" id="navbar">
            <NavItem name='פרטי' type="r" />
            <NavItem name='ציבורי' type="c" />
            <NavItem name='פרסומים' type="" />
            <NavItem name='צור-קשר' type="" />
            <NavItem name='אודות' type="" />
          </ul>
        </nav>
      </div>
    )
  }
}
export default Navbar;
