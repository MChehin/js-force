const guardarDatos = ()=> {
    //debugger
    localStorage.setItem("inputNombre", inputNombre.value)
    localStorage.setItem("inputTelefono", inputTelefono.value)
    localStorage.setItem("inputEmail", inputEmail.value)
}

const recuperarDatos = ()=> {
    //debugger
    inputNombre.value = localStorage.getItem("inputNombre")  
    inputTelefono.value = localStorage.getItem("inputTelefono")
    inputEmail.value = localStorage.getItem("inputEmail")
}

const limpiarLS = ()=> {
    const resp = confirm("¿Confirma que quiere eliminar los datos guardados?")
        if (resp) {
            localStorage.clear() 
            console.log("Los datos se eliminaron correctamente") 
        }  

}

btnSubmit.addEventListener("click",()=> guardarDatos())

recuperarDatos()