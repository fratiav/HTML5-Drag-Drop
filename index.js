window.addEventListener("load",start,false);

var foto,texto;

function start(){

    //DRAG eventos: dragstart, drag, dragend, dragenter, dragover, drop, dragleave
    //Objeto dataTransfer con metodos: setData(declara que datos seran transferidos) y getData(declara que datos serán manipulados)
    //Hay objeto que arrastrar y objeto de destino

    foto = document.getElementById("foto");
    texto = document.getElementById("texto");

    foto.addEventListener("dragstart",dragStart,false);  //Se desencadena cuando pinchas y COMIENZAS a mover el raton
    foto.addEventListener("drag",drag,false);  //Se desencadena durante el MOVIMIENTO del objeto
    foto.addEventListener("dragend",dragEnd,false);  //Se desencadena cuando pinchas, mueves el raton y SUELTAS
}


function dragStart(){
    texto.style.color = "blue";
}

function drag(){
    texto.style.color = "red";
}

function dragEnd(){
    texto.style.color = "green";
}