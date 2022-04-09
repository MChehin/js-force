const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputTelefono")
const inputEmail = document.querySelector("#inputEmail")
const btnSubmit = document.querySelector("#submit")
 
let datosDeInput = ""

//-----Alertas-----//

Swal.fire({title: 'Gracias por visitarnos', position: 'top-center', background: '#000', color: '#fff', confirmButtonText: 'FORCE', confirmButtonColor: '#6b3923', timer: 1300, width: '30%',})


btnSubmit.addEventListener("click", ()=> {
  const result = (inputNombre.value != "" && inputTelefono.value != "" && inputEmail.value != "")
  if (result) { 
    const Toast = Swal.mixin({toast: true, result: true, position: 'center', showConfirmButton: false, timer: 3000, timerProgressBar: true, iconColor: '#6b3923', background: '#000', color: '#fff',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({icon: 'success',title: 'Envío exitoso'})
}
})

// Info Clientes // 
//const clientes = [{inputNombre: "Maria", inputEmail: "maria1@gmail.com", inputTelefono:"011"}]
  //                [{inputNombre: "Galilea", inputEmail: "gali@gmail.com", inputTelefono:"025"}]
                
const clientes = {
                    nombre: "Maria",
                    email: "maria1@gmail.com",
                    telefono: 123456
                }


function mostrarInfoClientes(clientes) {
  debugger
  const buscar = prompt("Cliente a buscar:")
  const resultado = clientes.find(c => c.nombre == buscar)
  const { nombre, email, telefono } = resultado
  alert(`La información de ${nombre} es ${email} y ${telefono}`)
}

const URL = `${window.location.origin}/js/json.js`

const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")