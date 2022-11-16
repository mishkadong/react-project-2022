import "./MainLayout.scss";
import { Outlet } from "react-router-dom";
import {search} from "../images/links"
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import UserAccount from "../components/UserAccount";
import FooterLinks from "../components/FooterLinks";
import SocialMedia from "../components/SocialMedia";
import customerSupportLinks from "../data/customerSupportLinks.json"
import myAccountLinks from "../data/myAccountLinks.json"



const MainLayout = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__wrapper-bar">
          <div className="header__bar container">
          <Logo fill={"white"}/>
          <UserAccount />
          </div>
        </div>
        <div className="header__navbar container">
          <Nav />
          <form action="/" className="header__form">
            <img className="header__form-icon" src={search} alt="search_icon" />
            <input
              type="text"
              className="header__form-input"
              placeholder="Search for..."
            />
          </form>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="footer__block">
          <div className="footer__block-wrapper container">
            <FooterLinks obj={customerSupportLinks}/>
            <FooterLinks obj={myAccountLinks}/>
            <div className="footer__feedback-block">
              <p className="footer__feedback-text">
                Sign up today for email exclusives including early access to
                Sale, the latest trends and arrivals from your favorite
                designers and can't miss promotions.
              </p>
              <form action="/" className="footer__form">
                <input
                  type="email"
                  className="footer__form-input"
                  placeholder="Enter your Email"
                />
                <button className="footer__form-btn">Subscribe</button>
              </form>
              <SocialMedia />
            </div>
          </div>
        </div>
        <div className="footer__bar container">
        <Logo fill={"black"}/>
          <span className="footer__copyright">
            (С) 2021 All rights reserved
          </span>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
