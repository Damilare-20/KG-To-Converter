 let converterform = document.querySelector("#converterform");

    converterform.addEventListener("submit", function (e) {
      e.preventDefault();

      let value = document.getElementById("kgInput").value;
      let output = "";

      if (value === "") {
        output = "Enter KG";
      } else if (isNaN(value)) {
        output = "Please enter a valid number";
      } else if (value <= 0) {
        output = "Enter a positive number";
      } else {
        let grams = value * 1000;
        output = `The conversion of ${value}kg is equals to ${grams} grams`
      }

      document.getElementById("result").innerHTML = output;
    });