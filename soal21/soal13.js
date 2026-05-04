let harga = Number(prompt('Masukan harga makanan'))
let pajak = harga * 10/100
let fee = harga * 5/100
let bayar = harga + pajak + fee

console.log(`Harga makanan : ${harga}`)
console.log(`Pajak : ${pajak}`)
console.log(`Fee : ${fee}`)
console.log(` Harga bayar : ${bayar}`)