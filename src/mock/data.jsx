const productos = [
    {
        id: 1,
        nombre: "Capsula Roma",
        stock: 50,
        precio: 17200,
        descripcion:"Blend de especialidad de granos de Latinoamérica Es un café de tostado medio con sabores a vainilla. Presentación: 12 capsulas por caja de 15gr cada una.",
        imagen: "./image/capsula-roma.png",
        categoria1: "Roma",
        categoria2: "capsula"
    },
    {
        id: 2,
        nombre: "Capsula Paris",
        stock: 16,
        precio: 16800,
        descripcion:"Blend de especialidad de granos de Italia. Es un café de tostado medio con sabores a almendras y hierbas frescas. Presentación: 12 capsulas por caja de 15gr cada una.",
        imagen: "./image/capsula-paris.png",
        categoria1: "Paris",
        categoria2: "capsula"
    },
    {
        id: 3,
        nombre: "Capsula Bangoo",
        stock: 22,
        precio: 17900,
        descripcion:"Blend de especialidad de granos de Italia. Es un café de tostado oscuro con sabores a cacao amargo y notas madera. Presentación: 12 capsulas por caja de 15gr cada una.",
        imagen: "./image/capsula-bangoo.png",
        categoria1: "Bangoo",
        categoria2: "capsula"
    },
    {
        id: 4,
        nombre: "Grano Bangoo",
        stock: 8,
        precio: 12600,
        descripcion:"Blend de especialidad de granos de Italia. Es un café de tostado oscuro con sabores a cacao amargo y notas madera. Presentación: Paquete de 300gr.",
        imagen: "./image/cafebangoo.png",
        categoria1: "Bangoo",
        categoria2: "en grano"
    },
    {
        id: 5,
        nombre: "Grano Paris",
        stock: 35,
        precio: 11700,
        descripcion:"Blend de especialidad de granos de Italia. Es un café de tostado medio con sabores a almendras y hierbas frescas. Presentación: Paquete de 300gr.",
        imagen: "./image/cafeparis.png",
        categoria1: "Paris",
        categoria2: "en grano"
    },
    {
        id: 6,
        nombre: "Capsula Roma",
        stock: 42,
        precio: 10900,
        descripcion:"Blend de especialidad de granos de Latinoamérica Es un café de tostado medio con sabores a vainilla. Presentación: Paquete de 300gr.",
        imagen: "./image/caferoma.png",
        categoria1: "Roma",
        categoria2: "en grano"
    },
]

export const listadoproductos = () =>{
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos)
            
            }
        },2000)
    })
}

export const productoporid = (id) =>{
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos.find((producto)=>producto.id===id))
            
            }
        },2000)
    })
}