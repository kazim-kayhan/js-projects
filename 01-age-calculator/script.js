const dobInput = document.querySelector("#dob");
const calculateButton = document.querySelector("#calculate");
const result = document.querySelector("#result");

const calculateAge = () => {
  if (dobInput.value === "") {
    return alert("Please enter your date of birth");
  } else {
    const date = new Date(dobInput.value);
    const now = new Date();
    let age = now.getFullYear() - date.getFullYear();
    const month = now.getMonth() - date.getMonth();

    if (month < 0 || (month === 0 && now.getDate() < date.getDate())) {
      age = age - 1;
    }

    result.innerText = `You are ${age} ${age < 2 ? "year" : "years"} old`;
  }
};

calculateButton.addEventListener("click", calculateAge);
