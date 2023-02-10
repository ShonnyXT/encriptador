const ingresoArea = document.querySelector(".textarea1")
const salidaArea = document.querySelector(".textarea2")

//Botones del Encriptador
const boton = (x,y)=>{
    const mensajeEncriptado = encriptacion(ingresoArea.value,x,y)
    salidaArea.value = mensajeEncriptado
    ingresoArea.value = ""
}

//Encriptador de texto
const encriptacion = (mensaje,x,y)=>{
    let codigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]
    mensaje = mensaje.toLowerCase()

    for (i = 0; i < codigo.length; i++) {
        if(mensaje.includes(codigo[i][x])){
            mensaje = mensaje.replaceAll(codigo[i][x],codigo[i][y])
        }
    }
    return mensaje
}

//Boton para copiar al portapapeles
const copiar = ()=>{
    let copiar = document.querySelector(".copiar")
    copiar.addEventListener("click", function() {
        salidaArea.select();
        document.execCommand("copy");
    });
}