let jam = Number(prompt("Masukan total jam kerja :"))
let gajibiasa = 2000;
let gajilembur = 3000;
let gaji = 0;
let lembur = 0;

if ( jam > 48){
    lembur = jam - 48;
    gaji = (48 * gajibiasa) + (lembur * gajilembur)
} else {
    gaji = jam * gajibiasa
}

console.log("Total jam Kerja " + jam + " jam")
console.log("Total jam lembur " + lembur + " jam")
console.log("Total gaji " + gaji)