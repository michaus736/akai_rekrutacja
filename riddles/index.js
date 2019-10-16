// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(number) {
  var text = number.toString()
  var text1 = ""
  for (var i = 0; i < text.length; i++) {
    text1+=text[text.length-i-1]
    
  }

  return parseInt(text1)
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function addEven(array) {
  var sum=0
  array.map(item=>{
    if(item%2==0){
      sum+=item
    }
  })
  return sum
}

console.log("2.", addEven(tab));
