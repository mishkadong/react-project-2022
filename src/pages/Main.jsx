import "./Main.scss";
import { Link } from "react-router-dom";
import StoreDepartments from "../components/StoreDepartments";
import MainContent from "../components/MainContent";
import Wallpapers from "../components/MainWallpapers";
import Article from "../components/Article";
import MainBrands from "../components/MainBrands";
import newArrivals from "../data/newArrivals";
import picks from "../data/picks";
import wallpaperImages from "../data/wallpaperImages";

const Main = () => {
  return (
    <div className="main">
      <div className="main__ad">
        <div className="main__ad-block container">
          <p className="main__ad-text">
            Up to 50% off all dresses when use code DRESSLOVER
          </p>
          <Link to="/clothing" className="main__ad-link">
            Shop dresses
          </Link>
        </div>
      </div>
      <div className="main__hero">
        <StoreDepartments />
      </div>
      <MainContent title={"New arrivals"} data={newArrivals} />
      <Wallpapers data={wallpaperImages} />
      <MainContent title={"Our picks for you"} data={picks} />
      <Article />
      <div className="main__fullscreen-image"></div>
      <MainBrands />
    </div>
  );
};

export default Main;
