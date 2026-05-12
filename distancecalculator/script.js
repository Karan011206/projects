document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const Kilometer = document.getElementById("Kilometer").value;
  const rate = 11;

  const totalbill = Kilometer * rate;
  // console.log(totalbill);
  document.getElementById("Kilometer").value = "";
  document.getElementById("total").innerText = totalbill;
});