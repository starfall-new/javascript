let jam = Number(prompt("masukan Berapa jam proyek Tersebut dikerjakan"))
let hari = jam / 24;
let bulan = hari / 30;
let tahun = bulan / 12;

if ( bulan >= 12){
    console.log("Total tahun nya " + Math.floor(tahun) + " Tahun ")
} else if ( hari >= 30){
    console.log("Total bulan nya " + Math.floor(bulan) + " Bulan ")
} else if ( jam >= 24){
    console.log("Total Hari nya " + Math.floor(hari) + " Hari ")
} else if ( jam <= 24){
    console.log("Total jam nya " + Math.floor(jam) + " jam ")
} else {
    console.log("null")
}