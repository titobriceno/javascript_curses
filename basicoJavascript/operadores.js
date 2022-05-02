// operadores de operación, tambien llamados operadores binarios, llamados de esta manera por que operan 2 valores
var a = 2 + 3 ; // 5
var b = 2 -1 ;// 1
var c = 3 * 4; //12
var d = 5 / 2; //2.5
var e = 4 % 2; //1

// algunos operadores de estos alteran los string

var f = "tito" + "Ana"; //titoAna
var j = "tito" * 3; //Nan

// operadores unitarios, estos trabajan con un solo valor
// este valor es de negación para cambiar el valor de un booleano
!false // true 

// operadores de asignación
var i = 1; // el igual es un valor de asifnación

// operadores comparación
 1 == "1"; //esto es verdadero ya que no toma en cuenta el tipo de dato si no solo el valor
 1 === "1" // da falso por que aunque son el mismo valor son  de distinto tipo de dato
 1 >= 2; 
 1 <= 2;


// operadores para validar 2 valores
//  el operador y el cual toma en cuenta que ambos valores sean verdaderos.
a && b; //compara que los 2 datos sean verdaderos 

// ejemplos
var val1 = true;
var val2 = true;
val1 && val2;// true

var val1 = true;
var val2 = false;
val1 && val2; // false

var val1 = false;
var val2 = false;
val1 && val2; // false


//  el operador o
// alguno de los valores tiene que se verdadero
var val1 = true;
var val2 = false;
val1 || val2; // true

var val1 = false;
var val2 = false;
val1 || val2; // false


a || b;// compara si uno de los 2 valores es verdadero

// operadores autoincrementación
var l = 1;
l ++; // incrementa en 1

l+= 2; // incrementa 2

var z = 1;
var hg = z += 1; //undefined da por que se la z tubo hositing al estar dentro de una variable.
console.log(hg);// 2
