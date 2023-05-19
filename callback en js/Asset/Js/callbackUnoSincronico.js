function  saludo(nombre){

  alert (`Hola ${nombre}`)
}

function preocesarEntrada(saludo){ //llamo al metodo 
  var nombre = prompt("ingresa tu nombre por favor")
  saludo(nombre) // utilizo el metodo
}


preocesarEntrada(saludo) // llamo a mi metodo que utiliza el metodo para mostrarlo en mi html