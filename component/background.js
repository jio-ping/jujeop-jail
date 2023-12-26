const randomBg = [
  // "./../src/bg/black-bg.png",
  // "./../src/bg/blue-bg.png",
  // "./../src/bg/red-bg.png",
  // "./../src/bg/purple-bg.png",
  // "./../src/bg/pink-bg.png",
  // "./../src/bg/green-bg.png",
];

const body = document.querySelector(".body");

function random() {
  return ~~(Math.random() * randomBg.length);
}

// console.log(randomBg[random()])
// body["style"]["backgroundImage"] = `url(${randomBg[random()]})`;
