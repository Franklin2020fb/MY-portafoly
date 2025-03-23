function contad(){
    setTimeout(function(){
        let valor = document.getElementById("contenedor");
        let respuesta = document.getElementById("resultado");
        let cantidad = valor.value.length
        respuesta.innerHTML = 'van ' + cantidad + ' caracteres '
    },0);
}