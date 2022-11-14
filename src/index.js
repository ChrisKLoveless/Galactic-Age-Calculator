import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAge from './js/galactic-age';

let galacticAge = new GalacticAge(0,0);


function handleSubmit(event) {
  event.preventDefault();

  const userAge = document.getElementById("userAge").value;
  galacticAge.age = userAge;
  

}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleSubmit);
});