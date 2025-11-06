const Generator = document.getElementById("Generator"); //Generate button
const Reset = document.getElementById("ResetGen"); //Reset Button
const nomer = document.getElementById("nomer"); // label

let text = 0;
let randomNum;

Generator.onclick = function(){
    const Min = Number(document.getElementById("minnumber").value);
    const Max = Number(document.getElementById("maxnumber").value);
    randomNum = Math.floor(Math.random() * (Max-Min)) + Min;
    nomer.textContent = randomNum
    if( Min > Max){
        nomer.textContent = "Invalid Values"}
}

Reset.onclick=function(){
    text = 0;
    nomer.textContent = text
}