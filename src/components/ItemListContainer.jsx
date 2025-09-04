import { useEffect, useState } from "react"
import { getProductos } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({mensaje})=> {
    const [data, setData]=useState([])
    const {category}=useParams()
    useEffect(()=>{
        getProductos()
        .then((res)=>{
            if(category){
                setData(res.filter((item)=> item.category === category));
            }else{
                setData(res)
            }
        })
        .catch((error)=> console.error(error))
    },[category])

    console.log(category)
    return(
        <div>
            <h1>{mensaje}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer;