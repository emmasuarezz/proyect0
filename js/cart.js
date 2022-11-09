carritoArray = [];

let calle = document.getElementById('calle');
let numero = document.getElementById('numero');
let esquina = document.getElementById('esquina');


valores = 0;


function validacion() {
let res = true;

if (calle.value == "" ){
    calle.setCustomValidity(false);
    res = false;

} else {
  calle.setCustomValidity("");

}

if (numero.value == "" ){
  numero.setCustomValidity(false);
  res = false;

} else {
numero.setCustomValidity("");

}

if (esquina.value == "" ){
  esquina.setCustomValidity(false);
  res = false;

} else {
esquina.setCustomValidity("");

}

for (let index = 0; index < carritoArray.length; index++) {

  if (parseInt(document.getElementById('cantidad'+index).value) == 0){
    document.getElementById('cantidad'+index).setCustomValidity(false);
    res = false;
  }

  else {
    document.getElementById('cantidad'+index).setCustomValidity("");
  }
  
}

if (document.getElementById('tarjeta').checked) {

  if (document.getElementById('numeroTarjeta').value == ""){
    document.getElementById('numeroTarjeta').setCustomValidity(false);
    document.getElementById('seleccionar').classList.remove("feedbackBien");
    document.getElementById('seleccionar').classList.add("feedbackMal");
    document.getElementById('feedback').innerHTML = "Revisa tu informacion"
    res = false;
  }
  
 else {
  document.getElementById('numeroTarjeta').setCustomValidity("");
  document.getElementById('seleccionar').classList.remove("feedbackMal");
  document.getElementById('seleccionar').classList.add("feedbackBien");
  document.getElementById('feedback').innerHTML = "";
}


if (document.getElementById('codigoTarjeta').value == ""){
  document.getElementById('codigoTarjeta').setCustomValidity(false);
  document.getElementById('seleccionar').classList.remove("feedbackBien");
  document.getElementById('seleccionar').classList.add("feedbackMal");
  document.getElementById('feedback').innerHTML = "Revisa tu informacion"
  res = false;
}

else {
document.getElementById('codigoTarjeta').setCustomValidity("");
if (!document.getElementById('vencimientoTarjeta').value == "" && !document.getElementById('numeroTarjeta').value == ""){
document.getElementById('seleccionar').classList.remove("feedbackMal");
document.getElementById('seleccionar').classList.add("feedbackBien");
document.getElementById('feedback').innerHTML = "";
}
}


if (document.getElementById('vencimientoTarjeta').value == ""){
  document.getElementById('vencimientoTarjeta').setCustomValidity(false);
  document.getElementById('seleccionar').classList.remove("feedbackBien");
  document.getElementById('seleccionar').classList.add("feedbackMal");
  document.getElementById('feedback').innerHTML = "Revisa tu informacion"
  res = false;
}

else {
document.getElementById('vencimientoTarjeta').setCustomValidity("");
if (!document.getElementById('codigoTarjeta').value == "" && !document.getElementById('numeroTarjeta').value == ""){
document.getElementById('seleccionar').classList.remove("feedbackMal");
document.getElementById('seleccionar').classList.add("feedbackBien");
document.getElementById('feedback').innerHTML = "";
}
}
}

else {

if (document.getElementById('bancoNum').value == "") {
  document.getElementById('bancoNum').setCustomValidity(false);
  document.getElementById('seleccionar').classList.remove("feedbackBien");
  document.getElementById('seleccionar').classList.add("feedbackMal");
  document.getElementById('feedback').innerHTML = "Revisa tu informacion"
  res = false;
}
else {
  document.getElementById('bancoNum').setCustomValidity("");
  document.getElementById('seleccionar').classList.remove("feedbackMal");
  document.getElementById('seleccionar').classList.add("feedbackBien");
  document.getElementById('feedback').innerHTML = ""
}

}
console.log("Validado!")
return res;

}








function sumarTodo(){
let total = 0;
let envio = parseInt(document.getElementById('cantidadEnvio').innerHTML, 10);
let valor = parseInt(document.getElementById('cantidadFinal').innerHTML, 10);

total = envio + valor;
document.getElementById('cantidadTotal').innerHTML = total;


}

