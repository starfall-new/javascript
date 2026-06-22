let cm = Number(prompt("Masukan jarak tempuh anda"))

let kilometer = Math.floor(cm / 100000);
cm = cm % 100000

let meter = Math.floor(cm / 100);
cm = cm % 100

let cm2 = Math.floor(cm / 1);
cm = cm % 1

console.log(kilometer + " Kilometer")
console.log(meter + " Meter")
console.log(cm2 + " Cm")