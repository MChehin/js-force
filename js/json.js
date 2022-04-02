const saveDatos = ()=> {
    //debugger
    const datosForm = {inputNombre:"", inputTelefono:0, inputEmail:""}
    datosForm.inputNombre = inputNombre.value 
    datosForm.inputTelefono = inputTelefono.value 
    datosForm.inputEmail = inputEmail.value
    localStorage.setItem("datosDelForm", JSON.stringify(datosForm))  
    console.info("Se almacenó el array en LocalStorage")
}

btnSubmit.addEventListener("click", saveDatos)

const obtenerDatos = ()=> {
    //debugger
    if (localStorage.getItem("datosDelForm") !=null) {
        datosDelForm =JSON.parse(localStorage.getItem('datosDelForm'))
        inputNombre.value = datosDelForm.inputNombre
        inputTelefono.value = datosDelForm.inputTelefono
        inputEmail.value = datosDelForm.inputEmail
    }

    JSON.stringify(localStorage.getItem('datosDelForm'))

}

obtenerDatos()