function calcularEnvio (){

  let costo = 0;

  let valor = parseInt(document.getElementById('cantidadFinal').innerHTML, 10);

  if (document.getElementById('01').checked) {

    costo = (valor * 15) / 100;

  }

  if (document.getElementById('02').checked) {

    costo = (valor * 7) / 100;

  }

  if (document.getElementById('03').checked) {

    costo = (valor * 5) / 100;

  }


document.getElementById('cantidadEnvio').innerHTML = costo;

sumarTodo();

  
}

function sumarTotales (array) {

  let subtotalFinal = 0;

for (const producto of array) {

  if (producto.currency == "USD") {
  
  subtotalFinal += producto.subtotal;

  }

  else {

    subtotalFinal += (producto.subtotal / 40);

  }
}

let contenedor = document.getElementById('cantidadFinal');
contenedor.innerHTML = subtotalFinal;

sumarTodo();

}

function borrarProd(array, i) {

array.splice(i, 1);
itemsCarrito(array);
localStorage.setItem('carrito', JSON.stringify(carritoArray));
}

function setCant(obj, i){

let valor = document.getElementById('cantidad' + i).value;

obj.count = valor;

let resultado = obj.count * obj.unitCost;

obj.subtotal = resultado;

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
              <input id="cantidad${i}" onchange="setCant(carritoArray[${i}], ${i}), sumarTotales(carritoArray), calcularEnvio()" min="0" name="quantity" value="${producto.count}" type="number"
                class="form-control form-control-sm" />

            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <span class="mb-0">Subtotal</span>
              <h5 class="mb-0 text-muted text-start">${producto.currency} <span id="subtotal${i}" class="font-weight-light">${producto.count * producto.unitCost}</span></h5>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a onclick="borrarProd(carritoArray, ${i}), sumarTotales(carritoArray), calcularEnvio()" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
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

  document.getElementById('03').checked = true;
  document.getElementById('bancoNum').disabled = true;

  if (JSON.parse(localStorage.getItem('carrito')) == null) {


    localStorage.setItem('carrito', JSON.stringify(carritoArray));


  }
    carritoArray = JSON.parse(localStorage.getItem('carrito'));

    if (!carritoArray.some(e => e.name === 'Peugeot 208') && carritoArray.length <= 1){

    getJSONData("https://japceibal.github.io/emercado-api/user_cart/25801.json").then(function(resultObj){
        if (resultObj.status === "ok"){
            carritoArray.push(resultObj.data.articles[0]);
            carritoArray[0].subtotal = carritoArray[0].unitCost;
            itemsCarrito(carritoArray);
            sumarTotales(carritoArray);
            calcularEnvio();
            localStorage.setItem('carrito', JSON.stringify(carritoArray));
        }
    });

    }

    else {

        itemsCarrito(carritoArray);
        sumarTotales(carritoArray);
        calcularEnvio();

        document.getElementById('01').addEventListener('onchange', ()=>{
          calcularEnvio();
        })

        let radioBtn2 = document.getElementById('02');

        let radioBtn3 = document.getElementById('03');

        radioBtn2.addEventListener('change', ()=>{
          calcularEnvio();
        })
        radioBtn3.addEventListener('change', ()=>{
          calcularEnvio();
        })
        
    }


    document.getElementById('tarjeta').addEventListener('change', ()=>{

      document.getElementById('codigoTarjeta').disabled = false;
      document.getElementById('numeroTarjeta').disabled = false;
      document.getElementById('vencimientoTarjeta').disabled = false;
      document.getElementById('bancoNum').disabled = true;

      }
    )

    document.getElementById('banco').addEventListener('change', ()=>{

      document.getElementById('codigoTarjeta').disabled = true;
      document.getElementById('numeroTarjeta').disabled = true;
      document.getElementById('vencimientoTarjeta').disabled = true;
      document.getElementById('bancoNum').disabled = false;

      }
    )

    document.getElementById('finalizar').addEventListener('click', evento=>{
   
      if( !validacion() || !document.getElementById('Formulario').checkValidity()){
          evento.preventDefault();
          evento.stopPropagation();
      }
      
      document.body.classList.add('was-validated');
  
      let eventos=['change', 'input'];
      
      eventos.forEach( evento=> {document.body.addEventListener(evento, validacion)})
       
      if( validacion() && document.getElementById('Formulario').checkValidity()){
       
        Swal.fire(
            'Compra realizada!',
            'Revisa tu mail para mas informacion',
            'success'
          );

    }
  });

    })




