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


//----------------------------------ARRAY VER MOTOS EN Stock INDEX----------------------------------------------------------//
const inputFiltrar = document.querySelector("#filtrar")
const tbody = document.querySelector("tbody")
let arrayStock = ""

const URL = "js/force.json"





//---------------------------------------------------- VARIABLES FORM ----------------------------------------------------------------//

const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputTelefono")
const inputEmail = document.querySelector("#inputEmail")
const btnSubmit = document.querySelector("#submit")
 
let datosDeInput = ""

