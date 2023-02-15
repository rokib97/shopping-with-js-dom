let serial = 0;

// first card operation
document.getElementById("first-card").addEventListener("click", function () {
  serial += 1;
  //   get the data from htm using id
  //   const productName = document.getElementById("first-name").innerText;
  //   const productPrice = document.getElementById("first-price").innerText;
  //   const productQuantity = document.getElementById("first-quantity").innerText;

  //  getting data using common function using getElementById method
  const pd = getData("first-name", "first-price", "first-quantity");
  //   multiply logic
  const priceTotal = parseInt(pd.productPrice) * parseInt(pd.productQuantity);
  //   show the data using function
  displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);
  //   disabled button using function
  disabledButton("first-card");
});

// using event object from browser
// second card operation
document.getElementById("second-card").addEventListener("click", function (e) {
  serial += 1;
  const pd = getAllData(e);
  //doing plus logic
  const sumTotal = parseInt(pd.pPrice) + parseInt(pd.pQuantity);
  //   show the data using function
  displayData(pd.pName, pd.pPrice, pd.pQuantity, sumTotal);
  //   disabled button using function
  disabledButton("second-card");
});

// third card operation
document.getElementById("third-card").addEventListener("click", function () {
  serial += 1;
  //   //   get the data from htm using id
  //   const productName = document.getElementById("third-title").innerText;
  //   const productPrice = document.getElementById("third-price").innerText;
  //   const productQuantity = document.getElementById("third-quantity").innerText;

  //  getting data using common function using getElementById method
  const pd = getData("third-title", "third-price", "third-quantity");

  //minus logic
  const priceTotal = parseInt(pd.productPrice) - parseInt(pd.productQuantity);
  //   show the data using function
  displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);
  //   disabled button using function
  disabledButton("third-card");
});

// card four oepration
document.getElementById("second-last").addEventListener("click", function (e) {
  serial += 1;
  const pd = getAllData(e);
  // ** logic
  const sumTotal = parseInt(pd.pPrice) ** parseInt(pd.pQuantity);
  //   show the data using function
  displayData(pd.pName, pd.pPrice, pd.pQuantity, sumTotal);
  //   disabled button using function
  disabledButton("second-card");
});

// last card
//we can not use common function beacuse its an input type , we need to use dot value
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
  //   show the data using function
  displayData(productName, productPrice, productQuantity, total);
  //   disabled button using function
  disabledButton("last-card");
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
    <td>
    <button class="btn btn-sm btn-red-500">Square</button>
    </td>
    
  `;
  container.appendChild(tr);
  document.getElementById("total-product").innerText = serial;
}

// common function to disable button
function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}

// common function to get data using event object
function getAllData(e) {
  const pName = e.target.parentNode.parentNode.children[0].innerText;
  const pPrice =
    e.target.parentNode.parentNode.children[2].children[0].innerText;
  const pQuantity =
    e.target.parentNode.parentNode.children[3].children[0].innerText;
  //   console.log(pName, pPrice, pQuantity);

  const pd = {
    pName: pName,
    pPrice: pPrice,
    pQuantity: pQuantity,
  };

  return pd;
}

// common function to get data using getElementById method
function getData(id1, id2, id3) {
  // get the data from htm using id
  const productName = document.getElementById(id1).innerText;
  const productPrice = document.getElementById(id2).innerText;
  const productQuantity = document.getElementById(id3).innerText;

  const pd = {
    productName: productName,
    productPrice: productPrice,
    productQuantity: productQuantity,
  };
  return pd;
}
