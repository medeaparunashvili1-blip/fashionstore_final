import"./style-DUnfd71e.js";let r=JSON.parse(localStorage.getItem("cart"))||[];const c=document.getElementById("orderItems"),l=document.getElementById("subtotal"),s=document.getElementById("shipping"),m=document.getElementById("tax"),u=document.getElementById("finalTotal"),p=document.getElementById("checkoutForm"),y=document.getElementById("placeOrderBtn"),g=10,h=.08;function d(){if(r.length===0){window.location.href="/";return}const e=r.reduce((n,i)=>n+i.price*i.quantity,0),t=g,o=e*h,a=e+t+o;return{subtotal:e,shipping:t,tax:o,total:a}}function f(){if(r.length===0){c.innerHTML='<div style="text-align: center; padding: 20px; color: #666;">Your cart is empty</div>';return}c.innerHTML=r.map(n=>`
    <div class="order-item">
      <div class="order-item-details">
        <div class="order-item-name">${n.name}</div>
        <div class="order-item-quantity">Quantity: ${n.quantity}</div>
      </div>
      <div class="order-item-price">$${(n.price*n.quantity).toFixed(2)}</div>
    </div>
  `).join("");const{subtotal:e,shipping:t,tax:o,total:a}=d();l.textContent=`$${e.toFixed(2)}`,s.textContent=`$${t.toFixed(2)}`,m.textContent=`$${o.toFixed(2)}`,u.textContent=`$${a.toFixed(2)}`}y.addEventListener("click",()=>{const e=p;if(!e.checkValidity()){e.reportValidity();return}const t=new FormData(e),o=document.querySelector('input[name="payment"]:checked').value,a={customer:{fullName:t.get("fullName"),email:t.get("email"),address:t.get("address"),city:t.get("city"),zipCode:t.get("zipCode"),phone:t.get("phone")},paymentMethod:o,items:r,totals:d(),orderDate:new Date().toISOString()};localStorage.setItem("lastOrder",JSON.stringify(a)),localStorage.removeItem("cart"),alert("Order placed successfully! Thank you for your purchase."),window.location.href="/"});f();
