/**
 * Esta funcion obtiene el valor de la carta
 * @param {String} carta Ejemplo: '3H'
 * @returns {Number} retorna el valor de la carta Ejemplo: 3
 */
export const valorCarta = ( carta ) => {

    if (!carta || carta === '') 
        throw new Error('Carta no encontrada');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}