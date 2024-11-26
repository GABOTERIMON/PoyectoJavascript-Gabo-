let boton=document.getElementById("boton");
boton.addEventListener("click",function(event){
    event.preventDefault();

    let nuevoid=document.createElement("div");
    nuevoid.innerHTML="boton creado";
    let resultado=document.getElementById("resultadodiv");
    resultado.appendChild(nuevoid);
    nuevoid.classList.add("borde-negro");
    let contenido=document.getElementById("botones");
    contenido.appendChild(nuevoid);
})