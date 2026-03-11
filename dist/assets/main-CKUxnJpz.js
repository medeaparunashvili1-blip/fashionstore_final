import"./style-DUnfd71e.js";let o=[],c=JSON.parse(localStorage.getItem("cart"))||[];const d=document.getElementById("productsGrid"),f=document.querySelectorAll(".filter-btn"),p=document.getElementById("cartBtn"),i=document.getElementById("cartModal"),$=document.getElementById("closeCart"),C=document.getElementById("cartCount"),m=document.getElementById("cartItems"),v=document.getElementById("cartTotal"),E=document.getElementById("checkoutBtn");async function L(){try{o=await(await fetch("/products.json")).json(),l(o)}catch{d.innerHTML='<div class="loading">Error loading products</div>'}}function l(t){if(t.length===0){d.innerHTML='<div class="loading">No products found</div>';return}d.innerHTML=t.map(e=>`
    <div class="product-card" data-id="${e.id}">
      <img src="${e.image}" alt="${e.name}" class="product-image" />
      <div class="product-info">
        <div class="product-category">${e.category}</div>
        <div class="product-name">${e.name}</div>
        <div class="product-price">$${e.price.toFixed(2)}</div>
        <button class="add-to-cart-btn" onclick="addToCart(${e.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `).join("")}function k(t){if(f.forEach(e=>{e.classList.remove("active"),e.dataset.category===t&&e.classList.add("active")}),t==="All")l(o);else{const e=o.filter(n=>n.category===t);l(e)}}window.addToCart=function(t){const e=o.find(r=>r.id===t);if(!e)return;const n=c.find(r=>r.id===t);n?n.quantity+=1:c.push({...e,quantity:1}),u(),s();const a=event.target,g=a.textContent;a.textContent="Added!",a.style.background="#27ae60",setTimeout(()=>{a.textContent=g,a.style.background=""},1e3)};function y(t){c=c.filter(e=>e.id!==t),u(),s()}function B(t,e){const n=c.find(a=>a.id===t);n&&(n.quantity+=e,n.quantity<=0?y(t):(u(),s()))}function u(){localStorage.setItem("cart",JSON.stringify(c))}function s(){const t=c.reduce((n,a)=>n+a.quantity,0);if(C.textContent=t,c.length===0){m.innerHTML='<div class="empty-cart">Your cart is empty</div>',v.textContent="$0.00";return}const e=c.reduce((n,a)=>n+a.price*a.quantity,0);v.textContent=`$${e.toFixed(2)}`,m.innerHTML=c.map(n=>`
    <div class="cart-item">
      <img src="${n.image}" alt="${n.name}" class="cart-item-image" />
      <div class="cart-item-info">
        <div class="cart-item-name">${n.name}</div>
        <div class="cart-item-price">$${n.price.toFixed(2)}</div>
        <div class="cart-item-actions">
          <button class="quantity-btn" onclick="updateQuantity(${n.id}, -1)">-</button>
          <span class="quantity">${n.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${n.id}, 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${n.id})">🗑️</button>
        </div>
      </div>
    </div>
  `).join("")}window.updateQuantity=B;window.removeFromCart=y;f.forEach(t=>{t.addEventListener("click",()=>{k(t.dataset.category)})});p.addEventListener("click",()=>{i.classList.add("active")});$.addEventListener("click",()=>{i.classList.remove("active")});i.addEventListener("click",t=>{t.target===i&&i.classList.remove("active")});E.addEventListener("click",()=>{if(c.length===0){alert("Your cart is empty!");return}window.location.href="/checkout.html"});L();s();
