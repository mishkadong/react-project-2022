
const Wallpapers = ({data}) => {
  return (
    <div className="main__wallpapers container">
      {
        data.map((item, index) => {
          const {src, alt} = item
          return (
            <picture key={index} className="main__wallpapers-img">
              <img src={src} alt={alt} />
            </picture>
          )
        })
      }
    </div>
  )
}

export default Wallpapers