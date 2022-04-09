const prom1eventoFuturo = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            res ? resolve ('Promesa resuelta') : reject('Promesa rechazada')
        }, 2000)
    }

const cargaUsuario = (URL) => {
    fetch(URL)
    .then(Response) => Response.json())
    .then((data) => console.table(data))
}