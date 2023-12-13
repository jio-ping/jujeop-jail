const LASTNAME = document.querySelector("#lastname");
const FIRSTNAME = document.querySelector("#firstname");
let biasInfo = {};
function getName() {
  biasInfo["lastname"] = LASTNAME.value;
  biasInfo["firsttname"] = FIRSTNAME.value;
}

const moehList = document.querySelectorAll(".moeh");
console.log(moehList);

for (let moeh of moehList) {
  moeh.addEventListener("click", getMoeh(moeh));
}

function getMoeh(moeh) {
  biasInfo["moeh"] = moeh.value;
}

FIRSTNAME.addEventListener("input", getName);
LASTNAME.addEventListener("input", getName);
