function datos(){
let persona = {};
persona.email = document.getElementById('email').value;
persona.password = document.getElementById('password').value;
return persona;
}

function validar () {
let u = datos();
if (u.email == "" || u.password == "") {
alert("Los campos no pueden estar vacios!");
}
else {
    alert ("Bienvenido");
    window.location.href = portada.html;
}
}

document.addEventListener('DOMContentLoaded', ()=>{

    document.getElementById('bttn').addEventListener('click', ()=>{

        validar();
    })

})