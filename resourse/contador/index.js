const btnIncrement = document.querySelector(".inc")
const btndismin = document.querySelector(".dis")
const btnReset = document.querySelector(".reset")
const botones = document.querySelector(".btn")
const contar = document.querySelector(".contar")

let counts = 0;
btnIncrement.addEventListener("click" , incrementar);
btndismin.addEventListener("click" , disminuir);
btnReset.addEventListener("click" , reset);

function incrementar(){
    counts++;
    contar.innerHTML = counts;
    if(counts>0){
        contar.getElementsByClassName.color = "green";
    }
    if(counts == 0){
        contar.getElementsByClassName.color = "black";
    }
}

function disminuir(){
    counts--;
    contar.innerHTML = counts;
    if(counts<0){
        contar.getElementsByClassName.color = "red";
    }
    if(counts == 0){
        contar.getElementsByClassName.color = "black";
    }
}


function reset(){
    counts = 0;
    contar.innerHTML = counts;
     contar.getElementsByClassName.color = "black";
}

