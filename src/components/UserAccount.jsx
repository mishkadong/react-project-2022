import { Link } from "react-router-dom"
import {basket, likes, profile} from "../images/links"

const UserAccount = () => {
  return (
    <div className="header__user">
      <Link to="/" className="heder__user-link">
        <img src={likes} alt="liked_link" />
      </Link>
      <Link to="/" className="header__user-link">
        <img src={profile} alt="profile_link" />
      </Link>
      <Link to="/" className="header__user-link">
        <img src={basket} alt="basket_link" />
      </Link>
    </div>
  )
}

export default UserAccount