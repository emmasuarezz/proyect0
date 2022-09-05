document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById('sesion').innerHTML = `Hola <strong>${localStorage.getItem('usuario')}</strong>!`
    
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