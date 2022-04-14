//------------------------------------------------------------JSON CHECKOUT----------------------------------------------------------------//
const saveDatos = () => {
  //debugger
  const datosForm = { inputNombre: "", inputTelefono: 0, inputEmail: "" };
  datosForm.inputNombre = inputNombre.value;
  datosForm.inputTelefono = inputTelefono.value;
  datosForm.inputEmail = inputEmail.value;
  localStorage.setItem("datosDelForm", JSON.stringify(datosForm));
  console.info("Se almacenó el array en LocalStorage");
};

btnSubmit.addEventListener("click", saveDatos);

const obtenerDatos = () => {
  //debugger
  if (localStorage.getItem("datosDelForm") != null) {
    datosDelForm = JSON.parse(localStorage.getItem("datosDelForm"));
    inputNombre.value = datosDelForm.inputNombre;
    inputTelefono.value = datosDelForm.inputTelefono;
    inputEmail.value = datosDelForm.inputEmail;
  }

  JSON.stringify(localStorage.getItem("datosDelForm"));
};

obtenerDatos();

//----------------------- FORM------------------------------------------------------------//

btnSubmit.addEventListener("mousemove", () => {
  btnSubmit.title = "Completá tus datos antes de presionar ENVIAR";
});

document.addEventListener("submit", (event) => {
  event.preventDefault();
});

inputNombre.addEventListener("keyup", (event) => {
  datosDeInput = event.target.value;
  console.log(datosDeInput);
});

inputNombre.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    inputTelefono.focus();
  }
});

// ------------------ ALERTA----------------------------------------//
btnSubmit.addEventListener("click", () => {
  const result =
    inputNombre.value != "" &&
    inputTelefono.value != "" &&
    inputEmail.value != "";
  if (result) {
    const Toast = Swal.mixin({
    toast: true,
    result: true,
    position: "center",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    iconColor: "#6b3923",
    background: "#000",
    color: "#fff",
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
    });

    Toast.fire({ icon: "success", title: "Envío exitoso" });
}
});
