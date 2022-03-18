class Articulo {
    constructor(articulo, precio) {
        this.articulo  = articulo.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        return this.precio = this.precio * 1.21;
       
    }
}
 
const articulos = [];
 
articulos.push(new Articulo("YAMAHA 125", "7000"));
articulos.push(new Articulo ("SUZUKI GS 750", "8000"));
articulos.push(new Articulo("HONDA CBX 1050", "25000"));
articulos.push(new Articulo("DUCATI 1098", "15000"));
articulos.push(new Articulo("KAWASAKI NINJA 400", "6500"));
articulos.push(new Articulo("BMW GS 650", "9500"));
 
for (const articulo of articulos)
    articulo.sumaIva();
 
 
function agregarObjetoAclase () {
    let art = prompt("Ingrese el nombre del modelo: ")  
    let imp = prompt("Ingrese el importe del modelo: ")
        articulos.push(new Articulo (art, imp))
        console.table(articulos)
}
 
function listarArticulos() {
    for (art of articulos) {
        console.table (art)
    }
}
