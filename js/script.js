let num1 = 0;
let num2 = 0;

function inicio(){
    document.write( navegacion(), encabezado(), formulario(), piePagina());
}

function actualizar(){
    num1 = +document.getElementById("num1").value;
    num2 = +document.getElementById("num2").value;
}

function salir(){
    window.location.assign("index.html");
}

function suma(numero1,numero2){
    return numero1+numero2;
}

function calcular(){
    actualizar();
    document.getElementById('resultado').innerHTML=""+suma(num1,num2);
}

function formulario(){
    return    "<form>"
            + "     <input type='text' id='num1'> <input type='text' id='num2'><br>"
            + "     <input type='button' onclick='calcular();' value='Sumar'><br>" 
            + "     <p id='resultado'></p><br>" 
            + "     <input type='button' onclick='salir();' value='Salir'>"
            + "</form>";
}

function encabezado(){
    return    "<header>" 
            + "     <h1>Mini calculadora</h1>"
            + "     <h2>Realiza operaciones de suma, resta, multiplicación y división</h2>"
            + "     <p>Ingresa dos números y selecciona la operación que deseas entre estos.</p>"
            + "</header>";
}

function piePagina(){
    return    "<footer>" 
            + "     <p>Todos los derechos reservados || Julian A. Peña - 2023 </p>"
            + "</footer>";
}

function navegacion(){
    return    "<nav>" 
            + "     <a href=''>Inicio</a>"
            + "     <a href=''>Créditos</a>"
            + "</nav>";
}