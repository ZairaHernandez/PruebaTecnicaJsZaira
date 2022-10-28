// 6. Create a function that receives 3 parameters,
// 2 of them in number format, and one of them an array string,
// it has to evaluate if today's date corresponds with the numbers
// in month and day, if so, print a greeting from the array,
// and if not, a message that it is not yet the birthday of the array.
//Ex: happyBirthDay(1,4,["happy birth day","Sorry but not is u Birth Day :C"])
//Extra if is in Typescript and Arrow
//Checamos si hoy es el cumpleaños
var felicitacionesHBD = (dia:number, mes:number, arreglo:string[]) => {
    //Obtenemos dia y mes
    const fecha = new Date();
    let diaFecha = fecha.getDate();
    let mesFecha = fecha.getMonth() + 1;

    //¿El día y el mes es igual al que recibimos?
    if (dia == diaFecha && mes == mesFecha) {
        console.log(arreglo[0]); 
    } else {
        console.log(arreglo[1]);
    }
}

felicitacionesHBD(2,10,["feliz cumpleaños","Lo siento pero no es tu cumpleaños :C"]);