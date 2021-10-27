import SomeClass from "./files/SomeClass.js";
import { print, sayHello } from "./files/functions.js";
import { PI, dataObject } from "./files/data.js";

// Benutze importierte Klasse
const object = new SomeClass('Hello');

// Benutze importierte Funktionen
print(object);
sayHello('World')

// Benutze importierte Daten
console.log(PI);
console.log(dataObject.name);