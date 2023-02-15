// for first card

let serial = 0;
document.getElementById("first-card").addEventListener("click", function () {
  //   console.log(e.target);

  //   serial = serial + 1;
  serial += 1;
  //   get the data from htm using id
  const productName = document.getElementById("first-name").innerText;
  const productPrice = document.getElementById("first-price").innerText;
  const productQuantity = document.getElementById("first-quantity").innerText;

  //   multiply
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  //   show the data
  displayData(productName, productPrice, productQuantity, priceTotal);
  disabledButton("first-card");
});

// using event object from browser
document.getElementById("second-card").addEventListener("click", function (e) {
  //   console.log(e.target.parentNode.parentNode.children[0].innerText);
  serial += 1;

  const pName = e.target.parentNode.parentNode.children[0].innerText;
  const pPrice =
    e.target.parentNode.parentNode.children[2].children[0].innerText;
  const pQuantity =
    e.target.parentNode.parentNode.children[3].children[0].innerText;

  const sumTotal = parseInt(pPrice) + parseInt(pQuantity);

  displayData(pName, pPrice, pQuantity, sumTotal);
  disabledButton("second-card");
});

// third card
document.getElementById("third-card").addEventListener("click", function () {
  //   console.log(e.target);

  //   serial = serial + 1;
  serial += 1;
  //   get the data from htm using id
  const productName = document.getElementById("third-title").innerText;
  const productPrice = document.getElementById("third-price").innerText;
  const productQuantity = document.getElementById("third-quantity").innerText;
  //   console.log(typeof productPrice, typeof productQuantity);

  //   multiply
  const priceTotal = parseInt(productPrice) - parseInt(productQuantity);

  //   show the data
  displayData(productName, productPrice, productQuantity, priceTotal);
  disabledButton("third-card");
});

// last card
document.getElementById("last-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("last-title").innerText;

  const productPrice = document.getElementById("first-input").value;
  const productQuantity = document.getElementById("second-input").value;

  if (
    productPrice == "" ||
    productQuantity == "" ||
    productPrice <= 0 ||
    productQuantity <= 0
  ) {
    return alert("please enter any valid number");
  }
  const total = parseInt(productPrice) / parseInt(productQuantity);

  displayData(productName, productPrice, productQuantity, total);
  disabledButton("last-card");

  //   console.log(typeof productPrice, typeof productQuantity);
});

// common function to display data
function displayData(nameOfP, priceOfP, quantityOfp, resultP) {
  const container = document.getElementById("table-container");

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td>${quantityOfp}</td>
    <td>${resultP}</td>
    
  `;
  container.appendChild(tr);
}

function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}
