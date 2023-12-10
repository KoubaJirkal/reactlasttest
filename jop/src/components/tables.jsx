import Table from "./table"
import { useContext } from "react"
import { AppContext } from "../provider/provider"

function Tables() {
    
    const [data, dispatch] = useContext(AppContext)
    //console.log(data[0].tables)
    return (
      <>
        <h1>Stoly</h1>
        {data.tables.map((tables, table) => 
            <div key={table}>
                <h2>Stůl {table}</h2>
                <Table index={table}></Table>
            </div>
            )}
      </>
    )
  }
  
  export default Tables