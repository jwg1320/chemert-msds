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
{
  id: 13,
  nameKo: "삼불화질소",
  nameEn: "Nitrogen Trifluoride",
  formula: "NF3",
  cas: "7783-54-2",
  aliases: ["NF3", "삼불화질소", "Nitrogen trifluoride"],
  process: "Chamber Cleaning",
  state: "무색 기체",
  hazardLevel: "고위험",
  ghsPictograms: ["⭕ 산화성", "🧯 가스실린더"],

  ph: [{ concentration: "가스", value: "해당 없음", note: "산화성 가스" }],

  exposure: {
    twa: { value: "10 ppm", source: "ACGIH 대표값" },
    stel: { value: "제품 SDS 확인", source: "제조사 SDS" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-129°C",
    flashPoint: "비가연성 / 산화성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: ["산화성 가스", "고온/플라즈마 조건 반응성", "질식 위험"],

  waterReactivity: {
    hazards: ["물과 직접 반응성은 낮은 편이나 분해 생성물 주의"],
    decon: ["누출 차단·환기 우선", "물 제독보다 가스 처리 우선"],
  },

  incompatible: ["가연물", "환원제", "고온"],

  neutralization: {
    direction: ["중화보다 차단·배기·가스 처리 우선"],
    waterUse: "물 사용 효과 제한적",
    neutralizerNeed: "전용 가스 처리장치 우선",
  },

  ppe: ["공기호흡기", "가스 검지기"],
  cautions: ["산화성 가스로 가연물 접촉 주의"],
},

{
  id: 14,
  nameKo: "플루오린",
  nameEn: "Fluorine",
  formula: "F2",
  cas: "7782-41-4",
  aliases: ["F2", "플루오린", "플루오르", "Fluorine"],
  process: "특수가스 / 산화성 가스",
  state: "연황색 기체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["⭕ 산화성", "☠️ 급성독성", "🧪 부식성"],

  ph: [{ concentration: "수분 접촉", value: "산성화", note: "HF 생성 가능" }],

  exposure: {
    twa: { value: "0.1 ppm", source: "OSHA 대표값" },
    stel: { value: "제품 SDS 확인", source: "제조사 SDS" },
    ceiling: { value: "제품 SDS 확인", source: "제조사 SDS" },
    idlh: { value: "25 ppm", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-188°C",
    flashPoint: "강산화성 가스",
  },

  flammability: {
    flashPoint: "불연이나 강산화성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: ["극강 산화성", "부식성", "수분 접촉 시 HF 생성 가능", "가연물 반응 위험"],

  waterReactivity: {
    hazards: ["물과 반응해 산성/부식성 생성물 가능", "강한 산화 반응 가능"],
    decon: ["가스 차단·배기 우선", "물 사용은 반응성 및 HF 생성 고려"],
  },

  incompatible: ["유기물", "가연물", "환원제", "물/습기"],

  neutralization: {
    direction: ["전용 가스 처리 및 생성 HF 중화 검토"],
    waterUse: "초기 직접 살수는 반응성 고려 필요",
    neutralizerNeed: "전용 처리 후 산성 생성물 중화 검토",
  },

  ppe: ["공기호흡기", "화학보호복", "내산 장갑"],
  cautions: ["물반응성과 HF 생성 가능성을 반드시 고려"],
},
{
  id: 15,
  nameKo: "염소",
  nameEn: "Chlorine",
  formula: "Cl2",
  cas: "7782-50-5",
  aliases: ["Cl2", "염소", "염소가스"],
  process: "Utility / 수처리",
  state: "황록색 기체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🧪 부식성"],

  ph: [
    {
      concentration: "가스",
      value: "수분 접촉 시 산성",
      note: "습한 환경 자극 증가",
    },
  ],

  exposure: {
    twa: { value: "0.5 ppm", source: "OSHA" },
    stel: { value: "1 ppm", source: "ACGIH" },
    ceiling: { value: "1 ppm", source: "NIOSH" },
    idlh: { value: "10 ppm", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-34°C",
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
    "저지대 체류 가능",
    "부식성 가스",
  ],

  waterReactivity: {
    hazards: [
      "수분과 반응해 산성화 가능",
    ],
    decon: [
      "가스 차단 및 환기 우선",
      "물 사용 시 산성화 고려",
    ],
  },

  incompatible: [
    "암모니아",
    "환원제",
    "유기물",
  ],

  neutralization: {
    direction: ["환원성 처리 방향 검토"],
    waterUse: "물 사용 시 산성 확산 고려",
    neutralizerNeed: "전용 처리 절차 검토",
  },

  ppe: [
    "공기호흡기",
    "화학보호복",
  ],

  cautions: [
    "공기보다 무거워 저지대 체류 가능",
  ],
},

{
  id: 16,
  nameKo: "오존",
  nameEn: "Ozone",
  formula: "O3",
  cas: "10028-15-6",
  aliases: ["O3", "오존"],
  process: "산화 / 세정",
  state: "청색 기체",
  hazardLevel: "고위험",
  ghsPictograms: ["⭕ 산화성", "🫁 건강유해"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "강산화성 우선",
    },
  ],

  exposure: {
    twa: { value: "0.1 ppm", source: "OSHA" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "0.3 ppm", source: "NIOSH" },
    idlh: { value: "5 ppm", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-112°C",
    flashPoint: "산화성 가스",
  },

  flammability: {
    flashPoint: "산화성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "강산화성",
    "호흡기 자극",
    "재질 열화 가능",
  ],

  waterReactivity: {
    hazards: [
      "수중에서도 산화 반응 가능",
    ],
    decon: [
      "환기 및 차단 우선",
      "오존 분해 우선",
    ],
  },

  incompatible: [
    "유기물",
    "환원제",
    "가연물",
  ],

  neutralization: {
    direction: ["분해·환기 우선"],
    waterUse: "물 사용 효과 제한적",
    neutralizerNeed: "오존 분해 처리 우선",
  },

  ppe: [
    "공기호흡기",
    "보안면",
  ],

  cautions: [
    "냄새만으로 안전 판단 금지",
  ],
},

{
  id: 17,
  nameKo: "수소",
  nameEn: "Hydrogen",
  formula: "H2",
  cas: "1333-74-0",
  aliases: ["H2", "수소"],
  process: "Utility / 반응가스",
  state: "무색 기체",
  hazardLevel: "고위험",
  ghsPictograms: ["🔥 인화성", "💥 폭발위험"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "폭발성 우선",
    },
  ],

  exposure: {
    twa: { value: "단순 질식성", source: "OSHA" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "단순 질식성", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 매우 가벼움",
    vaporPressure: "가스",
    boilingPoint: "-253°C",
    flashPoint: "가연성 가스",
  },

  flammability: {
    flashPoint: "가연성",
    autoIgnition: "500°C",
    lel: "4%",
    uel: "75%",
  },

  mainHazards: [
    "폭발범위 매우 넓음",
    "정전기 점화 위험",
    "밀폐공간 질식 위험",
  ],

  waterReactivity: {
    hazards: [
      "물반응성은 낮음",
    ],
    decon: [
      "누출 차단 및 점화원 제거 우선",
    ],
  },

  incompatible: [
    "산화제",
    "점화원",
  ],

  neutralization: {
    direction: ["중화 대상 아님"],
    waterUse: "물 사용 효과 제한적",
    neutralizerNeed: "가스 차단 우선",
  },

  ppe: [
    "방염 보호구",
    "가스 검지기",
  ],

  cautions: [
    "폭발 하한 관리 매우 중요",
  ],
},

{
  id: 18,
  nameKo: "아산화질소",
  nameEn: "Nitrous Oxide",
  formula: "N2O",
  cas: "10024-97-2",
  aliases: ["N2O", "아산화질소"],
  process: "반응가스",
  state: "무색 기체",
  hazardLevel: "주의",
  ghsPictograms: ["⭕ 산화성", "🧯 가스실린더"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "산화성",
    },
  ],

  exposure: {
    twa: { value: "25 ppm", source: "NIOSH 대표값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "800 ppm", source: "대표 참고값" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-88°C",
    flashPoint: "비가연성 / 산화성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "산화성",
    "질식 위험",
    "고농도 중추신경 영향 가능",
  ],

  waterReactivity: {
    hazards: [
      "물반응성 낮음",
    ],
    decon: [
      "차단 및 환기 우선",
    ],
  },

  incompatible: [
    "가연물",
    "환원제",
  ],

  neutralization: {
    direction: ["가스 차단 우선"],
    waterUse: "물 사용 효과 제한적",
    neutralizerNeed: "중화 대상 아님",
  },

  ppe: [
    "공기호흡기",
    "가스 검지기",
  ],

  cautions: [
    "산화성 가스로 가연물 접촉 주의",
  ],
},

{
  id: 19,
  nameKo: "디클로로실란",
  nameEn: "Dichlorosilane",
  formula: "SiH2Cl2",
  cas: "4109-96-0",
  aliases: ["DCS", "Dichlorosilane"],
  process: "증착 / CVD",
  state: "무색 기체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["🔥 인화성", "🧪 부식성"],

  ph: [
    {
      concentration: "수분 접촉",
      value: "산성 생성 가능",
      note: "HCl 생성 가능",
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
    vaporPressure: "가스",
    boilingPoint: "8°C",
    flashPoint: "가연성",
  },

  flammability: {
    flashPoint: "가연성",
    autoIgnition: "제품 SDS 확인",
    lel: "제품 SDS 확인",
    uel: "제품 SDS 확인",
  },

  mainHazards: [
    "가연성",
    "수분 접촉 시 HCl 생성 가능",
    "반응성 가스",
  ],

  waterReactivity: {
    hazards: [
      "물과 반응해 HCl 생성 가능",
    ],
    decon: [
      "건식 차단 우선",
      "물 사용 전 반응성 검토",
    ],
  },

  incompatible: [
    "물",
    "습기",
    "산화제",
  ],

  neutralization: {
    direction: ["생성 HCl 중화 검토"],
    waterUse: "직접 물 사용 시 반응성 고려",
    neutralizerNeed: "산성 생성물 중화 필요 가능",
  },

  ppe: [
    "공기호흡기",
    "화학보호복",
  ],

  cautions: [
    "수분 반응성 우선 고려",
  ],
},

{
  id: 20,
  nameKo: "삼염화실란",
  nameEn: "Trichlorosilane",
  formula: "SiHCl3",
  cas: "10025-78-2",
  aliases: ["TCS", "Trichlorosilane"],
  process: "증착 / Poly-Si",
  state: "무색 액체 또는 기체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["🔥 인화성", "🧪 부식성"],

  ph: [
    {
      concentration: "수분 접촉",
      value: "산성 생성 가능",
      note: "HCl 생성 가능",
    },
  ],

  exposure: {
    twa: { value: "5 ppm", source: "대표 SDS 참고값" },
    stel: { value: "10 ppm", source: "대표 SDS 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "1.34 g/cm³",
    vaporPressure: "높음",
    boilingPoint: "31°C",
    flashPoint: "-18°C",
  },

  flammability: {
    flashPoint: "-18°C",
    autoIgnition: "제품 SDS 확인",
    lel: "6%",
    uel: "90%",
  },

  mainHazards: [
    "가연성",
    "수분 반응 시 HCl 생성 가능",
    "폭발 가능성",
  ],

  waterReactivity: {
    hazards: [
      "물과 격렬 반응 가능",
      "HCl 생성 가능",
    ],
    decon: [
      "건식 차단 우선",
      "물 사용 전 반응성 검토",
    ],
  },

  incompatible: [
    "물",
    "습기",
    "산화제",
  ],

  neutralization: {
    direction: ["생성 HCl 중화 검토"],
    waterUse: "초기 직접 물 사용 신중 판단",
    neutralizerNeed: "산성 생성물 중화 가능성 고려",
  },

  ppe: [
    "공기호흡기",
    "화학보호복",
  ],

  cautions: [
    "물반응성과 인화성 동시 고려",
  ],
},

{
  id: 21,
  nameKo: "TEOS",
  nameEn: "Tetraethyl Orthosilicate",
  formula: "Si(OC2H5)4",
  cas: "78-10-4",
  aliases: ["TEOS"],
  process: "산화막 증착",
  state: "무색 액체",
  hazardLevel: "주의",
  ghsPictograms: ["🔥 인화성", "❗ 경고"],

  ph: [
    {
      concentration: "액체",
      value: "해당 없음",
      note: "가수분해 가능",
    },
  ],

  exposure: {
    twa: { value: "10 ppm", source: "대표 SDS 참고값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "0.93 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "168°C",
    flashPoint: "45°C",
  },

  flammability: {
    flashPoint: "45°C",
    autoIgnition: "제품 SDS 확인",
    lel: "제품 SDS 확인",
    uel: "제품 SDS 확인",
  },

  mainHazards: [
    "인화성 액체",
    "증기 흡입 자극 가능",
  ],

  waterReactivity: {
    hazards: [
      "가수분해 가능",
    ],
    decon: [
      "흡착 및 회수 우선",
    ],
  },

  incompatible: [
    "산화제",
  ],

  neutralization: {
    direction: ["흡착 및 회수 우선"],
    waterUse: "물 사용 가능하나 확산 고려",
    neutralizerNeed: "일반 중화 대상 아님",
  },

  ppe: [
    "유기증기용 호흡보호구",
    "보안경",
  ],

  cautions: [
    "점화원 관리 필요",
  ],
},

{
  id: 22,
  nameKo: "사불화규소",
  nameEn: "Silicon Tetrafluoride",
  formula: "SiF4",
  cas: "7783-61-1",
  aliases: ["SiF4"],
  process: "Etch / 반응가스",
  state: "무색 기체",
  hazardLevel: "고위험",
  ghsPictograms: ["🧪 부식성", "☠️ 급성독성"],

  ph: [
    {
      concentration: "수분 접촉",
      value: "산성 생성 가능",
      note: "HF 생성 가능",
    },
  ],

  exposure: {
    twa: { value: "2.5 ppm", source: "대표 SDS 참고값" },
    stel: { value: "5 ppm", source: "대표 SDS 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-86°C",
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
    "부식성",
  ],

  waterReactivity: {
    hazards: [
      "물과 반응해 HF 생성 가능",
    ],
    decon: [
      "건식 차단 우선",
    ],
  },

  incompatible: [
    "물",
    "습기",
  ],

  neutralization: {
    direction: ["HF 생성물 중화 검토"],
    waterUse: "직접 물 사용 시 HF 생성 고려",
    neutralizerNeed: "칼슘계 중화 방향 검토",
  },

  ppe: [
    "공기호흡기",
    "내산 장갑",
  ],

  cautions: [
    "HF 생성 가능성 우선 고려",
  ],
},

{
  id: 23,
  nameKo: "사불화탄소",
  nameEn: "Carbon Tetrafluoride",
  formula: "CF4",
  cas: "75-73-0",
  aliases: ["CF4"],
  process: "Etch Gas",
  state: "무색 기체",
  hazardLevel: "주의",
  ghsPictograms: ["🧯 가스실린더"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "질식 위험 가능",
    },
  ],

  exposure: {
    twa: { value: "1000 ppm", source: "대표 SDS 참고값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "단순 질식성", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-128°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "질식 위험",
    "밀폐공간 산소결핍 가능",
  ],

  waterReactivity: {
    hazards: [
      "물반응성 낮음",
    ],
    decon: [
      "환기 우선",
    ],
  },

  incompatible: [
    "고온",
  ],

  neutralization: {
    direction: ["가스 배기 우선"],
    waterUse: "물 사용 효과 제한적",
    neutralizerNeed: "중화 대상 아님",
  },

  ppe: [
    "공기호흡기",
  ],

  cautions: [
    "산소결핍 위험 고려",
  ],
},

{
  id: 24,
  nameKo: "육불화에탄",
  nameEn: "Hexafluoroethane",
  formula: "C2F6",
  cas: "76-16-4",
  aliases: ["C2F6"],
  process: "Etch Gas",
  state: "무색 기체",
  hazardLevel: "주의",
  ghsPictograms: ["🧯 가스실린더"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "질식 위험 가능",
    },
  ],

  exposure: {
    twa: { value: "1000 ppm", source: "대표 SDS 참고값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "단순 질식성", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-78°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "질식 위험",
    "산소결핍 가능",
  ],

  waterReactivity: {
    hazards: [
      "물반응성 낮음",
    ],
    decon: [
      "환기 우선",
    ],
  },

  incompatible: [
    "고온",
  ],

  neutralization: {
    direction: ["가스 배기 우선"],
    waterUse: "물 사용 효과 제한적",
    neutralizerNeed: "중화 대상 아님",
  },

  ppe: [
    "공기호흡기",
  ],

  cautions: [
    "밀폐공간 질식 위험 고려",
  ],
},
{
  id: 25,
  nameKo: "수산화나트륨",
  nameEn: "Sodium Hydroxide",
  formula: "NaOH",
  cas: "1310-73-2",
  aliases: ["NaOH", "가성소다"],
  process: "폐수 / 중화 / 세정",
  state: "백색 고체 또는 수용액",
  hazardLevel: "고위험",
  ghsPictograms: ["🧪 부식성"],

  ph: [
    {
      concentration: "50%",
      value: "강염기성",
      note: "강한 부식성",
    },
  ],

  exposure: {
    twa: { value: "2 mg/m³", source: "OSHA Ceiling" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "2 mg/m³", source: "OSHA" },
    idlh: { value: "10 mg/m³", source: "NIOSH 대표값" },
  },

  physical: {
    density: "2.13 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "1388°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "강염기성",
    "심한 피부 화상",
    "물 접촉 시 발열 가능",
  ],

  waterReactivity: {
    hazards: [
      "물 희석 시 발열 가능",
    ],
    decon: [
      "대량 물 세척 가능",
      "인체 제독 우선",
    ],
  },

  incompatible: [
    "산",
    "알루미늄",
  ],

  neutralization: {
    direction: ["산성 중화 검토"],
    waterUse: "물 사용 가능",
    neutralizerNeed: "산성 중화제 검토 가능",
  },

  ppe: [
    "내화학 장갑",
    "보안면",
  ],

  cautions: [
    "눈 손상 위험 큼",
  ],
},

{
  id: 26,
  nameKo: "PAC",
  nameEn: "Polyaluminum Chloride",
  formula: "PAC",
  cas: "1327-41-9",
  aliases: ["PAC", "폴리염화알루미늄"],
  process: "폐수처리",
  state: "황색 액체",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "원액",
      value: "약산성",
      note: "제품별 상이",
    },
  ],

  exposure: {
    twa: { value: "제품 SDS 확인", source: "제조사 SDS" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "약 1.3 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "제품별 상이",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "피부·눈 자극 가능",
    "응집제",
  ],

  waterReactivity: {
    hazards: [
      "물과 혼합 사용",
    ],
    decon: [
      "물 세척 가능",
    ],
  },

  incompatible: [
    "강염기",
  ],

  neutralization: {
    direction: ["중화보다는 희석·세척"],
    waterUse: "물 사용 가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "보안경",
    "장갑",
  ],

  cautions: [
    "미끄럼 위험",
  ],
},

{
  id: 27,
  nameKo: "PAM",
  nameEn: "Polyacrylamide",
  formula: "PAM",
  cas: "9003-05-8",
  aliases: ["PAM", "폴리아크릴아마이드"],
  process: "폐수처리",
  state: "백색 분말",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "용액",
      value: "중성 부근",
      note: "제품별 상이",
    },
  ],

  exposure: {
    twa: { value: "설정 없음", source: "-" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "약 1.3 g/cm³",
    vaporPressure: "해당 없음",
    boilingPoint: "해당 없음",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "분진 흡입 자극 가능",
    "미끄럼 위험",
  ],

  waterReactivity: {
    hazards: [
      "물과 혼합 시 미끄러움 증가",
    ],
    decon: [
      "물 세척 가능",
    ],
  },

  incompatible: [
    "강산화제",
  ],

  neutralization: {
    direction: ["중화 대상 아님"],
    waterUse: "물 세척 가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "보안경",
    "방진마스크",
  ],

  cautions: [
    "바닥 미끄럼 주의",
  ],
},

{
  id: 28,
  nameKo: "차아염소산나트륨",
  nameEn: "Sodium Hypochlorite",
  formula: "NaOCl",
  cas: "7681-52-9",
  aliases: ["NaOCl", "락스"],
  process: "폐수 / 살균",
  state: "황색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["🧪 부식성", "🌊 환경유해"],

  ph: [
    {
      concentration: "원액",
      value: "강염기성",
      note: "염소 발생 가능",
    },
  ],

  exposure: {
    twa: { value: "설정 없음", source: "-" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.2 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해 가능",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "산 혼합 시 염소가스 발생 가능",
    "부식성",
  ],

  waterReactivity: {
    hazards: [
      "산과 반응 시 Cl2 발생 가능",
    ],
    decon: [
      "물 세척 가능",
      "산 접촉 차단 우선",
    ],
  },

  incompatible: [
    "산",
    "암모니아",
  ],

  neutralization: {
    direction: ["환원성 처리 검토"],
    waterUse: "물 사용 가능",
    neutralizerNeed: "산 접촉 금지",
  },

  ppe: [
    "보안면",
    "내화학 장갑",
  ],

  cautions: [
    "산 혼합 금지",
  ],
},

{
  id: 29,
  nameKo: "과산화수소",
  nameEn: "Hydrogen Peroxide",
  formula: "H2O2",
  cas: "7722-84-1",
  aliases: ["H2O2", "과산화수소"],
  process: "세정 / 산화",
  state: "무색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["⭕ 산화성", "🧪 부식성"],

  ph: [
    {
      concentration: "35%",
      value: "약산성",
      note: "산화성 우선",
    },
  ],

  exposure: {
    twa: { value: "1 ppm", source: "OSHA" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "1 ppm", source: "NIOSH" },
    idlh: { value: "75 ppm", source: "NIOSH" },
  },

  physical: {
    density: "1.39 g/cm³",
    vaporPressure: "5 mmHg",
    boilingPoint: "141°C",
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
    "유기물 반응 가능",
    "산소 발생 가능",
  ],

  waterReactivity: {
    hazards: [
      "오염 시 급격 분해 가능",
    ],
    decon: [
      "오염 제거 후 세척",
    ],
  },

  incompatible: [
    "유기물",
    "금속",
  ],

  neutralization: {
    direction: ["분해·희석 관리 우선"],
    waterUse: "물 사용 가능",
    neutralizerNeed: "일반 중화보다 분해 관리 우선",
  },

  ppe: [
    "보안면",
    "내화학 장갑",
  ],

  cautions: [
    "밀폐 시 압력 상승 가능",
  ],
},

{
  id: 30,
  nameKo: "에틸렌글리콜",
  nameEn: "Ethylene Glycol",
  formula: "C2H6O2",
  cas: "107-21-1",
  aliases: ["EG", "부동액"],
  process: "공조 / Chiller",
  state: "무색 액체",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "원액",
      value: "중성 부근",
      note: "독성 주의",
    },
  ],

  exposure: {
    twa: { value: "50 ppm", source: "대표 SDS 참고값" },
    stel: { value: "100 ppm", source: "대표 SDS 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "1.11 g/cm³",
    vaporPressure: "0.06 mmHg",
    boilingPoint: "197°C",
    flashPoint: "111°C",
  },

  flammability: {
    flashPoint: "111°C",
    autoIgnition: "410°C",
    lel: "3.2%",
    uel: "15.3%",
  },

  mainHazards: [
    "섭취 독성",
    "고온 시 인화 가능",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "흡착 후 물 세척",
    ],
  },

  incompatible: [
    "강산화제",
  ],

  neutralization: {
    direction: ["흡착·회수 우선"],
    waterUse: "물 사용 가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "보안경",
    "장갑",
  ],

  cautions: [
    "누출 시 미끄럼 위험",
  ],
},

{
  id: 31,
  nameKo: "프로필렌글리콜",
  nameEn: "Propylene Glycol",
  formula: "C3H8O2",
  cas: "57-55-6",
  aliases: ["PG", "프로필렌글리콜"],
  process: "공조 / Chiller",
  state: "무색 액체",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "원액",
      value: "중성 부근",
      note: "저독성 부동액",
    },
  ],

  exposure: {
    twa: { value: "10 mg/m³", source: "대표 SDS 참고값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.03 g/cm³",
    vaporPressure: "0.1 mmHg",
    boilingPoint: "188°C",
    flashPoint: "99°C",
  },

  flammability: {
    flashPoint: "99°C",
    autoIgnition: "371°C",
    lel: "2.6%",
    uel: "12.5%",
  },

  mainHazards: [
    "고온 시 인화 가능",
    "미끄럼 위험",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "흡착 후 물 세척",
    ],
  },

  incompatible: [
    "강산화제",
  ],

  neutralization: {
    direction: ["흡착·회수 우선"],
    waterUse: "물 사용 가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "보안경",
    "장갑",
  ],

  cautions: [
    "바닥 미끄럼 주의",
  ],
},

{
  id: 32,
  nameKo: "메탄올",
  nameEn: "Methanol",
  formula: "CH3OH",
  cas: "67-56-1",
  aliases: ["메탄올", "Methanol"],
  process: "세정 / 용제",
  state: "무색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["🔥 인화성", "☠️ 급성독성"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "독성·인화성 우선",
    },
  ],

  exposure: {
    twa: { value: "200 ppm", source: "OSHA" },
    stel: { value: "250 ppm", source: "ACGIH" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "6000 ppm", source: "NIOSH" },
  },

  physical: {
    density: "0.79 g/cm³",
    vaporPressure: "97 mmHg",
    boilingPoint: "65°C",
    flashPoint: "11°C",
  },

  flammability: {
    flashPoint: "11°C",
    autoIgnition: "464°C",
    lel: "6%",
    uel: "36%",
  },

  mainHazards: [
    "고인화성",
    "시신경 독성",
    "흡입 독성",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "흡착·환기 우선",
    ],
  },

  incompatible: [
    "산화제",
    "점화원",
  ],

  neutralization: {
    direction: ["흡착 및 회수 우선"],
    waterUse: "물 사용 가능하나 인화성 고려",
    neutralizerNeed: "일반 중화 대상 아님",
  },

  ppe: [
    "유기증기용 호흡보호구",
    "방염 보호구",
  ],

  cautions: [
    "정전기·점화원 관리 중요",
  ],
},

