
/* ----------  PRODUCT DATA (real images + fil-prices)  ---------- */
const products = {
    perfumes: [
        {id:'pf1',name:'Pink Princess Bloom',desc:'Cherry-blossom & vanilla – everyday princess vibes.',price:1499,image:'data:image/jpeg;base64,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'},
        {id:'pf2',name:'Rosy Elixir',desc:'Romantic rose & peony with pink sugar.',price:2299,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv05qd4ap2zUPuTfnadrJM6l1iT8QLu8vwvQ&s'},
        {id:'pf3',name:'Candy Cloud',desc:'Cotton-candy & caramel – smells like a pink store!',price:999,image:'data:image/jpeg;base64,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'},
        {id:'pf4',name:'Midnight Magic',desc:'Blackberry, jasmine & pink amber for special nights.',price:3999,image:'data:image/jpeg;base64,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'},
        {id:'pf5',name:'Petal Paradise',desc:'Fresh peony, lily & white tea – a pink garden.',price:2799,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDd95UDvGwL5E_06reli-irUBYlSRJoZUzjw&s'}
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
