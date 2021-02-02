// Falsy Values:
// 0
// ""
// undefined
// null
// NaN

//Truthy Values:
// "0", " ", [], {}

let name = 12;
if(name || name == 0){
    console.log("Condition is true");
}
else{
    console.log("Condition is False");
}