{
  id: 33,
  nameKo: "아세톤",
  nameEn: "Acetone",
  formula: "C3H6O",
  cas: "67-64-1",
  aliases: ["Acetone", "아세톤"],
  process: "세정 / 용제",
  state: "무색 액체",
  hazardLevel: "주의",
  ghsPictograms: ["🔥 인화성"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "인화성 우선",
    },
  ],

  exposure: {
    twa: { value: "250 ppm", source: "OSHA" },
    stel: { value: "500 ppm", source: "ACGIH" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "2500 ppm", source: "NIOSH" },
  },

  physical: {
    density: "0.79 g/cm³",
    vaporPressure: "180 mmHg",
    boilingPoint: "56°C",
    flashPoint: "-20°C",
  },

  flammability: {
    flashPoint: "-20°C",
    autoIgnition: "465°C",
    lel: "2.6%",
    uel: "12.8%",
  },

  mainHazards: [
    "고인화성",
    "증기 흡입 자극",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "흡착 및 환기 우선",
    ],
  },

  incompatible: [
    "산화제",
    "점화원",
  ],

  neutralization: {
    direction: ["흡착·회수 우선"],
    waterUse: "물 사용 가능",
    neutralizerNeed: "일반 중화 대상 아님",
  },

  ppe: [
    "유기증기용 호흡보호구",
    "방염 보호구",
  ],

  cautions: [
    "LEL 관리 중요",
  ],
},
{
  id: 34,
  nameKo: "이소프로필알코올",
  nameEn: "Isopropyl Alcohol",
  formula: "C3H8O",
  cas: "67-63-0",
  aliases: ["IPA", "이소프로판올"],
  process: "세정 / 용제",
  state: "무색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["🔥 인화성", "❗ 경고"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "인화성 우선",
    },
  ],

  exposure: {
    twa: { value: "200 ppm", source: "OSHA" },
    stel: { value: "400 ppm", source: "ACGIH" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "2000 ppm", source: "NIOSH" },
  },

  physical: {
    density: "0.79 g/cm³",
    vaporPressure: "45 mmHg",
    boilingPoint: "82°C",
    flashPoint: "12°C",
  },

  flammability: {
    flashPoint: "12°C",
    autoIgnition: "399°C",
    lel: "2%",
    uel: "12%",
  },

  mainHazards: [
    "고인화성",
    "정전기 점화 가능",
    "증기 흡입 자극",
  ],

  waterReactivity: {
    hazards: ["물 혼합 가능"],
    decon: ["흡착 및 환기 우선"],
  },

  incompatible: ["산화제", "점화원"],

  neutralization: {
    direction: ["흡착·회수 우선"],
    waterUse: "물 사용 가능",
    neutralizerNeed: "일반 중화 대상 아님",
  },

  ppe: ["유기증기용 호흡보호구", "방염 보호구"],

  cautions: [
    "LEL 도달 가능성 주의",
  ],
},

