// function changeColor = () => {
//     const updatedleftColor = document.getElementById("left-color");
//     const updatedrightColor = document.getElementById("right-color");
//     const leftcolorValue = document.getElementById("leftcolorValue");
//     const rightcolorValue = document.getElementById("rightcolorValue");
//     let body = document.querySelector("body");
//     body.style.background = `linear-gradient(to right, ${updatedleftColor.value}, ${updatedrightColor.value})`;
//     rightcolorValue.innerText = updatedrightColor.value;
//     leftcolorValue.innerText = updatedleftColor.value;
// }

const leftInput = document.getElementById("left-color");
const rightInput = document.getElementById("right-color");

leftInput.addEventListener("input", function () {
    const updatedleftColor = document.getElementById("left-color");
    const updatedrightColor = document.getElementById("right-color");
    const leftcolorValue = document.getElementById("leftcolorValue");
    const rightcolorValue = document.getElementById("rightcolorValue");
    let body = document.querySelector("body");
    body.style.background = `linear-gradient(to right, ${updatedleftColor.value}, ${updatedrightColor.value})`;
    rightcolorValue.innerText = updatedrightColor.value;
    leftcolorValue.innerText = updatedleftColor.value;
});
rightInput.addEventListener("input", function () {
    const updatedleftColor = document.getElementById("left-color");
    const updatedrightColor = document.getElementById("right-color");
    const leftcolorValue = document.getElementById("leftcolorValue");
    const rightcolorValue = document.getElementById("rightcolorValue");
    let body = document.querySelector("body");
    body.style.background = `linear-gradient(to right, ${updatedleftColor.value}, ${updatedrightColor.value})`;
    rightcolorValue.innerText = updatedrightColor.value;
    leftcolorValue.innerText = updatedleftColor.value;
});