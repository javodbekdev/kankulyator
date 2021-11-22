function oka(){
    var ekran = document.getElementById("ekran").value;
    document.getElementById("ekran").value = ekran.slice(0,ekran.length-1)
}
function c(){
    var ekran = document.getElementById("ekran").value;
    document.getElementById("ekran").value = ekran.slice(0,ekran.length-500)
}
var ekran = document.getElementById("ekran");
var amal = "";
var son1 = 0;
var son2 = 0;
var javob = 0;

function son(a){
    var b = a;
    var d = "";
    d += b;
    ekran.value += d;
    console.log(ekran);
}
function c() {
    ekran.value = ""
}
function amal_func(b) {
    son1 = ekran.value * 1;
    amal = b;
    c();
    console.log(son1);
    console.log(amal);
}

    function teng() {
    son2 = ekran.value * 1;

    switch (amal) {
        case "-":
            javob = son1 - son2;
            break;
        case "+":
            javob = son1 + son2;

            break;
        case "/":
            javob = son1 / son2;

            break;
        case "*":
            javob = son1 * son2;
            break;

        default:
            break;
    }

    ekran.value = javob;
    console.log(javob);
}
