carritoArray = [];

valores = 0;



function borrarProd(array, i) {

array.splice(i, 1);
itemsCarrito(array);
localStorage.setItem('carrito', JSON.stringify(carritoArray));
}





function setCant(array, i){

let valor = document.getElementById('cantidad' + i).value;

array.count = valor;

let resultado = array.count * array.unitCost;

document.getElementById('subtotal' + i).innerHTML = resultado;

}

function setProdID(prodID){

    localStorage.setItem('prodID', prodID);
    window.location = "product-info.html"


}


function itemsCarrito (array) {

let i = 0;
let htmlContentToAppend = "";

for (const producto of array) {

 htmlContentToAppend += `
 <div class="card rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
              <img
                src="${producto.image}"
                class="img-fluid rounded-3" alt="${producto.name}"
                onclick="setProdID(${producto.id})">
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <p class="lead fw-normal mb-2">${producto.name}</p>
              <p>${producto.currency} ${producto.unitCost}</p>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <span class="text-muted" style="margin-right: 20px; margin-top:2px;">Cantidad</span>
              <input id="cantidad${i}" onchange="setCant(carritoArray[${i}], ${i})" min="0" name="quantity" value="${producto.count}" type="number"
                class="form-control form-control-sm" />

            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <span class="mb-0">Subtotal</span>
              <h5 class="mb-0 text-muted text-start">${producto.currency} <span id="subtotal${i}" class="font-weight-light">${producto.count * producto.unitCost}</span></h5>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a onclick="borrarProd(carritoArray, ${i})" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
            </div>
          </div>
        </div>
      </div>
 `
 
 i++;

}

document.getElementById("contenedor").innerHTML = htmlContentToAppend;

}


document.addEventListener('DOMContentLoaded', ()=>{

  if (JSON.parse(localStorage.getItem('carrito')) == null) {


    localStorage.setItem('carrito', JSON.stringify(carritoArray));


  }
    carritoArray = JSON.parse(localStorage.getItem('carrito'));

    if (carritoArray.length <= 1){

    getJSONData("https://japceibal.github.io/emercado-api/user_cart/25801.json").then(function(resultObj){
        if (resultObj.status === "ok"){
            carritoArray = resultObj.data.articles;
            itemsCarrito(carritoArray);
            localStorage.setItem('carrito', JSON.stringify(carritoArray));
        }
    });

    }

    else {

        itemsCarrito(carritoArray);

    }




})



