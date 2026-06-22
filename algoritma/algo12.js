let tahun = Number(prompt("Masukkan tahun masehi "))

if ((tahun % 4 == 0 && tahun % 100 != 0) || (tahun % 400 == 0)) {
    console.log(tahun + " ini tahun kabisat (29 februari)")
} else {
    console.log(tahun + " sanes tahun kabisat (28 februari)")
}