console.log("oli")

//funcion que muestra la hora cada 1 segundo en el HTM
function mostrarHora() {
    let d = new Date();
    document.getElementById("relog").innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  }

  setInterval(mostrarHora, 1000);