//이름 주접
function getNameJujeop(name) {
  let nameJujeop = {
    0: `${name} 승마장 출입금지당했어요... ${name} 외모 보면 말이 안 나와서...`,
    1: ` ${name} 땜에 전쟁 났어요. 아름다워(war), 귀여워(war), 사랑스러워(war)`,
    2: `${name} 좋아하지마.\n- 그게 뭔데\n- ${name} 좋아하지 말라고\n- 그거 어떻게 하는 건데`,
    3: `오늘부로 ${name}지지를 철회한다. \n오늘부터 지지관계에서 벗어나 ${name}과 나는 한몸으로 일체가된다\n ${name}에 대한 공격은 나에대한 공격으로 간주한다`,
    4: `${name}의 효능: \n칼슘,비타민A,B,C, 아미노산 합유\n`,
    5: `${name} 불매. 불같이 매입, 불만 있는 척 매입 불닭 먹으면서 매입, `,
  };

  return nameJujeop[~~(Object.keys(nameJujeop).length * Math.random())];
}

// 타입 주접
function getTypeJujeop(type, type_emoji) {
  let animals = ["강아지", "토끼", "고양이", "병아리", "토끼", "햄스터"];
  let animalJujeop = {
    0: `${type_emoji} 말랑콩떡 아기 ${type}❤️${type_emoji} `,
  };
  let fruitsJujeop = {
    0: `${type_emoji} ${type}에 환불이 어딨어🥹찔러보게도 해줬잖아🥹뵥뵥도 해줬잖아🥺${type_emoji} `,
    1: `${type_emoji} 인간 ${type}, ${type}의 의인화, ${type_emoji}`,
    2: `${type_emoji} 우리집 ${type} 당도 최고 ${type_emoji}`,
  };
  if (animals.includes(type)) {
    console.log(~~(Object.keys(animalJujeop).length * Math.random));
    return animalJujeop[~~(Object.keys(animalJujeop).length * Math.random())];
  } else {
    console.log(~~(Object.keys(fruitsJujeop).length * Math.random));
    return fruitsJujeop[~~(Object.keys(fruitsJujeop).length * Math.random())];
  }
}

//공용 주접
function normalJujeop() {
  let longJujeop = {
    0: `존재만 해도 공기정화 유해물질 제거 나의 피톤치드`,
    1: `정말<br />멋진아이<br />구나~? `,
    2: `그 얼굴이면 열심히 안 살아도 되지 않아요?`,
  };
  return longJujeop[~~(Object.keys(longJujeop).length * Math.random())];
}
