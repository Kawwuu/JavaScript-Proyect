let precioProducto = parseFloat(prompt("Ingrese el precio del producto y obtendrá el cálculo sobre el iva (Puede incluir centavos)"));

while (true) {

    if (!isNaN(precioProducto) && precioProducto != null && precioProducto != ""){
        break;
    } else{
        alert('El valor ingresado no es correcto');
        continue;
    }
}
precioProductoP = precioProducto.toFixed(2);
alert("El precio del producto a calcular es: " + precioProductoP);
console.log("El precio del producto a calcular es: " + precioProductoP + " ");




function precioIva(precioProducto){
    return (precioProducto * 0.21)
}

let iva = precioIva(precioProducto);
ivaI = iva.toFixed(2);

alert("El impuesto (iva) calculado sobre su producto es: " + ivaI);
console.log("El impuesto (iva) calculado sobre su producto es: " + ivaI + " ");



function precioProductoConIva(precioProducto){
    return(precioProducto + (precioProducto * 0.21));
}

let precioFinal = precioProductoConIva(precioProducto);
precioFinalF = precioFinal.toFixed(2);


alert("El precio final del producto con impuestos incluidos es: " + precioFinalF);
console.log("El precio final del producto con impuestos incluidos es: " + precioFinalF);