import brands from "../data/mainBrands";
import { Link } from "react-router-dom";
import MainBrand from "./MainBrand";

const MainBrands = () => {

  return (
    <div className="main__brands container">
      <div className="main__brands-block">
        <MainBrand  data={brands} />
      </div>
      <Link to={"/brands"} className="main__brands-link">
      All brands
      </Link>
    </div>
  )
}

export default MainBrands