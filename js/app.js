let productosCompra = [];
let carritoCompra = [];
let panaderia;

class Producto{
    constructor(nombre, precio, stock) {
        this.precio = precio;
        this.stock = stock;
        this.nombre = nombre;
    }
}

class Carrito{
    constructor(nombre, precio){
        this.precio = precio;
        this.nombre = nombre;
    }
}

let i = 0;
productosCompra[i++] = new Producto("Facturas",80,50);
productosCompra[i++] = new Producto("Tarta Mixta",300,100);
productosCompra[i++] = new Producto("Sándwich",200,30);

function elegirCarrito(panaderia){
    switch(panaderia){
        case 0:
            if(productosCompra[panaderia].stock <1){
                alert("Nos quedamos sin stock de facturas");
            } else{
                colocarCarrito(productosCompra[panaderia],carritoCompra);

                alert("Factura agregada");
                console.log("Factura agregada");
            }
            console.log(carritoCompra);

            break;

            case 1:
                if(productosCompra[panaderia].stock < 1) {
                    alert("Nos quedamos sin stock de tarta mixta")
                } else{
                    colocarCarrito(productosCompra[panaderia], carritoCompra);

                    alert("Tarta mixta agregada");
                    console.log("Tarta mixta agregada");
                }

                console.log(carritoCompra);

                break;

            case 2:
                if(productosCompra[panaderia].stock < 1) {
                    alert("Nos quedamos sin stock de sándwich")
                } else{
                    colocarCarrito(productosCompra[panaderia], carritoCompra);
    
                    alert("Sándwich agregado");
                    console.log("Sándwich agregado");
                }
    
                console.log(carritoCompra);
    
                break;

            default:
                alert("Error: No se procesó la solicitud")
                break;
    }
}

function colocarCarrito(object, carritoCompra){
    let x = object.nombre;
    let s = object.precio;
    const i = new Carrito(x,s);
    carritoCompra.push(i);
}

function totalCompra(){
    let total = 0;
    for (let i=0; i<carritoCompra.length; i++) {
        total+= carritoCompra[i].precio;
    }
    return total;
}

function terminar(){
    console.log("Los productos en el carrito son: ");
    for (let i=0; i<carritoCompra.length; i++){
        console.log(" "+carritoCompra[i].nombre)
    }
    alert(`El total de la compra de sus productos es: $${(totalCompra().toFixed(2))}`);
}

function restart(){
    carritoCompra =[];
    console.log("restart successfully");
}
