function datos(){
let persona = {};
persona.email = document.getElementById('email').value;
persona.password = document.getElementById('password').value;
return persona;
}

function validar () {
let u = datos();
if (u.email == "" || u.password == "") {
    Swal.fire({
        title: 'Error',
        text: 'Los campos no pueden estar vacios',
        icon: 'error',
        background: '#485c8b',
        color: '#fff',
        confirmButtonColor: '#e98b20'
    });
}
else {
  let usuario = document.getElementById('email').value;
  localStorage.setItem('usuario', usuario);
    
    Swal.fire({
        title: 'Bienvenido!',
        text: '',
        icon: 'success',
        background: '#485c8b',
        color: '#fff',
        confirmButtonColor: '#e98b20'
    });
      setTimeout(()=>{
        window.location.href = 'portada.html';
      }, 1000);
      
}
}

document.addEventListener('DOMContentLoaded', ()=>{

    document.getElementById('boton').addEventListener('click', ()=>{

        validar();
    })





})