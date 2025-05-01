(function(){
    "use strict"
    let declaracion = 12;
    if(declaracion === undefined){
        console.log("La declaracion es undefined");
    }else{
        console.log("La declaracion no es undefined");
    }
    if(true){
        var numero =2;
        console.log(numero);
    }
    console.log(numero);
    let age = "20.5 Años";
    console.log(parseInt(age));   
    console.log(parseFloat(age));

    const numeros = [2,4,6,8,10];
    const numerosCubicos = numeros.map(numero => numero*numero*numero)
    console.log(numerosCubicos);
    console.log(numeros);

    //Obtener el mayor elemento del arreglo


    const max = numerosCubicos.reduce((acumulador, numeroActual) => {
        return acumulador > numeroActual ? acumulador : numeroActual;
    });
    console.log(max);

    //ARRAYS
    const numerosStrings = ["UNO" , "DOS" , "TRES"];
    console.log(numerosStrings);
    console.log(numerosStrings[2]);
    console.log(numerosStrings.length);
    console.log(typeof numerosStrings)
    numerosStrings.push("CUATRO");
    console.log(numerosStrings);
    numerosStrings.unshift("CERO");
    console.log(numerosStrings);
    console.log(numerosStrings);
    console.log(numerosStrings.length);
    const primerBorrado = numerosStrings.shift();
    console.log(primerBorrado);
    console.log(numerosStrings);
    const segundoBorrado = numerosStrings.pop();
    console.log(segundoBorrado);
    console.log(numerosStrings);
    for(let i = 0; i < numerosStrings.length; i++){
        console.log(numerosStrings[i]);
    }
    // Objetos:
    let JavierObj = {
        nombre: "Javier",
        apellido: "Jaguaco",
        edad: 21,
        altura: 1.64,
        carrera : "Ingenieria en Software",
    }
    //acceder a los datos: 
    let edad = JavierObj.edad;
    console.log(edad);
    console.log(JavierObj);
    JavierObj.edad = 20;
    console.log(JavierObj);
    JavierObj.comidaFav = "Pollo";
    console.log(JavierObj.comidaFav);
    console.log(JavierObj);
    delete JavierObj.apellido;
    console.log(JavierObj.apellido);
    console.log(JavierObj);
    for (let key in JavierObj) {
        console.log(JavierObj[key]);
    }
})();
(function(){
    "use strict"
    //COMBINACIONE DE OBJETOS Y ARRAY
    //Creacion de Array de objetos
    const arrayObjetos = [
        {
            nombre: "Javier",
            apellido: "Jaguaco",
            edad: 21,
            altura: 1.64,
            carrera : "Ingenieria en Software",
        },
        {
            nombre: "Juan",
            apellido: "Perez",
            edad: 30,
            altura: 1.56,
            carrera : "Ingenieria Civil",
        },
        {
            nombre: "Maria",
            apellido: "Garcia",
            edad: 25,
            altura: 1.89,
            carrera : "Ingenieria Mecatronica",
        }
    ];
    for (let i = 0; i < arrayObjetos.length; i++) {
        console.log(arrayObjetos[i]);
    }
    console.log(arrayObjetos[2].altura);

    //objetos con arrays como llaves
    let persona = {
        nombre: "Javier",
        edad : 25,
        hobbies : ["Programar", "Jugar videojuegos", "Jugar futbol"],
    }
    console.log(persona);
    console.log(persona.hobbies)
    for (let i = 0; i < persona.hobbies.length; i++) {
        console.log(persona.hobbies[i] +" "+ i);
    }
    console.log(persona.hobbies[0]);
})();