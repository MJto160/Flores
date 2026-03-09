onload = () =>{
    document.body.classList.remove("container");
};

const frases = [
"Eres una mujer increíble 💜",
"Gracias por ser inspiración ✨",
"Eres capaz de lograr todo lo que sueñas 🌟",
"Sabes que te quiero mucho💐",
"Hoy celebramos tu grandeza 🌸",
"Gracias por ser la mujer que eres.🌸",
"TE QUIERO FER 🌸"
];

let indice = 0;

const flores = document.querySelector(".flowers");
const mensaje = document.getElementById("mensaje");
const texto = document.getElementById("textoMensaje");

flores.addEventListener("click", function(e){

e.stopPropagation();

texto.innerText = frases[indice];

mensaje.style.display = "flex";

indice++;

if(indice >= frases.length){
indice = 0;
}

});

mensaje.addEventListener("click", function(){
mensaje.style.display = "none";
});