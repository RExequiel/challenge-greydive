import Swal from "sweetalert2"

export const swal = () =>
   Swal.fire({
      title: "¡Exito!",
      text: "Datos guardados correctamente",
      confirmButtonText: "Aceptar",
      width: "400px",
      timer: 10000,
      timerProgressBar: true,
   })