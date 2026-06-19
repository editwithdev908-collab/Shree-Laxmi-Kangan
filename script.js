function orderProduct(productName) {

    const phone = "918815940145";

    const message =
    "Namaste, mujhe ye product order karna hai: " + productName;

    const whatsappURL =
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}
const products = [

{
name:"Bridal Bangles",
price:"499",
category:"bangles"
},

{
name:"Fancy Bangles",
price:"299",
category:"bangles"
},

{
name:"Lipstick",
price:"199",
category:"cosmetics"
},

{
name:"Kajal",
price:"99",
category:"cosmetics"
},

{
name:"Hair Clip",
price:"149",
category:"accessories"
},

{
name:"Necklace Set",
price:"799",
category:"jewellery"
},

{
name:"Designer Earrings",
price:"249",
category:"earrings"
}

];

function showCategory(category){

const container =
document.getElementById("product-container");

container.innerHTML="";

products.forEach(product=>{

if(category==="all" ||
product.category===category){

container.innerHTML += `
<div class="product">

<img src="https://picsum.photos/300">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="orderProduct('${product.name}')">
Order Now
</button>

</div>
`;

}

});

}

showCategory('all');
