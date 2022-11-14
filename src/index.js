import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAge from './js/galactic-age';

let galacticAge = new GalacticAge(0);


function handleSubmit(event) {
  event.preventDefault();
  
  let planetChecked;
  const planet = document.querySelector("input[type='checkbox']:checked");
  const userAge = parseInt(document.getElementById("userAge").value);
  planetChecked = planet.value;
  galacticAge.age = userAge;

  const mercuryAge = galacticAge.mercury();
  // const venusAge = galacticAge.venus();
  document.getElementById("result").innerHTML = `Your age in ${planetChecked} years is ${mercuryAge}`;

}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleSubmit);
});