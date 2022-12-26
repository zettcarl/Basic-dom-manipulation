var yo;
var pendejo;
var a = "perdiste, gafo";
var b = "ganaste, aunque no deberías."

if (yo == "piedra" && pendejo == "papel"){
    console.log(b)
}
else if (yo =="piedra" && pendejo == "tijera"){
    console.log(a)
} 
else if (yo == "papel" && pendejo == "tijera"){
    console.log(a)
}
else if(yo == "papel" && pendejo == "piedra"){
    console.log(b)
}
else if(yo === pendejo){
    console.log("empate, desenpata.")
}
else{
    console.log("esto no es para hacer bromas.")
}


var article ="cable";
function solution(article){
    switch(article){
      case "cable":
        console.log("¡Hay un cable en mi bota!");
        break;
      case "computadora":
        console.log("Con mi computadora puedo programar usando JavaScript");
        break;
        case "celular":
            console.log("En mi celular puedo aprender usando la app de Platzi");
            break;
      default:
        console.log("Artículo no encontrado")    
};
};

if (solution[0] == String){
    return true;
}
else{
    return false
}




var estudiantes = ["nico", "zule"];
var deathConut = 2;
var nuevo = "santi";
var solution = [estudiantes, deathConut, nuevo];


    if(deathConut == 0){
        estudiantes.push(nuevo)
    }
else {
    for(var i = 0; i < deathConut; i++){
       estudiantes.pop(estudiantes[estudiantes.length - 1])
    };
    estudiantes.push(nuevo)

}



var color;
var brand;
var licensePlate;
var drivingLicense;

function car(color, brand, licensePlate, drivingLicense ){
    this.color = color;
    this.brand = brand;
    this.licensePlate =licensePlate;
    this.drivingLicense =drivingLicense;
}
var newCar = new car("red", "kia");
var newCar2 = new car("gray", "chevrolet", "AAA111");

if(licensePlate == undefined)
{
    drivingLicense = false;
}
else{
    drivingLicense = true
}


var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
