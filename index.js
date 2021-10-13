window.addEventListener("load",start,false);

var foto,destino,texto;

function start(){

    //DRAG eventos: dragstart, drag, dragend, dragenter, dragover, drop, dragleave
    //Objeto dataTransfer con metodos: setData(declara que datos seran transferidos) y getData(declara que datos serán manipulados)
    //Hay objeto que arrastrar y objeto de destino

    foto = document.getElementById("foto");
    texto = document.getElementById("texto");
    destino = document.getElementById("destino");

    foto.addEventListener("dragstart",dragStart,false);  //Se desencadena cuando pinchas y COMIENZAS a mover el raton
    foto.addEventListener("drag",drag,false);  //Se desencadena durante el MOVIMIENTO del objeto
    foto.addEventListener("dragend",dragEnd,false);  //Se desencadena cuando pinchas, mueves el raton y SUELTAS

    destino.addEventListener("dragenter",dragEnterDestino,false);
    destino.addEventListener("dragover",dragOverDestino,false);
    destino.addEventListener("drop",dropDestino,false);
}


function dragStart(e){
    texto.style.color = "blue";
    var codigo = "<img src='"+ foto.getAttribute("src")+"' width='150' height='300'>";
    e.dataTransfer.setData("Text",codigo);
}

function drag(e){
    texto.style.color = "red";
}

function dragEnd(e){
    texto.style.color = "green";
}

function dragEnterDestino(e){
    e.preventDefault();
}

function dragOverDestino(e){
    e.preventDefault();
}

function dropDestino(e){
    e.preventDefault();
    destino.innerHTML = e.dataTransfer.getData("Text");
}