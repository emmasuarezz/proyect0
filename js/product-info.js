let ProductArray = [];
let CommentsArray = [];
let ImagesArray = [];
let SortedCommentsArray = [];





function addToCart(array){
 


let nuevoProducto = {};

nuevoProducto.count = 1;
nuevoProducto.currency = array.currency;
nuevoProducto.unitCost = array.cost;
nuevoProducto.name = array.name;
nuevoProducto.id = localStorage.getItem('prodID');
nuevoProducto.image = array.images[0];

let carritoArray = JSON.parse(localStorage.getItem('carrito'));

carritoArray.push(nuevoProducto);

localStorage.setItem('carrito', JSON.stringify(carritoArray));


}





function newComment(){

let comentario = {};
let tiempo = new Date ();
let mes = "";
let horas ="";
let minutos ="";
let segundos ="";

if (parseInt(tiempo.getMonth()+1) < 10) {

mes = "0" + parseInt(tiempo.getMonth()+1);

}
else {

mes = parseInt(tiempo.getMonth()+1);
}

if (tiempo.getHours() < 10) {

  horas = "0" + tiempo.getHours();
  
  }
  else {
  
  horas = tiempo.getHours();
  }

  if (tiempo.getMinutes() < 10) {

    minutos = "0" + tiempo.getMinutes();
    
    }
    else {
    
    minutos = tiempo.getMinutes();
    }

    if (tiempo.getSeconds() < 10) {

      segundos = "0" + tiempo.getSeconds();
      
      }
      else {
      
      segundos = tiempo.getSeconds();
      }

ahora = tiempo.getFullYear() + "-" + mes + "-" + tiempo.getDate() + " " + horas + ":" + minutos + ":" + segundos;

comentario.user = localStorage.getItem('usuario');
comentario.description = document.getElementById('comentarioBody').value;
comentario.dateTime = ahora;
comentario.score = document.getElementById('valor').value;

CommentsArray.push(comentario);

SortedCommentsArray = CommentsArray.sort((a, b) => { 

  if (a.score > b.score){return -1;}
  if (a.score < b.score){return 1;}
  return 0;
  
});

showCurrentProductComments(SortedCommentsArray);

}


function calcularEstrellas (cantidad) {

    estrellas = '';


    for (let i = 0; i < 5; i++) {

      if (i < cantidad) {

        estrellas += `<i class="fas fa-star checked"></i>`;

      }
    else {

      estrellas += `<i class="far fa-star"></i>`;

  }
}

if (cantidad == 5) {

  estrellas += `  <i class="far fa-grin-stars"></i>`;

}

if (cantidad == 0 || cantidad == 1) {

  estrellas += `  <i class="far fa-frown"></i>`;

}

if (cantidad == 2 ) {

  estrellas += `  <i class="far fa-meh"></i>`;

}

if ( cantidad == 4 ||  cantidad == 3) {

  estrellas += `  <i class="far fa-grin-alt"></i>`;

}

    return estrellas;

}

function showImgGrande(array){
    let i = localStorage.getItem('foto');
    let htmlContentToAppend = "";
    let cuadro = document.getElementById('cuadro');

    htmlContentToAppend += `

    <div class="img-fluid">
    <img class="d-block w-100" src="${array[i]}" alt="">
    </div>
    
    `;

    cuadro.innerHTML = htmlContentToAppend;
}

function setImageIndex(index){

    localStorage.setItem('foto', index);

}

function showCurrentProductImage(array){

    let htmlContentToAppend = "";
    let index = 0;
    for(let i = 0; i < array.length; i++){
        
        let imagen = array[i];

            htmlContentToAppend += `
            <div class="col-lg-3 col-md-12 mb-2 mb-lg-0">
            <img
              src="${imagen}"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="${array.name}"
              onclick="setImageIndex(${index}); showImgGrande(ImagesArray);"
            />
          </div>
            `           
        index = index +1;
    }
    document.getElementById("imagenes").innerHTML += htmlContentToAppend;
}

