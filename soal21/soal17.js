let Hbarang = prompt('Masukan Total harga yang kamu beli🤗')
let Nilai = Number(Hbarang)

if (Nilai >=200000){
    let diskon = Hbarang * 7.5/100
    let hasil = Hbarang - diskon
    alert(`Harga yang harus di bayar adalah + diskon : ${hasil}`)
} else {
    alert(`total nya adalah : Rp ${Hbarang}`)
}