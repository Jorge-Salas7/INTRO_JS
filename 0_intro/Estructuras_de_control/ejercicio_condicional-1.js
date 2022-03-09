let edad = parseInt(prompt("Cual es tu edad??"));

if(edad<4) {
    alert('Eres muy joven');
} else if(edad>=4 && edad<=99) {
    alert('Diviertete');
} else if(edad>99) {
    alert('Lo siento, pero para el domino no hay limite');
} else {
    alert('Dato no valido');
}