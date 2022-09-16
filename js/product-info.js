let ProductArray = [];
let CommentsArray = [];
let ImagesArray = [];


function showImgGrande(array){
    let i = localStorage.getItem('foto');
    let htmlContentToAppend = "";
    let cuadro = document.getElementById('cuadro');

    htmlContentToAppend += `

    <div class="img-fluid"">
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

            htmlContentToAppend += `
            <div class="card-body cartas">
              <p>${comment.description}</p>
  
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <p class="small mb-0 ms-2"><strong>${comment.user}</strong></p>
                </div>
                <div class="d-flex flex-row align-items-center">
                  <p class="small text mb-0">${comment.dateTime}</p>
                </div>
              </div>
            </div>
            `           
    }
    document.getElementById("comentarios").innerHTML += htmlContentToAppend;
}



function showCurrentProduct(array){

        let htmlContentToAppend = "";
                htmlContentToAppend += `
                        
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 id="titulo" class="display-4 font-weight-normal">${array.name}</h1>
          <p class="lead font-weight-normal">${array.description}</p>
          <p class="lead font-weight-normal">${array.currency} ${array.cost}</p>
          <a class="btn btn-outline-secondary" href="#">Comprar</a>
          </br>
          </br>
          <a class="lead font-weight-normal tituloCOM" href="#imagenes">Imagenes</a>
          </br>
          </br>
          <a class="lead font-weight-normal tituloCOM" href="#comentarios">Reseñas</a>
        </div>
      </div>
                `
            document.getElementById("main").innerHTML += htmlContentToAppend;
        }



document.addEventListener("DOMContentLoaded", function(){

    let prodID = localStorage.getItem('prodID');

    getJSONData("https://japceibal.github.io/emercado-api/products/" + prodID + ".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            ProductArray = resultObj.data;
            ImagesArray = resultObj.data.images;
            showCurrentProduct(ProductArray);
            showCurrentProductImage(ImagesArray);
            showImgGrande(ProductArray);

        }
    });

    getJSONData("https://japceibal.github.io/emercado-api/products_comments/" + prodID + ".json").then(function(resultObj){

        if (resultObj.status === "ok"){
            CommentsArray = resultObj.data;


        }
    
    
});

    

    });

