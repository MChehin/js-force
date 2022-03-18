
btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Completá tus datos antes de presionar ENVIAR"
})
 
document.addEventListener("submit", (event)=> {
    event.preventDefault()
    alert("¡Envío exitoso! Te contactaremos a la brevedad")
})
 

inputNombre.addEventListener("keyup", (event)=> {
    datosDeInput = event.target.value
    console.log(datosDeInput)
})
 
inputNombre.addEventListener("keypress", (event)=> {
    if (event.keyCode == 13) { 
        inputTelefono.focus()
    }
})

