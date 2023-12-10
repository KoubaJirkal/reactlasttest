import { useContext } from "react"
import { AppContext } from "../provider/provider"


function Table({index}) {
    const [data, dispatch] = useContext(AppContext)

    return (
      <>
        {data.tables[index].map((stools, stool) => 
            <div key={stool}>
                <p>Hráč {stool} vypil: {stools} <button onClick={() => {dispatch({type: "eat", payload: [stools, stool, index]})}} >Vypít</button></p> 
            </div>
        )}
      </>
    )
  }
  
  export default Table