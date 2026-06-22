let tanggal1 = Number(prompt("Masukkan tanggal pertama:"));
let bulan1 = Number(prompt("Masukkan bulan pertama:"));
let tahun1 = Number(prompt("Masukkan tahun pertama:"));

let tanggal2 = Number(prompt("Masukkan tanggal Kedua:"));
let bulan2 = Number(prompt("Masukkan bulan Kedua:"));
let tahun2 = Number(prompt("Masukkan tahun Kedua:"));

let total1 = ( tahun1 * 365) + ( bulan1 * 30) + tanggal1
let total2 = ( tahun2 * 365) + ( bulan2 * 30) + tanggal2

let selisih = Math.abs(total1 - total2)

let tahun = Math.floor( selisih / 365 );
let sisahari = selisih % 365;
let bulan = Math.floor( sisahari / 30 );
let hari = sisahari % 30;

console.log("Jaraknya adalah: " + tahun + " tahun, " + bulan + " bulan, " + hari + " hari.");