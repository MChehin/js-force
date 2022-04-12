// VARIABLES INDEX //
const marcasMotos = [" ", "YAMAHA", "SUZUKI", "HONDA", "DUCATI", "KAWASAKI", "BMW"]
console.table (marcasMotos)
const articulos = ["YAMAHA 125", "SUZUKI GS 750", "HONDA CBX 1050", "DUCATI 1098", "KAWASAKI NINJA 400", "BMW GS 650"]




// Main.js //
const modelos = ["YAMAHA 125 - USD 5000", "SUZUKI GS 750 - USD 7000", "HONDA CBX 1050 - USD 25000", "DUCATI 1098 - USD 5000", "KAWASAKI NINJA 400 - USD 15000", "BMW GS 650 - USD 9500"]
const carrito = JSON.parse(localStorage.getItem('carrito')) || []

const titulo = document.getElementById("titulo")

const ul = document.getElementById("listadoMotos") 
const listadoCarrito = document.getElementById("listadoCarrito") 

const btnCarrito = document.querySelector ("#btnCarrito")
const li = document.querySelectorAll ("li.carrito-item")


//----------------------------------array Stock----------------------------------------------------------//
const inputFiltrar = document.querySelector("#filtrar")
const tbody = document.querySelector("tbody")
let arrayStock = ""

const URL = "js/force.json"





//----------------------------------------------------VARIABLES FORM----------------------------------------------------------------//

const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputTelefono")
const inputEmail = document.querySelector("#inputEmail")
const btnSubmit = document.querySelector("#submit")
 
let datosDeInput = ""

//-----Alertas Form -----//

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

//const URL = `${window.location.origin}/js/objetos.js`

const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")