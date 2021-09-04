import logo from './logo.svg';
import './App.css';
import React from 'react';
import Product from './Screens/Product';
import {BrowserRouter,Route,Link} from 'react-router-dom'

function App() {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", ready);
    } else {
      ready();
    }
    
    
    function ready() {
      var removeBtn = document.getElementsByClassName("btn-danger");
      for (var i = 0; i < removeBtn.length; i++) {
        var button = removeBtn[i];
        button.onClick("click", removeItem);
      }
    
      var quantityInputs = document.getElementsByClassName("cart-quantity-input");
      for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
      }
    
      var addBtn = document.getElementsByClassName("shop-item-button");
      for (var i = 0; i < addBtn.length; i++) {
        var button = addBtn[i];
        button.addEventListener("click", addToCartClicked);
      }
    }
    
    var quantityList = [];
    var titleList = [];
    
    function purchaseClicked() {
      var total = getTotal();
      
      var cartContainer = document.getElementsByClassName("cart-items")[0];
      var cartRows = cartContainer.getElementsByClassName("cart-row");
      for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var quantityElement = cartRow.getElementsByClassName(
          "cart-quantity-input"
        )[0];
        var quantity = quantityElement.value;
    
        var titles = document.getElementsByClassName("cart-item-title");
        
        var title = titles[i].innerText;
    
        
        quantityList[i] = quantity;
        titleList[i] = title;    
      }
    
        var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              var myDiv = document.getElementById('demo');
              myDiv.innerHTML = xhttp.responseText;
              var myScripts = myDiv.getElementsByTagName("script");
              if (myScripts.length > 0) {
              eval(myScripts[0].innerHTML);
              }
           }
        };
        xhttp.open("GET" , "check_login.php?title=" + titleList + "&quantity=" + quantityList + "&total=" + total);
        xhttp.send();
    
    
      var cartItems = document.getElementsByClassName("cart-items")[0];
      while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
      }
      getTotal();
    }
    
    function removeItem(event) {
      var buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove();
      getTotal();
    }
    
    function quantityChanged(event) {
      var input = event.target;
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
      getTotal();
    }
    
    function addToCartClicked(event) {
      var button = event.target;
      var shopItem = button.parentElement.parentElement;
      var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
      var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
      var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
      addItemToCart(title, price, imageSrc);
      getTotal();
    }
    
    function addItemToCart(title, price, imageSrc) {
      var cartRow = document.createElement("div");
      cartRow.classList.add("cart-row");
      var cartItems = document.getElementsByClassName("cart-items")[0];
      var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
      for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
          alert("This item is already added to the cart");
          return;
        }
      }
      var cartRowContents = `
          <div class="cart-item cart-column">
              <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
              <span class="cart-item-title">${title}</span>
          </div>
          <span class="cart-price cart-column">${price}</span>
          <div class="cart-quantity cart-column">
              <input class="cart-quantity-input" type="number" value="1">
              <button class="btn btn-danger" type="button">REMOVE</button>
          </div>`;
      cartRow.innerHTML = cartRowContents;
      cartItems.append(cartRow);
      cartRow
        .getElementsByClassName("btn-danger")[0]
        .addEventListener("click", removeItem);
      cartRow
        .getElementsByClassName("cart-quantity-input")[0]
        .addEventListener("change", quantityChanged);
    }
    
    function getTotal() {
      var cartContainer = document.getElementsByClassName("cart-items")[0];
      var cartRows = cartContainer.getElementsByClassName("cart-row");
      var total = 0;
      for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var quantityElement = cartRow.getElementsByClassName(
          "cart-quantity-input"
        )[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
      }
      total = Math.round(total * 100) / 100;
      document.getElementsByClassName("cart-total-price")[0].innerText =
        "$" + total;
      return total;
    }

    const openFruitPage = () => {
      
    }

    const openVegPage = () => {
      
    }

  return (
    <BrowserRouter>
  <div>
  <nav id="navbar">
    <header class="header">
    <a href="index.html"> Estabena </a>
    <main id="menu">
      <div class="links">
        <a href="login.html">Login</a>
        <a href="register.html">Register</a>
      </div>
    </main>
    </header>
  </nav>
  <div class="clear"></div>

  <div class="catagory">
    <div class="card">
      <img id="pic" src="./images/veg1.jpeg" alt="Fruits" />
      <div class="container">
        <h2>Fruits</h2>
        <center>
          <button class="custom-button" onClick={openFruitPage()}>Shop Now</button>
        </center>
      </div>
    </div>
    <div class="card">
      <img id="pic" src="./images/veg2.jpg" alt="Vegetables" />
      <div class="container">
        <h2>Vegtables</h2>
        <center>
          <button class="custom-button" onClick={openVegPage()}> Shop Now </button>
        </center>
      </div>
    </div>
  </div>
</div>
</BrowserRouter>

  );
}

export default App;