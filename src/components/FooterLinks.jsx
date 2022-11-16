import { Link } from "react-router-dom";

const FooterLinks = ({ obj }) => {
  const {title, links} = obj
  
  return (
    <div className="footer__subnav">
      <h3 className="footer__subnav-title">{title}</h3>
      <ul>
        {links.map((item, index) => {
          const {linkName, href} = item
          return (
            <li key={index}>
              <Link to={href} className="footer__subnav-link">
                {linkName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
