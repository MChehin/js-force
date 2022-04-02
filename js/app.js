   function verMarcas() {
    for (let i = 0; i < marcasMotos.length; i++) { 
    console.log(marcasMotos[i])
    }
}
    
function agregarMarca (nuevaMarca) { 
    if (nuevaMarca.trim( ) > " ") {
        marcasMotos.push (nuevaMarca)
        console.table(marcasMotos) 
    }
    }
    function agregarMarcaAlInicio (nuevaMarca) { 
    if (nuevaMarca.trim( ) > " ") {
        marcasMotos.unshift (nuevaMarca)
        console.table(marcasMotos)
    }
    }
    
    function eliminarUltimaMarca () {
        let marcaEliminada = marcasMotos.pop () 
        console.warn ("Se eliminó correctamente la marca elegida", marcaEliminada) 
    }
    

    function buscarYeliminar () {
        const borrarMarca = prompt ("Ingrese en mayúsculas la marca que desea borrar: ") 
        const indice = marcasMotos.indexOf(borrarMarca)
            if (indice > -1) {
            marcasMotos.splice (indice, 1)
        } else {
            console.warn ("La marca ingresada no fue encontrada: ", borrarMarca)
    }
        console.table(marcasMotos)
    } 


//----------- PERMISO EDAD---------------------------//

const usuario = {
    nombre: "Juan Perez",
    edad: 22
}
const permiso = (usuario.edad >=18) ? true : false

permiso ? console.log ("Puede continuar con la compra") : console.log ("Necesita ser mayor de 18 años para continuar")

Swal.fire({title: '¿Qué edad tenés?', icon: 'question', input: 'range', inputColor:  '#000', inputLabel: 'Deslizá la barra hasta tu edad', iconColor: '#6b3923', background: '#a6a6a6', color: '#000', confirmButtonColor: '#000', width: '300', height: '100',  
inputAttributes: {min: 0, max: 99, step: 1,},inputValue: 30})


// OPERADORES // 
carrito.length === 0 && console.log ("El carrito está vacío")


let {Articulo, precio} = articulos[1]
console.log(Articulo)
console.log(precio)

