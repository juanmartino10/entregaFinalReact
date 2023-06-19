const productos = [
    { id: 1, nombre: "Yerba", precio: 500, img: "./Img/yerba.png" },
    { id: 2, nombre: "Azucar", precio: 200, img: "./Img/azucar.png" },
    { id: 3, nombre: "Aceite", precio: 400, img: "./Img/aceite.png" },
    { id: 4, nombre: "Cafe", precio: 600, img: "./Img/cafe.png" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    })
}

export const getUnProducto = (id) => {
return new Promise((resolve) => {
    setTimeout(() => {
        const misProductos = productos.find(prod => prod.id === id)
        resolve(misProductos)
    }, 2000);
})
}