{
  id: 35,
  nameKo: "질소",
  nameEn: "Nitrogen",
  formula: "N2",
  cas: "7727-37-9",
  aliases: ["N2", "질소"],
  process: "퍼지 / Utility",
  state: "무색 기체",
  hazardLevel: "주의",
  ghsPictograms: ["🧯 가스실린더"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "산소결핍 위험",
    },
  ],

  exposure: {
    twa: { value: "단순 질식성", source: "NIOSH" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "단순 질식성", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 약간 가벼움",
    vaporPressure: "가스",
    boilingPoint: "-196°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "산소결핍",
    "밀폐공간 질식 위험",
  ],

  waterReactivity: {
    hazards: ["물반응성 낮음"],
    decon: ["환기 우선"],
  },

  incompatible: [],

  neutralization: {
    direction: ["중화 대상 아님"],
    waterUse: "물 사용 효과 없음",
    neutralizerNeed: "산소농도 관리 우선",
  },

  ppe: ["산소농도측정기", "공기호흡기"],

  cautions: [
    "무취·무색이라 감지 어려움",
  ],
},

{
  id: 36,
  nameKo: "헬륨",
  nameEn: "Helium",
  formula: "He",
  cas: "7440-59-7",
  aliases: ["He", "헬륨"],
  process: "Leak Test / Utility",
  state: "무색 기체",
  hazardLevel: "주의",
  ghsPictograms: ["🧯 가스실린더"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "질식 위험 가능",
    },
  ],

  exposure: {
    twa: { value: "단순 질식성", source: "NIOSH" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "단순 질식성", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 매우 가벼움",
    vaporPressure: "가스",
    boilingPoint: "-269°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "산소결핍",
    "고압가스 위험",
  ],

  waterReactivity: {
    hazards: ["반응성 낮음"],
    decon: ["환기 우선"],
  },

  incompatible: [],

  neutralization: {
    direction: ["중화 대상 아님"],
    waterUse: "효과 없음",
    neutralizerNeed: "환기 우선",
  },

  ppe: ["산소농도측정기"],

  cautions: [
    "밀폐공간 산소결핍 주의",
  ],
},

{
  id: 37,
  nameKo: "아르곤",
  nameEn: "Argon",
  formula: "Ar",
  cas: "7440-37-1",
  aliases: ["Ar", "아르곤"],
  process: "퍼지 / 용접 / Utility",
  state: "무색 기체",
  hazardLevel: "주의",
  ghsPictograms: ["🧯 가스실린더"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "질식 위험",
    },
  ],

  exposure: {
    twa: { value: "단순 질식성", source: "NIOSH" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "단순 질식성", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-186°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "저지대 산소결핍",
    "밀폐공간 질식 위험",
  ],

  waterReactivity: {
    hazards: ["반응성 낮음"],
    decon: ["환기 우선"],
  },

  incompatible: [],

  neutralization: {
    direction: ["중화 대상 아님"],
    waterUse: "효과 없음",
    neutralizerNeed: "산소농도 관리 우선",
  },

  ppe: ["산소농도측정기", "공기호흡기"],

  cautions: [
    "저지대 체류 가능",
  ],
},

{
  id: 38,
  nameKo: "산소",
  nameEn: "Oxygen",
  formula: "O2",
  cas: "7782-44-7",
  aliases: ["O2", "산소"],
  process: "Utility",
  state: "무색 기체",
  hazardLevel: "고위험",
  ghsPictograms: ["⭕ 산화성", "🧯 가스실린더"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "산화성",
    },
  ],

  exposure: {
    twa: { value: "해당 없음", source: "-" },
    stel: { value: "해당 없음", source: "-" },
    ceiling: { value: "해당 없음", source: "-" },
    idlh: { value: "해당 없음", source: "-" },
  },

  physical: {
    density: "공기보다 약간 무거움",
    vaporPressure: "가스",
    boilingPoint: "-183°C",
    flashPoint: "산화성",
  },

  flammability: {
    flashPoint: "산화성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "연소 촉진",
    "산소농도 증가 시 화재 위험 급증",
  ],

  waterReactivity: {
    hazards: ["반응성 낮음"],
    decon: ["차단 및 환기 우선"],
  },

  incompatible: ["가연물", "유류"],

  neutralization: {
    direction: ["산소농도 저감 우선"],
    waterUse: "일반적 사용 가능",
    neutralizerNeed: "중화 대상 아님",
  },

  ppe: ["방염 보호구"],

  cautions: [
    "산소농도 상승 시 화재폭발 위험 증가",
  ],
},

{
  id: 39,
  nameKo: "이산화탄소",
  nameEn: "Carbon Dioxide",
  formula: "CO2",
  cas: "124-38-9",
  aliases: ["CO2", "이산화탄소"],
  process: "소화설비 / Utility",
  state: "무색 기체",
  hazardLevel: "주의",
  ghsPictograms: ["🧯 가스실린더"],

  ph: [
    {
      concentration: "가스",
      value: "약산성 가능",
      note: "고농도 질식 위험",
    },
  ],

  exposure: {
    twa: { value: "5000 ppm", source: "OSHA" },
    stel: { value: "30000 ppm", source: "ACGIH" },
    ceiling: { value: "40000 ppm", source: "NIOSH" },
    idlh: { value: "40000 ppm", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-78°C (승화)",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "산소결핍",
    "저지대 체류 가능",
  ],

  waterReactivity: {
    hazards: ["물에 녹아 약산성 가능"],
    decon: ["환기 우선"],
  },

  incompatible: [],

  neutralization: {
    direction: ["환기 및 산소농도 확보"],
    waterUse: "효과 제한적",
    neutralizerNeed: "중화 대상 아님",
  },

  ppe: ["공기호흡기"],

  cautions: [
    "밀폐공간 질식 위험",
  ],
},

{
  id: 40,
  nameKo: "일산화탄소",
  nameEn: "Carbon Monoxide",
  formula: "CO",
  cas: "630-08-0",
  aliases: ["CO", "일산화탄소"],
  process: "연소 / Utility",
  state: "무색 기체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🔥 인화성"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "혈액 독성",
    },
  ],

  exposure: {
    twa: { value: "25 ppm", source: "OSHA" },
    stel: { value: "200 ppm", source: "대표 참고값" },
    ceiling: { value: "200 ppm", source: "NIOSH" },
    idlh: { value: "1200 ppm", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 약간 가벼움",
    vaporPressure: "가스",
    boilingPoint: "-191°C",
    flashPoint: "가연성",
  },

  flammability: {
    flashPoint: "가연성",
    autoIgnition: "609°C",
    lel: "12.5%",
    uel: "74%",
  },

  mainHazards: [
    "헤모글로빈 결합 독성",
    "무취·무색",
    "가연성",
  ],

  waterReactivity: {
    hazards: ["반응성 낮음"],
    decon: ["환기 및 차단 우선"],
  },

  incompatible: ["산화제", "점화원"],

  neutralization: {
    direction: ["환기 및 연소 차단"],
    waterUse: "효과 제한적",
    neutralizerNeed: "중화 대상 아님",
  },

  ppe: ["공기호흡기", "CO 측정기"],

  cautions: [
    "무취라 감지 어려움",
  ],
},

