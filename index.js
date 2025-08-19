// 1 forma de crear objetos.
const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
};

//crear un molde para representar cualquier tipo de persona

class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this._passwordpassword = "12345"; //propiedad oculta
    }

    hablar() {
    console.log(`Hola, soy ${this.nombre} y yo soy ${this.profesion}.`);
    }

    get password() {
        return this._password;
    }

    set edad(edad) {
        if (edad > 0){
            this._edad = edad;
        } else {
            console.log('Edad no valida');
        }
    }
}

//constructor nos permite crear las

const laura = new Persona("Laura", 18, "Diseñadora :3"); //ingreso las características que corresponden al objeto.
const camila = new Persona ("Camila", 28, "Arquitecta");
console.log(laura.nombre);
console.log(laura.hablar());


//instanciar = se refiere a que a partir de un molde creo un elemento específico de ese tipo.
//clases generan objetos.

//se usan las clases para estandarizar la creación de objetos. Todos los objetos dentro de mi aplicación que sean personas siempre tendrán las mismas características.

//trabajar en moldes significa que todos los objetos (personas) tendrán las mismas propiedades.

//this sirve para guardar dentro del contexto constructor las propiedades.

/*Getters y Setters: 

Gettters: Cómo puedo obtener una información.
Setters: Cómo cambiar/modificar una información.

atributos que consideramos privados this._valor.

*/

//Herencia: se pueden extender y declarar nuevas características en una nueva varianble.
//Lo ideal es agregar atributos de una sola clase.
//super hace referencia a la super clase (clase que hereda), ejecuta el constructor de Persona.

//Polimorfismo = múltiples formas de hacer algo.

