import { useEffect, useState } from "react"
import { getProductos } from "../mock/AsyncMock"
import ItemList from "./ItemList"

const ItemListContainer = ({mensaje})=> {
    const [data, setData]=useState([])
    useEffect(()=>{
        getProductos()
        .then((res)=>setData(res))
        .catch((error)=> console.error(error))
    },[])
    console.log(data)
    return(
        <div>
            <h1>{mensaje}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer;