// Prueba de concepto 1
/*
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
  
  // Used like so
  let arr = cartas;
  shuffle(arr);
  console.log(arr);
  //__________________________

OPCIÓN 2

const cardArray = [1,2,3,4,5,6];
cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);
  
  */