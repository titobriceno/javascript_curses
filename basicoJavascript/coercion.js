// coerción implicita
// el mas (+) lo toma como concatenar
var a = 2 + "3";
// a = 23
typeof(a);//String

// con el operador de multiplicación genera un número
var b = 2 * "7";
// 14
typeof(b);
number

// esto se debe a que javaScrip interpreta que la operación que se queria realizar era una multiplicación


// coerción explicita
// la coercion usa metodos para obligar cambiar el tipo de dato
 var c = String(27);
 typeof(c); // number

 var d = number("23");
 typeof(d); // String

//  se raliaza mediante metodos que permite cambiar el tipo de dato
