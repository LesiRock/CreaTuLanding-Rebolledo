const productos = [
        {
        id: '01',
        name: 'Playera Cara',
        description: 'Playera con estampado de rostro de mujer',
        category: 'playera',
        stock: 20,
        price: 250,
        img: 'https://i.postimg.cc/Nj82hygb/Playera1.png',
    },
    {
        id: '02',
        name: 'Playera Felicidad',
        description: 'Playera con estampado de rostro feliz',
        category: 'playera',
        stock: 20,
        price: 250,
        img: 'https://i.postimg.cc/3RqdjmBr/Playera2.png',
    },
        {
        id: '03',
        name: 'Playera Amistad',
        description: 'Playera con estampado de personas en el parque',
        category: 'playera',
        stock: 20,
        price: 250,
        img: 'https://i.postimg.cc/mkFhmkXY/Playera3.png',
    },
        {
        id: '04',
        name: 'Playera Manos',
        description: 'Playera con estampado de manos',
        category: 'playera',
        stock: 20,
        price: 250,
        img: 'https://i.postimg.cc/8sQc9G9q/Playera4.png',
    },
    {
        id: '05',
        name: 'Sudadera Cara',
        description: 'Sudadera con estampado de rostro de mujer',
        category: 'sudadera',
        stock: 20,
        price: 400,
        img: 'https://i.postimg.cc/BZ8CrCRg/Sudadera1.png',
    },
    {
        id: '06',
        name: 'Sudadera Felicidad',
        description: 'Sudadera con estampado de rostro feliz',
        category: 'sudadera',
        stock: 20,
        price: 400,
        img: 'https://i.postimg.cc/G3ZjdyC1/Sudadera2.png',
    },
        {
        id: '07',
        name: 'Sudadera Amistad',
        description: 'Sudadera con estampado de personas en el parque',
        category: 'sudadera',
        stock: 20,
        price: 400,
        img: 'https://i.postimg.cc/DwcQrpb2/Sudadera3.png',
    },
        {
        id: '08',
        name: 'Sudadera Manos',
        description: 'Sudadera con estampado de manos',
        category: 'sudadera',
        stock: 20,
        price: 400,
        img: 'https://i.postimg.cc/jjgz9WXm/Sudadera4.png',
    },
    {
        id: '09',
        name: 'Gorra Cara',
        description: 'Gorra con estampado de rostro de mujer',
        category: 'gorra',
        stock: 20,
        price: 150,
        img: 'https://i.postimg.cc/Z5zvDPhC/Gorra1.png',
    },
    {
        id: '10',
        name: 'Gorra Felicidad',
        description: 'Gorra con estampado de rostro feliz',
        category: 'gorra',
        stock: 20,
        price: 150,
        img: 'https://i.postimg.cc/fbB3L6S9/Gorra2.png',
    },
        {
        id: '11',
        name: 'Gorra Amistad',
        description: 'Gorra con estampado de personas en el parque',
        category: 'gorra',
        stock: 20,
        price: 150,
        img: 'https://i.postimg.cc/yNVg7VxK/Gorra3.png',
    },
        {
        id: '12',
        name: 'Gorra Manos',
        description: 'Gorra con estampado de manos',
        category: 'gorra',
        stock: 20,
        price: 150,
        img: 'https://i.postimg.cc/0QjzJc7H/Gorra4.png',
    },
    {
        id: '13',
        name: 'Taza Cara',
        description: 'Taza con estampado de rostro de mujer',
        category: 'taza',
        stock: 20,
        price: 50,
        img: 'https://i.postimg.cc/SNCfsxSY/Taza1.png',
    },
    {
        id: '14',
        name: 'Taza Felicidad',
        description: 'Taza con estampado de rostro feliz',
        category: 'taza',
        stock: 20,
        price: 50,
        img: 'https://i.postimg.cc/3xhCDQNS/Taza2.png',
    },
        {
        id: '15',
        name: 'Taza Amistad',
        description: 'Taza con estampado de personas en el parque',
        category: 'taza',
        stock: 20,
        price: 50,
        img: 'https://i.postimg.cc/9fFdJPGy/Taza3.png',
    },
        {
        id: '16',
        name: 'Taza Manos',
        description: 'Taza con estampado de manos',
        category: 'taza',
        stock: 20,
        price: 50,
        img: 'https://i.postimg.cc/V6JjcYZ6/Taza4.png',
    },
]

export const getProductos = ()=>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error intentalo mas tarde')
            }else{
                resolve(productos)
            }
        },2000)
    })
}

export const getItem = (id) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let prod = productos.find((item)=> item.id === id)
            resolve(prod)
        },2000)
    })
}