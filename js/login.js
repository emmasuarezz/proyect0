


function sesion(mail){

  let user = JSON.parse(localStorage.getItem('Activo'));

if ( user == null) {

  let Activo = {};

  Activo.name = "";
  Activo.sname= "";
  Activo.apellido= "";
  Activo.sapellido= "";
  Activo.email = mail;
  Activo.tel = "";

  localStorage.setItem("Activo", JSON.stringify(Activo));

}

user.email = mail;
localStorage.setItem("Activo", JSON.stringify((user)));

}



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

  if (localStorage.getItem('centinela') == null){

    localStorage.setItem('centinela', 0)

  }



    document.getElementById('boton').addEventListener('click', ()=>{

        sesion(document.getElementById('email').value);
        validar();
    })

    document.getElementById('email').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        
        sesion(document.getElementById('email').value);
        validar();

      }
  })

  document.getElementById('password').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      
      sesion(document.getElementById('email').value);
      validar();

    }
})





})