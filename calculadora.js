var n1="";
var n2="";
var op="";
var C="";

function pressNumero(){
        if ( n1 < 9) {
            n1 = parseInt(n1.toString().concat());
        }
        else{
            n1 = parseFloat(n1 * 1);
        }
        document.getElementById("visor").value = n1;
}

function clearText() {
    document.getElementById("visor").value = "";
}

/*
var x = 0;

function contar(){
    if (x < 5) {
        x = parseInt(x.toString().concat(1));
    } else {
        x = x * 2.33333;
    }
    document.getElementById("demo").innerHTML = x.toFixed(9-x.toString.length);
}

document.getElementsByTagName("div")[0].addEventListener("click", contar)

function pressNumero(num){
    if(n1 < 9){
        n1 = num.concat;
        console.log(n1);
        document.getElementById("visor").value = n1;
    }   else{
        document.getElementById("visor").value = n1;
    }
}
function pressOperador(){
    operador= pressOperador(pressdivide)
    console.log(operador);
    document.getElementById("visor").value = operador;
      */