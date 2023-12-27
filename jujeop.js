import Josa from "josa-js";

//이름 주접
function getNameJujeop(name) {
  let nameJujeop = {
    0: `${name}..승마장 \n출입금지당했어요...\n${name} 외모보면 \n말이 안나와서...`,
    1: `${Josa.r(
      name,
      "은/는"
    )} 필히\n다리 조심해야돼\n 항상...\n legend니까..`,
    2: `${name}좋아하지마.\n-그게뭔데\n${name}좋아하지말라고\n-그거어떻게하는건데`,
    3: `${name} 불매.\n불같이 매입\n불만 있는척 매입\n 불닭 먹으면서 매입`,
    4: `${Josa.r(
      name,
      "이/가"
    )} \n이렇게 생겼는데\n본업을 이렇게나\n잘해도 되는거냐?  `,
    5: `${Josa.r(
      name,
      "이/가"
    )} 귀엽다고\n생각하는 사람\n손들어했더니 \n지구가 성게모양 됨`,
    6: `${name} \n너무 잘해서\n박수 쳤을뿐인데\n모기를 잡았다네요;`,
  };

  return nameJujeop[~~(Object.keys(nameJujeop).length * Math.random())];
}

//짱 긴 주접
function getRealLongJujeop(name) {
  let randomList = [];
  let realLongJujeop = {
    0: `~${name}의 효능~\n근육강화,\n체력회복,\n면역력증강,\n혈액순환`,
    1: `${name}...\n넌베를린이야\n 내게 치명적인..\n독일..수도...?`,
    2: `${name}보면\n입이 안다물어져서\n 치과에서\n스카웃하면\n어쩌지😲`,
    3: `맨날\n예쁘다하니까\n세상이 ${name}거 같지?\n이제 곧\n우주도 ${name}거야`,
    4: `${name}땜에\n전쟁났어요.\n아름다워(war)\n귀여워(war)\n사랑스러워(war)`,
    5: `${Josa.r(
      name,
      "은/는"
    )}\n미술관 입장료\n내지마세요\n조각상은\n돈내는거 아닙니다.. `,
    6: `${name}에대한\n객관적인비평?\n피드백?지양하시고\n 무조건적인 박수갈채\n편향적 응원 부탁`,
  };
  let tmplist = [];

  while (tmplist.length < 5) {
    let tmp = ~~(Object.keys(realLongJujeop).length * Math.random());
    if (!tmplist.includes(tmp)) {
      tmplist.push(tmp);
    }
  }
  tmplist.sort().forEach((item) => randomList.push(realLongJujeop[item]));
  return randomList;
}

// 타입 주접
function getTypeJujeop(emoji, emojiName, lastName, firstName) {
  let animals = ["갱쥐", "밤비", "토끼", "고양이", "병아리", "토끼", "햄찌"];
  let animalJujeop = {
    0: `말랑말랑\n동글동글\n아기${emojiName}${emoji} `,
    1: `영재\n${emojiName}발굴단\n수석 졸업${emoji} `,
  };
  let fruitsJujeop = {
    0: `${emoji}${emojiName}에\n환불이\n어딨어${emoji}`,
    1: `인간 ${emojiName}\n${lastName + firstName}${emoji}`,
    2: `우리집${emojiName}\n당도 최고${emoji}`,
  };
  return animals.includes(emojiName)
    ? animalJujeop[~~(Object.keys(animalJujeop).length * Math.random())]
    : fruitsJujeop[~~(Object.keys(fruitsJujeop).length * Math.random())];
}

//이름 철자 하나하나에 하트 껴줘야 유난...
const jujeopName = (biasInfo) => {
  let tmpname = biasInfo.lastName + biasInfo.firstName;
  let fullName = [];
  if (tmpname.length < 6) {
    for (let i = 0; i < tmpname.length * 2 + 1; i++) {
      i % 2 == 0
        ? fullName.push(biasInfo.color)
        : fullName.push(tmpname[~~(i / 2)]);
    }
    return fullName.join("");
  }
  return biasInfo.color + tmpname + biasInfo.color;
};

/* ---------------------------------- 주접 세팅 --------------------------------- */

const whyCute = document.querySelector("#whyCute");
const biasName = document.querySelector("#biasName");
const jujeopLong1 = document.querySelector("#jujeopLong1");
const jujeopLong2 = document.querySelector("#jujeopLong2");
const jujeopLong3 = document.querySelector("#jujeopLong3");
const jujeopLong4 = document.querySelector("#jujeopLong4");
const jujeopLong5 = document.querySelector("#jujeopLong5");
const jujeopLong6 = document.querySelector("#jujeopLong6");
const jujeopSymbol1 = document.querySelector("#jujeopSymbol1");
const jujeopSymbol2 = document.querySelector("#jujeopSymbol2");
const jujeopType = document.querySelector("#jujeopType");

function setJujeop(biasInfo) {
  const { lastName, firstName, color, emoji, emojiName } = biasInfo;
  const [longJujeop1, longJujeop2, longJujeop3, longJujeop4, longJujeop5] =
    getRealLongJujeop(firstName);
  whyCute.innerText = `내 이름은\n ${firstName}인데\n 왜 다들\n 귀여워라고\n부르지?`;
  biasName.innerText = `${jujeopName(biasInfo)}`;
  jujeopSymbol1.innerText = `${emoji}${emoji}`;
  jujeopSymbol2.innerText = `${emoji}${emoji}`;
  jujeopLong1.innerText = `${getNameJujeop(firstName)}`;
  jujeopLong2.innerText = `${longJujeop1}`;
  jujeopLong3.innerText = `${longJujeop2}`;
  jujeopLong4.innerText = `${longJujeop3}`;
  jujeopLong5.innerText = `${longJujeop4}`;
  jujeopLong6.innerText = `${longJujeop5}`;
  jujeopType.innerText = `${getTypeJujeop(
    emoji,
    emojiName,
    lastName,
    firstName
  )}`;
}
export { setJujeop };
