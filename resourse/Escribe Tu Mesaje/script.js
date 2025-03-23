function mostrarValor(){
const valorInput = document.getElementById("inputValue").value;
const valorMostrado = document.getElementById("valorregreso");
const valorBlanco = document.getElementById("valorBlanco");

if(valorInput===""){
    valorBlanco.style.display= "block";
    setInterval(()=>{
        valorBlanco.style.display= "none";
    },5000);
}else{

    valorMostrado.textContent = valorInput;
}
}
