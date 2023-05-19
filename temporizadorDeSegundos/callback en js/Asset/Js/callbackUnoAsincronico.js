document.addEventListener("DOMContentLoaded", function() {
  let intervalId;
  let segundosTotales;
  let inicio;

  function mostrarElTiempo() {
    let d = new Date(); // traemos la hora actual
    let segundos = Math.floor((d.getTime() - inicio) / 1000);  // se calcula la cantidad de segundos transcurridos desde el inicio del temporizador hasta el momento actual.
    document.getElementById("relog").innerHTML = segundos; // envio los segundos al html
    
    if (segundos >= segundosTotales) {  // si los segundos son mayores a segundosTotales
      clearInterval(intervalId); // para la ejectucion
    }
  }

  document.getElementById("comenzar").addEventListener("click", function() {
    let inputSegundos = document.getElementById("inputSegundos"); // traigo el input
    segundosTotales = parseInt(inputSegundos.value); // convierto el dato ingresado en el en un numero
    inputSegundos.disabled = true; // desabilito el input
    
    inicio = new Date().getTime(); // guardamos el tiempo de inicio
    mostrarElTiempo();  // mostramos el tiempo
    intervalId = setInterval(mostrarElTiempo, 1000); // muestralo cada 1 segundo
  });

  document.getElementById("cancelar").addEventListener("click", function() {
    clearInterval(intervalId); // cancela el mostrarlo cada 1 segundo 
    let inputSegundos = document.getElementById("inputSegundos"); // traigo el input nuevamente
    inputSegundos.disabled = false; // le desactivo el disabled
    inputSegundos.value = ""; // le pongo un valor vacio
    document.getElementById("relog").innerHTML = "0"; // dejo el html en 0
  });
});