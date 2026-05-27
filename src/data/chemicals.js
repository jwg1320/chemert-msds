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
{
  id: 7,
  nameKo: "실란",
  nameEn: "Silane",
  formula: "SiH4",
  cas: "7803-62-5",
  aliases: ["실란", "SiH4", "Silane", "모노실란"],
  process: "증착 / CVD",
  state: "무색 기체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["🔥 인화성", "💥 폭발위험", "🧯 가스실린더"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "자연발화성 우선",
    },
  ],

  exposure: {
    twa: { value: "5 ppm", source: "ACGIH/제조사 SDS 대표값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "공기보다 가벼움",
    vaporPressure: "가스",
    boilingPoint: "-112°C",
    flashPoint: "자연발화성 가스",
  },

  flammability: {
    flashPoint: "자연발화성",
    autoIgnition: "매우 낮음",
    lel: "약 1.4%",
    uel: "약 96%",
  },

  mainHazards: [
    "자연발화성",
    "공기 접촉 시 화재 가능",
    "폭발범위 넓음",
  ],

  waterReactivity: {
    hazards: [
      "물 제독보다 누출원 차단 우선",
      "습기와 반응 가능성 고려",
    ],
    decon: [
      "누출원 차단 및 불활성화 우선",
      "물 분사보다 화재·폭발 조건 관리 우선",
    ],
  },

  incompatible: ["공기", "산화제", "할로겐"],

  neutralization: {
    direction: ["중화 대상보다 차단·퍼지·연소관리 우선"],
    waterUse: "일반 제독 목적의 물 사용 부적합",
    neutralizerNeed: "일반 중화제 대상 아님",
  },

  ppe: ["공기호흡기", "방염 보호구", "가스 검지기"],

  cautions: [
    "누출 자체보다 점화·폭발 조건 우선 고려",
    "공기 유입 여부 중요",
  ],
},

{
  id: 8,
  nameKo: "포스핀",
  nameEn: "Phosphine",
  formula: "PH3",
  cas: "7803-51-2",
  aliases: ["포스핀", "PH3", "Phosphine"],
  process: "도핑가스",
  state: "무색 기체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🔥 인화성", "🧯 가스실린더"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "독성·가연성 우선",
    },
  ],

  exposure: {
    twa: { value: "0.3 ppm", source: "OSHA/NIOSH 대표값" },
    stel: { value: "1 ppm", source: "NIOSH" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "50 ppm", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 약간 무거움",
    vaporPressure: "가스",
    boilingPoint: "-87.7°C",
    flashPoint: "가연성 가스",
  },

  flammability: {
    flashPoint: "가연성 가스",
    autoIgnition: "제품 SDS 확인",
    lel: "약 1.8%",
    uel: "제품 SDS 확인",
  },

  mainHazards: [
    "고독성",
    "가연성",
    "반도체 도핑가스",
    "저농도 노출 위험",
  ],

  waterReactivity: {
    hazards: [
      "물 제독보다 누출원 차단 및 환기 우선",
    ],
    decon: [
      "가스 누출은 차단·배기·검지 우선",
      "오염 표면은 환기 후 기준에 따라 세척",
    ],
  },

  incompatible: ["산화제", "공기", "할로겐"],

  neutralization: {
    direction: ["가스 처리장치·스크러버 처리 우선"],
    waterUse: "일반적인 물 제독 대상 아님",
    neutralizerNeed: "전용 가스 처리 기준 우선",
  },

  ppe: ["공기호흡기", "화학보호복", "가스 검지기"],

  cautions: [
    "냄새 의존 금지",
    "STEL이 낮아 극저농도 관리 필요",
  ],
},

{
  id: 9,
  nameKo: "아르신",
  nameEn: "Arsine",
  formula: "AsH3",
  cas: "7784-42-1",
  aliases: ["아르신", "AsH3", "Arsine"],
  process: "도핑가스",
  state: "무색 기체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🔥 인화성", "🫁 건강유해"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "초고독성 우선",
    },
  ],

  exposure: {
    twa: { value: "0.05 ppm", source: "OSHA" },
    stel: { value: "제품 SDS 확인", source: "제조사 SDS" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "3 ppm", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-62.5°C",
    flashPoint: "가연성 가스",
  },

  flammability: {
    flashPoint: "가연성 가스",
    autoIgnition: "제품 SDS 확인",
    lel: "약 5%",
    uel: "약 78%",
  },

  mainHazards: [
    "초고독성",
    "용혈성 독성",
    "가연성",
    "극저농도 위험",
  ],

  waterReactivity: {
    hazards: [
      "물 제독보다 누출원 차단·검지 우선",
    ],
    decon: [
      "가스 누출은 차단·배기 우선",
      "오염 가능 구역은 검지 후 처리",
    ],
  },

  incompatible: ["산화제", "할로겐", "공기"],

  neutralization: {
    direction: ["전용 가스 처리장치 우선"],
    waterUse: "일반 물 제독 대상 아님",
    neutralizerNeed: "가스 처리/스크러버 기준 우선",
  },

  ppe: ["공기호흡기", "화학보호복", "가스 검지기"],

  cautions: [
    "IDLH가 매우 낮아 극저농도도 위험",
    "냄새 판단 금지",
  ],
},

