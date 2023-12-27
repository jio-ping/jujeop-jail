import { setJujeop } from "./jujeop.js";
import html2canvas from "html2canvas";

const lastName = document.querySelector("#lastname");
const firstName = document.querySelector("#firstname");
const submit = document.querySelector("#submit");
const photo = document.querySelector("#photo");
const frameColor = document.querySelector("#color");
const frame = document.querySelector("#frame");
const remake = document.querySelector("#remake");
const toImg = document.querySelector("#toimg");

//최애의 정보를 담는 객체
let biasInfo = { emojiName: "강아지", emoji: "🐶", color: "🤍" };
let 사진있냐 = false;

//프레임을 씌울 사진을 받아와요
function getPhoto(e) {
  let fileSrc = window.URL.createObjectURL(e.target.files[0]);
  console.log(e);
  document.querySelector(
    ".frame-main"
  ).style.backgroundImage = `url(${fileSrc})`;
  사진있냐 = true;
}
//이름
function getName() {
  biasInfo["lastName"] = lastName.value;
  biasInfo["firstName"] = firstName.value;
}

// 프레임 색상 선택
// biasInfo객체에 색상을 담아요 +  선택한 버튼의 색상을 리턴해요
function getColor(e) {
  let colorButton = e.target.closest("button");
  if (!colorButton) return;
  const colorList = Array.from(frameColor.children);
  colorList.forEach((button) => button.classList.remove("is-active"));
  colorButton.classList.add("is-active");
  biasInfo["color"] = colorButton.value;
  return colorButton.id;
}

//프레임 색상 세팅
function setFrame(e) {
  let color = getColor(e);
  console.log(color);
  if (color) {
    frame.src = `${color}-frame.png`;
  }
}

//선택한 이모지를 biasInfo 객체에 담아요
const emojiType = document.querySelector(".emoji-type");
function setEmoji(e) {
  let emoji = e.target.closest("button");
  if (!emoji) return;
  const emojiList = Array.from(emojiType.children);
  emojiList.forEach((li) => li.classList.remove("is-active"));
  emoji.classList.add("is-active");
  biasInfo["emojiName"] = e.target.dataset.name;
  biasInfo["emoji"] = e.target.value;
}

const result = document.querySelector("#result");

const settingProcess = document.querySelector(".setting-process");
//모든 항목이 포함되어야!!!!!!! 만들수있음
function makeFrame() {
  if (biasInfo.lastName && biasInfo.firstName && 사진있냐) {
    setJujeop(biasInfo);
    result.style.display = "block";
    settingProcess.style.display = "none";
    html2canvas(document.querySelector(".frame-main")).then((canvas) => {
      document.querySelector(".frame-main").replaceWith(canvas);
    });
  }
}

//다시만들기
const remakeFrame = () => window.location.reload();

submit.addEventListener("click", makeFrame);
frameColor.addEventListener("click", setFrame);
emojiType.addEventListener("click", setEmoji);
firstName.addEventListener("input", getName);
lastName.addEventListener("input", getName);
photo.addEventListener("input", getPhoto);
remake.addEventListener("click", remakeFrame);
