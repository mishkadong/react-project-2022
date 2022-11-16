import {Link} from "react-router-dom"
import { ReactComponent as Like } from "../images/icons/like.svg";
import { useState } from "react";

const MainContentCard = ({data}) => {
  const {src, text, brand, price, isOnSale, discountAmount} = data;
  const lowprice = price - discountAmount;
  const [like, setLike] = useState(false)
  return (
    <figure className="main__content-card">
      <span
       
       className="main__content-card-round">
        <Like 
          onClick={()=> {
            setLike(!like)
          }}
         fill={like ? "black" : "none"}
         className="main__content-card-like"/>
      </span>
      <Link>
        <img src={src} alt={text} className="main__content-card-img" />
      </Link>
      <figcaption className="main__content-card-caption">
        
        <span className="main__content-card-brand">{brand}</span>
        <span className="main__content-card-text">{text}</span>
        {
          isOnSale ? (
            <>
              <span className="main__content-card-lowprice">{`$${lowprice}`}</span>
              <span className="main__content-card-price line-through">{`$${price}`}</span>
            </>
          ) : (
            <span className="main__content-card-price">{`$${price}`}</span>
          )
        }
      </figcaption>
    </figure>
  )
}

export default MainContentCard