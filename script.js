// ---------------- PRODUCTS ----------------

const data = [

{ id:1, name:"Designer Bangles 1", price:299, cat:"bangles", img:"https://picsum.photos/300?1"},
{ id:2, name:"Designer Bangles 2", price:349, cat:"bangles", img:"https://picsum.photos/300?2"},
{ id:3, name:"Designer Bangles 3", price:399, cat:"bangles", img:"https://picsum.photos/300?3"},
{ id:4, name:"Designer Bangles 4", price:449, cat:"bangles", img:"https://picsum.photos/300?4"},
{ id:5, name:"Designer Bangles 5", price:499, cat:"bangles", img:"https://picsum.photos/300?5"},
{ id:6, name:"Designer Bangles 6", price:549, cat:"bangles", img:"https://picsum.photos/300?6"},
{ id:7, name:"Designer Bangles 7", price:599, cat:"bangles", img:"https://picsum.photos/300?7"},
{ id:8, name:"Designer Bangles 8", price:649, cat:"bangles", img:"https://picsum.photos/300?8"},
{ id:9, name:"Designer Bangles 9", price:699, cat:"bangles", img:"https://picsum.photos/300?9"},
{ id:10, name:"Designer Bangles 10", price:749, cat:"bangles", img:"https://picsum.photos/300?10"},

{ id:11, name:"Cosmetic Kit 1", price:199, cat:"cosmetics", img:"https://picsum.photos/300?11"},
{ id:12, name:"Cosmetic Kit 2", price:249, cat:"cosmetics", img:"https://picsum.photos/300?12"},
{ id:13, name:"Cosmetic Kit 3", price:299, cat:"cosmetics", img:"https://picsum.photos/300?13"},
{ id:14, name:"Cosmetic Kit 4", price:349, cat:"cosmetics", img:"https://picsum.photos/300?14"},
{ id:15, name:"Cosmetic Kit 5", price:399, cat:"cosmetics", img:"https://picsum.photos/300?15"},
{ id:16, name:"Cosmetic Kit 6", price:449, cat:"cosmetics", img:"https://picsum.photos/300?16"},
{ id:17, name:"Cosmetic Kit 7", price:499, cat:"cosmetics", img:"https://picsum.photos/300?17"},
{ id:18, name:"Cosmetic Kit 8", price:549, cat:"cosmetics", img:"https://picsum.photos/300?18"},
{ id:19, name:"Cosmetic Kit 9", price:599, cat:"cosmetics", img:"https://picsum.photos/300?19"},
{ id:20, name:"Cosmetic Kit 10", price:649, cat:"cosmetics", img:"https://picsum.photos/300?20"},

{ id:21, name:"Accessory 1", price:99, cat:"accessories", img:"https://picsum.photos/300?21"},
{ id:22, name:"Accessory 2", price:149, cat:"accessories", img:"https://picsum.photos/300?22"},
{ id:23, name:"Accessory 3", price:199, cat:"accessories", img:"https://picsum.photos/300?23"},
{ id:24, name:"Accessory 4", price:249, cat:"accessories", img:"https://picsum.photos/300?24"},
{ id:25, name:"Accessory 5", price:299, cat:"accessories", img:"https://picsum.photos/300?25"},
{ id:26, name:"Accessory 6", price:349, cat:"accessories", img:"https://picsum.photos/300?26"},
{ id:27, name:"Accessory 7", price:399, cat:"accessories", img:"https://picsum.photos/300?27"},
{ id:28, name:"Accessory 8", price:449, cat:"accessories", img:"https://picsum.photos/300?28"},
{ id:29, name:"Accessory 9", price:499, cat:"accessories", img:"https://picsum.photos/300?29"},
{ id:30, name:"Accessory 10", price:549, cat:"accessories", img:"https://picsum.photos/300?30"},

{ id:31, name:"Jewellery 1", price:599, cat:"jewellery", img:"https://picsum.photos/300?31"},
{ id:32, name:"Jewellery 2", price:699, cat:"jewellery", img:"https://picsum.photos/300?32"},
{ id:33, name:"Jewellery 3", price:799, cat:"jewellery", img:"https://picsum.photos/300?33"},
{ id:34, name:"Jewellery 4", price:899, cat:"jewellery", img:"https://picsum.photos/300?34"},
{ id:35, name:"Jewellery 5", price:999, cat:"jewellery", img:"https://picsum.photos/300?35"},
{ id:36, name:"Jewellery 6", price:1099, cat:"jewellery", img:"https://picsum.photos/300?36"},
{ id:37, name:"Jewellery 7", price:1199, cat:"jewellery", img:"https://picsum.photos/300?37"},
{ id:38, name:"Jewellery 8", price:1299, cat:"jewellery", img:"https://picsum.photos/300?38"},
{ id:39, name:"Jewellery 9", price:1399, cat:"jewellery", img:"https://picsum.photos/300?39"},
{ id:40, name:"Jewellery 10", price:1499, cat:"jewellery", img:"https://picsum.photos/300?40"},

{ id:41, name:"Earrings 1", price:149, cat:"earrings", img:"https://picsum.photos/300?41"},
{ id:42, name:"Earrings 2", price:199, cat:"earrings", img:"https://picsum.photos/300?42"},
{ id:43, name:"Earrings 3", price:249, cat:"earrings", img:"https://picsum.photos/300?43"},
{ id:44, name:"Earrings 4", price:299, cat:"earrings", img:"https://picsum.photos/300?44"},
{ id:45, name:"Earrings 5", price:349, cat:"earrings", img:"https://picsum.photos/300?45"},
{ id:46, name:"Earrings 6", price:399, cat:"earrings", img:"https://picsum.photos/300?46"},
{ id:47, name:"Earrings 7", price:449, cat:"earrings", img:"https://picsum.photos/300?47"},
{ id:48, name:"Earrings 8", price:499, cat:"earrings", img:"https://picsum.photos/300?48"},
{ id:49, name:"Earrings 9", price:549, cat:"earrings", img:"https://picsum.photos/300?49"},
{ id:50, name:"Earrings 10", price:599, cat:"earrings", img:"https://picsum.photos/300?50"}

];

// CART

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// HOME PAGE

if(document.getElementById("homeProducts")){

const featured = data.slice(0,6);

document.getElementById("homeProducts").innerHTML =
featured.map(p=>`

<div class="card"><img src="${p.img}"><h3>${p.name}</h3><p>₹${p.price}</p><button onclick="addToCart(${p.id})">
Add To Cart
</button></div>`).join("");

}

// ADD TO CART

function addToCart(id){

const product = data.find(p=>p.id===id);

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert(product.name + " Added To Cart");

}

// WHATSAPP ORDER

function sendWhatsApp(){

let msg = "🛍 Order Details%0A%0A";

cart.forEach(item=>{
msg += item.name + " - ₹" + item.price + "%0A";
});

window.open(
"https://wa.me/918815940145?text=" + msg,
"_blank"
);

}
