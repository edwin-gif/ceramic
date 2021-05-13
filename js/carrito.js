const carrito = {
    productos: [],
    subtotal: 0,
    total: 0,
    iva: 0
};

const addProduct = (prod) => {
    carrito.productos.push(prod);
    localStorage.setItem('products', JSON.stringify(carrito));
    Totals();
    imprimir();
}

const Totals = () => {
    let subtotal = 0;
    let iva = 0;
    let total = 0;
    for (const producto of carrito.productos) {
        subtotal += producto.precio
        iva = subtotal * .16;
        total = subtotal + iva;
    }
    carrito.subtotal = subtotal;
    carrito.iva = iva;
    carrito.total = total;
    console.log(carrito);
}


const imprimir = () => {
    let t = 0;

    document.getElementById('sub').innerHTML = carrito.subtotal;
    document.getElementById('iva').innerHTML = carrito.iva;
    document.getElementById('tt').innerHTML = carrito.total;
    console.log(imp);
    for (const producto of carrito.productos) {

    }
    document.getElementById('art').innerHTML += `<p>hola</p>`
}