let productsArray = [];
let minCount = undefined;
let maxCount = undefined;

function showProductList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < productsArray.length; i++){
        let products = productsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(products.productCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(products.productCount) <= maxCount))){

            htmlContentToAppend += `
            <div onclick="setCatID(${products.name})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${products.image}" alt="${products.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${products.name} - ${products.currency} ${products.cost}</h4>
                            <small class="text-muted">${products.soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${products.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    getJSONData("https://japceibal.github.io/emercado-api/cats_products/101.json").then(function(resultObj){
        if (resultObj.status === "ok"){
            productsArray = resultObj.data.products
            document.getElementById("catName").innerHTML = resultObj.data.catName
            showProductList()
        }
    })
    
})