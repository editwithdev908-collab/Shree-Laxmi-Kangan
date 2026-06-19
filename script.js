function orderProduct(productName){

const phone = "918815940145";

const message =
"Namaste, mujhe ye product order karna hai: " + product price + productName;

window.open(
"https://wa.me/" + phone +
"?text=" +
encodeURIComponent(message)
);

}

const products = [

{name:"Bridal Bangles",price:"499",category:"bangles"},
{name:"Fancy Bangles",price:"299",category:"bangles"},
{name:"Glass Bangles",price:"199",category:"bangles"},

{name:"Lipstick",price:"149",category:"cosmetics"},
{name:"Kajal",price:"99",category:"cosmetics"},
{name:"Perfume",price:"399",category:"cosmetics"},

{name:"Hair Clip",price:"49",category:"accessories"},
{name:"Hair Band",price:"79",category:"accessories"},

{name:"Necklace Set",price:"799",category:"jewellery"},
{name:"Ring Set",price:"299",category:"jewellery"},

{name:"Designer Earrings",price:"249",category:"earrings"},
{name:"Party Earrings",price:"349",category:"earrings"}

];

function showCategory(category){

document.getElementById("category-title").innerHTML =
category.toUpperCase();

let html = "";

products.forEach(product=>{

if(product.category===category){

html += `

<div class="product">

<img src="https://picsum.photos/300?random=${Math.random()}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="orderProduct('${product.name}')">
Order Now
</button>

</div>
`;

}

});

document.getElementById("product-container").innerHTML =
html;

}

showCategory("bangles");
