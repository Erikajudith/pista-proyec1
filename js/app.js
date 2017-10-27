var tesArray= [];
//agregar 10 elemntos a mi array
for(var i= 0; i <= 10; i+=1){
  tesArray.push(i);
}
console.log(tesArray);
//eliminar primer elemento
tesArray.shift();
console.log(tesArray);
//eliminar ultimo elemento
tesArray.pop();
console.log(tesArray);
//revertir el orden del array, los indices no combian de lugar
tesArray.reverse();
console.log(tesArray);
//metodos de sprint
//como obtengo un carecte de un string
var testString = "abcde";
testScring.CharAt(2);
/*pa obtener un caracter a partir su codigo Ascii ulilizo el metodo Script.formCharCode*/
var codigo = testString.charCodeAr(2);
console.log(codigo);
