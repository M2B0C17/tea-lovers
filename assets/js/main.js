//Validar Datos
function validar(){
  // "cajas" donde almacenaremos los datos de los input (id)
  var nombre = document.getElementById('nombre').value = "";
  var email = document.getElementById('email').value = "";
  var direccion = document.getElementById('direc').value = "";

  // evaluando los campos
  /*
  var expressionEmail = /\w+@\w+\.+[a-z]/;
  var expressionNombre = /[a-z]/;
  */
    /*
    else if (email != expressionEmail){
      alert("Su email no es valido");
    }else if (nombre != expressionNombre){
      alert("Su nombre no es valido");
    }
    */

  // boton
  var boton = document.getElementById('suscribirse');
  boton.addEventListener('click', function(){

    if(nombre === ""){
      alert("Todos los campos son obligatorios");
    }else{
      alert("Muchas gracias por suscribirse");
    }
  };)
  }

  // Seleccion de Té
  var seleccionUsuario = document.getElementById("selec").value;
