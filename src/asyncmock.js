const productos = [
    { id: 1, nombre: "Yerba", precio: 500, img: "./img/yerba.jpg" },
    { id: 2, nombre: "Azucar", precio: 200, img: "./img/azucar.jpg" },
    { id: 3, nombre: "Aceite", precio: 400, img: "./img/aceite.jpg" },
    { id: 4, nombre: "Cafe", precio: 600, img: "./img/cafe.jpg" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    })
}