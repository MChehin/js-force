//Primera entrega 
class Modelo {
    constructor(modelo, precio) {
        this.modelo  = modelo.toUpperCase(); 
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        return this.precio = this.precio * 1.21;
        
    }
}

const modelos = [];

modelos.push(new Modelo("YAMAHA 125", "7000"));
modelos.push(new Modelo("SUZUKI GS 750", "8000"));
modelos.push(new Modelo("HONDA CBX 1050", "25000"));
modelos.push(new Modelo("DUCATI 1098", "15000"));
modelos.push(new Modelo("KAWASAKI NINJA 400", "6500"));
modelos.push(new Modelo("BMW GS 650", "9500"));

for (const modelo of modelos)
    modelo.sumaIva();


function agregarObjetoAclase () { 
    let mod = prompt("Ingrese el nombre del modelo: ")  
    let imp = prompt("Ingrese el importe del modelo: ")
        modelos.push(new Modelo (mod, imp))
        console.table(modelos) 
}

function listarModelos() { 
    for (mod of modelos) {
        console.table (mod)
    }
}