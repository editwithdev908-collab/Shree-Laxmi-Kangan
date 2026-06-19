// ---------------- PRODUCTS DATABASE ----------------
const data = [
  {id:1, name:"Gold Bangles", price:500, cat:"bangles", img:"https://via.placeholder.com/120"},
  {id:2, name:"Bridal Bangles", price:1200, cat:"bangles", img:"https://via.placeholder.com/120"},
  {id:3, name:"Bridal Jewellery", price:2500, cat:"jewellery", img:"https://via.placeholder.com/120"},
  {id:4, name:"Lipstick", price:200, cat:"cosmetics", img:"https://via.placeholder.com/120"},
  {id:5, name:"Hair Clip", price:100, cat:"accessory", img:"https://via.placeholder.com/120"}
];

// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ---------------- HOME PAGE PRODUCTS ----------------
if(document.getElementById("homeProducts")){
  let home = document.getElementById("homeProducts");

  data.forEach(p=>{
    home.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>

        <div class="qty">
          <button onclick="minus(${p.id})">-</button>
          <span id="q${p.id}">1</span>
          <button onclick="plus(${p.id})">+</button>
        </div>

        <button onclick="add(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// ---------------- PRODUCT PAGE ----------------
if(document.getElementById("products")){
  renderProducts(data);

  document.getElementById("sortBox").onchange = function(){
    let val = this.value;

    if(val==="low") data.sort((a,b)=>a.price-b.price);
    if(val==="high") data.sort((a,b)=>b.price-a.price);

    renderProducts(data);
  };

  document.getElementById("filterBox").onchange = function(){
    let val = this.value;

    if(val==="all") renderProducts(data);
    else renderProducts(data.filter(p=>p.cat===val));
  };
}

// ---------------- RENDER PRODUCTS ----------------
function renderProducts(list){
  let box = document.getElementById("products");
  box.innerHTML = "";

  list.forEach(p=>{
    box.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>

        <div class="qty">
          <button onclick="minus(${p.id})">-</button>
          <span id="q${p.id}">1</span>
          <button onclick="plus(${p.id})">+</button>
        </div>

        <button onclick="add(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// ---------------- QTY SYSTEM ----------------
let qty = {};

function plus(id){
  qty[id] = (qty[id] || 1) + 1;
  document.getElementById("q"+id).innerText = qty[id];
}

function minus(id){
  if((qty[id]||1)>1){
    qty[id]--;
    document.getElementById("q"+id).innerText = qty[id];
  }
}

// ---------------- ADD TO CART ----------------
function add(id){
  let product = data.find(p=>p.id===id);
  let q = qty[id] || 1;

  cart.push({...product, qty:q});
  localStorage.setItem("cart",JSON.stringify(cart));

  renderCart();
}

// ---------------- CART ----------------
function renderCart(){
  let box = document.getElementById("cartItems");
  if(!box) return;

  box.innerHTML = "";
  let total = 0;

  cart.forEach((c,i)=>{
    total += c.price * c.qty;

    box.innerHTML += `
      ${c.name} x ${c.qty} = ₹${c.price*c.qty}
      <button onclick="removeItem(${i})">❌</button><br>
    `;
  });

  box.innerHTML += `<hr><b>Total: ₹${total}</b>`;
}

// REMOVE
function removeItem(i){
  cart.splice(i,1);
  localStorage.setItem("cart",JSON.stringify(cart));
  renderCart();
}

// ---------------- WHATSAPP ORDER ----------------
function sendWhatsApp(){
  let msg = "🛍 ORDER DETAILS:\n\n";
  let total = 0;

  cart.forEach(c=>{
    msg += `${c.name} x ${c.qty} = ₹${c.price*c.qty}\n`;
    total += c.price*c.qty;
  });

  msg += `\nTOTAL: ₹${total}`;

  window.open("https://wa.me/918815940145?text="+encodeURIComponent(msg));
}

// INIT CART
renderCart();
