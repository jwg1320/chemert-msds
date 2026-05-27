export const chemicals = [
  {
    id: 1,
    nameKo: "불산",
    nameEn: "Hydrofluoric Acid",
    formula: "HF",

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
      density: "1.0 g/cm³",
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
      decon: ["흡착 후 물 세척"],
    },
  },
];