{
  id: 41,
  nameKo: "황화수소",
  nameEn: "Hydrogen Sulfide",
  formula: "H2S",
  cas: "7783-06-4",
  aliases: ["H2S", "황화수소"],
  process: "폐수 / Utility",
  state: "무색 기체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🔥 인화성"],

  ph: [
    {
      concentration: "가스",
      value: "약산성 가능",
      note: "고독성",
    },
  ],

  exposure: {
    twa: { value: "1 ppm", source: "ACGIH" },
    stel: { value: "5 ppm", source: "ACGIH" },
    ceiling: { value: "10 ppm", source: "NIOSH" },
    idlh: { value: "100 ppm", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-60°C",
    flashPoint: "가연성",
  },

  flammability: {
    flashPoint: "가연성",
    autoIgnition: "260°C",
    lel: "4%",
    uel: "44%",
  },

  mainHazards: [
    "후각 마비 가능",
    "고독성",
    "저지대 체류",
  ],

  waterReactivity: {
    hazards: ["산성 조건 발생 가능"],
    decon: ["환기·차단 우선"],
  },

  incompatible: ["산화제"],

  neutralization: {
    direction: ["가스 차단 및 스크러빙"],
    waterUse: "일부 가능",
    neutralizerNeed: "전용 처리 검토",
  },

  ppe: ["공기호흡기", "H2S 측정기"],

  cautions: [
    "냄새 사라져도 안전 의미 아님",
  ],
},

{
  id: 42,
  nameKo: "이산화황",
  nameEn: "Sulfur Dioxide",
  formula: "SO2",
  cas: "7446-09-5",
  aliases: ["SO2", "이산화황"],
  process: "연소 / Utility",
  state: "무색 기체",
  hazardLevel: "고위험",
  ghsPictograms: ["☠️ 급성독성", "🧪 부식성"],

  ph: [
    {
      concentration: "수분 접촉",
      value: "산성",
      note: "자극성 가스",
    },
  ],

  exposure: {
    twa: { value: "2 ppm", source: "OSHA" },
    stel: { value: "5 ppm", source: "ACGIH" },
    ceiling: { value: "5 ppm", source: "NIOSH" },
    idlh: { value: "100 ppm", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-10°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "호흡기 자극",
    "산성 가스",
    "저지대 체류 가능",
  ],

  waterReactivity: {
    hazards: ["물과 반응해 산성화 가능"],
    decon: ["환기 및 물 세척 가능"],
  },

  incompatible: ["산화제"],

  neutralization: {
    direction: ["알칼리 흡수 검토"],
    waterUse: "물 사용 가능",
    neutralizerNeed: "알칼리 중화 검토",
  },

  ppe: ["공기호흡기", "내산 장갑"],

  cautions: [
    "저지대 체류 가능",
  ],
},

{
  id: 43,
  nameKo: "불화암모늄",
  nameEn: "Ammonium Fluoride",
  formula: "NH4F",
  cas: "12125-01-8",
  aliases: ["NH4F", "불화암모늄"],
  process: "Etch / 세정",
  state: "백색 고체 또는 수용액",
  hazardLevel: "고위험",
  ghsPictograms: ["☠️ 급성독성", "🧪 부식성"],

  ph: [
    {
      concentration: "용액",
      value: "산성",
      note: "HF 위험 고려",
    },
  ],

  exposure: {
    twa: { value: "2.5 mg/m³", source: "대표 SDS 참고값" },
    stel: { value: "5 mg/m³", source: "대표 SDS 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "1.0 g/cm³ 이상",
    vaporPressure: "낮음",
    boilingPoint: "분해 가능",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "HF 유사 위험성",
    "피부 침투 독성 가능",
  ],

  waterReactivity: {
    hazards: ["수용성"],
    decon: ["대량 물 세척 가능"],
  },

  incompatible: ["강산"],

  neutralization: {
    direction: ["칼슘계 중화 검토"],
    waterUse: "물 세척 가능",
    neutralizerNeed: "불소계 중화 검토",
  },

  ppe: ["공기호흡기", "내산 장갑"],

  cautions: [
    "HF 유사 대응 고려",
  ],
},
{
  id: 44,
  nameKo: "붕산",
  nameEn: "Boric Acid",
  formula: "H3BO3",
  cas: "10043-35-3",
  aliases: ["붕산", "Boric Acid"],
  process: "폐수 / 화학처리",
  state: "백색 고체",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "용액",
      value: "약산성",
      note: "저농도 자극 가능",
    },
  ],

  exposure: {
    twa: { value: "10 mg/m³", source: "대표 SDS 참고값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.43 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "분진 자극 가능",
  ],

  waterReactivity: {
    hazards: ["수용성"],
    decon: ["물 세척 가능"],
  },

  incompatible: ["강염기"],

  neutralization: {
    direction: ["일반 희석 및 세척"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: ["보안경", "장갑"],

  cautions: [
    "분진 흡입 주의",
  ],
},

{
  id: 45,
  nameKo: "불화수소암모늄",
  nameEn: "Ammonium Bifluoride",
  formula: "NH4HF2",
  cas: "1341-49-7",
  aliases: ["ABF", "불화수소암모늄"],
  process: "Etch / 세정",
  state: "백색 고체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🧪 부식성"],

  ph: [
    {
      concentration: "용액",
      value: "산성",
      note: "HF 생성 가능",
    },
  ],

  exposure: {
    twa: { value: "2.5 mg/m³", source: "대표 SDS 참고값" },
    stel: { value: "5 mg/m³", source: "대표 SDS 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "1.5 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "HF 유사 위험성",
    "피부 침투 독성 가능",
  ],

  waterReactivity: {
    hazards: ["물에 용해됨"],
    decon: ["대량 물 세척 가능"],
  },

  incompatible: ["강산", "금속"],

  neutralization: {
    direction: ["칼슘계 중화 검토"],
    waterUse: "가능",
    neutralizerNeed: "불소계 중화 검토",
  },

  ppe: ["공기호흡기", "내산 장갑"],

  cautions: [
    "HF 대응 수준 고려",
  ],
},

{
  id: 46,
  nameKo: "인산",
  nameEn: "Phosphoric Acid",
  formula: "H3PO4",
  cas: "7664-38-2",
  aliases: ["인산", "H3PO4"],
  process: "세정 / Etch",
  state: "무색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["🧪 부식성"],

  ph: [
    {
      concentration: "85%",
      value: "강산성",
      note: "부식성",
    },
  ],

  exposure: {
    twa: { value: "1 mg/m³", source: "OSHA" },
    stel: { value: "3 mg/m³", source: "ACGIH" },
    ceiling: { value: "3 mg/m³", source: "NIOSH" },
    idlh: { value: "1000 mg/m³", source: "대표 참고값" },
  },

  physical: {
    density: "1.88 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "158°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "부식성",
    "산 미스트 가능",
  ],

  waterReactivity: {
    hazards: ["희석 시 발열 가능"],
    decon: ["물 세척 가능"],
  },

  incompatible: ["강염기"],

  neutralization: {
    direction: ["알칼리 중화 검토"],
    waterUse: "가능",
    neutralizerNeed: "중화 가능",
  },

  ppe: ["내산 장갑", "보안면"],

  cautions: [
    "산 미스트 흡입 주의",
  ],
},

{
  id: 47,
  nameKo: "초산",
  nameEn: "Acetic Acid",
  formula: "CH3COOH",
  cas: "64-19-7",
  aliases: ["초산", "빙초산"],
  process: "세정 / 화학공정",
  state: "무색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["🔥 인화성", "🧪 부식성"],

  ph: [
    {
      concentration: "빙초산",
      value: "강산성",
      note: "자극성 증기",
    },
  ],

  exposure: {
    twa: { value: "10 ppm", source: "OSHA" },
    stel: { value: "15 ppm", source: "ACGIH" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "50 ppm", source: "NIOSH" },
  },

  physical: {
    density: "1.05 g/cm³",
    vaporPressure: "11 mmHg",
    boilingPoint: "118°C",
    flashPoint: "39°C",
  },

  flammability: {
    flashPoint: "39°C",
    autoIgnition: "427°C",
    lel: "4%",
    uel: "19%",
  },

  mainHazards: [
    "자극성 증기",
    "인화성",
  ],

  waterReactivity: {
    hazards: ["물 혼합 가능"],
    decon: ["흡착 후 물 세척"],
  },

  incompatible: ["산화제"],

  neutralization: {
    direction: ["알칼리 중화 가능"],
    waterUse: "가능",
    neutralizerNeed: "중화 가능",
  },

  ppe: ["유기증기용 호흡보호구", "보안면"],

  cautions: [
    "증기 흡입 주의",
  ],
},

{
  id: 48,
  nameKo: "과불화암모늄",
  nameEn: "Ammonium Fluoride Mixture",
  formula: "NH4F 계열",
  cas: "혼합물",
  aliases: ["BOE", "Buffered Oxide Etch"],
  process: "Etch",
  state: "액체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🧪 부식성"],

  ph: [
    {
      concentration: "BOE",
      value: "산성",
      note: "HF 포함 가능",
    },
  ],

  exposure: {
    twa: { value: "HF 기준 적용 검토", source: "대표 SDS 참고값" },
    stel: { value: "HF 기준 적용 검토", source: "대표 SDS 참고값" },
    ceiling: { value: "HF 기준 적용 검토", source: "대표 SDS 참고값" },
    idlh: { value: "HF 기준 적용 검토", source: "대표 SDS 참고값" },
  },

  physical: {
    density: "제품별 상이",
    vaporPressure: "제품별 상이",
    boilingPoint: "제품별 상이",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "HF 계열 위험성",
    "피부 침투 독성 가능",
  ],

  waterReactivity: {
    hazards: ["수용성"],
    decon: ["대량 물 세척 가능"],
  },

  incompatible: ["강염기"],

  neutralization: {
    direction: ["칼슘계 중화 검토"],
    waterUse: "가능",
    neutralizerNeed: "불소계 중화 검토",
  },

  ppe: ["공기호흡기", "내산 장갑"],

  cautions: [
    "HF 대응 수준 고려",
  ],
},

{
  id: 49,
  nameKo: "크실렌",
  nameEn: "Xylene",
  formula: "C8H10",
  cas: "1330-20-7",
  aliases: ["Xylene", "자일렌"],
  process: "용제 / 세정",
  state: "무색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["🔥 인화성", "❗ 경고"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "유기용제",
    },
  ],

  exposure: {
    twa: { value: "100 ppm", source: "OSHA" },
    stel: { value: "150 ppm", source: "ACGIH" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "900 ppm", source: "NIOSH" },
  },

  physical: {
    density: "0.86 g/cm³",
    vaporPressure: "8 mmHg",
    boilingPoint: "138°C",
    flashPoint: "27°C",
  },

  flammability: {
    flashPoint: "27°C",
    autoIgnition: "465°C",
    lel: "1%",
    uel: "7%",
  },

  mainHazards: [
    "인화성",
    "중추신경계 영향 가능",
  ],

  waterReactivity: {
    hazards: ["물에 잘 안녹음"],
    decon: ["흡착·환기 우선"],
  },

  incompatible: ["산화제", "점화원"],

  neutralization: {
    direction: ["흡착·회수 우선"],
    waterUse: "확산 가능성 고려",
    neutralizerNeed: "일반 중화 대상 아님",
  },

  ppe: ["유기증기용 호흡보호구", "방염 보호구"],

  cautions: [
    "정전기 점화 주의",
  ],
},
{
  id: 50,
  nameKo: "황화나트륨",
  nameEn: "Sodium Sulfide",
  formula: "Na2S",
  cas: "1313-82-2",
  aliases: ["Na2S", "황화소다"],
  process: "폐수 / 중금속 처리",
  state: "황색 고체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🧪 부식성"],

  ph: [
    {
      concentration: "용액",
      value: "강염기성",
      note: "산 접촉 시 H2S 발생 가능",
    },
  ],

  exposure: {
    twa: { value: "H2S 기준 적용 검토", source: "대표 SDS 참고값" },
    stel: { value: "H2S 기준 적용 검토", source: "대표 SDS 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "H2S 기준 검토", source: "NIOSH 참고" },
  },

  physical: {
    density: "1.86 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "H2S 발생 시 적용",
    uel: "H2S 발생 시 적용",
  },

  mainHazards: [
    "산 접촉 시 H2S 발생 가능",
    "부식성",
    "중금속 침전제",
  ],

  waterReactivity: {
    hazards: [
      "산 혼합 시 황화수소 발생 가능",
    ],
    decon: [
      "환기 및 산 분리 우선",
    ],
  },

  incompatible: [
    "산",
    "산화제",
  ],

  neutralization: {
    direction: ["산 접촉 차단 우선"],
    waterUse: "가능하나 H2S 발생 주의",
    neutralizerNeed: "산 혼합 금지",
  },

  ppe: [
    "공기호흡기",
    "내화학 장갑",
  ],

  cautions: [
    "산 접촉 절대 주의",
  ],
},

