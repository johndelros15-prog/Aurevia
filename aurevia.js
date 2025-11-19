
/* ----------  PRODUCT DATA (real images + fil-prices)  ---------- */
const products = {
    perfumes: [
        {id:'pf1',name:'Pink Princess Bloom',desc:'Cherry-blossom & vanilla – everyday princess vibes.',price:3499,image:'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop'},
        {id:'pf2',name:'Rosy Elixir',desc:'Romantic rose & peony with pink sugar.',price:4299,image:'https://images.unsplash.com/photo-1556048219-bb6978360b84?w=400&h=400&fit=crop'},
        {id:'pf3',name:'Candy Cloud',desc:'Cotton-candy & caramel – smells like a pink store!',price:2999,image:'https://images.unsplash.com/photo-1523294587484-bae6cc870010?w=400&h=400&fit=crop'},
        {id:'pf4',name:'Midnight Magic',desc:'Blackberry, jasmine & pink amber for special nights.',price:4999,image:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop'},
        {id:'pf5',name:'Petal Paradise',desc:'Fresh peony, lily & white tea – a pink garden.',price:3799,image:'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop'}
    ],
    bags: [
        {id:'bg1',name:'Bow Tote',desc:'Large pink tote with satin bow + gold hardware.',price:6499,image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'},
        {id:'bg2',name:'Heart Crossbody',desc:'Mini crossbody with heart charm – concerts & dates.',price:2999,image:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop'},
        {id:'bg3',name:'Satchel Dream',desc:'Quilted pink satchel with gold chain strap.',price:7999,image:'https://images.unsplash.com/photo-1590874103328-eac38a683ce3?w=400&h=400&fit=crop'},
        {id:'bg4',name:'Sparkly Backpack',desc:'Pink glitter backpack – school/travel ready!',price:4999,image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'},
        {id:'bg5',name:'Crystal Clutch',desc:'Evening clutch with crystal clasp – party perfect.',price:5499,image:'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop'}
    ],
    plushies: [
        {id:'pl1',name:'Giant Unicorn',desc:'24" unicorn with rainbow mane + glitter horn.',price:2499,image:'https://images.unsplash.com/photo-1556012014-72c7b6f810fc?w=400&h=400&fit=crop'},
        {id:'pl2',name:'Kawaii Cat',desc:'Pink cat with big eyes & bow tie – super huggable.',price:1499,image:'https://images.unsplash.com/photo-1605901309584-818e25960a1f?w=400&h=400&fit=crop'},
        {id:'pl3',name:'Bear Family',desc:'Set of 3 pink teddies – super cuddly!',price:3499,image:'https://images.unsplash.com/photo-1586023842575-54f2206049f8?w=400&h=400&fit=crop'},
        {id:'pl4',name:'Magic Dragon',desc:'Dragon plush with sparkly wings + pearl necklace.',price:2999,image:'https://images.unsplash.com/photo-1556012014-72c7b6f810fc?w=400&h=400&fit=crop'},
        {id:'pl5',name:'Pillow Pet',desc:'Soft pink pillow that folds into a puppy.',price:1999,image:'https://images.unsplash.com/photo-1605901309584-818e25960a1f?w=400&h=400&fit=crop'}
    ]
};

/* ----------  CART + ORDER LOGIC  ---------- */
let cart = [];
let orders = [];
let selectedPay = null;

document.addEventListener('DOMContentLoaded',()=>{
    renderAll();
    updateCount();
    aniFade();
});

function renderAll(){
    renderCat('perfumes','perfumesGrid');
    renderCat('bags','bagsGrid');
    renderCat('plushies','plushiesGrid');
}
function renderCat(cat,gridId){
    const grid=document.getElementById(gridId);
    grid.innerHTML=products[cat].map(p=>`
        <div class="card fade-in">
            <img src="${p.image}" alt="${p.name}" class="card-img">
            <div class="card-body">
                <h3 class="card-title">${p.name}</h3>
                <p class="card-desc">${p.desc}</p>
                <div class="card-price">₱${p.price.toLocaleString()}</div>
                <button class="card-btn" onclick="addCart('${p.id}','${cat}')">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function addCart(pid,cat){
    const prod=products[cat].find(p=>p.id===pid);
    const exist=cart.find(i=>i.id===pid);
    exist ? exist.quantity++ : cart.push({...prod,quantity:1,cat});
    updateCount();updateCart();showNote('Added to cart! 🌸');
}

function updateCount(){
    document.getElementById('cartCount').textContent=cart.reduce((t,i)=>t+i.quantity,0);
}
function updateCart(){
    const ci=document.getElementById('cartItems'),ct=document.getElementById('cartTotal');
    if(cart.length===0){ci.innerHTML='<p style="text-align:center;color:#999">Your pink cart is empty 🌸</p>';ct.textContent='0';return;}
    ci.innerHTML=cart.map(i=>`
        <div class="cart-item">
            <img src="${i.image}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-name">${i.name}</div>
                <div class="cart-item-price">₱${i.price.toLocaleString()}</div>
                <div class="quantity-controls">
                    <button class="q-btn" onclick="updQty('${i.id}',-1)"><i class="fas fa-minus"></i></button>
                    <span class="q-display">${i.quantity}</span>
                    <button class="q-btn" onclick="updQty('${i.id}',1)"><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <button class="remove-btn" onclick="remCart('${i.id}')"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
    ct.textContent=cart.reduce((s,i)=>s+i.price*i.quantity,0).toLocaleString();
}
function updQty(pid,ch){
    const item=cart.find(i=>i.id===pid);
    if(!item)return;
    item.quantity+=ch;
    if(item.quantity<=0)cart=cart.filter(i=>i.id!==pid);
    updateCount();updateCart();
}
function remCart(pid){
    cart=cart.filter(i=>i.id!==pid);
    updateCount();updateCart();
}

function toggleCart(){
    document.getElementById('cartSide').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}
function scrollToSec(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});}

/* ----------  PAYMENT  ---------- */
function goCheckout(){
    if(cart.length===0){showNote('Cart is empty 🌸','error');return;}
    toggleCart();
    document.getElementById('payModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}
function pickPay(method){
    selectedPay=method;
    document.querySelectorAll('.pay-card').forEach(c=>c.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    document.getElementById('payForm').style.display='block';
    document.getElementById('cardOpts').style.display=method==='card'?'block':'none';
}
function processPay(){
    const name=document.getElementById('custName').value.trim();
    const phone=document.getElementById('custPhone').value.trim();
    if(!name||!phone){showNote('Fill all fields 🌸','error');return;}
    const btn=document.querySelector('.pay-now');
    btn.innerHTML='<span class="loading"></span>Processing...';btn.disabled=true;
    setTimeout(()=>{
        orders.push({
            id:'ORD'+Date.now(),items:[...cart],
            total:cart.reduce((s,i)=>s+i.price*i.quantity,0),
            customerName:name,customerPhone:phone,paymentMethod:selectedPay,
            date:new Date().toLocaleString(),status:'pending'
        });
        cart=[];updateCount();
        closePayModal();document.getElementById('succModal').classList.add('active');
        btn.innerHTML='Pay Now';btn.disabled=false;
    },2000);
}
function closePayModal(){
    document.getElementById('payModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('payForm').style.display='none';
    document.querySelectorAll('.pay-card').forEach(c=>c.classList.remove('selected'));
    selectedPay=null;
}
function closeSuccModal(){
    document.getElementById('succModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

/* ----------  ORDERS  ---------- */
function openOrders(){
    updateOrders();
    document.getElementById('ordModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}
function updateOrders(){
    const list=document.getElementById('ordersList');
    if(orders.length===0){list.innerHTML='<p style="text-align:center;color:#999">No orders yet 🌸</p>';return;}
    list.innerHTML=orders.map(o=>`
        <div class="order-item">
            <div class="order-header">
                <div><strong>Order ${o.id}</strong><div style="font-size:.8rem;color:#999">${o.date}</div></div>
                <div style="text-align:right">
                    <span class="order-status ${o.status}">${o.status.toUpperCase()}</span>
                    <div style="font-weight:600;color:var(--pink-deep)">₱${o.total.toLocaleString()}</div>
                </div>
            </div>
            <div style="margin-bottom:15px">
                ${o.items.map(i=>`<div style="display:flex;justify-content:space-between"><span>${i.name} ×${i.quantity}</span><span>₱${(i.price*i.quantity).toLocaleString()}</span></div>`).join('')}
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center">
                <div style="font-size:.8rem"><strong>Payment:</strong> ${o.paymentMethod.toUpperCase()}<br><strong>Name:</strong> ${o.customerName}</div>
                ${o.status==='pending'?`<button class="cancel-order-btn" onclick="cancelOrder('${o.id}')">Cancel</button>`:''}
            </div>
        </div>
    `).join('');
}
function cancelOrder(oid){
    if(!confirm('Cancel this order? 🌸'))return;
    const o=orders.find(x=>x.id===oid);
    if(o){o.status='cancelled';updateOrders();showNote('Order cancelled 🌸');}
}
function closeOrders(){
    document.getElementById('ordModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}
function closeAll(){
    closePayModal();closeSuccModal();closeOrders();toggleCart();
}

/* ----------  UTILS  ---------- */
function showNote(msg,type='success'){
    const n=document.createElement('div');
    n.style.cssText=`position:fixed;top:100px;right:20px;background:${type==='success'?'var(--pink-bubble)':'#dc3545'};color:white;padding:15px 20px;border-radius:25px;z-index:4000;animation:slideIn .3s ease;font-weight:500;`;
    n.textContent=msg;document.body.appendChild(n);
    setTimeout(()=>n.remove(),3000);
}
const style=document.createElement('style');
style.textContent=`@keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}`;
document.head.appendChild(style);

/* ----------  FADE-IN on SCROLL  ---------- */
function aniFade(){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('visible',e.isIntersecting)),{threshold:.15});
    document.querySelectorAll('.fade-in').forEach(el=>io.observe(el));
    }
