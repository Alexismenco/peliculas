// se ejecuta cuando carga la pagina
window.onload=function(e){
    // carga de formulario
  let formulario = document.querySelector("form");
  formulario.addEventListener("submit",async function(e){
    e.preventDefault();
    // objeto con las credeniales
    let credenciales ={
        email:formulario.email.value,
        password:formulario.password.value
    }

    // enviar los dato al server
    let respuesta = await fetch("/login",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(credenciales)
    })

    let mensajeError = document.querySelector("#msgError");
    let datos = await respuesta.json();
    if(!datos){
        // con classList solo borramos una clase
        mensajeError.classList.remove("esconderError");
        mensajeError.classList.add("mostrarError");
        mensajeError.innerText="Error: error en la comunicación";
        return;
    }

    if(datos.error){
        mensajeError.classList.remove("esconderError");
        mensajeError.classList.add("mostrarError");
        setTimeout(function(){
            mensajeError.classList.remove("mostrarError");
            mensajeError.classList.add("esconderError");
        }, 3000);
        mensajeError.innerText=datos.error;
        return;
    }

    localStorage.setItem("token_JWT_EJERCICIO", datos.token);
    location.assign("/home");

  })
}