{
  id: 51,
  nameKo: "황산제일철",
  nameEn: "Ferrous Sulfate",
  formula: "FeSO4",
  cas: "7720-78-7",
  aliases: ["FeSO4", "황산철"],
  process: "폐수 / Cr 환원",
  state: "녹색 고체",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "용액",
      value: "약산성",
      note: "환원제 역할",
    },
  ],

  exposure: {
    twa: { value: "1 mg/m³", source: "대표 SDS 참고값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.9 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "분진 자극 가능",
    "폐수 환원제",
  ],

  waterReactivity: {
    hazards: [
      "수용성",
    ],
    decon: [
      "물 세척 가능",
    ],
  },

  incompatible: [
    "강산화제",
  ],

  neutralization: {
    direction: ["일반 희석 및 세척"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "보안경",
    "장갑",
  ],

  cautions: [
    "분진 흡입 주의",
  ],
},

{
  id: 52,
  nameKo: "염화제이철",
  nameEn: "Ferric Chloride",
  formula: "FeCl3",
  cas: "7705-08-0",
  aliases: ["FeCl3", "염화철"],
  process: "폐수 / 응집",
  state: "갈색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["🧪 부식성"],

  ph: [
    {
      concentration: "원액",
      value: "강산성",
      note: "부식성",
    },
  ],

  exposure: {
    twa: { value: "1 mg/m³", source: "대표 SDS 참고값" },
    stel: { value: "2 mg/m³", source: "대표 SDS 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.4 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
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
    "응집제",
  ],

  waterReactivity: {
    hazards: [
      "물과 혼합 시 산성",
    ],
    decon: [
      "대량 물 세척 가능",
    ],
  },

  incompatible: [
    "강염기",
    "금속",
  ],

  neutralization: {
    direction: ["알칼리 중화 가능"],
    waterUse: "가능",
    neutralizerNeed: "중화 가능",
  },

  ppe: [
    "내산 장갑",
    "보안면",
  ],

  cautions: [
    "금속 부식 가능",
  ],
},

{
  id: 53,
  nameKo: "수산화칼슘",
  nameEn: "Calcium Hydroxide",
  formula: "Ca(OH)2",
  cas: "1305-62-0",
  aliases: ["소석회", "CaOH"],
  process: "폐수 / 중화",
  state: "백색 분말",
  hazardLevel: "고위험",
  ghsPictograms: ["🧪 부식성"],

  ph: [
    {
      concentration: "포화용액",
      value: "강염기성",
      note: "중화제",
    },
  ],

  exposure: {
    twa: { value: "5 mg/m³", source: "OSHA 대표값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "15 mg/m³", source: "대표 참고값" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "2.2 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "강염기성",
    "분진 자극",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 시 발열 가능",
    ],
    decon: [
      "물 세척 가능",
    ],
  },

  incompatible: [
    "산",
  ],

  neutralization: {
    direction: ["산성 폐수 중화"],
    waterUse: "가능",
    neutralizerNeed: "대표 중화제",
  },

  ppe: [
    "방진마스크",
    "보안경",
  ],

  cautions: [
    "분진 흡입 주의",
  ],
},

{
  id: 54,
  nameKo: "EDTA",
  nameEn: "Ethylenediaminetetraacetic Acid",
  formula: "C10H16N2O8",
  cas: "60-00-4",
  aliases: ["EDTA", "킬레이트제"],
  process: "수처리 / 금속 제거",
  state: "백색 분말",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "용액",
      value: "약산성",
      note: "금속 킬레이트",
    },
  ],

  exposure: {
    twa: { value: "설정 없음", source: "-" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "0.8 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "금속 이온 킬레이트",
    "분진 자극 가능",
  ],

  waterReactivity: {
    hazards: [
      "수용성",
    ],
    decon: [
      "물 세척 가능",
    ],
  },

  incompatible: [
    "강산화제",
  ],

  neutralization: {
    direction: ["일반 희석 및 세척"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "보안경",
    "장갑",
  ],

  cautions: [
    "분진 흡입 주의",
  ],
},

{
  id: 55,
  nameKo: "과망간산칼륨",
  nameEn: "Potassium Permanganate",
  formula: "KMnO4",
  cas: "7722-64-7",
  aliases: ["KMnO4"],
  process: "Scrubber / 산화처리",
  state: "보라색 고체",
  hazardLevel: "고위험",
  ghsPictograms: ["⭕ 산화성", "❗ 경고"],

  ph: [
    {
      concentration: "용액",
      value: "중성 부근",
      note: "강산화성",
    },
  ],

  exposure: {
    twa: { value: "0.2 mg/m³", source: "OSHA 대표값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "0.2 mg/m³", source: "NIOSH 참고" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "2.7 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "산화성",
  },

  flammability: {
    flashPoint: "산화성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "강산화성",
    "유기물 반응 가능",
  ],

  waterReactivity: {
    hazards: [
      "수용성",
    ],
    decon: [
      "오염 제거 후 세척",
    ],
  },

  incompatible: [
    "유기물",
    "환원제",
  ],

  neutralization: {
    direction: ["환원 처리 검토"],
    waterUse: "가능",
    neutralizerNeed: "산화성 관리 필요",
  },

  ppe: [
    "보안면",
    "내화학 장갑",
  ],

  cautions: [
    "유기물 접촉 주의",
  ],
},

{
  id: 56,
  nameKo: "차아황산나트륨",
  nameEn: "Sodium Bisulfite",
  formula: "NaHSO3",
  cas: "7631-90-5",
  aliases: ["중아황산나트륨", "NaHSO3"],
  process: "UPW / 잔류염소 제거",
  state: "백색 분말",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "용액",
      value: "약산성",
      note: "환원제",
    },
  ],

  exposure: {
    twa: { value: "5 mg/m³", source: "대표 SDS 참고값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.5 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "SO2 발생 가능",
    "환원제",
  ],

  waterReactivity: {
    hazards: [
      "산 접촉 시 SO2 발생 가능",
    ],
    decon: [
      "환기 및 세척",
    ],
  },

  incompatible: [
    "산화제",
    "산",
  ],

  neutralization: {
    direction: ["산 접촉 차단"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "보안경",
    "장갑",
  ],

  cautions: [
    "산 혼합 시 SO2 발생 가능",
  ],
},

{
  id: 57,
  nameKo: "활성탄 슬러리",
  nameEn: "Activated Carbon Slurry",
  formula: "혼합물",
  cas: "혼합물",
  aliases: ["활성탄"],
  process: "VOC 제거 / Scrubber",
  state: "검정 슬러리",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "슬러리",
      value: "중성 부근",
      note: "흡착제",
    },
  ],

  exposure: {
    twa: { value: "분진 기준 적용", source: "대표 SDS 참고값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "혼합물",
    vaporPressure: "낮음",
    boilingPoint: "해당 없음",
    flashPoint: "분진 주의",
  },

  flammability: {
    flashPoint: "분진 폭발 가능",
    autoIgnition: "제품별 상이",
    lel: "분진 조건",
    uel: "분진 조건",
  },

  mainHazards: [
    "분진 폭발 가능",
    "흡착 포화 시 발열 가능",
  ],

  waterReactivity: {
    hazards: [
      "슬러리 형태 사용",
    ],
    decon: [
      "흡착 및 회수",
    ],
  },

  incompatible: [
    "강산화제",
  ],

  neutralization: {
    direction: ["회수 및 폐기"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "방진마스크",
    "보안경",
  ],

  cautions: [
    "건조 분진 주의",
  ],
},

{
  id: 58,
  nameKo: "암모니아 냉매",
  nameEn: "Ammonia Refrigerant",
  formula: "NH3",
  cas: "7664-41-7",
  aliases: ["R717", "암모니아 냉매"],
  process: "산업냉동",
  state: "무색 기체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🔥 인화성"],

  ph: [
    {
      concentration: "수용액",
      value: "강염기성",
      note: "자극성 매우 강함",
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
    vaporPressure: "가스",
    boilingPoint: "-33°C",
    flashPoint: "가연성",
  },

  flammability: {
    flashPoint: "가연성",
    autoIgnition: "651°C",
    lel: "15%",
    uel: "28%",
  },

  mainHazards: [
    "강한 호흡기 자극",
    "산업냉동 핵심 냉매",
  ],

  waterReactivity: {
    hazards: [
      "물에 잘 용해됨",
    ],
    decon: [
      "대량 물 희석 가능",
    ],
  },

  incompatible: [
    "산",
    "염소",
  ],

  neutralization: {
    direction: ["물 희석 가능"],
    waterUse: "가능",
    neutralizerNeed: "산 접촉 주의",
  },

  ppe: [
    "공기호흡기",
    "내화학 장갑",
  ],

  cautions: [
    "고농도 흡입 위험",
  ],
},

{
  id: 59,
  nameKo: "리튬브로마이드",
  nameEn: "Lithium Bromide",
  formula: "LiBr",
  cas: "7550-35-8",
  aliases: ["LiBr"],
  process: "흡수식 냉동기",
  state: "무색 용액",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "용액",
      value: "중성 부근",
      note: "흡수식 냉동기 사용",
    },
  ],

  exposure: {
    twa: { value: "설정 없음", source: "-" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.6 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "1265°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "흡수식 냉동기 사용",
    "누출 시 미끄럼 위험",
  ],

  waterReactivity: {
    hazards: [
      "수용성",
    ],
    decon: [
      "물 세척 가능",
    ],
  },

  incompatible: [
    "강산화제",
  ],

  neutralization: {
    direction: ["희석 및 회수"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "보안경",
    "장갑",
  ],

  cautions: [
    "대량 누출 시 미끄럼 위험",
  ],
},
{
  id: 60,
  nameKo: "R-123",
  nameEn: "HCFC-123",
  formula: "C2HCl2F3",
  cas: "306-83-2",
  aliases: ["R123", "HCFC-123"],
  process: "터보냉동기",
  state: "무색 액체",
  hazardLevel: "주의",
  ghsPictograms: ["🧯 가스실린더"],

  ph: [
    {
      concentration: "냉매",
      value: "해당 없음",
      note: "밀폐공간 질식 위험",
    },
  ],

  exposure: {
    twa: { value: "50 ppm", source: "대표 SDS 참고값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "1000 ppm", source: "대표 참고값" },
  },

  physical: {
    density: "1.46 g/cm³",
    vaporPressure: "높음",
    boilingPoint: "27°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "산소결핍 가능",
    "고온 분해 시 유독가스 생성 가능",
  ],

  waterReactivity: {
    hazards: ["반응성 낮음"],
    decon: ["환기 우선"],
  },

  incompatible: ["고온", "강산화제"],

  neutralization: {
    direction: ["누출 차단 및 환기"],
    waterUse: "효과 제한적",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: ["공기호흡기"],

  cautions: [
    "밀폐공간 질식 위험",
  ],
},

{
  id: 61,
  nameKo: "R-134a",
  nameEn: "HFC-134a",
  formula: "C2H2F4",
  cas: "811-97-2",
  aliases: ["R134a"],
  process: "냉동기 / 공조",
  state: "무색 액체 또는 기체",
  hazardLevel: "주의",
  ghsPictograms: ["🧯 가스실린더"],

  ph: [
    {
      concentration: "냉매",
      value: "해당 없음",
      note: "질식 위험 가능",
    },
  ],

  exposure: {
    twa: { value: "1000 ppm", source: "대표 SDS 참고값" },
    stel: { value: "1250 ppm", source: "대표 SDS 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.2 g/cm³",
    vaporPressure: "높음",
    boilingPoint: "-26°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "산소결핍 가능",
    "고온 분해 시 HF 생성 가능",
  ],

  waterReactivity: {
    hazards: ["반응성 낮음"],
    decon: ["환기 우선"],
  },

  incompatible: ["고온", "강산화제"],

  neutralization: {
    direction: ["환기 및 차단"],
    waterUse: "효과 제한적",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: ["공기호흡기"],

  cautions: [
    "고온 분해 시 HF 가능",
  ],
},

{
  id: 62,
  nameKo: "R-410A",
  nameEn: "R-410A",
  formula: "혼합냉매",
  cas: "혼합물",
  aliases: ["R410A"],
  process: "공조",
  state: "무색 액체 또는 기체",
  hazardLevel: "주의",
  ghsPictograms: ["🧯 가스실린더"],

  ph: [
    {
      concentration: "냉매",
      value: "해당 없음",
      note: "질식 위험 가능",
    },
  ],

  exposure: {
    twa: { value: "1000 ppm", source: "대표 SDS 참고값" },
    stel: { value: "1250 ppm", source: "대표 SDS 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.1 g/cm³",
    vaporPressure: "매우 높음",
    boilingPoint: "-48°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "산소결핍 가능",
    "고압 냉매",
  ],

  waterReactivity: {
    hazards: ["반응성 낮음"],
    decon: ["환기 우선"],
  },

  incompatible: ["고온"],

  neutralization: {
    direction: ["누출 차단 및 환기"],
    waterUse: "효과 제한적",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: ["공기호흡기"],

  cautions: [
    "고압 분출 주의",
  ],
},

{
  id: 63,
  nameKo: "염화나트륨",
  nameEn: "Sodium Chloride",
  formula: "NaCl",
  cas: "7647-14-5",
  aliases: ["소금", "NaCl"],
  process: "UPW 재생",
  state: "백색 고체",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "용액",
      value: "중성",
      note: "재생용 염수",
    },
  ],

  exposure: {
    twa: { value: "10 mg/m³", source: "분진 기준 참고" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "2.16 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "1413°C",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "분진 자극 가능",
  ],

  waterReactivity: {
    hazards: ["수용성"],
    decon: ["물 세척 가능"],
  },

  incompatible: [],

  neutralization: {
    direction: ["일반 세척"],
    waterUse: "가능",
    neutralizerNeed: "불필요",
  },

  ppe: ["보안경"],

  cautions: [
    "바닥 미끄럼 가능",
  ],
},

{
  id: 64,
  nameKo: "황산나트륨",
  nameEn: "Sodium Sulfate",
  formula: "Na2SO4",
  cas: "7757-82-6",
  aliases: ["Na2SO4"],
  process: "수처리 / 재생",
  state: "백색 고체",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "용액",
      value: "중성",
      note: "수처리용",
    },
  ],

  exposure: {
    twa: { value: "10 mg/m³", source: "분진 기준 참고" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "2.66 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "분진 자극 가능",
  ],

  waterReactivity: {
    hazards: ["수용성"],
    decon: ["물 세척 가능"],
  },

  incompatible: [],

  neutralization: {
    direction: ["일반 세척"],
    waterUse: "가능",
    neutralizerNeed: "불필요",
  },

  ppe: ["보안경"],

  cautions: [
    "분진 흡입 주의",
  ],
},

{
  id: 65,
  nameKo: "구연산",
  nameEn: "Citric Acid",
  formula: "C6H8O7",
  cas: "77-92-9",
  aliases: ["Citric Acid"],
  process: "세정 / 수처리",
  state: "백색 고체",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "용액",
      value: "산성",
      note: "유기산",
    },
  ],

  exposure: {
    twa: { value: "10 mg/m³", source: "분진 기준 참고" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.66 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "비가연성",
  },

  flammability: {
    flashPoint: "비가연성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "눈 자극 가능",
    "약산성",
  ],

  waterReactivity: {
    hazards: ["수용성"],
    decon: ["물 세척 가능"],
  },

  incompatible: ["강염기"],

  neutralization: {
    direction: ["알칼리 중화 가능"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 가능",
  },

  ppe: ["보안경", "장갑"],

  cautions: [
    "분진 흡입 주의",
  ],
},

{
  id: 66,
  nameKo: "질산암모늄",
  nameEn: "Ammonium Nitrate",
  formula: "NH4NO3",
  cas: "6484-52-2",
  aliases: ["질산암모늄"],
  process: "화학처리 / 산화성",
  state: "백색 고체",
  hazardLevel: "고위험",
  ghsPictograms: ["⭕ 산화성"],

  ph: [
    {
      concentration: "용액",
      value: "약산성",
      note: "산화성",
    },
  ],

  exposure: {
    twa: { value: "10 mg/m³", source: "대표 참고값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.72 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "산화성",
  },

  flammability: {
    flashPoint: "산화성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "강산화성",
    "고온 분해 위험",
  ],

  waterReactivity: {
    hazards: ["수용성"],
    decon: ["물 냉각 가능"],
  },

  incompatible: ["유기물", "가연물"],

  neutralization: {
    direction: ["냉각 및 격리"],
    waterUse: "가능",
    neutralizerNeed: "산화성 관리 우선",
  },

  ppe: ["보안경", "방진마스크"],

  cautions: [
    "가연물 접촉 주의",
  ],
},

{
  id: 67,
  nameKo: "수산화암모늄",
  nameEn: "Ammonium Hydroxide",
  formula: "NH4OH",
  cas: "1336-21-6",
  aliases: ["암모니아수"],
  process: "세정 / 폐수",
  state: "무색 액체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🧪 부식성"],

  ph: [
    {
      concentration: "25%",
      value: "강염기성",
      note: "강한 암모니아 냄새",
    },
  ],

  exposure: {
    twa: { value: "25 ppm", source: "OSHA" },
    stel: { value: "35 ppm", source: "ACGIH" },
    ceiling: { value: "50 ppm", source: "NIOSH" },
    idlh: { value: "300 ppm", source: "NIOSH" },
  },

  physical: {
    density: "0.9 g/cm³",
    vaporPressure: "높음",
    boilingPoint: "38°C",
    flashPoint: "가연성 가능",
  },

  flammability: {
    flashPoint: "가연성 가능",
    autoIgnition: "651°C",
    lel: "15%",
    uel: "28%",
  },

  mainHazards: [
    "강한 호흡기 자극",
    "부식성",
  ],

  waterReactivity: {
    hazards: ["수용성"],
    decon: ["대량 물 세척 가능"],
  },

  incompatible: ["산", "염소"],

  neutralization: {
    direction: ["산성 중화 검토"],
    waterUse: "가능",
    neutralizerNeed: "산 접촉 주의",
  },

  ppe: ["공기호흡기", "내화학 장갑"],

  cautions: [
    "고농도 흡입 위험",
  ],
},

{
  id: 68,
  nameKo: "폴리염화비닐 접착제",
  nameEn: "PVC Cement",
  formula: "혼합물",
  cas: "혼합물",
  aliases: ["PVC 본드"],
  process: "배관 작업",
  state: "무색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["🔥 인화성", "❗ 경고"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "유기용제 포함",
    },
  ],

  exposure: {
    twa: { value: "THF 기준 적용 가능", source: "대표 SDS 참고값" },
    stel: { value: "THF 기준 적용 가능", source: "대표 SDS 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "0.9 g/cm³",
    vaporPressure: "높음",
    boilingPoint: "혼합물",
    flashPoint: "-10°C 이하",
  },

  flammability: {
    flashPoint: "-10°C 이하",
    autoIgnition: "제품별 상이",
    lel: "제품별 상이",
    uel: "제품별 상이",
  },

  mainHazards: [
    "고인화성",
    "유기용제 증기",
  ],

  waterReactivity: {
    hazards: ["물반응성 낮음"],
    decon: ["흡착 및 환기"],
  },

  incompatible: ["산화제", "점화원"],

  neutralization: {
    direction: ["흡착 및 회수"],
    waterUse: "확산 가능성 고려",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: ["유기증기용 호흡보호구", "방염 보호구"],

  cautions: [
    "밀폐공간 증기 축적 주의",
  ],
},

{
  id: 69,
  nameKo: "테트라하이드로푸란",
  nameEn: "Tetrahydrofuran",
  formula: "C4H8O",
  cas: "109-99-9",
  aliases: ["THF"],
  process: "용제 / PVC 작업",
  state: "무색 액체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["🔥 인화성", "❗ 경고"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "과산화물 생성 가능",
    },
  ],

  exposure: {
    twa: { value: "200 ppm", source: "OSHA" },
    stel: { value: "250 ppm", source: "ACGIH" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "2000 ppm", source: "NIOSH" },
  },

  physical: {
    density: "0.89 g/cm³",
    vaporPressure: "143 mmHg",
    boilingPoint: "66°C",
    flashPoint: "-17°C",
  },

  flammability: {
    flashPoint: "-17°C",
    autoIgnition: "321°C",
    lel: "2%",
    uel: "12%",
  },

  mainHazards: [
    "고인화성",
    "과산화물 생성 가능",
  ],

  waterReactivity: {
    hazards: ["물 혼합 가능"],
    decon: ["흡착 및 환기"],
  },

  incompatible: ["산화제", "점화원"],

  neutralization: {
    direction: ["흡착 및 회수"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: ["유기증기용 호흡보호구", "방염 보호구"],

  cautions: [
    "장기 보관 시 과산화물 주의",
  ],
},
{
  id: 70,
  nameKo: "과초산",
  nameEn: "Peracetic Acid",
  formula: "C2H4O3",
  cas: "79-21-0",
  aliases: ["PAA", "과초산"],
  process: "살균 / 폐수",
  state: "무색 액체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["⭕ 산화성", "🧪 부식성"],

  ph: [
    {
      concentration: "15%",
      value: "강산성",
      note: "강산화성",
    },
  ],

  exposure: {
    twa: { value: "0.4 ppm", source: "ACGIH 참고값" },
    stel: { value: "1 ppm", source: "대표 참고값" },
    ceiling: { value: "0.4 ppm", source: "NIOSH 참고" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "1.1 g/cm³",
    vaporPressure: "14 mmHg",
    boilingPoint: "분해 가능",
    flashPoint: "산화성",
  },

  flammability: {
    flashPoint: "산화성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "강산화성",
    "유기물 반응 가능",
    "부식성",
  ],

  waterReactivity: {
    hazards: [
      "분해 및 산화 반응 가능",
    ],
    decon: [
      "희석 및 냉각",
    ],
  },

  incompatible: [
    "유기물",
    "금속",
    "환원제",
  ],

  neutralization: {
    direction: ["희석 및 분해 관리"],
    waterUse: "가능",
    neutralizerNeed: "산화성 관리 필요",
  },

  ppe: [
    "공기호흡기",
    "보안면",
  ],

  cautions: [
    "밀폐 시 압력 상승 가능",
  ],
},

{
  id: 71,
  nameKo: "포름알데히드",
  nameEn: "Formaldehyde",
  formula: "CH2O",
  cas: "50-00-0",
  aliases: ["Formalin", "포르말린"],
  process: "살균 / 분석",
  state: "무색 액체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🔥 인화성"],

  ph: [
    {
      concentration: "37%",
      value: "약산성",
      note: "강한 자극성",
    },
  ],

  exposure: {
    twa: { value: "0.75 ppm", source: "OSHA" },
    stel: { value: "2 ppm", source: "OSHA" },
    ceiling: { value: "2 ppm", source: "NIOSH 참고" },
    idlh: { value: "20 ppm", source: "NIOSH" },
  },

  physical: {
    density: "1.08 g/cm³",
    vaporPressure: "높음",
    boilingPoint: "96°C",
    flashPoint: "50°C",
  },

  flammability: {
    flashPoint: "50°C",
    autoIgnition: "300°C",
    lel: "7%",
    uel: "73%",
  },

  mainHazards: [
    "발암성 가능",
    "강한 점막 자극",
    "인화성",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "흡착 및 환기",
    ],
  },

  incompatible: [
    "산화제",
    "강염기",
  ],

  neutralization: {
    direction: ["흡착 및 회수"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "공기호흡기",
    "유기증기용 보호구",
  ],

  cautions: [
    "저농도에서도 자극 강함",
  ],
},

{
  id: 72,
  nameKo: "메틸에틸케톤",
  nameEn: "Methyl Ethyl Ketone",
  formula: "C4H8O",
  cas: "78-93-3",
  aliases: ["MEK"],
  process: "세정 / 용제",
  state: "무색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["🔥 인화성"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "고인화성",
    },
  ],

  exposure: {
    twa: { value: "200 ppm", source: "OSHA" },
    stel: { value: "300 ppm", source: "ACGIH" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "3000 ppm", source: "NIOSH" },
  },

  physical: {
    density: "0.8 g/cm³",
    vaporPressure: "78 mmHg",
    boilingPoint: "80°C",
    flashPoint: "-9°C",
  },

  flammability: {
    flashPoint: "-9°C",
    autoIgnition: "404°C",
    lel: "1.4%",
    uel: "11.4%",
  },

  mainHazards: [
    "고인화성",
    "정전기 점화 가능",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "흡착 및 환기",
    ],
  },

  incompatible: [
    "산화제",
    "점화원",
  ],

  neutralization: {
    direction: ["흡착 및 회수"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "유기증기용 호흡보호구",
    "방염 보호구",
  ],

  cautions: [
    "증기 폭발 위험",
  ],
},

{
  id: 73,
  nameKo: "톨루엔",
  nameEn: "Toluene",
  formula: "C7H8",
  cas: "108-88-3",
  aliases: ["Toluene"],
  process: "세정 / 용제",
  state: "무색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["🔥 인화성", "❗ 경고"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "유기용제",
    },
  ],

  exposure: {
    twa: { value: "20 ppm", source: "ACGIH" },
    stel: { value: "150 ppm", source: "대표 참고값" },
    ceiling: { value: "300 ppm", source: "OSHA 참고" },
    idlh: { value: "500 ppm", source: "NIOSH" },
  },

  physical: {
    density: "0.87 g/cm³",
    vaporPressure: "28 mmHg",
    boilingPoint: "111°C",
    flashPoint: "4°C",
  },

  flammability: {
    flashPoint: "4°C",
    autoIgnition: "480°C",
    lel: "1.2%",
    uel: "7.1%",
  },

  mainHazards: [
    "중추신경계 영향",
    "고인화성",
  ],

  waterReactivity: {
    hazards: [
      "물에 잘 안녹음",
    ],
    decon: [
      "흡착 및 환기",
    ],
  },

  incompatible: [
    "산화제",
    "점화원",
  ],

  neutralization: {
    direction: ["흡착 및 회수"],
    waterUse: "확산 가능성 고려",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "유기증기용 호흡보호구",
    "방염 보호구",
  ],

  cautions: [
    "정전기 점화 주의",
  ],
},

{
  id: 74,
  nameKo: "디메틸설폭사이드",
  nameEn: "Dimethyl Sulfoxide",
  formula: "C2H6OS",
  cas: "67-68-5",
  aliases: ["DMSO"],
  process: "세정 / 연구",
  state: "무색 액체",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "피부 침투성 높음",
    },
  ],

  exposure: {
    twa: { value: "250 ppm", source: "대표 참고값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "1.1 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "189°C",
    flashPoint: "89°C",
  },

  flammability: {
    flashPoint: "89°C",
    autoIgnition: "215°C",
    lel: "2.6%",
    uel: "28%",
  },

  mainHazards: [
    "피부 침투성 높음",
    "오염물 체내 전달 가능",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "물 세척 가능",
    ],
  },

  incompatible: [
    "강산화제",
  ],

  neutralization: {
    direction: ["흡착 및 세척"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "내화학 장갑",
    "보안경",
  ],

  cautions: [
    "피부 흡수 주의",
  ],
},

{
  id: 75,
  nameKo: "NMP",
  nameEn: "N-Methyl-2-pyrrolidone",
  formula: "C5H9NO",
  cas: "872-50-4",
  aliases: ["NMP"],
  process: "Strip / 세정",
  state: "무색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "피부 흡수 가능",
    },
  ],

  exposure: {
    twa: { value: "1 ppm", source: "ACGIH 참고" },
    stel: { value: "3 ppm", source: "대표 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "제품 SDS 확인", source: "제조사 SDS" },
  },

  physical: {
    density: "1.03 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "202°C",
    flashPoint: "91°C",
  },

  flammability: {
    flashPoint: "91°C",
    autoIgnition: "270°C",
    lel: "1.3%",
    uel: "9.5%",
  },

  mainHazards: [
    "피부 흡수 가능",
    "생식독성 우려",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "흡착 및 세척",
    ],
  },

  incompatible: [
    "강산화제",
  ],

  neutralization: {
    direction: ["흡착 및 회수"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "내화학 장갑",
    "유기증기용 보호구",
  ],

  cautions: [
    "피부 노출 최소화",
  ],
},

{
  id: 76,
  nameKo: "디메틸아세트아마이드",
  nameEn: "Dimethylacetamide",
  formula: "C4H9NO",
  cas: "127-19-5",
  aliases: ["DMAc"],
  process: "세정 / 용제",
  state: "무색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "피부 흡수 가능",
    },
  ],

  exposure: {
    twa: { value: "10 ppm", source: "OSHA 참고" },
    stel: { value: "20 ppm", source: "대표 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "300 ppm", source: "대표 참고값" },
  },

  physical: {
    density: "0.94 g/cm³",
    vaporPressure: "2 mmHg",
    boilingPoint: "166°C",
    flashPoint: "63°C",
  },

  flammability: {
    flashPoint: "63°C",
    autoIgnition: "345°C",
    lel: "1.8%",
    uel: "11.5%",
  },

  mainHazards: [
    "피부 흡수 가능",
    "간 독성 가능",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "흡착 및 세척",
    ],
  },

  incompatible: [
    "강산화제",
  ],

  neutralization: {
    direction: ["흡착 및 회수"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "내화학 장갑",
    "유기증기용 보호구",
  ],

  cautions: [
    "피부 흡수 주의",
  ],
},

