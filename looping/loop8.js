let number = 0;
let text = "";
for (let i = 2; i <= 10; i += 2) {
    number += i;
    text += i + (i < 10 ? "+" : "");
}
console.log(text + "=" + number);