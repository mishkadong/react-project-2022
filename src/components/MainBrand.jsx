import { Link } from "react-router-dom";

const MainBrand = ({data}) => {
  return (
    <>
      {data.map((item, index) => {
        const {src, href, alt} = item
        return (
          <Link key={index} to={href}>
            <img src={src} alt={alt} />
          </Link>
        )
      })}
    </>
  )
}

export default MainBrand