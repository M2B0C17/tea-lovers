//Validar Datos
function validar(){
  // "cajas" donde almacenaremos los datos de los input (id)
  var nombre = "";
  nombre.document.getElementById('nombre').value;
  var email = "";
  nombre.document.getElementById('email').value;
  var direccion = "";
  nombre.document.getElementById('direc').value;

  // evaluando los campos
  var expressionEmail = /\w+@\w+\.+[a-z]/;
  var expressionNombre = /[a-z]/;

  // boton
  var boton = document.getElementById('suscribirse');
  boton.addEventListener('click', function(){

    if(nombre === "" || email === "" || direccion === ""){
      alert("Todos los campos son obligatorios");
    }else if (email != expressionEmail){
      alert("Su email no es valido");
    }else if (nombre != expressionNombre){
      alert("Su nombre no es valido");
    }else {
      alert("Muchas gracias por suscribirse");
    }
  });
}
