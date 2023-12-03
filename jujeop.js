//이름 주접
function showNameJujeop(name) {
  let nameJujeop = {
    0: `${name} 승마장 출입금지당했어요... ${name} 외모 보면 말이 안 나와서...`,
    1: ` ${name} 땜에 전쟁 났어요. 아름다워(war), 귀여워(war), 사랑스러워(war)`,
    2: `${name} 좋아하지마.\n- 그게 뭔데\n- ${name} 좋아하지 말라고\n- 그거 어떻게 하는 건데`,
    3: `오늘부로 ${name}지지를 철회한다. \n오늘부터 지지관계에서 벗어나 ${name}과 나는 한몸으로 일체가된다\n ${name}에 대한 공격은 나에대한 공격으로 간주한다`,
    4: `${name}의 효능: 관절염 손목터널증후군 요통 폐럼 감기 예방효과 \n 의사가 가장 겁내하는 ${name}`,
  };

  let longJujeop = {
    0: `만물이 당신을 위해 존재하는 걸 아십니까? \n | yes |    | 예 |`,
    1: `존재만 해도 공기정화 유해물질 제거 나의 피톤치드`,
    2: `넌 정말 예쁜 아이구나 ~? `,
    3: `그렇게 생겼으면 열심히 안 살아도 되지 않아요?`,
  };
  let num = ~~(Math.random() * jujeopDB.length);
  console.log(jujeopDB[num]);
}
showJujeop("예준이");

// 타입 주접
function showTypeJujeop(type, type_emoji) {
  let typeJujeoop = {
    0: `${type_emoji} 말랑콩떡 아기 ${type}❤️${type_emoji} `,
  };
}
