document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const dob = document.getElementById("DOB").value;
  const curDate = document.getElementById("currentDate").value;

  //   let curYear = Number(curDate.split("-")[0]);
  //   let dobYear = Number(dob.split("-")[0]);
  //   const Age = curYear - dobYear;

  const Age = Number(curDate.split("-")[0]) - Number(dob.split("-")[0]);

  document.getElementById("DOB").value = "";
  document.getElementById("currentDate").value = "";

  document.getElementById("myAge").innerText = Age;
});