let bulan = Number(prompt("Masukan angka bulan"))

if ( bulan == 1 || bulan == 3 || bulan == 5 || bulan == 7 || bulan == 8 || bulan == 10 || bulan == 12){
    console.log(" total harinya adalah 31")
} else if ( bulan == 4 || bulan == 6 || bulan == 9 || bulan == 11){
    console.log(" total harinya adalah 30")
} else if ( bulan == 2){
    console.log("total harinya adalah 29 klo bkn kabisat 28")
} else {
    console.log("bulan sampai 12 aja")
}