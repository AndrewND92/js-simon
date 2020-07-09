// alert(arrayNum);
var arrayNum = [];
var numUtente=[];


while(arrayNum.length < 5){
  var randomNum = generatoreNum();
  var isIncluded = arrayNum.includes(randomNum);

  if( isIncluded == false ) {
  		arrayNum.push(randomNum);
  }

}
console.log(arrayNum);

alert(arrayNum);


setTimeout(questions, 3000);
function questions() {
  prompt("inserisci i numeri che hai visto prima");



}










function generatoreNum() {
  var n = Math.floor(Math.random() * 10)+1;
  return n;
}
