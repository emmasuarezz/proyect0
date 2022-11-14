
function usuario(){

    let usuario = {};

    usuario.name = document.getElementById('Nombre').value;
    usuario.sname = document.getElementById('SNombre').value;
    usuario.apellido = document.getElementById('Apellido').value;
    usuario.sappelido = document.getElementById('SApellido').value;
    usuario.tel = document.getElementById('Tel').value;
    usuario.email = document.getElementById('Email').value;

    localStorage.setItem('Activo', JSON.stringify(usuario));


}

function mostrar(usuario){

    document.getElementById('Nombre').value = usuario.name; 
    document.getElementById('SNombre').value = usuario.sname; 
    document.getElementById('Apellido').value = usuario.apellido;  
    document.getElementById('SApellido').value = usuario.sappelido;
    document.getElementById('Tel').value = usuario.tel;
    document.getElementById('Email').value = usuario.email;
}

function guardar(usuario){

    usuario.name = document.getElementById('Nombre').value;
    usuario.sname = document.getElementById('SNombre').value;
    usuario.apellido = document.getElementById('Apellido').value;
    usuario.sappelido = document.getElementById('SApellido').value;
    usuario.tel = document.getElementById('Tel').value;
    usuario.email = document.getElementById('Email').value;

    localStorage.setItem('Activo', JSON.stringify(usuario));



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
        alert('ta vacio')

    }


    mostrar(current);


   document.getElementById('guardar').addEventListener('click', ()=>{

    

    guardar(current);
    mostrar(current);


   })

})