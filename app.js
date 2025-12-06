function shopNow() {
    let discount = 20;
    alert("🎉 Welcome to Elite Store! Enjoy " + discount + "% OFF on selected items today.");
}


let cart = [];


function addToCart(productName, price, img) {
    const discount = 0.20; 
    const discountedPrice = price - (price * discount);

    cart.push({ name: productName, price: discountedPrice, img: img });
    renderCart();
    openCart();

    alert(`${productName} added to cart!\nSpecial Offer: 20% OFF applied!\nCart Items: ${cart.length}`);
}

function renderCart() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
          <div class="cart-item">
            <img src="${item.img}" alt="${item.name}">
            <p>${item.name} <br><strong>Rs ${item.price}</strong></p>
            <button class="remove-btn" onclick="removeFromCart(${index})">X</button>
          </div>
        `;
    });
}


function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}


function openCart() {
    document.getElementById("cartSidebar").classList.add("active");
}

function closeCart() {
    document.getElementById("cartSidebar").classList.remove("active");
}


function showDateTime() {
    let now = new Date();
    let dateTime = now.toLocaleString("en-US", { 
        weekday: 'long', year: 'numeric', month: 'long', 
        day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' 
    });

    document.getElementById("datetime").innerText = dateTime;
}
setInterval(showDateTime, 1000);
