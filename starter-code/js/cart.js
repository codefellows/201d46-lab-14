/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableRows = document.querySelectorAll('#cart tbody tr');
  
  for(var i = 0; i <= tableRows.length; i++){
    if(tableRows[i]){
      tableRows[i].remove();
    }
  }
};

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
 
  var tableBody = document.querySelector('#cart tbody');
  
  // TODO: Iterate over the items in the cart
  for(var i in cart.items){

  // TODO: Create a TR
    var tr_el = document.createElement('tr');
  
  // TODO: Create a TD for the delete link, quantity,  and the item
    var td_el = document.createElement('td');
    td_el.textContent = 'x';
    td_el.classList.add('remover');
    td_el.id = i;
    var td_amount = document.createElement('td');
    td_amount.textContent = cart.items[i].quantity;
    var td_name = document.createElement('td');
    td_name.textContent = cart.items[i].product;
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tableBody.appendChild(tr_el);
    tr.appendChild(td_el);
    tr.appendChild(td_amount);
    tr.appendChild(td_name);
  }
}

function removeItemFromCart(event) {

  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if(event.target.classList.contains('remover')){
    cart.removeItem(parseInt(event.target.id));
    cart.saveToLocalStorage();
    renderCart();
  }

}

// This will initialize the page and draw the cart on screen
renderCart();
