const exposureNote =
  "대표 참고값입니다. 제품, 농도, 혼합비, 제조사 SDS 및 사업장 기준에 따라 상이할 수 있습니다.";

const sdsNote = "제품 SDS 및 사업장 기준에서 별도 확인 필요";

function exp(
  twa = "제품 SDS 확인",
  stel = "제품 SDS 확인",
  ceiling = "설정 없음",
  idlh = "제품 SDS 확인",
  source = "공개 SDS/OSHA/NIOSH 대표값"
) {
  const make = (value, src = source) => ({
    value,
    source: value === "설정 없음" ? "-" : src,
    note:
      value === "제품 SDS 확인" ||
      value === "확인 필요" ||
      value === "설정 없음"
        ? sdsNote
        : exposureNote,
  });

  return {
    twa: make(twa),
    stel: make(stel),
    ceiling: make(ceiling),
    idlh: make(idlh),
  };
}

export const chemicals = [
  {
    id: 1,
    nameKo: "불산",
    nameEn: "Hydrofluoric Acid",
    formula: "HF",
    cas: "7664-39-3",
    aliases: ["HF", "불화수소산", "불화수소"],
    process: "Wet Etch / 세정",
    state: "무색 액체",
    hazardLevel: "매우 위험",
    ghsPictograms: ["☠️ 급성독성", "🧪 부식성"],
    exposure: exp(
      "0.5 ppm",
      "3 ppm",
      "6 ppm",
      "30 ppm",
      "OSHA/ACGIH/NIOSH"
    ),
    physical: {
      density: "1.0~1.15 g/cm³",
      vaporPressure: "783 mmHg",
      boilingPoint: "19.5°C",
    },
    flammability: {
      flashPoint: "비가연성",
      lel: "해당 없음",
      uel: "해당 없음",
    },
    waterReactivity: {
      hazards: ["물 접촉 시 비산 가능"],
      decon: [
        "흡착 후 물 세척 가능",
        "피부 노출 시 즉시 대량 물 세척",
      ],
    },
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
    exposure: exp(
      "0.2 mg/m³",
      "0.6 mg/m³",
      "설정 없음",
      "15 mg/m³",
      "KOSHA/NIOSH"
    ),
    physical: {
      density: "1.84 g/cm³",
      vaporPressure: "0.001 mmHg",
      boilingPoint: "337°C",
    },
    flammability: {
      flashPoint: "비가연성",
      lel: "해당 없음",
      uel: "해당 없음",
    },
    waterReactivity: {
      hazards: ["물 접촉 시 강한 발열"],
      decon: ["흡착 후 물 세척", "대량 살수 시 발열 주의"],
    },
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
    exposure: exp(
      "설정 없음",
      "5 ppm Ceiling",
      "5 ppm",
      "50 ppm",
      "OSHA/NIOSH"
    ),
    physical: {
      density: "1.18 g/cm³",
      vaporPressure: "190 mmHg",
      boilingPoint: "110°C",
    },
    flammability: {
      flashPoint: "비가연성",
      lel: "해당 없음",
      uel: "해당 없음",
    },
    waterReactivity: {
      hazards: ["산성 미스트 발생 가능"],
      decon: ["흡착 후 물 세척"],
    },
  },

  {
    id: 4,
    nameKo: "질산",
    nameEn: "Nitric Acid",
    formula: "HNO3",
    cas: "7697-37-2",
    aliases: ["질산", "HNO3"],
    process: "세정",
    state: "황색 액체",
    hazardLevel: "매우 위험",
    ghsPictograms: ["⭕ 산화성", "🧪 부식성"],
    exposure: exp(
      "2 ppm",
      "4 ppm",
      "4 ppm",
      "25 ppm",
      "OSHA/NIOSH"
    ),
    physical: {
      density: "1.51 g/cm³",
      vaporPressure: "48 mmHg",
      boilingPoint: "83°C",
    },
    flammability: {
      flashPoint: "비가연성",
      lel: "해당 없음",
      uel: "해당 없음",
    },
    waterReactivity: {
      hazards: ["NOx 발생 가능"],
      decon: ["흡착 후 물 세척", "유기물 반응 주의"],
    },
  },

  {
    id: 5,
    nameKo: "암모니아",
    nameEn: "Ammonia",
    formula: "NH3",
    cas: "7664-41-7",
    aliases: ["암모니아", "NH3"],
    process: "냉동 / Utility",
    state: "무색 기체",
    hazardLevel: "고위험",
    ghsPictograms: ["☠️ 급성독성", "🔥 인화성"],
    exposure: exp(
      "25 ppm",
      "35 ppm",
      "50 ppm",
      "300 ppm",
      "OSHA/NIOSH"
    ),
    physical: {
      density: "공기보다 가벼움",
      vaporPressure: "8.5 atm",
      boilingPoint: "-33°C",
    },
    flammability: {
      flashPoint: "가연성 가스",
      lel: "15%",
      uel: "28%",
    },
    waterReactivity: {
      hazards: ["물에 잘 녹음"],
      decon: ["가스 차단 후 물 세척 가능"],
    },
  },
];