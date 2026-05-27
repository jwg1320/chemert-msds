export const chemicals = [
  {
    id: 1,
    nameKo: "불산",
    nameEn: "Hydrofluoric Acid",
    formula: "HF",
    cas: "7664-39-3",

    aliases: ["HF", "불화수소산", "Hydrogen fluoride"],

    process: "Wet Etch / 세정",
    state: "무색 액체 또는 수용액",

    hazardLevel: "매우 위험",

    ghsPictograms: [
      "☠️ 급성독성",
      "🧪 부식성",
      "🫁 건강유해성",
    ],

    ph: [
      {
        concentration: "49% 수용액",
        value: "강산성",
        note: "피부 침투 독성 주의",
      },
    ],

    exposure: {
      twa: {
        value: "0.5 ppm",
        source: "OSHA",
      },

      stel: {
        value: "3 ppm",
        source: "ACGIH",
      },

      ceiling: {
        value: "6 ppm",
        source: "NIOSH",
      },

      idlh: {
        value: "30 ppm",
        source: "NIOSH",
      },
    },

    physical: {
      density: "약 1.15 g/cm³",
      vaporPressure: "783 mmHg",
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
      "유리/실리카 재질 부식 가능",
    ],

    waterReactivity: {
      hazards: [
        "물과 희석 가능하나 비산 및 미스트 발생 주의",
        "세척수 확산 시 2차 오염 가능",
      ],

      decon: [
        "소량 오염은 흡착·제거 후 물 제독 검토",
        "직접 고압수 분사 시 비산 및 미스트 발생 가능",
        "피부 노출은 즉시 대량 물 세척 우선",
      ],
    },

    incompatible: [
      "강염기",
      "금속",
      "유리/실리카 재질",
      "산화제 일부",
    ],

    neutralization: {
      direction: [
        "칼슘계 중화 방향 검토",
        "중화 반응 시 발열 및 비산 가능성 고려",
      ],

      waterUse:
        "물 사용 가능하나 중성화 목적보다는 희석·제독 관점으로 판단",

      neutralizerNeed:
        "중화 완료 판단 필요 시 칼슘계 중화제 검토 필요",
    },

    ppe: [
      "공기호흡기(SCBA)",
      "전면형 호흡보호구",
      "내산 장갑",
      "화학보호복",
      "안면 보호구",
    ],

    cautions: [
      "저농도 접촉도 지연성 통증 가능",
      "pH보다 피부 침투 독성을 우선 고려",
      "단순 산 누출 기준으로 접근 시 위험 가능",
    ],
  },

  {
    id: 2,
    nameKo: "황산",
    nameEn: "Sulfuric Acid",
    formula: "H₂SO₄",
    cas: "7664-93-9",

    aliases: ["H2SO4", "황산", "Sulfuric acid"],

    process: "세정 / 폐수 / 산처리",
    state: "무색~갈색 점성 액체",

    hazardLevel: "고위험",

    ghsPictograms: [
      "🧪 부식성",
      "🫁 건강유해성",
    ],

    ph: [
      {
        concentration: "농황산",
        value: "강산성",
        note: "물 접촉 시 강한 발열",
      },
    ],

    exposure: {
      twa: {
        value: "0.2 mg/m³",
        source: "KOSHA",
      },

      stel: {
        value: "0.6 mg/m³",
        source: "KOSHA",
      },

      ceiling: {
        value: "설정 없음",
        source: "-",
      },

      idlh: {
        value: "15 mg/m³",
        source: "NIOSH",
      },
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
      "물 접촉 시 강한 발열",
      "산 미스트 흡입 위험",
      "금속 접촉 시 수소 발생 가능",
    ],

    waterReactivity: {
      hazards: [
        "물과 혼합 시 강한 발열",
        "비산 및 끓어오름 가능",
      ],

      decon: [
        "소량은 흡착·제거 후 물 세척 검토",
        "직접 대량 살수 시 발열·비산 주의",
      ],
    },

    incompatible: [
      "강염기",
      "금속",
      "유기물",
      "환원제",
    ],

    neutralization: {
      direction: [
        "알칼리계 중화 방향 검토",
        "중화 반응 시 발열 고려",
      ],

      waterUse:
        "물 사용 가능하나 희석 과정의 발열 위험 고려 필요",

      neutralizerNeed:
        "중화 완료 판단 시 전용 중화제 사용 검토",
    },

    ppe: [
      "내산 장갑",
      "보안면",
      "화학보호복",
      "공기호흡기",
    ],

    cautions: [
      "pH보다 발열·산 미스트를 함께 고려",
      "희석 작업 시 산을 물에 천천히 투입",
    ],
  },

  {
    id: 3,
    nameKo: "암모니아",
    nameEn: "Ammonia",
    formula: "NH₃",
    cas: "7664-41-7",

    aliases: ["NH3", "암모니아", "Ammonia"],

    process: "Utility / Scrubber",
    state: "무색 기체",

    hazardLevel: "고위험",

    ghsPictograms: [
      "☠️ 급성독성",
      "🧪 부식성",
      "🌊 환경유해성",
    ],

    ph: [
      {
        concentration: "암모니아수",
        value: "강염기성",
        note: "농도별 상이",
      },
    ],

    exposure: {
      twa: {
        value: "25 ppm",
        source: "OSHA",
      },

      stel: {
        value: "35 ppm",
        source: "NIOSH",
      },

      ceiling: {
        value: "50 ppm",
        source: "OSHA",
      },

      idlh: {
        value: "300 ppm",
        source: "NIOSH",
      },
    },

    physical: {
      density: "공기보다 가벼움",
      vaporPressure: "8.5 atm",
      boilingPoint: "-33°C",
      flashPoint: "가연성",
    },

    flammability: {
      flashPoint: "가연성 가스",
      autoIgnition: "651°C",
      lel: "15%",
      uel: "28%",
    },

    mainHazards: [
      "강한 호흡기 자극",
      "고농도 흡입 위험",
      "강염기성 부식 위험",
    ],

    waterReactivity: {
      hazards: [
        "물에 잘 녹아 알칼리성 형성",
      ],

      decon: [
        "가스 차단 및 환기 우선",
        "수용액은 다량 물 세척 가능",
      ],
    },

    incompatible: [
      "산",
      "염소계 물질",
      "산화제",
    ],

    neutralization: {
      direction: [
        "산성 중화 방향 검토",
      ],

      waterUse:
        "물 사용 가능하나 암모니아수 확산 고려 필요",

      neutralizerNeed:
        "대량 누출 시 산성 중화제 검토 가능",
    },

    ppe: [
      "공기호흡기",
      "화학보호복",
      "내화학 장갑",
    ],

    cautions: [
      "후각만으로 안전 판단 금지",
      "밀폐공간 농도 상승 주의",
    ],
  },

  {
    id: 4,
    nameKo: "IPA",
    nameEn: "Isopropyl Alcohol",
    formula: "C₃H₈O",
    cas: "67-63-0",

    aliases: ["IPA", "Isopropanol", "2-Propanol"],

    process: "세정 / Wipe",
    state: "무색 휘발성 액체",

    hazardLevel: "주의",

    ghsPictograms: [
      "🔥 인화성",
      "❗ 경고",
    ],

    ph: [
      {
        concentration: "원액",
        value: "중성 부근",
        note: "pH보다 인화성이 핵심",
      },
    ],

    exposure: {
      twa: {
        value: "400 ppm",
        source: "OSHA",
      },

      stel: {
        value: "500 ppm",
        source: "NIOSH",
      },

      ceiling: {
        value: "설정 없음",
        source: "-",
      },

      idlh: {
        value: "2000 ppm",
        source: "NIOSH",
      },
    },

    physical: {
      density: "0.785 g/cm³",
      vaporPressure: "33 mmHg",
      boilingPoint: "82.6°C",
      flashPoint: "12°C",
    },

    flammability: {
      flashPoint: "12°C",
      autoIgnition: "399°C",
      lel: "2%",
      uel: "12%",
    },

    mainHazards: [
      "인화성 액체",
      "휘발성 높음",
      "증기 흡입 시 현기증 가능",
    ],

    waterReactivity: {
      hazards: [
        "물과 혼합 가능",
      ],

      decon: [
        "흡착 및 회수 우선",
        "대량 물 세척보다 방폭 환기 우선",
      ],
    },

    incompatible: [
      "강산화제",
      "강산",
    ],

    neutralization: {
      direction: [
        "중화 대상 물질 아님",
      ],

      waterUse:
        "물 사용 가능하나 인화성 증기 확산 고려 필요",

      neutralizerNeed:
        "전용 중화제보다 흡착 및 회수 우선",
    },

    ppe: [
      "유기증기용 호흡보호구",
      "내화학 장갑",
      "보안경",
    ],

    cautions: [
      "LEL 관점으로 접근 필요",
      "정전기 및 점화원 관리 우선",
    ],
  },

  {
    id: 5,
    nameKo: "TMAH",
    nameEn: "Tetramethylammonium Hydroxide",
    formula: "(CH₃)₄NOH",
    cas: "75-59-2",

    aliases: ["TMAH", "현상액"],

    process: "Photo / 현상",
    state: "무색 수용액",

    hazardLevel: "매우 위험",

    ghsPictograms: [
      "☠️ 급성독성",
      "🧪 부식성",
      "🫁 건강유해성",
    ],

    ph: [
      {
        concentration: "2.38%",
        value: "강염기성",
        note: "피부흡수 독성 주의",
      },
    ],

    exposure: {
      twa: {
        value: "공식 기준 없음",
        source: "-",
      },

      stel: {
        value: "공식 기준 없음",
        source: "-",
      },

      ceiling: {
        value: "설정 없음",
        source: "-",
      },

      idlh: {
        value: "설정 없음",
        source: "-",
      },
    },

    physical: {
      density: "약 1.01 g/cm³",
      vaporPressure: "낮은 편",
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
      "신경독성 우려",
    ],

    waterReactivity: {
      hazards: [
        "물과 혼합 가능",
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
      direction: [
        "산성 중화 방향 검토",
      ],

      waterUse:
        "물 세척 적극 권장",

      neutralizerNeed:
        "현장 중화보다 인체 노출 차단 우선",
    },

    ppe: [
      "내화학 장갑",
      "화학보호복",
      "보안면",
    ],

    cautions: [
      "작은 접촉도 과소평가 금지",
      "pH보다 피부흡수 독성 우선 고려",
    ],
  },
  ,
{
  id: 6,
  nameKo: "염산",
  nameEn: "Hydrochloric Acid",
  formula: "HCl",
  cas: "7647-01-0",

  aliases: ["HCl", "염산", "Hydrogen chloride"],

  process: "세정 / 산처리",
  state: "무색 액체 또는 자극성 가스",

  hazardLevel: "고위험",

  ghsPictograms: [
    "🧪 부식성",
    "❗ 경고",
    "🫁 건강유해성",
  ],

  ph: [
    {
      concentration: "35%",
      value: "강산성",
      note: "산성 미스트 및 가스 자극 주의",
    },
  ],

  exposure: {
    twa: {
      value: "설정 없음",
      source: "-",
    },

    stel: {
      value: "5 ppm",
      source: "OSHA Ceiling",
    },

    ceiling: {
      value: "5 ppm",
      source: "OSHA",
    },

    idlh: {
      value: "50 ppm",
      source: "NIOSH",
    },
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
    "산성 미스트 위험",
    "금속 부식 가능",
  ],

  waterReactivity: {
    hazards: [
      "물과 혼합 가능",
      "희석 시 발열 가능",
    ],

    decon: [
      "소량은 흡착 후 물 세척 가능",
      "산성 미스트 발생 주의",
    ],
  },

  incompatible: [
    "강염기",
    "금속",
    "산화제",
  ],

  neutralization: {
    direction: [
      "알칼리계 중화 방향 검토",
    ],

    waterUse:
      "물 사용 가능하나 미스트 확산 고려 필요",

    neutralizerNeed:
      "대량 누출 시 중화제 사용 검토",
  },

  ppe: [
    "전면형 호흡보호구",
    "내산 장갑",
    "화학보호복",
  ],

  cautions: [
    "산성 미스트 흡입 위험 고려",
    "배관 부식 및 금속 반응 주의",
  ],
},

{
  id: 7,
  nameKo: "질산",
  nameEn: "Nitric Acid",
  formula: "HNO₃",
  cas: "7697-37-2",

  aliases: ["HNO3", "질산", "Nitric acid"],

  process: "세정 / 산처리",
  state: "무색~황색 액체",

  hazardLevel: "매우 위험",

  ghsPictograms: [
    "🧪 부식성",
    "⭕ 산화성",
    "🫁 건강유해성",
  ],

  ph: [
    {
      concentration: "68%",
      value: "강산성",
      note: "산화성 위험 동시 고려",
    },
  ],

  exposure: {
    twa: {
      value: "2 ppm",
      source: "OSHA",
    },

    stel: {
      value: "4 ppm",
      source: "OSHA",
    },

    ceiling: {
      value: "4 ppm",
      source: "OSHA",
    },

    idlh: {
      value: "25 ppm",
      source: "NIOSH",
    },
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
    "NOx 가스 발생 가능",
    "강한 부식성",
  ],

  waterReactivity: {
    hazards: [
      "희석 시 발열 가능",
      "산화성 반응 주의",
    ],

    decon: [
      "흡착 후 물 세척 검토",
      "NOx 발생 가능성 고려",
    ],
  },

  incompatible: [
    "유기물",
    "환원제",
    "금속",
  ],

  neutralization: {
    direction: [
      "알칼리계 중화 검토",
      "산화성 반응 고려",
    ],

    waterUse:
      "물 사용 가능하나 산화성 및 가스 발생 고려 필요",

    neutralizerNeed:
      "중화 반응 시 발열 및 가스 발생 고려",
  },

  ppe: [
    "공기호흡기",
    "화학보호복",
    "내산 장갑",
  ],

  cautions: [
    "갈색 NOx 발생 시 즉시 위험성 고려",
    "산화성 물질로 접근 필요",
  ],
},

{
  id: 8,
  nameKo: "과산화수소",
  nameEn: "Hydrogen Peroxide",
  formula: "H₂O₂",
  cas: "7722-84-1",

  aliases: ["H2O2", "과산화수소"],

  process: "세정 / 산화",
  state: "무색 액체",

  hazardLevel: "고위험",

  ghsPictograms: [
    "⭕ 산화성",
    "🧪 부식성",
  ],

  ph: [
    {
      concentration: "35%",
      value: "약산성",
      note: "산화성 위험 우선 고려",
    },
  ],

  exposure: {
    twa: {
      value: "1 ppm",
      source: "OSHA",
    },

    stel: {
      value: "설정 없음",
      source: "-",
    },

    ceiling: {
      value: "1 ppm",
      source: "OSHA",
    },

    idlh: {
      value: "75 ppm",
      source: "NIOSH",
    },
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
    "유기물 반응 위험",
    "분해 시 산소 발생 가능",
  ],

  waterReactivity: {
    hazards: [
      "물과 혼합 가능",
      "오염 시 급격한 분해 가능",
    ],

    decon: [
      "오염 제거 후 세척 검토",
      "밀폐공간 압력 상승 주의",
    ],
  },

  incompatible: [
    "유기물",
    "금속",
    "환원제",
  ],

  neutralization: {
    direction: [
      "중화보다 희석 및 분해 관리 우선",
    ],

    waterUse:
      "물 사용 가능",

    neutralizerNeed:
      "전용 중화보다 오염 제거 및 분해 관리 우선",
  },

  ppe: [
    "내화학 장갑",
    "보안면",
    "화학보호복",
  ],

  cautions: [
    "산화성 반응 우선 고려",
    "밀폐 용기 압력 상승 가능",
  ],
},

{
  id: 9,
  nameKo: "염소",
  nameEn: "Chlorine",
  formula: "Cl₂",
  cas: "7782-50-5",

  aliases: ["Cl2", "염소", "Chlorine"],

  process: "Utility / 수처리",
  state: "황록색 기체",

  hazardLevel: "매우 위험",

  ghsPictograms: [
    "☠️ 급성독성",
    "🧪 부식성",
    "🌊 환경유해성",
  ],

  ph: [
    {
      concentration: "가스",
      value: "산성 반응 가능",
      note: "수분 접촉 시 산성화",
    },
  ],

  exposure: {
    twa: {
      value: "0.5 ppm",
      source: "OSHA",
    },

    stel: {
      value: "1 ppm",
      source: "OSHA",
    },

    ceiling: {
      value: "1 ppm",
      source: "OSHA",
    },

    idlh: {
      value: "10 ppm",
      source: "NIOSH",
    },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: "6.8 atm",
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
    "강한 흡입 독성",
    "저지대 체류 가능",
    "부식성 가스",
  ],

  waterReactivity: {
    hazards: [
      "수분과 반응해 산성화 가능",
    ],

    decon: [
      "가스 차단 및 환기 우선",
      "수분 많은 환경에서 자극 증가 가능",
    ],
  },

  incompatible: [
    "암모니아",
    "환원제",
    "수소",
  ],

  neutralization: {
    direction: [
      "환원성 처리 방향 검토",
    ],

    waterUse:
      "물 사용 시 산성화 및 확산 고려 필요",

    neutralizerNeed:
      "전용 처리 절차 검토 필요",
  },

  ppe: [
    "공기호흡기",
    "화학보호복",
  ],

  cautions: [
    "공기보다 무거워 저지대 체류 가능",
    "암모니아 접촉 주의",
  ],
},

{
  id: 10,
  nameKo: "오존",
  nameEn: "Ozone",
  formula: "O₃",
  cas: "10028-15-6",

  aliases: ["O3", "오존", "Ozone"],

  process: "산화 / 세정",
  state: "청색 기체",

  hazardLevel: "고위험",

  ghsPictograms: [
    "⭕ 산화성",
    "🫁 건강유해성",
  ],

  ph: [
    {
      concentration: "가스",
      value: "해당 없음",
      note: "산화성 위험 우선",
    },
  ],

  exposure: {
    twa: {
      value: "0.1 ppm",
      source: "OSHA",
    },

    stel: {
      value: "설정 없음",
      source: "-",
    },

    ceiling: {
      value: "0.3 ppm",
      source: "OSHA",
    },

    idlh: {
      value: "5 ppm",
      source: "NIOSH",
    },
  },

  physical: {
    density: "공기보다 무거움",
    vaporPressure: ">1 atm",
    boilingPoint: "-112°C",
    flashPoint: "산화성 가스",
  },

  flammability: {
    flashPoint: "산화성 가스",
    autoIgnition: "해당 없음",
    lel: "해당 없음",
    uel: "해당 없음",
  },

  mainHazards: [
    "강산화성",
    "호흡기 자극",
    "고무·수지 열화 가능",
  ],

  waterReactivity: {
    hazards: [
      "물 일부 용해 가능",
    ],

    decon: [
      "환기 및 차단 우선",
      "오존 분해 장치 검토",
    ],
  },

  incompatible: [
    "유기물",
    "환원제",
    "가연물",
  ],

  neutralization: {
    direction: [
      "중화보다 분해·환기 우선",
    ],

    waterUse:
      "물 사용 가능",

    neutralizerNeed:
      "오존 분해 방향 우선 검토",
  },

  ppe: [
    "공기호흡기",
    "보안면",
  ],

  cautions: [
    "강산화성으로 재질 열화 가능",
    "냄새만으로 안전 판단 금지",
  ],
},
];