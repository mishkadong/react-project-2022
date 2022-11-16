import { Link } from "react-router-dom"
import { articlepic } from "../images/links"

const Article = () => {
  return (
    <article className="main__article container">
      <div className="main__article-content">
        <h1 className="main__article-title">Eco Aware brands:
          Exclusively at Dresnote</h1>
        <p className="main__article-text">
        Science Story is a collaboration between Dressnote and creative thinkers, researchers and brands who are developing cutting-edge materials designed to address the environmental impacts of the textile industry.
        </p>
        <Link to="/" className="main__article-link">
          Shop Eco collection
        </Link>
      </div>
      <picture className="main__article-img">
        <img src={articlepic} alt="articlepic" />
      </picture>
    </article>
  )
}

export default Article