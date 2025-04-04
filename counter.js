let num = 0;
console.log("Set A Number")
console.log("Original Number = ", num)
function setNum(param_num) {
    num = param_num;
    console.log(param_num);
}

function increaseNumberBy1() {
     num = num + 1;
    console.log("Current Number = ", num)
}

function increaseNum(x) {
     num = num + x;
    console.log("Current Number =", num)
}

function decreaseNumberBy1()  {
    num = num - 1;
    console.log("Current Number =", num)
}

function decreaseNum(x) {
    num = num - x;
    console.log("Current Number =", num)
}

function isEven (x) {
    if (x % 2 === 0 ) {
        return true

    } else{
        return false
    }
}

function resetNum() {
    num = 0;
}
function updateDisplay(){
    document.getElementById("setNum").textContent = num;
}