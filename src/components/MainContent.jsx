import { arrow_left, arrow_right} from "../images/links";
import MainContentCard from "./MainContentCard";

const MainContent = ({title, data}) => {

  return (
    <div className="main__content container">
      <div className="main__content-heading">
        <h2 className="main__content-title">{title}</h2>
        <div className="main__content-nav">
          <img src={arrow_left} alt="arrow-nav" />
          <img src={arrow_right} alt="arrow-nav" />
        </div>
      </div>
      <div className="main__content-block">
        {data.map((item, index) => {
          return <MainContentCard key={index} data={item} />
        })}
      </div>
    </div>
  );
};

export default MainContent