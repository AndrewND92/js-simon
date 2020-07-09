// alert("hey");
var arrayNum = [];

while(arrayNum.length < 5){
  var randomNum = generatoreNum();
  var isIncluded = arrayNum.includes(randomNum);

  if( isIncluded == false ) {
  		arrayNum.push(randomNum);
  }

}
console.log(arrayNum);














function generatoreNum() {
  var n = Math.floor(Math.random() * 10)+1;
  return n;
}
