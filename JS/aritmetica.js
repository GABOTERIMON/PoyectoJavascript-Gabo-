function sumar() {
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadosuma=parseFloat(valor1)+parseFloat(valor2);
    if(valor1=="" || valor2==""){
        alert("El campo esta vacio");
    }
    else{
    resultadoTotal.innerHTML="el resultado es :" + resultadosuma;
    }
}
function multiplicación() {
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadosuma=parseFloat(valor1)*parseFloat(valor2);
    if(valor1=="" || valor2==""){
        alert("El campo esta vacio");
    }
    else{
    resultadoTotal.innerHTML="el resultado es :" + resultadosuma;
    }
}
function division() {
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadosuma=parseFloat(valor1)/parseFloat(valor2);
    if(valor1=="" || valor2==""){
        alert("El campo esta vacio");
    }
    else{
    resultadoTotal.innerHTML="el resultado es :" + resultadosuma;
    }
}
function resta() {
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadosuma=parseFloat(valor1)-parseFloat(valor2);
    if(valor1=="" || valor2==""){
        alert("El campo esta vacio");
    }
    else{
    resultadoTotal.innerHTML="el resultado es :" + resultadosuma;
    }
}