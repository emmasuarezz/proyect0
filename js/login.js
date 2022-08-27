function datos(){
let persona = {};
persona.email = document.getElementById('email').value;
persona.password = document.getElementById('password').value;
return persona;
}

function validar () {
let u = datos();
if (u.email == "" || u.password == "") {
    Swal.fire(
        'Error',
        'Los campos no pueden estar vacios',
        'error'
      );
}
else {
    Swal.fire(
        'Bienvenido!',
        '',
        'success'
      );
      setTimeout(function(){
        window.location.href = 'https://emmasuarezz.github.io/proyectO/portada.html';
      }, 2000);
    
}
}

document.addEventListener('DOMContentLoaded', ()=>{

    document.getElementById('bttn').addEventListener('click', ()=>{

        validar();
    })

})