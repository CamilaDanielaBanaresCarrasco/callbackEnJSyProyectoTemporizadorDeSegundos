function mostrar(algo) {
    document.getElementById("aqui").innerHTML = algo;
    
}


function consumirArchivo(archivo){
let req = new XMLHttpRequest();
req.open("get","recurso.html");
req.onload = function (){
    if(req.status == 200){
        archivo(this.responseText);
    }else{7
        archivo("Error:" + req.status)
    }

}

req.send();
}


consumirArchivo(mostrar)
