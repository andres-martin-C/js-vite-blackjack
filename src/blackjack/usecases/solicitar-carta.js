// Esta función me permite tomar una carta
/**
 * Función que retornar una carta
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna una carta del deck
 */
export const pedirCarta = (deck) => {
    if ( !deck || deck.length === 0) throw new Error('deck es obligatorio como un arreglo de string');
    return deck.pop();
}
