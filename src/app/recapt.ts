import { NgIfContext } from "@angular/common";

// Declarar Variables en TypeScript
const username: string = 'Laura';

// Funcion
const sum = (a: number, b: number) => {
    return a + b;
}

sum(1,2);


// Patrón Orientado a Objetos
class Person {

    // CONSTRUCTOR
    // Recibe e Inicializa los Parametros
    constructor(public age: number, public lastName: string) {
    }
}

const laura = new Person(18, 'Valentina');
laura.age;