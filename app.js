/* 
Algoritmo pseudocódigo para tomar un pedido

1. Pedirle al usuario que ingrese el sabor // Verificar que la elección sea valida
2. Pedirle al usuario que ingrese el sabor del relleno // Verificar que la elección sea valida
3. Pedirle al usuario que ingrese el peso del postre // Verificar que la elección sea valida
4. Pedirle al usuario que ingrese la decoración // Verificar que la elección sea valida
5. Mostrarle al usuario el pedido que quiere realizar 
6. Solicitar la fecha de entrega // Verificar que el dato ingresado sea válido
7. Pedirle la confirmación del pedido al usuario.
8. Mostrarle al usuario la confirmación del pedido. 

*/

let accion = true
let finalizar = "0"

class Pedido {

    constructor(sabor, relleno, peso, topping) {

        this.sabor = sabor
        this.relleno = relleno
        this.peso = peso
        this.topping = topping

    }


}

const pedidos = []


function continuar() {
    alert("¡Perfecto! Presiona 'Aceptar' para continuar")
}

function invalido() {

    alert("Ingreso inválido")
}

hacerPedido()

function hacerPedido() {
    sabor = prompt('Ingresa el sabor de bizcochuelo que deseas\n Chocolate\n Marmolado\n Limon\n Vainilla\n').toLowerCase();

    while (accion) {

        if ((sabor == "chocolate") || (sabor == "marmolado") || (sabor == "limon") || (sabor == "vainilla")) {
            continuar()
            break
        }


        sabor = prompt('Dato inválido. Ingresa el sabor de bizcochuelo que deseas\n Chocolate\n Marmolado\n Limon\n Vainilla\n').toLowerCase();

    }
    relleno = prompt('Ingresa el sabor de relleno que deseas\n Chocolate\n Nutella\n Dulce de leche\n Limon\n').toLowerCase();

    while (accion) {
        if ((relleno == "chocolate") || (relleno == "nutella") || (relleno == "dulce de leche") || (relleno == "limon")) {

            continuar()
            break
        }

        invalido()

        relleno = prompt('Ingresa el sabor de relleno que deseas\n Chocolate\n Nutella\n Dulce de leche\n Limon\n').toLowerCase();

    }

    peso = prompt('Ingresa los kilos que deseas\n 1kg // Dos personas\n 3kg // Seis personas\n 5kg// Diez personas\n 7kg // Catorce personas\n').toLowerCase();

    while (accion) {

        if ((peso == "1kg") || (peso == "3kg") || (peso == "5kg") || (peso == "7kg")) {

            continuar()
            break
        }

        invalido()
        peso = prompt('Ingresa los kilos que deseas\n 1kg // Dos personas\n 3kg // Seis personas\n 5kg// Diez personas\n 7kg // Catorce personas\n').toLowerCase();

       
    }

    topping = prompt('Ingresa el topping que desees\n Oreos\n Dulce de leche\n Fruta\n Merengue\n').toLowerCase();

    while (accion) {
        if ((topping == "oreos") || (topping == "dulce de leche") || (topping == "fruta") || (topping == "merengue")) {
            continuar()
            break
        }
        invalido()
        topping = prompt('Ingresa el topping que desees\n Oreos\n Dulce de leche\n Fruta\n Merengue\n').toLowerCase();

       
    }


    alert('Su postre será de ' + sabor + ' relleno de ' + relleno + ' con decoración ' + topping + ' y pesará ' + peso)

    finalizar = prompt('Ingrese 1. Para confirmar la orden \n 2. Para confirmar y realizar otro pedido \n 3. Para salir.').toLowerCase();


    if (finalizar == "1") {
        accion == true

        pedidos.push(new Pedido(sabor, relleno, peso, topping));


    } else if (finalizar == "2") {
        accion == true

        pedidos.push(new Pedido(sabor, relleno, peso, topping));

        hacerPedido()

    } else if (finalizar == '3') {
        accion == false
    }
}


console.log(Pedido)
console.log(pedidos)