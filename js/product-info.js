let ProductArray = [];


function showCurrentProductImage(array){

    let htmlContentToAppend = "";
            htmlContentToAppend += `
                        <img src="${array.images[0]}" alt="${array.description}" style="float: right;">
            `
        

        document.getElementById("prueba").innerHTML += htmlContentToAppend;
    }



function showCurrentProduct(array){

        let htmlContentToAppend = "";
                htmlContentToAppend += `
                        <div>
                            <p class="flecha" > < <span id="atras" class="category"><a onclick="window. history. back();">${array.category}</a></span></p>
                            <h1 class="nombre"><strong>${array.name}</strong></h1>
                            <hr>
                            <p class="description"> ${array.description} </p>
                            <h2 class="precio">${array.currency} ${array.cost} </h2>
                            <p class="vendidos">${array.soldCount} vendidos</p>
                        </div>
                `
            document.getElementById("prueba2").innerHTML = htmlContentToAppend;
        }



document.addEventListener("DOMContentLoaded", function(){

    let prodID = localStorage.getItem('prodID');

    getJSONData("https://japceibal.github.io/emercado-api/products/" + prodID + ".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            ProductArray = resultObj.data
            showCurrentProductImage(ProductArray);
            showCurrentProduct(ProductArray);

        }
    });




    });

