//Primera entrega   
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