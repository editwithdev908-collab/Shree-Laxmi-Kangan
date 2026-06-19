const data = {
  kangan: [
    {name:"Gold Kangan", img:"https://via.placeholder.com/300", price:500},
    {name:"Silver Kangan", img:"https://via.placeholder.com/300", price:300}
  ],
  earrings: [
    {name:"Stud Earrings", img:"https://via.placeholder.com/300", price:150},
    {name:"Party Earrings", img:"https://via.placeholder.com/300", price:250}
  ],
  bangles: [
    {name:"Glass Bangles", img:"https://via.placeholder.com/300", price:100}
  ],
  cosmetics: [
    {name:"Lipstick", img:"https://via.placeholder.com/300", price:200}
  ]
};

// CATEGORY CLICK
document.querySelectorAll(".category").forEach(btn=>{
  btn.addEventListener("click",function(e){
    e.preventDefault();
    showProducts(this.dataset.category);
  });
});

// SHOW PRODUCTS
function showProducts(cat){

  document.getElementById("home").style.display="none";
  document.getElementById("products").style.display="block";

  document.getElementById("categoryTitle").innerText=cat.toUpperCase();

  const list=document.getElementById("productList");
  list.innerHTML="";

  data[cat].forEach(p=>{
    const div=document.createElement("div");
    div.className="product";

    div.innerHTML=`
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button class="buy-btn" onclick="order('${p.name}')">Order on WhatsApp</button>
    `;

    list.appendChild(div);
  });
}

// BACK BUTTON
document.getElementById("backBtn").addEventListener("click",()=>{
  document.getElementById("products").style.display="none";
  document.getElementById("home").style.display="block";
});

// WHATSAPP ORDER
function order(product){
  const phone="918815940145"; // apna number
  const msg=`Hello, I want to order: ${product}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,"_blank");
}
