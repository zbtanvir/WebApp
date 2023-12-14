// scripts.js

document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });

  const homeBtn = document.querySelector('.nav-link.home');
  const signUpBtn = document.querySelector('.nav-link.signup');
  const signInBtn = document.querySelector('.nav-link.signin');
  const cartBtn = document.querySelector('.nav-link.cart');

  homeBtn.addEventListener('click', function () {
    navigateToPage('index.html');
  });

  signUpBtn.addEventListener('click', function () {
    navigateToPage('signup.html');
  });

  signInBtn.addEventListener('click', function () {
    navigateToPage('signin.html');
  });

  cartBtn.addEventListener('click', function () {
    navigateToPage('cart.html');
  });
});

function viewDetails(itemName, price) {
  alert('View details for ' + itemName + '\nPrice: $' + price);
}

function addToCart(itemName, price) {
  // Get existing cart items from localStorage
  const storedCart = localStorage.getItem('cart');
  const cart = storedCart ? JSON.parse(storedCart) : [];

  // Add the new item to the cart
  const newItem = { name: itemName, price: price };
  cart.push(newItem);

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  alert('Added ' + itemName + ' to the cart.\nPrice: $' + price);

  // Update the cart display
  displayCart();
}

function removeItemFromCart(index) {
  // Get existing cart items from localStorage
  const storedCart = localStorage.getItem('cart');
  let cart = storedCart ? JSON.parse(storedCart) : [];

  // Remove the item at the specified index
  cart.splice(index, 1);

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update the cart display
  displayCart();
}

function displayTotalAmount() {
  const totalAmountElement = document.getElementById('total-amount');
  
  // Get cart items from localStorage
  const storedCart = localStorage.getItem('cart');
  const cart = storedCart ? JSON.parse(storedCart) : [];

  // Calculate the total amount
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  // Display the total amount
  totalAmountElement.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
}

function displayCart() {
  const cartList = document.getElementById('cart-list');

  // Get cart items from localStorage
  const storedCart = localStorage.getItem('cart');
  const cart = storedCart ? JSON.parse(storedCart) : [];

  // Clear existing items
  cartList.innerHTML = '';

  // Display each item in the cart
  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    
    // Add a remove button for each item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'btn remove-btn';
    removeButton.addEventListener('click', function () {
      removeItemFromCart(index);
    });

    listItem.appendChild(removeButton);
    cartList.appendChild(listItem);
  });

  // Display the total amount
  displayTotalAmount();
}

function navigateToPage(page) {
  // Navigate to the specified page
  window.location.href = page;
}

// Update the cart display when the page loads
window.onload = function () {
  displayCart();
};