{
  id: 77,
  nameKo: "디메틸포름아마이드",
  nameEn: "Dimethylformamide",
  formula: "C3H7NO",
  cas: "68-12-2",
  aliases: ["DMF"],
  process: "세정 / 용제",
  state: "무색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["❗ 경고", "🔥 인화성"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "피부 흡수 가능",
    },
  ],

  exposure: {
    twa: { value: "10 ppm", source: "OSHA" },
    stel: { value: "15 ppm", source: "대표 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "500 ppm", source: "대표 참고값" },
  },

  physical: {
    density: "0.94 g/cm³",
    vaporPressure: "3 mmHg",
    boilingPoint: "153°C",
    flashPoint: "58°C",
  },

  flammability: {
    flashPoint: "58°C",
    autoIgnition: "445°C",
    lel: "2.2%",
    uel: "15%",
  },

  mainHazards: [
    "피부 흡수 가능",
    "간 독성 가능",
    "인화성",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "흡착 및 세척",
    ],
  },

  incompatible: [
    "강산화제",
  ],

  neutralization: {
    direction: ["흡착 및 회수"],
    waterUse: "가능",
    neutralizerNeed: "일반 중화 불필요",
  },

  ppe: [
    "내화학 장갑",
    "유기증기용 보호구",
  ],

  cautions: [
    "피부 노출 최소화",
  ],
},

