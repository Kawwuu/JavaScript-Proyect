let precioProducto = Number(prompt("Ingrese el precio del producto y obtendrá el cálculo sobre el iva (Puede incluir centavos)"));

function precioIva(precioProducto){
    if(!isNaN(precioProducto)){
        let resultado = precioProducto * 1.21
        alert("El precio del producto es: " + resultado)
    } else {
        alert("Debes ingresar un numero")
    }
}

let llamarResultado = precioIva(precioProducto)

