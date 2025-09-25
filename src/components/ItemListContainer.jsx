import { useEffect, useState } from "react"
import { getProductos } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where, addDoc } from "firebase/firestore"
import { db } from "../service/firebase";


const ItemListContainer = ({mensaje})=> {
    const [data, setData]=useState([])
    const [loader, setLoader] = useState(false)
    const {category}=useParams()
    console.log("Categoría recibida:", category);

useEffect (()=>{
    setLoader(true)
    const productsCollection = category
    ? query(collection(db, "productos"), where("category", "==", category))
    : collection(db, "productos");
    getDocs(productsCollection)
    .then((res)=>{
        console.log("Cantidad de documentos encontrados:", res.docs.length)
        const list = res.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
        }))
        console.log("Documentos recibidos:", list);
        setData(list)
    })
    .catch((error)=> console.error(error))
    .finally(()=> setLoader(false))
},[category]);

    return(
        <>
        {loader
        ? <LoaderComponent/>
        : <div>
            <h1>{mensaje} {category && <span style={{textTransform:'capitalize'}}></span>}</h1>
            <ItemList data={data}/>
        </div>
        }
        </>
    )
}

export default ItemListContainer;