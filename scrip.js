var nombre= "salome";
console.log (salome);

let apellido= "Lavalle";
console.log (apellido);

const curso= "5 1";
console.log (curso);

function suma (num1, num2){
    var sumar= num1 + num2;
    return sumar;
}

var num1= 2;
var num2= 4;
var sumar= suma(num1, num2);
console.log (suma(num1,num2));

function multiplicacion (num1,num2){
    let multi= num1*num2;
 return multi;
 }
 var num1= 3;
 var num2= 6;
 let multi= multiplicacion (num1,num2);
 console.log(multiplicacion(num1,num2));

 function resta (num1, num2){
    let rest = num1-num2;
    return rest;
}

var num1= 6;
var num2= 10;
let res= resta(num1, num2);
console.log (resta(num1,num2));

function division (num1, num2){
    var div= num1/num2;
    return div;
}
var num1= 6;
var num2= 9;
let div= division(num1, num2);
console.log (division(num1,num2));
let array =["12","15","3"];
for (x=0; x<3;x++){
 console.log(array[x]);
}

//#region 
var nombre= "salome";
let apellido = 'apellido';
const curso = `5° 1°`;
var num1= 2;
var num2= 4;
var sumar= suma(num1, num2);
var num1= 3;
var num2= 6;
let multi1= multiplicacion (num1,num2);
var num1= 4;
var num2= 8;
let res1= resta(num1, num2);
var num1= 8;
var num2= 2;
let div1= division(num1, num2);
//#endregion

//#region 
console.log (nombre);
console.log (apellido);
console.log (curso);
console.log (suma(num1,num2));
console.log(multiplicacion(num1,num2));
console.log (resta(num1,num2));
console.log (division(num1,num2));
console.log(array[x]);
//#endregion

//#region 
function suma (num1, num2){
    var sum= num1 + num2;
    return sum;
}
function multiplicacion (num1,num2){
    let multi= num1*num2;
 return multi;
}
function resta (num1, num2){
    let rest = num1-num2;
    return rest;
}
function division (num1, num2){
    var divi= num1/num2;
    return divi;
}
//#endregion

