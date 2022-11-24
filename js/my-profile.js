function validacion(){

    let res = true;

    if (nombre.value == ""){    
        res = false;
        nombre.setCustomValidity(false);
    }

    else {
        nombre.setCustomValidity("");
    }

    if (apellido.value == ""){    
        res = false;
        apellido.setCustomValidity(false);
    }

    else {
        email.setCustomValidity("");
    }

    if (email.value == ""){    
        res = false;
        email.setCustomValidity(false);
    }

    else {
        email.setCustomValidity("");
    }

    return res;
}





function usuario(){

    let usuario = {};

    usuario.name = document.getElementById('Nombre').value;
    usuario.sname = document.getElementById('SNombre').value;
    usuario.apellido = document.getElementById('Apellido').value;
    usuario.sapellido = document.getElementById('SApellido').value;
    usuario.tel = document.getElementById('Tel').value;
    usuario.email = document.getElementById('Email').value;

    localStorage.setItem('Activo', JSON.stringify(usuario));


}

function mostrar(usuario){

    document.getElementById('nombre').value = usuario.name; 
    document.getElementById('SNombre').value = usuario.sname; 
    document.getElementById('apellido').value = usuario.apellido;  
    document.getElementById('SApellido').value = usuario.sapellido;
    document.getElementById('Tel').value = usuario.tel;
    document.getElementById('email').value = usuario.email;
}

function guardar(usuario){

    usuario.name = document.getElementById('nombre').value;
    usuario.sname = document.getElementById('SNombre').value;
    usuario.apellido = document.getElementById('apellido').value;
    usuario.sapellido = document.getElementById('SApellido').value;
    usuario.tel = document.getElementById('Tel').value;
    usuario.email = document.getElementById('email').value;

    localStorage.setItem('Activo', JSON.stringify(usuario));

    localStorage.setItem('usuario', usuario.email);

    location.reload();



}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}



document.addEventListener('DOMContentLoaded', ()=>{

    let current = JSON.parse(localStorage.getItem('Activo'));


    if(localStorage.getItem("usuario")=="" || localStorage.getItem("usuario")==null){

        window.location = "index.html";

    }

    if ( isEmpty(current) ) {

        document.getElementById('Email').value = localStorage.getItem('usuario');
        usuario();

    }


    mostrar(current);


   document.getElementById('guardar').addEventListener('click', evento=>{
   
    if( !validacion() ){
        evento.preventDefault();
        evento.stopPropagation();
    }
    
    document.body.classList.add('was-validated');

    let eventos=['change', 'input'];
    
    eventos.forEach( evento=> {document.body.addEventListener(evento, validacion)})
     
    if( validacion() ){
     
        guardar(current);
        mostrar(current);

  }
});

    


   })
