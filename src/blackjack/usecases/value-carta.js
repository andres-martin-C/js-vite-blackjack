
/**
 * Obtiene el valor de la carta
 * @param {String} carta 
 * @returns {Number} Es el valor de la carta
 */
export const valorCarta = ( carta ) => {
    if (!carta) throw new Error('carta es obligatorio como un arreglo de string');
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}