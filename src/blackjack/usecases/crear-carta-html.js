
/**
 * Función que crea y agregar una carta html en su apartado respectivo
 * @param {HTMLElement} divHTML Elemento html donde vamos a insertar la carta
 * @param {String} carta La carta que vamos a exportar
 * @returns {void}
 */
export const crearCartaHtml = (divHTML , carta) => {
    if ( !divHTML ) throw new Error('divHTML es obligatorio ');
    if ( !carta ) throw new Error('carta es obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divHTML.append( imgCarta );
}