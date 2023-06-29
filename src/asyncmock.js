const productos = [
    { id: "1", nombre: "Yerba", precio: 500, img: "../Img/yerba.png", idCat: "2" },
    { id: "2", nombre: "Azucar", precio: 200, img: "../Img/azucar.png", idCat: "2" },
    { id: "3", nombre: "Aceite", precio: 400, img: "../Img/aceite.png", idCat: "3" },
    { id: "4", nombre: "Cafe", precio: 600, img: "../Img/cafe.png", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100);
    })
}

export const getUnProducto = (id) => {
return new Promise((resolve) => {
    setTimeout(() => {
        const misProductos = productos.find(prod => prod.id === id)
        resolve(misProductos)
    }, 100);
})
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const proudctosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve (proudctosCategoria)
        }, 100);
    })
}