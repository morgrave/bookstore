export interface Adventure {
  id: number;
  title: string;
}

export interface Outcome {
  id: string;
  name: string;
  file?: string;
  value: number;
  special?: boolean;
}

export interface NPC {
  id: string;
  name: string;
  desc: string;
  file?: string;
  value?: number;
}

export const Adventures = [
  {
    id: 0,
    title: '고대 문명의 유물 발굴',
  },
  {
    id: 1,
    title: '그냥 줏음',
  },
  {
    id: 2,
    title: '엘프 전쟁군주의 보물고',
  },
  {
    id: 3,
    title: '침몰한 밀수품 선박 조사',
  },
  {
    id: 4,
    title: '샨 지하의 잊혀진 공장',
  },
  {
    id: 5,
    title: '인적이 끊긴 비밀기지',
  },
  {
    id: 6,
    title: '옛 전장의 폐허',
  },
  {
    id: 7,
    title: '위기에 빠진 정보원',
  },
  {
    id: 8,
    title: '오크 드루이드와 위험한 숲',
  },
  {
    id: 9,
    title: '늑대발 마을의 비보',
  },
  {
    id: 10,
    title: '황혼의 땅 저 너머로',
  },
  {
    id: 11,
    title: '국경으로 향하는 악마들',
  },
  {
    id: 12,
    title: '대량의 군용 폭발물',
  },
  {
    id: 13,
    title: '아우룸의 대금고 사수',
  },
  {
    id: 14,
    title: '결전',
  },
  {
    id: 15,
    title: '서부 캐니스 습격',
  },
  {
    id: 16,
    title: '고블린 최악의 날',
  },
  {
    id: 17,
    title: '체크메이트',
  },
  {
    id: 18,
    title: '폐허의 아래에서',
  },
  {
    id: 19,
    title: '다르콘의 운명',
  },
  {
    id: 20,
    title: '마녀사냥',
  },
  {
    id: 21,
    title: '이름 없는 탑의 심연',
  },
  {
    id: 22,
    title: '가장 비싼 리액션',
  },
  {
    id: 23,
    title: '카운트다운: 6일차',
  },
  {
    id: 24,
    title: '카운트다운: 5일차',
  },
  {
    id: 25,
    title: '카운트다운: 4일차',
  },
  {
    id: 26,
    title: '아르카닉스 괴담 대작전',
  },
  {
    id: 27,
    title: '사그라들지 않은 불씨',
  },
  {
    id: 28,
    title: '깊고 어두운 거래',
  },
  {
    id: 29,
    title: '전설의 전설적인 유물',
  },
];

export const Outcomes = [
  {
    id: 'basicfee',
    name: '경매장 수수료',
    value: 10,
  },
  {
    id: 'undergroundfee',
    name: '암시장 수수료',
    value: 5,
  },
  {
    id: 'luka',
    name: '루카의 몫',
    value: 0,
    special: true,
  },
  {
    id: 'saphi',
    name: '사피의 몫',
    value: 0,
    special: true,
  },
  {
    id: 'sasha',
    name: '사샤의 몫',
    value: 0,
    special: true,
  },
  {
    id: 'ariel',
    name: '에리알의 몫',
    value: 0,
    special: true,
  },
  {
    id: 'devin',
    name: '데빈의 몫',
    value: 0,
    special: true,
  },
  {
    id: 'orgrim',
    name: '오그림의 몫',
    value: 0,
    special: true,
  },
  {
    id: 'hab',
    name: '하브의 몫',
    value: 0,
    special: true,
  },
  {
    id: 'elaydren',
    name: '엘라이드렌의 몫',
    value: 10,
  },
  {
    id: 'mazzia',
    name: '마지아의 몫',
    value: 10,
  },
  {
    id: 'kalasta',
    name: '칼라스타의 몫',
    value: 20,
  },
  {
    id: 'mallora',
    name: '말로라의 몫',
    value: 4,
  },
  {
    id: 'silver',
    name: '실버 밥값',
    value: 2,
  },
  {
    id: 'branthus',
    name: '브랜터스의 몫',
    value: 8,
  },
  {
    id: 'baella',
    name: '바엘라의 몫',
    value: 12,
  },
  {
    id: 'menya',
    name: '미냐의 몫',
    value: 15,
  },
  {
    id: 'grilsha',
    name: '그릴샤의 몫',
    value: 9,
  },
  {
    id: 'slara',
    name: '슬라라의 몫',
    value: 10,
  },
  {
    id: 'lahorak',
    name: '라호라크의 몫',
    value: 8,
  },
  {
    id: 'lirra',
    name: '리라의 몫',
    value: 8,
  },
];

