 
function preocesarEntrada(saludo){ //llamo al metodo 
    var nombre = prompt("ingresa tu nombre por favor")
    saludo(nombre) // utilizo el metodo
  }
 
 
 preocesarEntrada((nombre)=> {

    alert(`hola ${nombre}`)
 });




