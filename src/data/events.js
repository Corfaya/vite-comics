function itemClicked(array, index) {
    // booleana impostata su false per tutti gli elementi dell'array
    array.forEach((item) => {
        item.isClicked = false
    })
    // se index elemento cliccato è tra 0 e lunghezza array, booleana diventa true per quell'indice
    if (index >=0 && index < array.length) {
        array[index].isClicked = true
    }
}
export {itemClicked}