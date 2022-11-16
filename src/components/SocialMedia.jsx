import {
  logo_youtube,
  logo_twitter,
  logo_pinterest,
  logo_instagram,
  logo_facebook,
} from "../images/links";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  const links = [
    logo_instagram,
    logo_facebook,
    logo_twitter,
    logo_pinterest,
    logo_youtube,
  ];
  return (
    <div className="social-media">
      <ul className="social-media-list">
        {links.map((item, index) => {
          return (
            <li key={index} className="social-media-list-item">
              <Link to={"/"} className="social-media-link">
                <img src={links[index]} alt={item} />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default SocialMedia