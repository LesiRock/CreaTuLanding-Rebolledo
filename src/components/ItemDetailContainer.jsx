import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { getItem } from '../mock/AsyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer =()=>{
    const [detalle, setDetalle] = useState({})
    const params = useParams()

    useEffect(()=>{
        getItem('01')
        .then((res)=> setDetalle (res))
        .catch((error)=> console.log(error))
    },[])

    console.log(params, 'params')
    return (
        <div><ItemDetail detalle={detalle}/></div>
    )
}

export default ItemDetailContainer