// Variables que selecciona los TextAreas de texto-procesar y mensaje-mostrar
var textoProcesar = document.querySelector(".input-texto-procesar");
var mensajeMostrar = document.querySelector(".input-mensaje-mostrar");

// Las "llaves" de encriptación son las siguientes:
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

// Matriz que contiene las llaves de encriptacion, con las vocales que se convertiran, y el texto que se mostrara en su lugar
var matrizLlaves = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
 
//Funcion al clickear en el boton encriptar, Obtiene el evento onClick
function Encriptar(){
    var texto = Encriptacion(textoProcesar.value);
    mensajeMostrar.value = texto;
    mensajeMostrar.style.backgroundImage ="none";
    textoProcesar.value = "";
    Ocultar();
}

//Funcion al clickear en el boton desencriptar
function Desencriptar(){
    var texto = Desencriptacion(textoProcesar.value);
    mensajeMostrar.value = texto;
    mensajeMostrar.style.backgroundImage ="none";
    textoProcesar.value = "";
    Ocultar();
}

//Funcion al clickear el boton copiar
function Copiar(){
    mensajeMostrar.select();
    navigator.clipboard.writeText(mensajeMostrar.value);
    mensajeMostrar.value = "";
    Mostrar();
}

//Funcion para encriptar el mensaje
function Encriptacion(mensajeEncriptar){
    mensajeEncriptar = mensajeEncriptar.toLowerCase(); // Convertir los caracteres a minusculas

    for(var i=0; i < matrizLlaves.length; i++)
    {
        if(mensajeEncriptar.includes(matrizLlaves[i][0])) // propiedad de js para ver si incluye 
        {
            mensajeEncriptar = mensajeEncriptar.replaceAll(matrizLlaves[i][0], matrizLlaves[i][1]);
        }
    }
    return mensajeEncriptar;
}

//Funcion para desencriptar un mensaje ya encriptado
function Desencriptacion(mensajeDesencriptar){
    mensajeDesencriptar = mensajeDesencriptar.toLowerCase();

    for(var i=0; i<matrizLlaves.length; i++)
    {
        if(mensajeDesencriptar.includes(matrizLlaves[i][1]))
        {
            mensajeDesencriptar = mensajeDesencriptar.replaceAll(matrizLlaves[i][1], matrizLlaves[i][0])
        }
    }
    return mensajeDesencriptar;
}

//Funcion para ocultar los textos de la pantalla de resultados y mostrar el boton Copiar
function Ocultar()
{
    document.querySelector(".boton-copiar").style.display = "inline-block";
    document.querySelector(".no-resultados").style.display = "none";
    document.querySelector(".texto-pantalla").style.display = "none";
}

//Funcion para mostrar los textos de la pantalla de resultados de nuevo y ocultar el boton Copiar
function Mostrar()
{
    document.querySelector(".boton-copiar").style.display = "none";
    document.querySelector(".no-resultados").style.display = "block";
    document.querySelector(".texto-pantalla").style.display = "block";
}