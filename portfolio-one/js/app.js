let inputNum = document.getElementById("inputNumber");
let outputBinary = document.getElementById("outputBinary");
let submitBtn = document.getElementById("submitBtn");
let changeText = document.getElementById("change");
let changeColor = document.getElementById("changeColor");
let bgHed = document.getElementById("colorBox");
let copyCode = document.getElementById("copyCode");


submitBtn.addEventListener('click', function cnvtBinary(e) {
    e.preventDefault();

    if (inputNum.value === '') {
        alert("Please inter valid number")
    } else if (inputNum.value === NaN) {
        alert('hello')
    }

    let num = inputNum.value;
    let finalCnvt = Number(num).toString(2);
    outputBinary.style.visibility = "visible";

    outputBinary.innerText = finalCnvt;
});


function generateRGBHex() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let rgbColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    console.log(rgbColor);
    bgHed.style.backgroundColor = rgbColor;

}


changeColor.addEventListener('click', generateRGBHex);