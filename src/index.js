import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAge from './js/galactic-age';

let galacticAge = new GalacticAge(0);


function handleSubmit(event) {
  event.preventDefault();

  let planetChecked;
  let yrsLeft;
  const lifeExpectancy = 75;
  const planet = document.querySelector("input[type='checkbox']:checked");
  const userAge = parseInt(document.getElementById("userAge").value);
  planetChecked = planet.value;
  galacticAge.age = userAge;

  const mercuryAge = galacticAge.mercury();
  const venusAge = galacticAge.venus();
  const marsAge = galacticAge.mars();
  const jupiterAge = galacticAge.jupiter();

  yrsLeft = galacticAge.yrsLeft(planetChecked, lifeExpectancy);

  if(planetChecked === "mercury") {
    document.getElementById("result").innerHTML = `Your age in ${planetChecked} years is ${mercuryAge}. Stay safe... you only have ${yrsLeft} years to go on this planet`;
  } else if(planetChecked === "venus"){
    document.getElementById("result").innerHTML = `Your age in ${planetChecked} years is ${venusAge}. Be careful... you only have ${yrsLeft} years remaining on this planet`;
  } else if(planetChecked === "mars") {
    document.getElementById("result").innerHTML = `Your age in ${planetChecked} years is ${marsAge}. Watch out... you only have ${yrsLeft} years left on this planet`;
  } else if(planetChecked === "jupiter") {
    document.getElementById("result").innerHTML = `Your age in ${planetChecked} years is ${jupiterAge}. Tread carefully... you only have ${yrsLeft} years of life left this planet`;
  } else {
    document.getElementById("result").innerHTML = "Invalid input, please try again";
  }

}

function handleReset() {
  document.location.reload();
}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleSubmit);
  document.getElementById("reset-btn").addEventListener("click", handleReset)
});