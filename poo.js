//Ejemplo de cómo construir una clase

class Auto {
    // Constructor: se ejecuta cuando creamos un nuevo auto
    constructor(marca, modelo, color) {
        this.marca = marca; // Propiedad
        this.modelo = modelo; // Propiedad
        this.color = color; // Propiedad
        this.velocidad = 0; // Propiedad con valor inicial - incia apagado.
        this.encendido = false; // Propiedad con valor inicial - incia apagado.
    }

    // Métodos: las acciones que puede realizar el auto
    encender() {
        this.encendido = true; //cambiamos el estado del auto de apagado a encendido.
        console.log(`El ${this.marca} ${this.modelo} está encendido`); //encender es un método
    }

    acelerar(incremento) {
        if (this.encendido) { //solo ocurre está función si el auto está encendido. (si encendido es true)
            this.velocidad += incremento; //toma el valor de velocidad, por ej: velocidad = 20, y le sumamos el valor que definimos en el paréntesis. Ej: acelerar(30) => 20 + 30 = 50 km/h.
            console.log(`Velocidad actual: ${this.velocidad} km/h`); 
        } else {
            console.log("Primero debes encender el auto"); //si encendido es = false, nos lanza este mensaje.
        }
    }

    frenar() {
        this.velocidad = Math.max(0, this.velocidad - 10); //restamos -10 a la velocidad anteriormente guardad. Usamos Math.max para evitar una velocidad negativa. Compara los valores y escoge el más grande, evitando que la velocidad baje de 0.
        console.log(`Frenando... Velocidad: ${this.velocidad} km/h`);
    }
}

//poniendo en práctica nuestra clase.

const mazda = new Auto("Mazda", "CX-5", "Cherry"); // definimos nuestro nuevo objeto con propiedades específicas.

console.log(mazda.encender()); //cambiamos el valor de encendido a true. El Mazda CX-5 está encendido.

console.log(mazda.acelerar(17)); //asignamos una nueva velocidad. Velocidad actual: 17 km/h.

console.log(mazda.frenar()); //restamos 10 a la anterior velocidad. Frenando... Velocidad: 7 km/h.
//la operación que realizamos fue 17 - 10 = 7. 

const audi = new Auto("Audi", "Q7", "Gris"); // definimos nuevo auto

console.log(audi.acelerar(40)); // Primero debes encender el auto.

console.log(audi.encender()); //El Audi Q7 está encendido. :DD