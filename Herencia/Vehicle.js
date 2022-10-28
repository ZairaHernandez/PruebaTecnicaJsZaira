// 3. Construct a Vehicle class, that inherits the classes, "plane", "car", "Train", with the inherited methods run, stop, and action, the action method must change with the children,
// Ex: car drive, avion fly, train travel
class Vehicle {
    constructor(identificador) {
        this.identificador = identificador;
    }

    identifierVehicle() {
        return `El identificador de este vehiculo es ${this.identificador}`;
    }
    run() {
        return "El Vehiculo con arranca...";
    }

    stop() {
        return "El Vehiculo para...";
    }

    action() {
        return "El Vehiculo comienza...";
    }

    toString() {
        return `Identificador: ${this.identificador}`;
    }
}

class Plane extends Vehicle {
    constructor(identificador, modelo) {
        super(identificador)
        this.modelo = modelo;
        console.log("Clase avión...")
    }

    run() {
        return "El avión con modelo " + this.modelo + " arranca";
    }

    stop() {
        return "El avión con modelo " + this.modelo + " para";
    }

    action() {
        return "El avión con modelo " + this.modelo + " vuela";
    }

    showData() {
        return `${super.toString()} Modelo: ${this.modelo}`;
    }
}

class Car extends Vehicle {
    constructor(identificador, modelo) {
        super(identificador)
        this.modelo = modelo;
        console.log("Clase carro...")
    }

    run() {
        return "El carro con modelo " + this.modelo + " arranca";
    }

    stop() {
        return "El carro con modelo " + this.modelo + " para";
    }

    action() {
        return "El carro con modelo " + this.modelo + " va en la carretera";
    }

    showData() {
        return `${super.toString()} Modelo: ${this.modelo}`;
    }
}

class Train extends Vehicle {
    constructor(identificador, modelo) {
        super(identificador)
        this.modelo = modelo;
        console.log("Clase tren...")
    }

    run() {
        return "El tren con modelo " + this.modelo + " arranca";
    }

    stop() {
        return "El tren con modelo " + this.modelo + " para";
    }

    action() {
        return "El tren con modelo " + this.modelo + " va por las vías";
    }

    showData() {
        return `${super.toString()} Modelo: ${this.modelo}`;
    }
}


const vehiculo = new Vehicle("S150");
avion1 = new Plane("S190", "MODELOAVION");  
console.log(avion1.run());
console.log(avion1.stop());
console.log(avion1.action());
console.log(avion1.identifierVehicle());
console.log(avion1.showData());

//-------CARRO--------------
carro1 = new Car("S180", "MODELOCARRO");
console.log(carro1.run());
console.log(carro1.stop());
console.log(carro1.action());
console.log(carro1.identifierVehicle());
console.log(carro1.showData());

//-----Tren-------
tren1 = new Train("S170", "MODELOTREN");
console.log(tren1.run());
console.log(tren1.stop());
console.log(tren1.action());
console.log(tren1.identifierVehicle());
console.log(tren1.showData());
