// * Lo que hacemos es agarrar todo el paquete y renombrarlo con el ' _ '
// import _ from 'underscore';
/**
 * TODO: Exportación de código
 * * Exportación independiente { crearDeck }
 * * Podemos renombrar una funcion o variable que importemos ejemplo:
 * * el as lo que hace es renombrar o mejor dicho crear un alias.
 * import { crearDeck  as nuevoDeck } from './usecases/crear-deck'; 
 * 
 * TODO: Exportacion por default
 * * hariamos algo similar a la importacion de underscore solo que pondriamos otro nombre
 * * cualquiera que deseamos ejemplo:
 * import cualquieraCosa from './usecases/crear-deck';
 * 
 * TODO: Si queremos igual importar una individual lo podemos hacer las dos juntas en una linea
 * import cualquieraCosa, { otra_cosa } from './usecases/crear-deck';
 */
// import { crearDeck } from './usecases/crear-deck';
// // * Importamos pedir carta
// import { pedirCarta } from './usecases/solicitar-carta';
// // * Importamos obtener valor carta
// import { valorCarta } from './usecases/value-carta';
// TODO: Importaríamos una vez ya que todo lo tendríamos en el archivo barril o sea en el index.js que esta en ( usecases )
import { crearDeck, pedirCarta, valorCarta , turnoComputadora, crearCartaHtml} from "./usecases";


let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');


// TODO: Llamar función 
deck = crearDeck(tipos,especiales);


// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    crearCartaHtml(divCartasJugador,carta);

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML, divCartasComputadora, deck );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML, divCartasComputadora, deck );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, puntosHTML, divCartasComputadora, deck );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos,especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});

