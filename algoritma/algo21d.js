let pixel = Number(prompt("Masukkan nilai hasil operasi pixel"));
let pixel1 = pixel;

if (pixel > 255) {
    pixel = 255;
} else if (pixel < 0) {
    pixel = 0;
}

console.log("Pixel Awal: " + pixel1 + " -> Setelah Clipping: " + pixel);