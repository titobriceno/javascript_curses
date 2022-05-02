// hay valores y tipos de datos que por defecto para el lenguaje de programación son falsos y verdaderos
// valores falsos

Boolean(0); // false
Boolean(false); //false
Boolean(); // false
Boolean(""); //false
// not a number NaN
Boolean(NaN); false
Boolean(undefined); false

// valores verdaderos en js
Boolean(true); //true
// cuando se tiene un valor mayor a cero entiende que es verdadero
Boolean(1);//true
// cuando en una cadena se tiene una cadena con un caracter lo comprende como un valor verdadero
Boolean("a");//true
// cuando tiene objeros y arrays los recionoce como un valor verdaderos al igual que con la function
Boolean([]);//true
Boolean({});//true
Boolean(function a (){});//true