{
  id: 78,
  nameKo: "과염소산",
  nameEn: "Perchloric Acid",
  formula: "HClO4",
  cas: "7601-90-3",
  aliases: ["과염소산"],
  process: "분석 / 세정",
  state: "무색 액체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["⭕ 산화성", "🧪 부식성"],

  ph: [
    {
      concentration: "70%",
      value: "강산성",
      note: "폭발성 산화제 가능",
    },
  ],

  exposure: {
    twa: { value: "1 mg/m³", source: "OSHA 참고" },
    stel: { value: "3 mg/m³", source: "대표 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "150 mg/m³", source: "대표 참고값" },
  },

  physical: {
    density: "1.76 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "203°C",
    flashPoint: "산화성",
  },

  flammability: {
    flashPoint: "산화성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "폭발성 산화제 가능",
    "강부식성",
  ],

  waterReactivity: {
    hazards: [
      "유기물과 격렬 반응 가능",
    ],
    decon: [
      "냉각 및 희석",
    ],
  },

  incompatible: [
    "유기물",
    "환원제",
    "금속",
  ],

  neutralization: {
    direction: ["냉각 및 격리 우선"],
    waterUse: "주의",
    neutralizerNeed: "산화성 관리 필요",
  },

  ppe: [
    "공기호흡기",
    "보안면",
  ],

  cautions: [
    "유기물 접촉 절대 주의",
  ],
},
{
  id: 79,
  nameKo: "과산화벤조일",
  nameEn: "Benzoyl Peroxide",
  formula: "C14H10O4",
  cas: "94-36-0",
  aliases: ["BPO"],
  process: "화학공정 / 개시제",
  state: "백색 고체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["⭕ 산화성", "🔥 폭발성"],

  ph: [
    {
      concentration: "고체",
      value: "해당 없음",
      note: "열분해 위험",
    },
  ],

  exposure: {
    twa: { value: "5 mg/m³", source: "OSHA 참고" },
    stel: { value: "10 mg/m³", source: "대표 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "700 mg/m³", source: "대표 참고값" },
  },

  physical: {
    density: "1.3 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "폭발성",
  },

  flammability: {
    flashPoint: "폭발성",
    autoIgnition: "80°C 이상 분해 가능",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "열분해 위험",
    "산화성",
    "폭발 가능",
  ],

  waterReactivity: {
    hazards: [
      "열·충격 민감",
    ],
    decon: [
      "냉각 및 격리",
    ],
  },

  incompatible: [
    "환원제",
    "유기물",
    "금속분말",
  ],

  neutralization: {
    direction: ["냉각 및 격리 우선"],
    waterUse: "주의",
    neutralizerNeed: "산화성 관리 필요",
  },

  ppe: [
    "보안면",
    "방염 보호구",
  ],

  cautions: [
    "충격 및 마찰 주의",
  ],
},

{
  id: 80,
  nameKo: "에틸렌글리콜",
  nameEn: "Ethylene Glycol",
  formula: "C2H6O2",
  cas: "107-21-1",
  aliases: ["EG", "부동액"],
  process: "공조 / 냉각수",
  state: "무색 액체",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "부동액",
    },
  ],

  exposure: {
    twa: { value: "50 ppm", source: "ACGIH 참고" },
    stel: { value: "100 ppm", source: "대표 참고값" },
    ceiling: { value: "100 mg/m³", source: "NIOSH 참고" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.11 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "197°C",
    flashPoint: "111°C",
  },

  flammability: {
    flashPoint: "111°C",
    autoIgnition: "410°C",
    lel: "3.2%",
    uel: "15%",
  },

  mainHazards: [
    "섭취 독성",
    "미끄럼 위험",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "물 세척 가능",
    ],
  },

  incompatible: [
    "강산화제",
  ],

  neutralization: {
    direction: ["흡착 및 회수"],
    waterUse: "가능",
    neutralizerNeed: "불필요",
  },

  ppe: [
    "보안경",
    "장갑",
  ],

  cautions: [
    "바닥 미끄럼 주의",
  ],
},

