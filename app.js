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

//Elección del sabor

let sabor = prompt('Ingresa el sabor de bizcochuelo que deseas\n Chocolate\n Marmolado\n Limon\n Vainilla\n Para terminar diga "Salir"').toLowerCase();
let peso = "0"
let topping = "0"
let accion = true
let finalizar = "0"
let relleno = "0"

function continuar() {
    alert("¡Perfecto! Presiona 'Aceptar' para continuar")
}

function invalido() {

    alert("Ingreso inválido")
}

while (accion) {

    if ((sabor == "chocolate") || (sabor == "marmolado") || (sabor == "limon") || (sabor == "vainilla")) {
        continuar()
        break
    }

    sabor = prompt('Dato inválido. Ingresa el sabor de bizcochuelo que deseas\n Chocolate\n Marmolado\n Limon\n Vainilla\n Para terminar diga "Salir"').toLowerCase();

    if (sabor == 'salir') {
        accion = false
    }

}
relleno = prompt('Ingresa el sabor de relleno que deseas\n Chocolate\n Nutella\n Dulce de leche\n Limon\n Para terminar diga "Salir"').toLowerCase();

while (accion) {
    if ((relleno == "chocolate") || (relleno == "nutella") || (relleno == "dulce de leche") || (relleno == "limon")) {

        continuar()
        break
    }

    invalido()

    relleno = prompt('Ingresa el sabor de relleno que deseas\n Chocolate\n Nutella\n Dulce de leche\n Limon\n Para terminar diga "Salir"').toLowerCase();
    if (relleno == 'salir') {
        accion = false
    }
}

peso = prompt('Ingresa los kilos que deseas\n 1kg // Dos personas\n 3kg // Seis personas\n 5kg// Diez personas\n 7kg // Catorce personas\n').toLowerCase();

while (accion) {

    if ((peso == "1kg") || (peso == "3kg") || (peso == "5kg") || (peso == "7kg")) {

        continuar()
        break
    }

    invalido()
    peso = prompt('Ingresa los kilos que deseas\n 1kg // Dos personas\n 3kg // Seis personas\n 5kg// Diez personas\n 7kg // Catorce personas\n \n Para terminar diga "Salir"').toLowerCase();

    if (peso == 'salir') {
        accion = false
    }

}

topping = prompt('Ingresa el topping que desees\n Oreos\n Dulce de leche\n Fruta\n Merengue\n').toLowerCase();

while (accion) {
    if ((topping == "oreos") || (topping == "dulce de leche") || (topping == "fruta") || (topping == "merengue")) {
        continuar()
        break
    }
    invalido()
    topping = prompt('Ingresa el topping que desees\n Oreos\n Dulce de leche\n Fruta\n Merengue\n').toLowerCase();

    if (topping == 'salir') {
        accion = false
    }

}


alert('Su postre será de ' + sabor + ' relleno de ' + relleno + ' con decoración ' + topping + ' y pesará ' + peso)

finalizar = prompt('Ingrese\n "Confirmar" para confirmar la orden, \n de lo contrario ingrese "Salir"').toLowerCase();


if (finalizar == "Confirmar") {
    accion = true


}

else if (sabor == 'Salir') {
    accion = false
}



