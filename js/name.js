document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById('sesion').innerHTML = `<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    ${localStorage.getItem('usuario')}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
      <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
      <li><a class="dropdown-item" id="cerrarSesion">Cerrar sesión</a></li>
    </ul>
    </div>`
    
    document.getElementById('cerrarSesion').addEventListener('click', ()=>{

        Swal.fire({
            icon: 'info',
            title: 'Estas seguro?',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
            background: '#485c8b',
            color: '#fff',
            confirmButtonColor: '#e98b20',
            denyButtonColor: '#e8a75d',
          }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('usuario');
                localStorage.removeItem('value');
                window.location.href = './';

            }
          })


    })



})