function showCurrentProductComments(array){

    let htmlContentToAppend = "";
    for(let comment of array){

      if (comment.score == 5){

            htmlContentToAppend += `
            <li class="media comentario noMarker cincoEstrellas">
                    <div class="media-body">
                      <span class="text-muted pull-right">
                        <small class="text-muted">${comment.dateTime}</small>
                      </span>
                      <strong class="text-success textColor">${comment.user}</strong>
                      <span class="estrellas">${calcularEstrellas(comment.score)}</span>
                      <p>
                        ${comment.description}
                      </p>
                    </div>
                  </li>
            `           
    }else {
     if (comment.score == 4){

      htmlContentToAppend += `
      <li class="media comentario noMarker cuatroEstrellas">
              <div class="media-body">
                <span class="text-muted pull-right">
                  <small class="text-muted">${comment.dateTime}</small>
                </span>
                <strong class="text-success textColor">${comment.user}</strong>
                <span class="estrellascuatro">${calcularEstrellas(comment.score)}</span>
                <p>
                  ${comment.description}
                </p>
              </div>
            </li>
      `           
}
else {
  htmlContentToAppend += `
        <li class="media comentario noMarker">
                <div class="media-body">
                  <span class="text-muted pull-right">
                    <small class="text-muted">${comment.dateTime}</small>
                  </span>
                  <strong class="text-success textColor textCinco">${comment.user}</strong>
                  <span>${calcularEstrellas(comment.score)}</span>
                  <p>
                    ${comment.description}
                  </p>
                </div>
              </li>
        `;           

}} 
  

    document.getElementById("comentarios").innerHTML = htmlContentToAppend;

}
}

function showCurrentProduct(array){

        let htmlContentToAppend = "";
                htmlContentToAppend += `
                        
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 id="titulo" class="display-4 font-weight-normal">${array.name}</h1>
          <p class="lead font-weight-normal">${array.description}</p>
          <p class="lead font-weight-normal">${array.currency} ${array.cost}</p>
          <a id="carrito" onclick="addToCart(ProductArray)" class="btn btn-outline-secondary" href="#">Añadir al carrito</a>
          </br>
          </br>
          <a class="lead font-weight-normal tituloCOM" href="#imagenes">Imagenes</a>
          </br>
          </br>
          <a class="lead font-weight-normal tituloCOM" href="#comentarios">Reseñas</a>
          </br>
          </br>
          <a class="lead font-weight-normal tituloCOM" href="#productosRelacionados">Productos relacionados</a>
        </div>
      </div>
                `
            document.getElementById("main").innerHTML += htmlContentToAppend;
        }


function setProdID(prodID){

          localStorage.setItem('prodID', prodID);
          window.location = "product-info.html"
      
      
      }


function prodRel(array){

  let htmlContentToAppend = "";
  for (const producto of array) {

    htmlContentToAppend += `

    <div class="col-sm-6">
    <div class="card">
      <img class="card-img-top img-thumbnail" src="${producto.image}" alt="${producto.name}">
      <div class="card-body">
        <h5 class="card-title ">${producto.name}</h5>
        <br>
        <button onclick="setProdID(${producto.id})" class="btn btn-primary botonColor">Ver más</button>
      </div>
    </div>
  </div>

            `   
  }

  document.getElementById("productosRelacionados").innerHTML += htmlContentToAppend;





}

document.addEventListener("DOMContentLoaded", function(){

    let prodID = localStorage.getItem('prodID');

    getJSONData("https://japceibal.github.io/emercado-api/products/" + prodID + ".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            ProductArray = resultObj.data;
            ImagesArray = resultObj.data.images;
            RelArray = resultObj.data.relatedProducts;
            showCurrentProduct(ProductArray);
            showCurrentProductImage(ImagesArray);
            localStorage.setItem('foto', 0);
            showImgGrande(ImagesArray);
            prodRel(RelArray);

        }
    });

    getJSONData("https://japceibal.github.io/emercado-api/products_comments/" + prodID + ".json").then(function(resultObj){

        if (resultObj.status === "ok"){
            CommentsArray = resultObj.data;
            SortedCommentsArray = CommentsArray.sort((a, b) => { 

              if (a.score > b.score){return -1;}
              if (a.score < b.score){return 1;}
              return 0;

            });

            showCurrentProductComments(SortedCommentsArray);

        }
    
    
});


document.getElementById('enviar').addEventListener('click', ()=>{

  newComment();

});
    
    });

