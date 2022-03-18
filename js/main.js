titulo.innerText = "Tienda FORCE"

const cargarModelos = ()=> {
    for (moto of modelos) {
        const liModelos = document.createElement("li")
                liModelos.className = "carrito-item"
                liModelos.innerText = moto
                liModelos.setAttribute("onclick", `agregarAlCarrito('${moto}')`)
                ul.append(liModelos)
            }
}

const agregarAlCarrito = (mod)=> { 
    if (mod > "") {
        const id = mod + "enCarrito" 
        const liCarrito = document.createElement("li")
              liCarrito.innerText = mod
              liCarrito.id = id 
              liCarrito.setAttribute("ondblclick", `eliminarDelCarrito('${id}')`)
              listadoCarrito.append(liCarrito)
    }
}

const eliminarDelCarrito = (modelosID)=> { 
    debugger
    if (confirm("¿Querés eliminar este artículo del carrito?")) {
        const itemAeliminar = document.getElementById(modelosID)
              itemAeliminar.remove()
              return
    }
}

cargarModelos()
