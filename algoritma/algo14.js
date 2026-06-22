let nama = prompt("Masukkan nama karyawan")
let golongan = prompt("Masukkan golongan (a/b/c/d)")
let jam = Number(prompt("Masukkan total jam kerja seminggu:"))

let gajibiasa = 0;
let gajilembur = 3000;
let gaji = 0;
let lembur = 0;

if (golongan == "a") {
    gajibiasa = 4000;
} else if (golongan == "b") {
    gajibiasa = 5000;
} else if (golongan == "c") {
    gajibiasa = 6000;
} else if (golongan == "d") {
    gajibiasa = 7500;
} else {
    console.log("siapa ini?")
}

if (gajibiasa > 0) {
    if (jam > 48) {
        lembur = jam - 48;
        gaji = (48 * gajibiasa) + (lembur * gajilembur);
    } else {
        gaji = jam * gajibiasa;
    }
}

console.log("nama Karyawan " + nama)
console.log("golongan " + golongan)
console.log("total jam kerja " + jam + " jam")
console.log("total jam lembur " + lembur + " jam")
console.log("Total gaji " + gaji);