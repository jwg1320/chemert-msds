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
];