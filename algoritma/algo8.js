let tinggibadan = Number(prompt("Masukan tinggi badan anda"))

let badan = tinggibadan - 100;
let badan2=  badan - (badan * (10 / 100));

console.log("Jadi berat badan ideal anda adalah " + badan2 + " kg")