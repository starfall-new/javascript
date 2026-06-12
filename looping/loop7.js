let number = 0;
let text = "";
for (let i = 1; i <= 5; i += 2) {
    number += i;
    text += i + (i < 5 ? "+" : "");
}
console.log(text + "=" + number);