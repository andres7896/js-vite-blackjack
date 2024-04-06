/**
 * Esta funcion elimina y retorna la ultoma carta del deck
 * @param {Array<String>} deck es un arreglo de string Ejemplo:  ['8C','2D','AH','JS']
 * @returns {String} retorna la carta del deck Ejemplo: '5H'
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) 
        throw new Error('No hay cartas en el deck');

    const carta = deck.pop();
    return carta;
}