{
  id: 10,
  nameKo: "디보레인",
  nameEn: "Diborane",
  formula: "B2H6",
  cas: "19287-45-7",
  aliases: ["디보레인", "B2H6", "Diborane"],
  process: "도핑가스",
  state: "무색 기체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🔥 인화성", "🧯 가스실린더"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "독성·가연성 우선",
    },
  ],

  exposure: {
    twa: { value: "0.1 ppm", source: "OSHA" },
    stel: { value: "제품 SDS 확인", source: "제조사 SDS" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "15 ppm", source: "NIOSH" },
  },

  physical: {
    density: "가스",
    vaporPressure: "가스",
    boilingPoint: "-92.5°C",
    flashPoint: "가연성 가스",
  },

  flammability: {
    flashPoint: "가연성 가스",
    autoIgnition: "제품 SDS 확인",
    lel: "제품 SDS 확인",
    uel: "제품 SDS 확인",
  },

  mainHazards: [
    "고독성",
    "가연성",
    "공기 중 반응성",
    "도핑가스",
  ],

  waterReactivity: {
    hazards: [
      "물과 반응 가능성 고려",
      "가스 누출은 물 제독보다 차단 우선",
    ],
    decon: [
      "차단·배기·검지 우선",
      "오염 표면은 안정화 후 세척",
    ],
  },

  incompatible: ["공기", "산화제", "할로겐"],

  neutralization: {
    direction: ["전용 가스 처리장치 우선"],
    waterUse: "일반 물 제독 대상 아님",
    neutralizerNeed: "스크러버/가스 처리 기준 우선",
  },

  ppe: ["공기호흡기", "화학보호복", "가스 검지기"],

  cautions: [
    "저농도 독성 위험",
    "가연성 조건 동시 고려",
  ],
},

{
  id: 11,
  nameKo: "육불화텅스텐",
  nameEn: "Tungsten Hexafluoride",
  formula: "WF6",
  cas: "7783-82-6",
  aliases: ["육불화텅스텐", "WF6", "Tungsten hexafluoride"],
  process: "금속증착 / W CVD",
  state: "무색 기체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["🧪 부식성", "☠️ 급성독성", "🧯 가스실린더"],

  ph: [
    {
      concentration: "수분 접촉",
      value: "강산성 생성물",
      note: "HF 생성 가능",
    },
  ],

  exposure: {
    twa: { value: "제품 SDS 확인", source: "제조사 SDS" },
    stel: { value: "제품 SDS 확인", source: "제조사 SDS" },
    ceiling: { value: "제품 SDS 확인", source: "제조사 SDS" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "높음",
    boilingPoint: "약 17°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "수분 반응 시 HF 생성 가능",
    "강한 부식성",
    "흡입 독성",
  ],

  waterReactivity: {
    hazards: [
      "물/습기와 반응해 HF 생성 가능",
      "부식성 미스트 발생 가능",
    ],
    decon: [
      "건식 차단·격리 우선",
      "물 사용 전 HF 생성 가능성 고려",
      "잔류물은 HF 대응 기준 적용 검토",
    ],
  },

  incompatible: ["물", "습기", "강염기"],

  neutralization: {
    direction: ["생성 HF에 대한 칼슘계 중화 방향 검토"],
    waterUse: "직접 물 사용 시 HF 생성 및 확산 고려 필요",
    neutralizerNeed: "HF 생성 가능성 때문에 전용 중화제 검토 필요",
  },

  ppe: ["공기호흡기", "내산 장갑", "화학보호복"],

  cautions: [
    "WF6 자체보다 수분 반응 생성 HF 위험 고려",
    "물 제독 전 반응성 판단 필요",
  ],
},

{
  id: 12,
  nameKo: "삼불화염소",
  nameEn: "Chlorine Trifluoride",
  formula: "ClF3",
  cas: "7790-91-2",
  aliases: ["삼불화염소", "ClF3", "Chlorine trifluoride"],
  process: "Chamber Cleaning / 특수가스",
  state: "무색~연황색 기체 또는 액체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["⭕ 산화성", "🧪 부식성", "☠️ 급성독성"],

  ph: [
    {
      concentration: "수분 접촉",
      value: "강산성 생성물",
      note: "HF/HCl 계열 생성 가능",
    },
  ],

  exposure: {
    twa: { value: "제품 SDS 확인", source: "제조사 SDS" },
    stel: { value: "제품 SDS 확인", source: "제조사 SDS" },
    ceiling: { value: "제품 SDS 확인", source: "제조사 SDS" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "높음",
    boilingPoint: "약 12°C",
    flashPoint: "초강력 산화성",
  },

  flammability: {
    flashPoint: "불연이나 초강산화성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "초강력 산화제",
    "물·유기물과 격렬 반응 가능",
    "부식성",
    "화재·폭발 위험",
  ],

  waterReactivity: {
    hazards: [
      "물과 격렬히 반응 가능",
      "HF/HCl 등 부식성 생성물 가능",
      "직접 살수 금지 수준으로 검토 필요",
    ],
    decon: [
      "초기 물 제독보다 격리·차단·전용 처리 우선",
      "잔류물 처리는 전문 절차 필요",
    ],
  },

  incompatible: ["물", "유기물", "가연물", "환원제"],

  neutralization: {
    direction: ["전용 처리 절차 우선", "생성 산성물질 중화는 안정화 후 검토"],
    waterUse: "초기 직접 물 사용 부적합 가능성이 큼",
    neutralizerNeed: "전용 중화/처리 절차 필수 검토",
  },

  ppe: ["공기호흡기", "특수 화학보호복", "내화학 장갑"],

  cautions: [
    "일반 산화제보다 훨씬 강한 반응성",
    "물 제독 판단에 매우 신중 필요",
  ],
},
];