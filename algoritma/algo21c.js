let angkaBiasa = Number(prompt("Soal 7 - Masukkan bilangan bulat positif:"));
let angkaAsli = angkaBiasa;
let romawi = "";

let petaRomawi = [
    { nama: "M", nilai: 1000 }, { nama: "CM", nilai: 900 },
    { nama: "D", nilai: 500 },  { nama: "CD", nilai: 400 },
    { nama: "C", nilai: 100 },  { nama: "XC", nilai: 90 },
    { nama: "L", nilai: 50 },   { nama: "XL", nilai: 40 },
    { nama: "X", nilai: 10 },   { nama: "IX", nilai: 9 },
    { nama: "V", nilai: 5 },    { nama: "IV", nilai: 4 },
    { nama: "I", nilai: 1 }
];

if (angkaBiasa <= 0) {
    console.log("Angka harus lebih besar dari 0");
} else {
    for (let i = 0; i < petaRomawi.length; i++) {
        while (angkaBiasa >= petaRomawi[i].nilai) {
            romawi += petaRomawi[i].nama;
            angkaBiasa -= petaRomawi[i].nilai;
        }
    }
    console.log("Angka: " + angkaAsli + " -> Romawi: " + romawi);
}