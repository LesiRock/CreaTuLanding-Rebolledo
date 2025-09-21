import { useEffect, useState } from "react"
import { getItem  } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = ()=> {
    const [detalle, setDetalle]=useState({})
    const [cargando, setCargando] = useState(false)
    const {id}=useParams()

    useEffect(()=>{
        setCargando(true)
        const docRef = doc(db, "ideo", id)
        getDoc(docRef)
        .then((res)=>setDetalle({id:res.id, ...res.data()}))
        .catch((error)=>console.log(error))
        .finally(() =>setCargando(false))
        },[id])


    return(
        <>
        {
            cargando
            ? <LoaderComponent/>
            : <ItemDetail detalle={detalle}/>
        }
        </>
    )
}

export default ItemDetailContainer;