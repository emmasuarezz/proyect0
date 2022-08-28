document.addEventListener("DOMContentLoaded", function(){

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
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.location.href = './';
                localStorage.removeItem(usuario);
            }
          })


    })

    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});