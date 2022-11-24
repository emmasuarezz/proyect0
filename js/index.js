document.addEventListener("DOMContentLoaded", function(){

    

    console.log(Notification.permission);

    if (Notification.permission == 'denied' || Notification.permission === "default") {

        Swal.fire({
            title: 'Activar notificaciones',
            text: "Activalas para acceder a todas las funcionalidades del sitio (alertas del carrito, descuentos, etc)",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Activar'
          }).then((result) => {
            if (result.isConfirmed) {
                Notification.requestPermission(function (permission) {
                    if (permission === "granted") {
                        var notification = new Notification("Ahora sí podrás saber si agregas algun artículo al carrito!");
            }
                })
          }
        });


    }

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