{
  id: 81,
  nameKo: "프로필렌글리콜",
  nameEn: "Propylene Glycol",
  formula: "C3H8O2",
  cas: "57-55-6",
  aliases: ["PG"],
  process: "공조 / 부동액",
  state: "무색 액체",
  hazardLevel: "주의",
  ghsPictograms: ["❗ 경고"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "저독성 부동액",
    },
  ],

  exposure: {
    twa: { value: "10 mg/m³", source: "대표 참고값" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "155 mg/m³", source: "대표 참고값" },
    idlh: { value: "설정 없음", source: "-" },
  },

  physical: {
    density: "1.03 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "188°C",
    flashPoint: "99°C",
  },

  flammability: {
    flashPoint: "99°C",
    autoIgnition: "371°C",
    lel: "2.6%",
    uel: "12.5%",
  },

  mainHazards: [
    "미끄럼 위험",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "물 세척 가능",
    ],
  },

  incompatible: [
    "강산화제",
  ],

  neutralization: {
    direction: ["흡착 및 회수"],
    waterUse: "가능",
    neutralizerNeed: "불필요",
  },

  ppe: [
    "보안경",
  ],

  cautions: [
    "누출 시 미끄럼 주의",
  ],
},

{
  id: 82,
  nameKo: "메탄올",
  nameEn: "Methanol",
  formula: "CH4O",
  cas: "67-56-1",
  aliases: ["MeOH"],
  process: "세정 / 용제",
  state: "무색 액체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["🔥 인화성", "☠️ 급성독성"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "독성 알코올",
    },
  ],

  exposure: {
    twa: { value: "200 ppm", source: "OSHA" },
    stel: { value: "250 ppm", source: "ACGIH" },
    ceiling: { value: "250 ppm", source: "NIOSH 참고" },
    idlh: { value: "6000 ppm", source: "NIOSH" },
  },

  physical: {
    density: "0.79 g/cm³",
    vaporPressure: "97 mmHg",
    boilingPoint: "65°C",
    flashPoint: "11°C",
  },

  flammability: {
    flashPoint: "11°C",
    autoIgnition: "464°C",
    lel: "6%",
    uel: "36%",
  },

  mainHazards: [
    "시신경 독성",
    "고인화성",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "흡착 및 환기",
    ],
  },

  incompatible: [
    "산화제",
    "점화원",
  ],

  neutralization: {
    direction: ["흡착 및 회수"],
    waterUse: "가능",
    neutralizerNeed: "불필요",
  },

  ppe: [
    "공기호흡기",
    "유기증기용 보호구",
  ],

  cautions: [
    "섭취 및 흡입 독성 위험",
  ],
},

{
  id: 83,
  nameKo: "아세톤",
  nameEn: "Acetone",
  formula: "C3H6O",
  cas: "67-64-1",
  aliases: ["Acetone"],
  process: "세정 / 용제",
  state: "무색 액체",
  hazardLevel: "고위험",
  ghsPictograms: ["🔥 인화성"],

  ph: [
    {
      concentration: "원액",
      value: "중성",
      note: "휘발성 용제",
    },
  ],

  exposure: {
    twa: { value: "250 ppm", source: "OSHA" },
    stel: { value: "500 ppm", source: "ACGIH" },
    ceiling: { value: "1000 ppm", source: "NIOSH 참고" },
    idlh: { value: "2500 ppm", source: "NIOSH" },
  },

  physical: {
    density: "0.79 g/cm³",
    vaporPressure: "180 mmHg",
    boilingPoint: "56°C",
    flashPoint: "-20°C",
  },

  flammability: {
    flashPoint: "-20°C",
    autoIgnition: "465°C",
    lel: "2.6%",
    uel: "12.8%",
  },

  mainHazards: [
    "고인화성",
    "정전기 점화 가능",
  ],

  waterReactivity: {
    hazards: [
      "물 혼합 가능",
    ],
    decon: [
      "흡착 및 환기",
    ],
  },

  incompatible: [
    "산화제",
    "점화원",
  ],

  neutralization: {
    direction: ["흡착 및 회수"],
    waterUse: "가능",
    neutralizerNeed: "불필요",
  },

  ppe: [
    "유기증기용 보호구",
    "방염 보호구",
  ],

  cautions: [
    "증기 폭발 위험",
  ],
},

{
  id: 84,
  nameKo: "오존",
  nameEn: "Ozone",
  formula: "O3",
  cas: "10028-15-6",
  aliases: ["O3"],
  process: "UPW / 산화",
  state: "청색 기체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["⭕ 산화성", "☠️ 급성독성"],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "강산화성",
    },
  ],

  exposure: {
    twa: { value: "0.1 ppm", source: "OSHA" },
    stel: { value: "0.3 ppm", source: "대표 참고값" },
    ceiling: { value: "0.1 ppm", source: "NIOSH 참고" },
    idlh: { value: "5 ppm", source: "NIOSH" },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "가스",
    boilingPoint: "-112°C",
    flashPoint: "산화성",
  },

  flammability: {
    flashPoint: "산화성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "강산화성",
    "호흡기 손상",
    "저지대 체류 가능",
  ],

  waterReactivity: {
    hazards: [
      "강산화 반응 가능",
    ],
    decon: [
      "환기 우선",
    ],
  },

  incompatible: [
    "유기물",
    "가연물",
  ],

  neutralization: {
    direction: ["환기 및 차단"],
    waterUse: "주의",
    neutralizerNeed: "산화성 관리",
  },

  ppe: [
    "공기호흡기",
  ],

  cautions: [
    "저농도에서도 자극 강함",
  ],
},

{
  id: 85,
  nameKo: "브롬",
  nameEn: "Bromine",
  formula: "Br2",
  cas: "7726-95-6",
  aliases: ["Br2"],
  process: "화학처리",
  state: "적갈색 액체",
  hazardLevel: "매우 위험",
  ghsPictograms: ["☠️ 급성독성", "🧪 부식성"],

  ph: [
    {
      concentration: "용액",
      value: "산성",
      note: "강한 자극성",
    },
  ],

  exposure: {
    twa: { value: "0.1 ppm", source: "OSHA" },
    stel: { value: "0.3 ppm", source: "ACGIH" },
    ceiling: { value: "0.3 ppm", source: "NIOSH 참고" },
    idlh: { value: "3 ppm", source: "NIOSH" },
  },

  physical: {
    density: "3.1 g/cm³",
    vaporPressure: "높음",
    boilingPoint: "59°C",
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
    "고독성 증기",
    "저지대 체류 가능",
  ],

  waterReactivity: {
    hazards: [
      "물과 반응 가능",
    ],
    decon: [
      "환기 및 희석",
    ],
  },

  incompatible: [
    "금속",
    "환원제",
  ],

  neutralization: {
    direction: ["격리 및 흡수"],
    waterUse: "주의",
    neutralizerNeed: "전용 처리 검토",
  },

  ppe: [
    "공기호흡기",
    "보안면",
  ],

  cautions: [
    "증기 흡입 위험",
  ],
},

{
  id: 86,
  nameKo: "질산은",
  nameEn: "Silver Nitrate",
  formula: "AgNO3",
  cas: "7761-88-8",
  aliases: ["AgNO3"],
  process: "분석 / 화학처리",
  state: "무색 고체",
  hazardLevel: "고위험",
  ghsPictograms: ["⭕ 산화성", "🧪 부식성"],

  ph: [
    {
      concentration: "용액",
      value: "산성",
      note: "산화성",
    },
  ],

  exposure: {
    twa: { value: "0.01 mg/m³", source: "OSHA 참고" },
    stel: { value: "설정 없음", source: "-" },
    ceiling: { value: "0.03 mg/m³", source: "대표 참고값" },
    idlh: { value: "10 mg/m³", source: "대표 참고값" },
  },

  physical: {
    density: "4.35 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "산화성",
  },

  flammability: {
    flashPoint: "산화성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "산화성",
    "피부 착색",
  ],

  waterReactivity: {
    hazards: [
      "수용성",
    ],
    decon: [
      "회수 및 세척",
    ],
  },

  incompatible: [
    "환원제",
    "유기물",
  ],

  neutralization: {
    direction: ["격리 및 회수"],
    waterUse: "가능",
    neutralizerNeed: "산화성 관리",
  },

  ppe: [
    "보안면",
    "장갑",
  ],

  cautions: [
    "빛 반응성 주의",
  ],
},

{
  id: 87,
  nameKo: "질산구리",
  nameEn: "Copper Nitrate",
  formula: "Cu(NO3)2",
  cas: "3251-23-8",
  aliases: ["CuNitrate"],
  process: "폐수 / 화학처리",
  state: "청색 고체",
  hazardLevel: "고위험",
  ghsPictograms: ["⭕ 산화성", "❗ 경고"],

  ph: [
    {
      concentration: "용액",
      value: "산성",
      note: "산화성",
    },
  ],

  exposure: {
    twa: { value: "1 mg/m³", source: "구리 기준 참고" },
    stel: { value: "2 mg/m³", source: "대표 참고값" },
    ceiling: { value: "설정 없음", source: "-" },
    idlh: { value: "100 mg/m³", source: "대표 참고값" },
  },

  physical: {
    density: "2.3 g/cm³",
    vaporPressure: "낮음",
    boilingPoint: "분해",
    flashPoint: "산화성",
  },

  flammability: {
    flashPoint: "산화성",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "산화성",
    "중금속 위험",
  ],

  waterReactivity: {
    hazards: [
      "수용성",
    ],
    decon: [
      "회수 및 세척",
    ],
  },

  incompatible: [
    "환원제",
    "유기물",
  ],

  neutralization: {
    direction: ["회수 및 격리"],
    waterUse: "가능",
    neutralizerNeed: "중금속 처리 필요",
  },

  ppe: [
    "보안경",
    "장갑",
  ],

  cautions: [
    "중금속 폐기 기준 준수",
  ],
},
];