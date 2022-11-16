import departments from "../data/storeDepartments"
import Department from "./Department"

const StoreDepartments = () => {
  return( 
    <div className="main__cards container">
      {departments.map((item, index) => {
        
        return (
          <Department key={index} data={item}/>
          )
        }
      )}
    </div>
  )
}

export default StoreDepartments