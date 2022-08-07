window.onload=function(e){
    let formulario = document.querySelector("form");
    formulario.addEventListener("submit",async function(e){
        e.preventDefault();

        // revisar que el password no esté vacío
        if(formulario.password.value.trim()==""){
            return;
        }
        // revisar si los password (password y confirmación) son iguales
        if(formulario.password.value!=formulario.password2.value){
            let errormsg=document.getElementById("errormsg");
            errormsg.classList.remove("esconderError");
            errormsg.classList.add("mostrarError");
            return;
        }
        errormsg.classList.remove("mostrarError");
        errormsg.classList.add("esconderError");
    
        // crear la estructura con datos para enviar el registro
        const credenciales = {
            email:formulario.email.value,
            username:formulario.username.value,
            nombre:formulario.nombre.value,
            password:formulario.password.value
        }

        // enviar los datos
        let respuesta = await fetch("/register",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(credenciales)
        })
        let mensajeError = document.querySelector("#msgError");
        //obtener los datos
        let datos = await respuesta.json();
        // revisar los datos
        if(!datos){
            // con classList solo borramos una clase
            mensajeError.classList.remove("esconderError");
            mensajeError.classList.add("mostrarError");
            mensajeError.innerText="Error en la comunicación";
            return;
        }
    
        if(datos.error){
            mensajeError.classList.remove("esconderError");
            mensajeError.classList.add("mostrarError");
            mensajeError.innerText=datos.error;
            setTimeout(function(){
                mensajeError.classList.remove("mostrarError");
                mensajeError.classList.add("esconderError");
            }, 3000);
            return;
        }
        // todo ok
        location.assign("/home");

    })
}