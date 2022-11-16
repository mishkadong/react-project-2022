import { NavLink } from "react-router-dom";
import { chevron } from "../images/links";

const Nav = () => {
  const pages = ["new_in", "clothing", "shoes", "accessories", "brands", "sale"]
  return (
    <nav className="header__nav">
      <ul className="header__list">
        {pages.map((item, index) => (
          <li key={index} className="header__list-item">
            <NavLink to={`/${item}`} className="header__list-link">
              {item.replaceAll("_", " ")}
              <img className="header__list-icon" src={chevron} alt="chevron" />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav
