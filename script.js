const products = {
  bangles: [
    {name:"Gold Bangles", price:500},
    {name:"Bridal Bangles", price:1200},
    {name:"Lakh Bangles", price:300},
    {name:"Designer Bangles", price:800},
    {name:"Silk Bangles", price:400}
  ],

  jewellery: [
    {name:"Bridal Jewellery", price:2500},
    {name:"Rajputi Jewellery", price:3000},
    {name:"Indian Jewellery", price:1800}
  ],

  accessory: [
    {name:"Hair Clip", price:50},
    {name:"Ring", price:100},
    {name:"Chain", price:200}
  ],

  cosmetics: [
    {name:"Lipstick", price:200},
    {name:"Cream", price:150},
    {name:"Powder", price:100}
  ],

  new: [
    {name:"New Product 1", price:500},
    {name:"New Product 2", price:600}
  ]
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");

document.getElementById("title").innerText = cat.toUpperCase();

const list = document.getElementById("productList");

products[cat].forEach(p=>{
  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>
  `;

  list.appendChild(div);
});

function addToCart(name,price){
  cart.push({name,price});
  localStorage.setItem("cart",JSON.stringify(cart));
  renderCart();
}

function renderCart(){
  const box = document.getElementById("cartItems");
  box.innerHTML = "";

  let total = 0;

  cart.forEach(c=>{
    total += c.price;
    box.innerHTML += `✔ ${c.name} - ₹${c.price}<br>`;
  });

  box.innerHTML += `<hr><b>Total: ₹${total}</b>`;
}

renderCart();

function sendWhatsApp(){
  let msg = "🛍 ORDER:\n\n";
  let total = 0;

  cart.forEach(c=>{
    msg += `${c.name} - ₹${c.price}\n`;
    total += c.price;
  });

  msg += `\nTOTAL: ₹${total}`;

  window.open(`https://wa.me/918815940145?text=${encodeURIComponent(msg)}`);
}
