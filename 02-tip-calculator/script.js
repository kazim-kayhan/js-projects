const billAmount = document.querySelector("#billAmount");
const tipPercentage = document.querySelector("#tipPercentage");


const totalAmount = document.querySelector("#totalAmount");

const button = document.querySelector("form");

button.addEventListener("submit", function (e) {
  e.preventDefault();
  const total =
  (+billAmount.value * +tipPercentage.value) / 100 + +billAmount.value
  console.log(total);
  totalAmount.innerHTML = `Total $${total.toFixed(2)}`;
});
