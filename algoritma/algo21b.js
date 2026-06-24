let belanja = Number(prompt("Masukkan total belanja"));

let sisapecahan = belanja % 25;
let belanja1 = belanja - sisapecahan;

console.log("Total asli  : Rp" + belanja);
console.log("Pembulatan  : Rp" + belanja1);