var n1 = undefined;
function press(num){
    document.form.visor.value = document.form.visor.value+num;
}
function igual(){
    n1 = document.form.visor.value;
    if(n1){
        document.form.visor.value = eval(n1);
    }
}
function clearText() {
    document.form.visor.value = "";
}