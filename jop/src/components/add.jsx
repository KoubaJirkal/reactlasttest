import Table from "./table"
import { useContext } from "react"
import { AppContext } from "../provider/provider"

function Add() {
    
    const [data, dispatch] = useContext(AppContext)
    return (
      <>
        <button onClick={() => {dispatch({type: "add_table", payload: {}})}}>
            Add Table
        </button>
      </>
    )
  }
  
  export default Add