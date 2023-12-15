const lastName = document.querySelector("#lastname");
const firstName = document.querySelector("#firstname");

//최애의 정보를 담는 객체
let biasInfo = {};
//사진
const photo = document.querySelector("#photo");
function getPhoto(e) {
  let fileSrc = window.URL.createObjectURL(e.target.files[0]);
  document.querySelector(".bias").style.backgroundImage = `url(${fileSrc})`;
}
photo.addEventListener("input", getPhoto);

//이름
function getName() {
  biasInfo["lastName"] = lastName.value;
  biasInfo["firstName"] = firstName.value;
}

firstName.addEventListener("input", getName);
lastName.addEventListener("input", getName);
//form class type에 있는
const moehList = document.querySelectorAll(".moeh");
const getMoeh = (e) => {
  biasInfo["moehMoji"] = e.target.value;
  biasInfo["moehName"] = e.target.dataset.name;
};

for (let moeh of moehList) {
  moeh.addEventListener("click", (e) => getMoeh(e));
}

//프레임함수
function getFrame(e) {}

//모든 항목이 포함되어야!!!!!!! 만들수있음
