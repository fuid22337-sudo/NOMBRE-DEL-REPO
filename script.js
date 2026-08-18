// Sistema de Inscripción Escolar — lógica del lado del cliente

document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validación: campos vacíos
  if (nombre === "") {
    alert("Error: El campo 'Nombre' no puede estar vacío.");
    return;
  }

  if (correo === "") {
    alert("Error: El campo 'Correo' no puede estar vacío.");
    return;
  }

  if (mensaje === "") {
    alert("Error: El campo 'Mensaje' no puede estar vacío.");
    return;
  }

  // Validación: formato de correo (debe contener @ y .)
  if (!correo.includes("@") || !correo.includes(".")) {
    alert("Error: El correo debe contener '@' y '.' (ejemplo: usuario@dominio.com).");
    return;
  }

  // Si todas las validaciones pasan
  alert("¡Formulario enviado con éxito!");
});