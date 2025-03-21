// turno de la computadora
import { pedirCarta, valorCarta, crearCartaHtml } from "./";

/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento html para los puntos
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar los puntos
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora , deck = []) => {

    if ( !puntosMinimos ) throw new Error("Puntos mínimos son necesarios");
    if ( !deck ) throw new Error("El deck es necesario");
    if ( !puntosHTML ) throw new Error("El puntosHTML es necesario");

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        crearCartaHtml(divCartasComputadora, carta);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}