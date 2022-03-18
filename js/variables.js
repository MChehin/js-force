const marcasMotos = [" ", "YAMAHA", "SUZUKI", "HONDA", "DUCATI", "KAWASAKI", "BMW"]
console.table (marcasMotos)
const articulos = ["YAMAHA 125", "SUZUKI GS 750", "HONDA CBX 1050", "DUCATI 1098", "KAWASAKI NINJA 400", "BMW GS 650"]


// Main.js //
const modelos = ["YAMAHA 125", "SUZUKI GS 750", "HONDA CBX 1050", "DUCATI 1098", "KAWASAKI NINJA 400", "BMW GS 650"]
const carrito = []

const titulo = document.getElementById("titulo")

const ul = document.getElementById("listadoMotos") 
const listadoCarrito = document.getElementById("listadoCarrito") 

const btnCarrito = document.querySelector ("#btnCarrito")
const li = document.querySelectorAll ("li.carrito-item")
