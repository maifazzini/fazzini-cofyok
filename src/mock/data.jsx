export const productos = [
    {
        nombre: "Capsula Paris",
        stock: 16,
        precio: 16800,
        descripcion:"Blend de especialidad de granos de Italia. Es un café de tostado medio con sabores a almendras y hierbas frescas. Presentación: 12 capsulas por caja de 15gr cada una.",
        imagen: "../image/capsula-paris.png",
        categoria: "capsulas"
    },
    {
        nombre: "Capsula Bangoo",
        stock: 22,
        precio: 17900,
        descripcion:"Blend de especialidad de granos de Italia. Es un café de tostado oscuro con sabores a cacao amargo y notas madera. Presentación: 12 capsulas por caja de 15gr cada una.",
        imagen: "../image/capsula-bangoo.png",
        categoria: "capsulas"
    },
    {
        nombre: "Grano Bangoo",
        stock: 8,
        precio: 12600,
        descripcion:"Blend de especialidad de granos de Italia. Es un café de tostado oscuro con sabores a cacao amargo y notas madera. Presentación: Paquete de 300gr.",
        imagen: "../image/cafebangoo.png",
        categoria: "en grano"
    },
    {
        nombre: "Grano Paris",
        stock: 35,
        precio: 11700,
        descripcion:"Blend de especialidad de granos de Italia. Es un café de tostado medio con sabores a almendras y hierbas frescas. Presentación: Paquete de 300gr.",
        imagen: "../image/cafeparis.png",
        categoria: "en grano"
    },
    {
        nombre: "Grano Roma",
        stock: 42,
        precio: 10900,
        descripcion:"Blend de especialidad de granos de Latinoamérica Es un café de tostado medio con sabores a vainilla. Presentación: Paquete de 300gr.",
        imagen: "../image/caferoma.png",
        categoria: "en grano"
    },
    {
        nombre: "Vaso Cofyok",
        stock: 6,
        precio: 7000,
        descripcion:"Vaso termico ideal para llevar tu cafe con el logo en dorado de Cofyok.",
        imagen: "../image/vaso.png",
        categoria: "vasos",
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
                resolve(productos.find((producto)=>producto.id=== parseInt(id)))
            
            }
        },2000)
    })
}