export const NPCs = [
  {
    id: 'elaydren',
    name: '엘라이드렌 드 캐니스',
    desc: '비행선을 띄우고, 손에 넣은 유물들을 연구한 뒤 경매장에 처분합니다.',
    file: 'npc_elaydren.png',
    value: 10,
  },
  {
    id: 'mazzia',
    name: '마지아 드 리란다',
    desc: '해상, 공중 탈것을 조종할 수 있습니다. 비행선에서 착지하는 첫 전투의 배치 가능 지역이 맵 전체가 됩니다.',
    file: 'npc_mazzia.png',
    value: 10,
  },
  {
    id: 'mallora',
    name: '말로라 제클린',
    desc: '낮은 수준의 전투력을 제공합니다. 체력이 0이 된 아군과 적군이 자동으로 안정화 상태가 됩니다.',
    file: 'npc_mallora.png',
    value: 4,
  },
  {
    id: 'silver',
    name: '명견 실버',
    desc: '낮은 수준의 전투력을 제공합니다. 첫 전투가 시작되기 전에 모든 아군이 2의 임시 체력을 얻습니다.',
    file: 'npc_silver.png',
    value: 2,
  },
  {
    id: 'baella',
    name: '바엘라 스위프트스텝',
    desc: '평균적인 모험가 이상의 전투력을 제공합니다. 비전투 상황에 진입하면 일행의 체력이 전부 회복됩니다.',
    file: 'npc_baella.png',
    value: 12,
  },
  {
    id: 'menya',
    name: '미냐 드 캐니스',
    desc: '높은 수준의 전투력을 제공합니다. 전투가 시작되기 전에 모든 아군이 은신 판정을 합니다.',
    file: 'npc_menya.png',
    value: 15,
  },
  {
    id: 'grilsha',
    name: '그릴샤 스텔로스',
    desc: '평균적인 전투력을 제공합니다. 라운드 당 한 번 아군이 볼 수 있는 크리처의 공격 혹은 내성 굴림에서 1d4를 뺄 수 있습니다.',
    file: 'npc_grilsha.png',
    value: 9,
  },
  {
    id: 'slara',
    name: '슬라라 렌더',
    desc: '평균적인 모험가보다 조금 약한 수준의 전투력을 제공합니다. 모든 등급의 치유 물약과 독을 사용할 때 행동 대신 추가 행동을 소모합니다.',
    file: 'npc_slara.png',
    value: 10,
  },
  {
    id: 'lirra',
    name: '리라 브로찬',
    desc: '평균적인 전투력을 제공합니다. 적의 5피트 내에서 공격할 때 적 반대편에 아군이 접했다면 공격에 1d4를 더합니다.',
    file: 'npc_lirra.png',
    value: 8,
  },
  // {
  //   id: 'lahorak',
  //   name: '라호라크',
  //   desc: '평균적인 전투력을 제공합니다. 전투가 시작되기 전에 무작위 아이템을 발견합니다.',
  //   file: 'npc_lahorak.png',
  //   value: 8,
  // },
  // {
  //   id: 'kalasta',
  //   name: '칼라스타 위른',
  //   desc: '높은 수준의 전투력을 제공합니다. 밥을 많이 먹습니다.',
  //   file: 'npc_kalasta.png',
  //   value: 20,
  // },
  // {
  //   id: 'branthus',
  //   name: '브랜터스 "루프탑" 코월',
  //   desc: '전투와 전투 사이에 상점을 이용할 수 있습니다. 전투 중에 3배의 가격으로 상점을 이용할 수 있습니다.',
  //   file: 'npc_branthus.png',
  //   value: 8,
  // },
];
