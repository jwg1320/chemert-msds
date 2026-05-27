export const chemicals = [
  {
    id: 1,
    nameKo: "불산",
    nameEn: "Hydrofluoric Acid",
    formula: "HF",
    cas: "7664-39-3",
    aliases: ["HF", "불산", "불화수소산"],
    process: "Wet Etch / 세정",
    state: "무색 액체 또는 수용액",
    hazardLevel: "매우 위험",
    ghsPictograms: ["☠️ 급성독성", "🧪 부식성", "🫁 건강유해"],

    ph: [
      {
        concentration: "49% 수용액",
        value: "강산성",
        note: "피부 침투 독성 주의",
      },
    ],

    exposure: {
      twa: { value: "0.5 ppm", source: "OSHA" },
      stel: { value: "3 ppm", source: "ACGIH" },
      ceiling: { value: "6 ppm", source: "NIOSH" },
      idlh: { value: "30 ppm", source: "NIOSH" },
    },

    physical: {
      density: "1.0~1.15 g/cm³",
      vaporPressure: "783 mmHg / 무수 HF 기준",
      boilingPoint: "19.5°C",
      flashPoint: "비가연성",
    },

    flammability: {
      flashPoint: "비가연성",
      autoIgnition: "해당 없음",
      lel: "해당 없음",
      uel: "해당 없음",
    },

    mainHazards: [
      "피부 침투 가능",
      "지연성 조직 손상 가능",
      "증기 및 미스트 흡입 위험",
    ],

    waterReactivity: {
      hazards: ["물과 희석 가능하나 비산 및 미스트 주의"],
      decon: ["소량 오염은 흡착·제거 후 물 제독 검토"],
    },

    incompatible: ["강염기", "금속", "유리/실리카 재질"],

    neutralization: {
      direction: ["칼슘계 중화 방향 검토"],
      waterUse: "물 사용 가능하나 중성화 목적보다는 희석·제독 관점으로 판단",
      neutralizerNeed: "중화 완료 판단 필요 시 칼슘계 중화제 검토 필요",
    },

    ppe: ["공기호흡기", "내산 장갑", "화학보호복"],

    cautions: [
      "저농도 접촉도 지연성 통증 가능",
      "pH보다 피부 침투 독성을 우선 고려",
    ],
  },
  {
  id: 2,
  nameKo: "황산",
  nameEn: "Sulfuric Acid",
  formula: "H2SO4",
  cas: "7664-93-9",
  aliases: ["황산", "H2SO4"],
  process: "세정 / 폐수",
  state: "점성 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["🧪 부식성"],

  ph: [
    {
      concentration: "농황산",
      value: "강산성",
      note: "물 접촉 시 강한 발열",
    },
  ],

  exposure: {
    twa: { value: "0.2 mg/m³", source: "KOSHA" },
    stel: { value: "0.6 mg/m³", source: "ACGIH" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "15 mg/m³", source: "NIOSH" },
  },

  physical: {
    density: "1.84 g/cm³",
    vaporPressure: "0.001 mmHg",
    boilingPoint: "337°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "강한 부식성",
    "물 접촉 시 발열",
    "산 미스트 흡입 위험",
  ],

  waterReactivity: {
    hazards: ["물 접촉 시 강한 발열"],
    decon: [
      "흡착 후 물 세척",
      "대량 살수 시 발열 및 비산 주의",
    ],
  },

  incompatible: ["강염기", "금속", "유기물"],

  neutralization: {
    direction: ["알칼리계 중화 검토"],
    waterUse: "물 사용 가능하나 발열 고려 필요",
    neutralizerNeed: "중화 완료 판단 시 중화제 검토",
  },

  ppe: ["내산 장갑", "화학보호복", "보안면"],

  cautions: [
    "희석 시 산을 물에 천천히 투입",
    "산 미스트 흡입 주의",
  ],
},

{
  id: 3,
  nameKo: "염산",
  nameEn: "Hydrochloric Acid",
  formula: "HCl",
  cas: "7647-01-0",
  aliases: ["염산", "HCl"],
  process: "세정",
  state: "액체 또는 가스",
  hazardLevel: "고위험",
  ghsPictograms: ["🧪 부식성", "🫁 건강유해"],

  ph: [
    {
      concentration: "35%",
      value: "강산성",
      note: "산성 미스트 주의",
    },
  ],

  exposure: {
    twa: { value: "설정 없음", source: "-" },
    stel: { value: "5 ppm Ceiling", source: "OSHA" },
    ceiling: { value: "5 ppm", source: "NIOSH" },
    idlh: { value: "50 ppm", source: "NIOSH" },
  },

  physical: {
    density: "1.18 g/cm³",
    vaporPressure: "190 mmHg",
    boilingPoint: "110°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "강한 호흡기 자극",
    "산성 미스트",
    "부식성",
  ],

  waterReactivity: {
    hazards: ["산성 미스트 발생 가능"],
    decon: ["흡착 후 물 세척"],
  },

  incompatible: ["강염기", "금속"],

  neutralization: {
    direction: ["알칼리계 중화 검토"],
    waterUse: "물 사용 가능",
    neutralizerNeed: "대량 누출 시 중화제 검토",
  },

  ppe: ["전면형 호흡보호구", "내산 장갑"],

  cautions: [
    "산성 미스트 흡입 위험",
    "금속 부식 가능",
  ],
  },
  {
  id: 4,
  nameKo: "질산",
  nameEn: "Nitric Acid",
  formula: "HNO3",
  cas: "7697-37-2",
  aliases: ["질산", "HNO3"],
  process: "세정 / 산처리",
  state: "황색 액체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["⭕ 산화성", "🧪 부식성", "🫁 건강유해"],

  ph: [
    {
      concentration: "68%",
      value: "강산성",
      note: "산화성 위험 동시 고려",
    },
  ],

  exposure: {
    twa: { value: "2 ppm", source: "OSHA" },
    stel: { value: "4 ppm", source: "ACGIH" },
    ceiling: { value: "4 ppm", source: "NIOSH" },
    idlh: { value: "25 ppm", source: "NIOSH" },
  },

  physical: {
    density: "1.51 g/cm³",
    vaporPressure: "48 mmHg",
    boilingPoint: "83°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "강산화성",
    "NOx 발생 가능",
    "강한 부식성",
    "유기물 반응 위험",
  ],

  waterReactivity: {
    hazards: [
      "희석 시 발열 가능",
      "NOx 발생 가능",
    ],
    decon: [
      "흡착 후 물 세척",
      "유기물 접촉 주의",
    ],
  },

  incompatible: [
    "유기물",
    "환원제",
    "금속",
    "가연물",
  ],

  neutralization: {
    direction: ["알칼리계 중화 검토"],
    waterUse: "물 사용 가능하나 산화성 및 가스 발생 고려 필요",
    neutralizerNeed: "중화 시 발열 및 NOx 발생 가능",
  },

  ppe: [
    "공기호흡기",
    "화학보호복",
    "내산 장갑",
  ],

  cautions: [
    "갈색 NOx 발생 시 즉시 위험 고려",
    "단순 산이 아닌 산화성 산으로 접근",
  ],
},

{
  id: 5,
  nameKo: "암모니아",
  nameEn: "Ammonia",
  formula: "NH3",
  cas: "7664-41-7",
  aliases: ["암모니아", "NH3", "암모니아수"],
  process: "냉동 / Utility / Scrubber",
  state: "무색 기체 또는 수용액",
  hazardLevel: "고위험",
  ghsPictograms: ["☠️ 급성독성", "🔥 인화성"],

  ph: [
    {
      concentration: "암모니아수",
      value: "강염기성",
      note: "농도별 상이",
    },
  ],

  exposure: {
    twa: { value: "25 ppm", source: "OSHA" },
    stel: { value: "35 ppm", source: "ACGIH" },
    ceiling: { value: "50 ppm", source: "NIOSH" },
    idlh: { value: "300 ppm", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 가벼움",
    vaporPressure: "8.5 atm",
    boilingPoint: "-33°C",
    flashPoint: "가연성 가스",
  },

  flammability: {
    flashPoint: "가연성 가스",
    autoIgnition: "651°C",
    lel: "15%",
    uel: "28%",
  },

  mainHazards: [
    "강한 호흡기 자극",
    "강염기성",
    "고농도 흡입 위험",
    "가연범위 존재",
  ],

  waterReactivity: {
    hazards: [
      "물에 잘 녹음",
      "수분과 접촉 시 자극성 증가",
    ],
    decon: [
      "가스 차단 및 환기 우선",
      "수용액은 물 세척 가능",
    ],
  },

  incompatible: [
    "산",
    "염소계 물질",
    "산화제",
  ],

  neutralization: {
    direction: ["산성 중화 방향 검토"],
    waterUse: "물 사용 가능하나 암모니아수 확산 고려 필요",
    neutralizerNeed: "대량 누출 시 산성 중화제 검토 가능",
  },

  ppe: [
    "공기호흡기",
    "화학보호복",
    "내화학 장갑",
  ],

  cautions: [
    "후각만으로 안전 판단 금지",
    "액화가스 누출 초기 거동 고려",
  ],
},

{
  id: 6,
  nameKo: "TMAH",
  nameEn: "Tetramethylammonium Hydroxide",
  formula: "(CH3)4NOH",
  cas: "75-59-2",
  aliases: ["TMAH", "현상액"],
  process: "Photo / 현상",
  state: "무색 수용액",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🧪 부식성"],

  ph: [
    {
      concentration: "2.38%",
      value: "강염기성",
      note: "피부흡수 독성 주의",
    },
  ],

  exposure: {
    twa: { value: "공식 기준 없음", source: "SDS 참고" },
    stel: { value: "공식 기준 없음", source: "SDS 참고" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.01 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "농도별 상이",
    flashPoint: "자료 확인 필요",
  },

  flammability: {
    flashPoint: "자료 확인 필요",
    autoIgnition: "자료 확인 필요",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "피부 흡수 독성 매우 큼",
    "강염기성 부식 위험",
    "소량 접촉도 중대 위험 가능",
  ],

  waterReactivity: {
    hazards: [
      "물과 혼합 가능",
      "희석되어도 피부흡수 독성 주의",
    ],
    decon: [
      "피부 노출 시 즉시 대량 물 세척",
      "중화보다 인체 제독 우선",
    ],
  },

  incompatible: [
    "산",
    "산화제",
  ],

  neutralization: {
    direction: ["산성 중화 방향 검토"],
    waterUse: "물 세척 적극 권장",
    neutralizerNeed: "현장 중화보다 인체 세척 우선",
  },

  ppe: [
    "내화학 장갑",
    "화학보호복",
    "보안면",
  ],

  cautions: [
    "작은 접촉도 과소평가 금지",
    "pH보다 피부흡수 독성 우선",
  ],
},
];