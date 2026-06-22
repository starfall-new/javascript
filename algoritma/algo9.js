let x = Number(prompt("Masukan nilai X"))
let y = Number(prompt("Masukan nilai Y"))

let kuadran;

if ( x > 0 && y > 0){
    kuadran = "kuadran 1"
} else if ( x < 0 && y > 0){
    kuadran = "kuadran 2"
} else if ( x < 0 && y < 0){
    kuadran = "kuadran 3"
} else if ( x > 0 && y < 0){
    kuadran = "kuadran 4"
} else {
    kuadran = "Kondisi tidak terpenuhi"
}

console.log(kuadran)