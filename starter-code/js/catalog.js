/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

var selection;
var how_many;

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  var place_holder = document.createElement('option');
  selectElement.appendChild(place_holder);
  for (var i in Product.allProducts) {
    var new_item_dropdown = document.createElement('option');
    var item = Product.allProducts[i];
    new_item_dropdown.setAttribute('value', Product.allProducts[i].id);
    new_item_dropdown.textContent = item.name;
    selectElement.appendChild(new_item_dropdown);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  //Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

//Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  //suss out the item picked from the select list
  var product = selection.target.value;
  //get the quantity
  var quantity = how_many.target.value;
  //using those, add one item to the Cart
  cart.addItem(product, quantity);
  console.log(cart);
}

//Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  localStorage.setItem('cart_count', cart.items.length);
  var cart_count_element = document.getElementById('itemCount');
  cart_count_element.textContent = cart.items.length;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

var item_selection = document.getElementById('items');
item_selection.addEventListener('change', function(event) { selection = event; });

var item_quantity = document.getElementById('quantity');
item_quantity.addEventListener('change', function(event) { how_many = event; });

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
