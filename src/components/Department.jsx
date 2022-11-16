import { Link } from "react-router-dom"

const Department = ({data}) => {
  const {src, href, cardName} = data
  return (
    <div className="main__cards-item">
          
    <Link to={href} className="main__cards-link">
    <img className="main__cards-img" src={src} alt={`${cardName}`} />
    <span className="main__cards-caption">
      {cardName}
    </span>
    </Link>
      </div>
  )
}

export default Department