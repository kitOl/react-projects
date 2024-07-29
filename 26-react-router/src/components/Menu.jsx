import { NavLink } from "react-router-dom";

const Menu = () => {
  // const classActive = ({ isActive }) => (isActive ? "activeLink" : "link");
  const styleActive = ({ isActive }) =>
    isActive ? { color: "lightyellow", textDecoration: "none" } : {};

  return (
    <nav>
      <NavLink
        style={styleActive}
        // className={classActive}
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink
        style={styleActive}
        // className={classActive}
        to="courses"
      >
        Courses
      </NavLink>
      <NavLink
        style={styleActive}
        // className={classActive}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        style={styleActive}
        // className={classActive}
        to="contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
