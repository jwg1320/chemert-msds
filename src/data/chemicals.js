export const chemicals = [
  {
    "id": 1,
    "nameKo": "불산",
    "nameEn": "Hydrofluoric Acid",
    "formula": "HF",
    "cas": "7664-39-3",
    "aliases": [
      "HF",
      "불산",
      "불화수소산"
    ],
    "process": "Wet Etch / 세정",
    "state": "무색 액체 또는 수용액",
    "stateCategory": "강산성",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🧪 부식성",
      "🫁 건강유해"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "49% 수용액: 강산성 (피부 침투 독성 주의)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 4,
      "flammability": 0,
      "instability": 1,
      "special": "",
      "code": "H4 F0 I1"
    },
    "odor": {
      "profile": "자극적이고 찔러대는 매캐한 냄새 (신맛을 띤 강한 자극취)",
      "keywords": "자극취, 매캐한냄새, 신취, 불소취",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "0.5 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "1 ppm",
        "source": "OSHA"
      },
      "ceiling": {
        "value": "6 ppm",
        "source": "NIOSH"
      },
      "idlh": {
        "value": "30 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "1.0~1.15 g/cm³",
      "vaporPressure": "783 mmHg / 무수 HF 기준",
      "boilingPoint": "19.5°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "피부 침투 가능",
      "지연성 조직 손상 가능",
      "증기 및 미스트 흡입 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 희석 가능하나 비산 및 미스트 주의"
      ],
      "decon": [
        "소량 오염은 흡착·제거 후 물 제독 검토"
      ]
    },
    "incompatible": [
      "강염기",
      "금속",
      "유리/실리카 재질"
    ],
    "neutralization": {
      "direction": [
        "칼슘계 중화 방향 검토"
      ],
      "waterUse": "물 사용 가능하나 중성화 목적보다는 희석·제독 관점으로 판단",
      "waterUseJudge": "주의",
      "neutralizerNeed": "중화 완료 판단 필요 시 칼슘계 중화제 검토 필요"
    },
    "ppe": [
      "공기호흡기",
      "내산 장갑",
      "화학보호복"
    ],
    "cautions": [
      "저농도 접촉도 지연성 통증 가능",
      "pH보다 피부 침투 독성을 우선 고려"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 2,
    "nameKo": "황산",
    "nameEn": "Sulfuric Acid",
    "formula": "H2SO4",
    "cas": "7664-93-9",
    "aliases": [
      "황산",
      "H2SO4"
    ],
    "process": "세정 / 폐수",
    "state": "점성 액체",
    "stateCategory": "강산성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "농황산: 강산성 (물 접촉 시 강한 발열)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 2,
      "special": "W",
      "code": "H3 F0 I2 W"
    },
    "odor": {
      "profile": "상온에서 무취 (고온 가열 또는 흄 발생 시 자극적인 가스취)",
      "keywords": "무취, 자극취, 황산흄, 가열시자극취",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "1 mg/m³",
        "source": "KOSHA"
      },
      "stel": {
        "value": "3 mg/m³",
        "source": "대표 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "15 mg/m³",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "1.84 g/cm³",
      "vaporPressure": "0.001 mmHg",
      "boilingPoint": "337°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강한 부식성",
      "물 접촉 시 발열",
      "산 미스트 흡입 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "물 접촉 시 강한 발열"
      ],
      "decon": [
        "흡착 후 물 세척",
        "대량 살수 시 발열 및 비산 주의"
      ]
    },
    "incompatible": [
      "강염기",
      "금속",
      "유기물"
    ],
    "neutralization": {
      "direction": [
        "알칼리계 중화 검토"
      ],
      "waterUse": "물 사용 가능하나 발열 고려 필요",
      "waterUseJudge": "주의",
      "neutralizerNeed": "중화 완료 판단 시 중화제 검토"
    },
    "ppe": [
      "내산 장갑",
      "화학보호복",
      "보안면"
    ],
    "cautions": [
      "희석 시 산을 물에 천천히 투입",
      "산 미스트 흡입 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 3,
    "nameKo": "염산",
    "nameEn": "Hydrochloric Acid",
    "formula": "HCl",
    "cas": "7647-01-0",
    "aliases": [
      "염산",
      "HCl"
    ],
    "process": "세정",
    "state": "액체 또는 가스",
    "stateCategory": "강산성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🧪 부식성",
      "🫁 건강유해"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "35%: 강산성 (산성 미스트 주의)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 1,
      "special": "",
      "code": "H3 F0 I1"
    },
    "odor": {
      "profile": "눈물과 기침을 유발하는 강력하고 자극적인 매캐한 냄새",
      "keywords": "자극취, 매캐한냄새, 염산취, 눈물유발",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음",
        "source": "-"
      },
      "stel": {
        "value": "5 ppm Ceiling",
        "source": "OSHA"
      },
      "ceiling": {
        "value": "5 ppm",
        "source": "NIOSH"
      },
      "idlh": {
        "value": "50 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "1.18 g/cm³",
      "vaporPressure": "190 mmHg",
      "boilingPoint": "110°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강한 호흡기 자극",
      "산성 미스트",
      "부식성"
    ],
    "waterReactivity": {
      "hazards": [
        "산성 미스트 발생 가능"
      ],
      "decon": [
        "흡착 후 물 세척"
      ]
    },
    "incompatible": [
      "강염기",
      "금속"
    ],
    "neutralization": {
      "direction": [
        "알칼리계 중화 검토"
      ],
      "waterUse": "물 사용 가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "대량 누출 시 중화제 검토"
    },
    "ppe": [
      "전면형 호흡보호구",
      "내산 장갑"
    ],
    "cautions": [
      "산성 미스트 흡입 위험",
      "금속 부식 가능"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 4,
    "nameKo": "질산",
    "nameEn": "Nitric Acid",
    "formula": "HNO3",
    "cas": "7697-37-2",
    "aliases": [
      "질산",
      "HNO3"
    ],
    "process": "세정 / 산처리",
    "state": "황색 액체",
    "stateCategory": "강산성",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "⭕ 산화성",
      "🧪 부식성",
      "🫁 건강유해"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "68%: 강산성 (산화성 위험 동시 고려)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 4,
      "flammability": 0,
      "instability": 0,
      "special": "OX",
      "code": "H4 F0 I0 OX"
    },
    "odor": {
      "profile": "질소산화물 분해로 인한 자극적이고 질식할 것 같은 매캐한 불쾌취",
      "keywords": "자극취, 매캐한냄새, 질소산화물취, 불쾌취",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "2 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "4 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "4 ppm",
        "source": "NIOSH"
      },
      "idlh": {
        "value": "25 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "1.51 g/cm³",
      "vaporPressure": "48 mmHg",
      "boilingPoint": "83°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강산화성",
      "NOx 발생 가능",
      "강한 부식성",
      "유기물 반응 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "희석 시 발열 가능",
        "NOx 발생 가능"
      ],
      "decon": [
        "흡착 후 물 세척",
        "유기물 접촉 주의"
      ]
    },
    "incompatible": [
      "유기물",
      "환원제",
      "금속",
      "가연물"
    ],
    "neutralization": {
      "direction": [
        "알칼리계 중화 검토"
      ],
      "waterUse": "물 사용 가능하나 산화성 및 가스 발생 고려 필요",
      "waterUseJudge": "주의",
      "neutralizerNeed": "중화 시 발열 및 NOx 발생 가능"
    },
    "ppe": [
      "공기호흡기",
      "화학보호복",
      "내산 장갑"
    ],
    "cautions": [
      "갈색 NOx 발생 시 즉시 위험 고려",
      "단순 산이 아닌 산화성 산으로 접근"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 5,
    "nameKo": "암모니아",
    "nameEn": "Ammonia",
    "formula": "NH3",
    "cas": "7664-41-7",
    "aliases": [
      "암모니아",
      "NH3",
      "암모니아수"
    ],
    "process": "냉동 / Utility / Scrubber",
    "state": "무색 기체 또는 수용액",
    "stateCategory": "염기성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🔥 인화성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "암모니아수: 강염기성 (농도별 상이)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 1,
      "instability": 0,
      "special": "",
      "code": "H3 F1 I0"
    },
    "odor": {
      "profile": "코를 찌르는 강렬하고 특이한 소변/암모니아 자극취",
      "keywords": "암모니아취, 소변냄새, 찌르는냄새, 자극취",
      "volatilityGrade": "",
      "warningType": "후각 조기선행형 (독성농도 도달 전 후각인지 가능)"
    },
    "exposure": {
      "twa": {
        "value": "25 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "35 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "50 ppm",
        "source": "NIOSH"
      },
      "idlh": {
        "value": "300 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 가벼움",
      "vaporPressure": "8.5 atm",
      "boilingPoint": "-33°C",
      "flashPoint": "가연성 가스"
    },
    "flammability": {
      "flashPoint": "가연성 가스",
      "autoIgnition": "651°C",
      "lel": "15%",
      "uel": "28%"
    },
    "mainHazards": [
      "강한 호흡기 자극",
      "강염기성",
      "고농도 흡입 위험",
      "가연범위 존재"
    ],
    "waterReactivity": {
      "hazards": [
        "물에 잘 녹음",
        "수분과 접촉 시 자극성 증가"
      ],
      "decon": [
        "가스 차단 및 환기 우선",
        "수용액은 물 세척 가능"
      ]
    },
    "incompatible": [
      "산",
      "염소계 물질",
      "산화제"
    ],
    "neutralization": {
      "direction": [
        "산성 중화 방향 검토"
      ],
      "waterUse": "물 사용 가능하나 암모니아수 확산 고려 필요",
      "waterUseJudge": "가능",
      "neutralizerNeed": "대량 누출 시 산성 중화제 검토 가능"
    },
    "ppe": [
      "공기호흡기",
      "화학보호복",
      "내화학 장갑"
    ],
    "cautions": [
      "후각만으로 안전 판단 금지",
      "액화가스 누출 초기 거동 고려"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 6,
    "nameKo": "TMAH",
    "nameEn": "Tetramethylammonium Hydroxide",
    "formula": "(CH3)4NOH",
    "cas": "75-59-2",
    "aliases": [
      "TMAH",
      "현상액"
    ],
    "process": "Photo / 현상",
    "state": "무색 수용액",
    "stateCategory": "강염기성 / 유기염기",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "2.38%: 강염기성 (피부흡수 독성 주의)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 1,
      "instability": 0,
      "special": "",
      "code": "H3 F1 I0"
    },
    "odor": {
      "profile": "약간의 암모니아 또는 생선 비린내 같은 아민취 (저농도는 거의 무취)",
      "keywords": "아민취, 비린내, 암모니아취, 저농도무취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "공식 기준 없음",
        "source": "SDS 참고"
      },
      "stel": {
        "value": "공식 기준 없음",
        "source": "SDS 참고"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.01 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "농도별 상이",
      "flashPoint": "자료 확인 필요"
    },
    "flammability": {
      "flashPoint": "자료 확인 필요",
      "autoIgnition": "자료 확인 필요",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "피부 흡수 독성 매우 큼",
      "강염기성 부식 위험",
      "소량 접촉도 중대 위험 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 혼합 가능",
        "희석되어도 피부흡수 독성 주의"
      ],
      "decon": [
        "피부 노출 시 즉시 대량 물 세척",
        "중화보다 인체 제독 우선"
      ]
    },
    "incompatible": [
      "산",
      "산화제"
    ],
    "neutralization": {
      "direction": [
        "산성 중화 방향 검토"
      ],
      "waterUse": "물 세척 적극 권장",
      "waterUseJudge": "주의",
      "neutralizerNeed": "현장 중화보다 인체 세척 우선"
    },
    "ppe": [
      "내화학 장갑",
      "화학보호복",
      "보안면"
    ],
    "cautions": [
      "작은 접촉도 과소평가 금지",
      "pH보다 피부흡수 독성 우선"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 7,
    "nameKo": "실란",
    "nameEn": "Silane",
    "formula": "SiH4",
    "cas": "7803-62-5",
    "aliases": [
      "실란",
      "SiH4",
      "Silane",
      "모노실란"
    ],
    "process": "증착 / CVD",
    "state": "무색 기체",
    "stateCategory": "무기 가스",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "🔥 인화성",
      "💥 폭발위험",
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (자연발화성 우선)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 4,
      "instability": 3,
      "special": "W",
      "code": "H2 F4 I3 W"
    },
    "odor": {
      "profile": "불쾌하고 불쾌감을 주는 특이한 불쾌취 (반응 시 메케한 냄새)",
      "keywords": "불쾌취, 특이취, 자극취, 자연발화성",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "5 ppm",
        "source": "ACGIH/제조사 SDS 대표값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "공기보다 가벼움",
      "vaporPressure": "가스",
      "boilingPoint": "-112°C",
      "flashPoint": "자연발화성 가스"
    },
    "flammability": {
      "flashPoint": "자연발화성 가스",
      "autoIgnition": "매우 낮음",
      "lel": "약 1.4%",
      "uel": "약 96%"
    },
    "mainHazards": [
      "자연발화성",
      "공기 접촉 시 화재 가능",
      "폭발범위 넓음"
    ],
    "waterReactivity": {
      "hazards": [
        "물 제독보다 누출원 차단 우선",
        "습기와 반응 가능성 고려"
      ],
      "decon": [
        "누출원 차단 및 불활성화 우선",
        "물 분사보다 화재·폭발 조건 관리 우선"
      ]
    },
    "incompatible": [
      "공기",
      "산화제",
      "할로겐"
    ],
    "neutralization": {
      "direction": [
        "중화 대상보다 차단·퍼지·연소관리 우선"
      ],
      "waterUse": "일반 제독 목적의 물 사용 부적합",
      "waterUseJudge": "금지",
      "neutralizerNeed": "일반 중화제 대상 아님"
    },
    "ppe": [
      "공기호흡기",
      "방염 보호구",
      "가스 검지기"
    ],
    "cautions": [
      "누출 자체보다 점화·폭발 조건 우선 고려",
      "공기 유입 여부 중요"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": true,
      "heavierThanAir": false
    }
  },
  {
    "id": 8,
    "nameKo": "포스핀",
    "nameEn": "Phosphine",
    "formula": "PH3",
    "cas": "7803-51-2",
    "aliases": [
      "포스핀",
      "PH3",
      "Phosphine"
    ],
    "process": "도핑가스",
    "state": "무색 기체",
    "stateCategory": "무기 가스",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🔥 인화성",
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (독성·가연성 우선)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 4,
      "flammability": 4,
      "instability": 2,
      "special": "W",
      "code": "H4 F4 I2 W"
    },
    "odor": {
      "profile": "썩은 생선 냄새 또는 마늘 탄 냄새 (극독성 감지 핵심 지표)",
      "keywords": "썩은생선, 마늘냄새, 마늘탄냄새, 극독성자극취",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "0.3 ppm",
        "source": "OSHA/NIOSH 대표값"
      },
      "stel": {
        "value": "1 ppm",
        "source": "NIOSH"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "50 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 약간 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-87.7°C",
      "flashPoint": "가연성 가스"
    },
    "flammability": {
      "flashPoint": "가연성 가스",
      "autoIgnition": "설정 없음 (공정 확인)",
      "lel": "약 1.8%",
      "uel": "설정 없음 (공정 확인)"
    },
    "mainHazards": [
      "고독성",
      "가연성",
      "반도체 도핑가스",
      "저농도 노출 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "물 제독보다 누출원 차단 및 환기 우선"
      ],
      "decon": [
        "가스 누출은 차단·배기·검지 우선",
        "오염 표면은 환기 후 기준에 따라 세척"
      ]
    },
    "incompatible": [
      "산화제",
      "공기",
      "할로겐"
    ],
    "neutralization": {
      "direction": [
        "가스 처리장치·스크러버 처리 우선"
      ],
      "waterUse": "일반적인 물 제독 대상 아님",
      "waterUseJudge": "확인 필요",
      "neutralizerNeed": "전용 가스 처리 기준 우선"
    },
    "ppe": [
      "공기호흡기",
      "화학보호복",
      "가스 검지기"
    ],
    "cautions": [
      "냄새 의존 금지",
      "STEL이 낮아 극저농도 관리 필요"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 9,
    "nameKo": "아르신",
    "nameEn": "Arsine",
    "formula": "AsH3",
    "cas": "7784-42-1",
    "aliases": [
      "아르신",
      "AsH3",
      "Arsine"
    ],
    "process": "도핑가스",
    "state": "무색 기체",
    "stateCategory": "무기 가스",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🔥 인화성",
      "🫁 건강유해"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (초고독성 우선)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 4,
      "flammability": 4,
      "instability": 2,
      "special": "",
      "code": "H4 F4 I2"
    },
    "odor": {
      "profile": "약한 마늘 냄새 (무색이며 냄새가 약해 흡입 위험성 매우 높음)",
      "keywords": "마늘냄새, 약한마늘취, 희미한냄새, 후각인터록주의",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "0.05 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "3 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-62.5°C",
      "flashPoint": "가연성 가스"
    },
    "flammability": {
      "flashPoint": "가연성 가스",
      "autoIgnition": "설정 없음 (공정 확인)",
      "lel": "약 5%",
      "uel": "약 78%"
    },
    "mainHazards": [
      "초고독성",
      "용혈성 독성",
      "가연성",
      "극저농도 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "물 제독보다 누출원 차단·검지 우선"
      ],
      "decon": [
        "가스 누출은 차단·배기 우선",
        "오염 가능 구역은 검지 후 처리"
      ]
    },
    "incompatible": [
      "산화제",
      "할로겐",
      "공기"
    ],
    "neutralization": {
      "direction": [
        "전용 가스 처리장치 우선"
      ],
      "waterUse": "일반 물 제독 대상 아님",
      "waterUseJudge": "가능",
      "neutralizerNeed": "가스 처리/스크러버 기준 우선"
    },
    "ppe": [
      "공기호흡기",
      "화학보호복",
      "가스 검지기"
    ],
    "cautions": [
      "IDLH가 매우 낮아 극저농도도 위험",
      "냄새 판단 금지"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 10,
    "nameKo": "디보레인",
    "nameEn": "Diborane",
    "formula": "B2H6",
    "cas": "19287-45-7",
    "aliases": [
      "디보레인",
      "B2H6",
      "Diborane"
    ],
    "process": "도핑가스",
    "state": "무색 기체",
    "stateCategory": "무기 가스",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🔥 인화성",
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (독성·가연성 우선)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 4,
      "flammability": 4,
      "instability": 3,
      "special": "W",
      "code": "H4 F4 I3 W"
    },
    "odor": {
      "profile": "특이하고 역겨운 달콤한 냄새 (또는 썩은 나무/고기 냄새)",
      "keywords": "역겨운단내, 달콤한냄새, 썩은나무, 썩은고기",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "0.1 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "15 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "가스",
      "vaporPressure": "가스",
      "boilingPoint": "-92.5°C",
      "flashPoint": "가연성 가스"
    },
    "flammability": {
      "flashPoint": "가연성 가스",
      "autoIgnition": "설정 없음 (공정 확인)",
      "lel": "설정 없음 (공정 확인)",
      "uel": "설정 없음 (공정 확인)"
    },
    "mainHazards": [
      "고독성",
      "가연성",
      "공기 중 반응성",
      "도핑가스"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 반응 가능성 고려",
        "가스 누출은 물 제독보다 차단 우선"
      ],
      "decon": [
        "차단·배기·검지 우선",
        "오염 표면은 안정화 후 세척"
      ]
    },
    "incompatible": [
      "공기",
      "산화제",
      "할로겐"
    ],
    "neutralization": {
      "direction": [
        "전용 가스 처리장치 우선"
      ],
      "waterUse": "일반 물 제독 대상 아님",
      "waterUseJudge": "가능",
      "neutralizerNeed": "스크러버/가스 처리 기준 우선"
    },
    "ppe": [
      "공기호흡기",
      "화학보호복",
      "가스 검지기"
    ],
    "cautions": [
      "저농도 독성 위험",
      "가연성 조건 동시 고려"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 11,
    "nameKo": "육불화텅스텐",
    "nameEn": "Tungsten Hexafluoride",
    "formula": "WF6",
    "cas": "7783-82-6",
    "aliases": [
      "육불화텅스텐",
      "WF6",
      "Tungsten hexafluoride"
    ],
    "process": "금속증착 / W CVD",
    "state": "무색 기체",
    "stateCategory": "무기 가스 (가수분해 시 산성)",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "🧪 부식성",
      "☠️ 급성독성",
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "수분 접촉: 강산성 생성물 (HF 생성 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 2,
      "special": "W",
      "code": "H3 F0 I2 W"
    },
    "odor": {
      "profile": "물/습기와 반응하여 발생하는 불화수소 특유의 자극적인 신취",
      "keywords": "신취, 불산취, 자극취, 가수분해산성취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "stel": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "ceiling": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "높음",
      "boilingPoint": "약 17°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "수분 반응 시 HF 생성 가능",
      "강한 부식성",
      "흡입 독성"
    ],
    "waterReactivity": {
      "hazards": [
        "물/습기와 반응해 HF 생성 가능",
        "부식성 미스트 발생 가능"
      ],
      "decon": [
        "건식 차단·격리 우선",
        "물 사용 전 HF 생성 가능성 고려",
        "잔류물은 HF 대응 기준 적용 검토"
      ]
    },
    "incompatible": [
      "물",
      "습기",
      "강염기"
    ],
    "neutralization": {
      "direction": [
        "생성 HF에 대한 칼슘계 중화 방향 검토"
      ],
      "waterUse": "직접 물 사용 시 HF 생성 및 확산 고려 필요",
      "waterUseJudge": "주의",
      "neutralizerNeed": "HF 생성 가능성 때문에 전용 중화제 검토 필요"
    },
    "ppe": [
      "공기호흡기",
      "내산 장갑",
      "화학보호복"
    ],
    "cautions": [
      "WF6 자체보다 수분 반응 생성 HF 위험 고려",
      "물 제독 전 반응성 판단 필요"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": true,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 12,
    "nameKo": "삼불화염소",
    "nameEn": "Chlorine Trifluoride",
    "formula": "ClF3",
    "cas": "7790-91-2",
    "aliases": [
      "삼불화염소",
      "ClF3",
      "Chlorine trifluoride"
    ],
    "process": "Chamber Cleaning / 특수가스",
    "state": "무색~연황색 기체 또는 액체",
    "stateCategory": "무기 가스 (가수분해 시 산성)",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "⭕ 산화성",
      "🧪 부식성",
      "☠️ 급성독성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "수분 접촉: 강산성 생성물 (HF/HCl 계열 생성 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 4,
      "flammability": 0,
      "instability": 3,
      "special": "W, OX",
      "code": "H4 F0 I3 W, OX"
    },
    "odor": {
      "profile": "매우 자극적이고 질식할 것 같은 달콤하면서도 매캐한 냄새",
      "keywords": "달콤한매캘취, 자극취, 질식취, 산화성가스",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "stel": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "ceiling": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "높음",
      "boilingPoint": "약 12°C",
      "flashPoint": "초강력 산화성"
    },
    "flammability": {
      "flashPoint": "초강력 산화성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "초강력 산화제",
      "물·유기물과 격렬 반응 가능",
      "부식성",
      "화재·폭발 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 격렬히 반응 가능",
        "HF/HCl 등 부식성 생성물 가능",
        "직접 살수 금지 수준으로 검토 필요"
      ],
      "decon": [
        "초기 물 제독보다 격리·차단·전용 처리 우선",
        "잔류물 처리는 전문 절차 필요"
      ]
    },
    "incompatible": [
      "물",
      "유기물",
      "가연물",
      "환원제"
    ],
    "neutralization": {
      "direction": [
        "전용 처리 절차 우선",
        "생성 산성물질 중화는 안정화 후 검토"
      ],
      "waterUse": "초기 직접 물 사용 부적합 가능성이 큼",
      "waterUseJudge": "금지",
      "neutralizerNeed": "전용 중화/처리 절차 필수 검토"
    },
    "ppe": [
      "공기호흡기",
      "특수 화학보호복",
      "내화학 장갑"
    ],
    "cautions": [
      "일반 산화제보다 훨씬 강한 반응성",
      "물 제독 판단에 매우 신중 필요"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": true,
      "heavierThanAir": true
    }
  },
  {
    "id": 13,
    "nameKo": "삼불화질소",
    "nameEn": "Nitrogen Trifluoride",
    "formula": "NF3",
    "cas": "7783-54-2",
    "aliases": [
      "NF3",
      "삼불화질소",
      "Nitrogen trifluoride"
    ],
    "process": "Chamber Cleaning",
    "state": "무색 기체",
    "stateCategory": "무기 가스",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "⭕ 산화성",
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (산화성 가스)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 0,
      "instability": 0,
      "special": "OX",
      "code": "H2 F0 I0 OX"
    },
    "odor": {
      "profile": "상온에서 완벽한 무취 (냄새로 누출 감지 불가능)",
      "keywords": "무취, 후각인지불가, 센서의존필수",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "10 ppm",
        "source": "ACGIH 대표값"
      },
      "stel": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-129°C",
      "flashPoint": "비가연성 / 산화성"
    },
    "flammability": {
      "flashPoint": "비가연성 / 산화성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "산화성 가스",
      "고온/플라즈마 조건 반응성",
      "질식 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 직접 반응성은 낮은 편이나 분해 생성물 주의"
      ],
      "decon": [
        "누출 차단·환기 우선",
        "물 제독보다 가스 처리 우선"
      ]
    },
    "incompatible": [
      "가연물",
      "환원제",
      "고온"
    ],
    "neutralization": {
      "direction": [
        "중화보다 차단·배기·가스 처리 우선"
      ],
      "waterUse": "물 사용 효과 제한적",
      "waterUseJudge": "주의",
      "neutralizerNeed": "전용 가스 처리장치 우선"
    },
    "ppe": [
      "공기호흡기",
      "가스 검지기"
    ],
    "cautions": [
      "산화성 가스로 가연물 접촉 주의"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 14,
    "nameKo": "플루오린",
    "nameEn": "Fluorine",
    "formula": "F2",
    "cas": "7782-41-4",
    "aliases": [
      "F2",
      "플루오린",
      "플루오르",
      "Fluorine"
    ],
    "process": "특수가스 / 산화성 가스",
    "state": "연황색 기체",
    "stateCategory": "무기 가스 (가수분해 시 산성)",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "⭕ 산화성",
      "☠️ 급성독성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "수분 접촉: 산성화 (HF 생성 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 4,
      "flammability": 0,
      "instability": 3,
      "special": "W, OX",
      "code": "H4 F0 I3 W, OX"
    },
    "odor": {
      "profile": "매우 자극적이고 부식성 있는 독특한 자극취 (오존과 유사)",
      "keywords": "자극취, 오존냄새, 부식성취, 날카로운냄새",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "0.1 ppm",
        "source": "OSHA 대표값"
      },
      "stel": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "ceiling": {
        "value": "0.5 ppm",
        "source": "ACGIH 또는 대표 참고값"
      },
      "idlh": {
        "value": "25 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-188°C",
      "flashPoint": "강산화성 가스"
    },
    "flammability": {
      "flashPoint": "강산화성 가스",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "극강 산화성",
      "부식성",
      "수분 접촉 시 HF 생성 가능",
      "가연물 반응 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 반응해 산성/부식성 생성물 가능",
        "강한 산화 반응 가능"
      ],
      "decon": [
        "가스 차단·배기 우선",
        "물 사용은 반응성 및 HF 생성 고려"
      ]
    },
    "incompatible": [
      "유기물",
      "가연물",
      "환원제",
      "물/습기"
    ],
    "neutralization": {
      "direction": [
        "전용 가스 처리 및 생성 HF 중화 검토"
      ],
      "waterUse": "초기 직접 살수는 반응성 고려 필요",
      "waterUseJudge": "주의",
      "neutralizerNeed": "전용 처리 후 산성 생성물 중화 검토"
    },
    "ppe": [
      "공기호흡기",
      "화학보호복",
      "내산 장갑"
    ],
    "cautions": [
      "물반응성과 HF 생성 가능성을 반드시 고려"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": true,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 15,
    "nameKo": "염소",
    "nameEn": "Chlorine",
    "formula": "Cl2",
    "cas": "7782-50-5",
    "aliases": [
      "Cl2",
      "염소",
      "염소가스"
    ],
    "process": "Utility / 수처리",
    "state": "황록색 기체",
    "stateCategory": "무기 가스 (가수분해 시 산성)",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 수분 접촉 시 산성 (습한 환경 자극 증가)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 0,
      "special": "OX",
      "code": "H3 F0 I0 OX"
    },
    "odor": {
      "profile": "수영장 소독약 냄새보다 훨씬 강렬하고 찔러대는 자극취",
      "keywords": "소독약냄새, 수영장냄새, 찌르는냄새, 자극취",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "0.5 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "1 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "0.5 ppm",
        "source": "NIOSH"
      },
      "idlh": {
        "value": "10 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-34°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강한 호흡기 자극",
      "저지대 체류 가능",
      "부식성 가스"
    ],
    "waterReactivity": {
      "hazards": [
        "수분과 반응해 산성화 가능"
      ],
      "decon": [
        "가스 차단 및 환기 우선",
        "물 사용 시 산성화 고려"
      ]
    },
    "incompatible": [
      "암모니아",
      "환원제",
      "유기물"
    ],
    "neutralization": {
      "direction": [
        "환원성 처리 방향 검토"
      ],
      "waterUse": "물 사용 시 산성 확산 고려",
      "waterUseJudge": "가능",
      "neutralizerNeed": "전용 처리 절차 검토"
    },
    "ppe": [
      "공기호흡기",
      "화학보호복"
    ],
    "cautions": [
      "공기보다 무거워 저지대 체류 가능"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 16,
    "nameKo": "오존",
    "nameEn": "Ozone",
    "formula": "O3",
    "cas": "10028-15-6",
    "aliases": [
      "O3",
      "오존"
    ],
    "process": "산화 / 세정",
    "state": "청색 기체",
    "stateCategory": "무기 가스",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "⭕ 산화성",
      "🫁 건강유해"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (강산화성 우선)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 4,
      "flammability": 0,
      "instability": 2,
      "special": "OX",
      "code": "H4 F0 I2 OX"
    },
    "odor": {
      "profile": "전기 스파크 발생 시 나는 듯한 날카롭고 풀 비린내 같은 자극취",
      "keywords": "풀비린내, 날카로운냄새, 스파크취, 오존취",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "0.1 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "0.1 ppm",
        "source": "NIOSH"
      },
      "idlh": {
        "value": "5 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-112°C",
      "flashPoint": "산화성 가스"
    },
    "flammability": {
      "flashPoint": "산화성 가스",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강산화성",
      "호흡기 자극",
      "재질 열화 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "수중에서도 산화 반응 가능"
      ],
      "decon": [
        "환기 및 차단 우선",
        "오존 분해 우선"
      ]
    },
    "incompatible": [
      "유기물",
      "환원제",
      "가연물"
    ],
    "neutralization": {
      "direction": [
        "분해·환기 우선"
      ],
      "waterUse": "물 사용 효과 제한적",
      "waterUseJudge": "가능",
      "neutralizerNeed": "오존 분해 처리 우선"
    },
    "ppe": [
      "공기호흡기",
      "보안면"
    ],
    "cautions": [
      "냄새만으로 안전 판단 금지"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 17,
    "nameKo": "수소",
    "nameEn": "Hydrogen",
    "formula": "H2",
    "cas": "1333-74-0",
    "aliases": [
      "H2",
      "수소"
    ],
    "process": "Utility / 반응가스",
    "state": "무색 기체",
    "stateCategory": "중성 가스",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성",
      "💥 폭발위험"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (폭발성 우선)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 0,
      "flammability": 4,
      "instability": 0,
      "special": "",
      "code": "H0 F4 I0"
    },
    "odor": {
      "profile": "완벽한 무취, 무색 (감각으로 절대 누출 인지 불가)",
      "keywords": "무취, 무색무취, 후각인지불가, 가연성폭발주의",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "단순 질식성",
        "source": "OSHA"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "단순 질식성",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 매우 가벼움",
      "vaporPressure": "가스",
      "boilingPoint": "-253°C",
      "flashPoint": "가연성 가스"
    },
    "flammability": {
      "flashPoint": "가연성 가스",
      "autoIgnition": "500°C",
      "lel": "4%",
      "uel": "75%"
    },
    "mainHazards": [
      "폭발범위 매우 넓음",
      "정전기 점화 위험",
      "밀폐공간 질식 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "물반응성은 낮음"
      ],
      "decon": [
        "누출 차단 및 점화원 제거 우선"
      ]
    },
    "incompatible": [
      "산화제",
      "점화원"
    ],
    "neutralization": {
      "direction": [
        "중화 대상 아님"
      ],
      "waterUse": "물 사용 효과 제한적",
      "waterUseJudge": "확인 필요",
      "neutralizerNeed": "가스 차단 우선"
    },
    "ppe": [
      "방염 보호구",
      "가스 검지기"
    ],
    "cautions": [
      "폭발 하한 관리 매우 중요"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 18,
    "nameKo": "아산화질소",
    "nameEn": "Nitrous Oxide",
    "formula": "N2O",
    "cas": "10024-97-2",
    "aliases": [
      "N2O",
      "아산화질소"
    ],
    "process": "반응가스",
    "state": "무색 기체",
    "stateCategory": "중성 가스",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "⭕ 산화성",
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (산화성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 0,
      "instability": 0,
      "special": "OX",
      "code": "H2 F0 I0 OX"
    },
    "odor": {
      "profile": "약간 달콤한 향기가 나는 기체 (마취성 기체)",
      "keywords": "단내, 달콤한향, 마취성가스",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "25 ppm",
        "source": "NIOSH 대표값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "-"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-88°C",
      "flashPoint": "비가연성 / 산화성"
    },
    "flammability": {
      "flashPoint": "비가연성 / 산화성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "산화성",
      "질식 위험",
      "고농도 중추신경 영향 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물반응성 낮음"
      ],
      "decon": [
        "차단 및 환기 우선"
      ]
    },
    "incompatible": [
      "가연물",
      "환원제"
    ],
    "neutralization": {
      "direction": [
        "가스 차단 우선"
      ],
      "waterUse": "물 사용 효과 제한적",
      "waterUseJudge": "확인 필요",
      "neutralizerNeed": "중화 대상 아님"
    },
    "ppe": [
      "공기호흡기",
      "가스 검지기"
    ],
    "cautions": [
      "산화성 가스로 가연물 접촉 주의"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 19,
    "nameKo": "디클로로실란",
    "nameEn": "Dichlorosilane",
    "formula": "SiH2Cl2",
    "cas": "4109-96-0",
    "aliases": [
      "DCS",
      "Dichlorosilane"
    ],
    "process": "증착 / CVD",
    "state": "무색 기체",
    "stateCategory": "유기/무기 실란 가스 (산성 유도)",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "🔥 인화성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "수분 접촉: 산성 생성 가능 (HCl 생성 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 4,
      "instability": 2,
      "special": "W",
      "code": "H3 F4 I2 W"
    },
    "odor": {
      "profile": "염화수소 분해로 인한 날카롭고 자극적인 산성 매캐한 냄새",
      "keywords": "산성매캐한냄새, 염산취, 자극취, 발연성",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "stel": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "ceiling": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "8°C",
      "flashPoint": "가연성"
    },
    "flammability": {
      "flashPoint": "가연성",
      "autoIgnition": "설정 없음 (공정 확인)",
      "lel": "설정 없음 (공정 확인)",
      "uel": "설정 없음 (공정 확인)"
    },
    "mainHazards": [
      "가연성",
      "수분 접촉 시 HCl 생성 가능",
      "반응성 가스"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 반응해 HCl 생성 가능"
      ],
      "decon": [
        "건식 차단 우선",
        "물 사용 전 반응성 검토"
      ]
    },
    "incompatible": [
      "물",
      "습기",
      "산화제"
    ],
    "neutralization": {
      "direction": [
        "생성 HCl 중화 검토"
      ],
      "waterUse": "직접 물 사용 시 반응성 고려",
      "waterUseJudge": "주의",
      "neutralizerNeed": "산성 생성물 중화 필요 가능"
    },
    "ppe": [
      "공기호흡기",
      "화학보호복"
    ],
    "cautions": [
      "수분 반응성 우선 고려"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 20,
    "nameKo": "삼염화실란",
    "nameEn": "Trichlorosilane",
    "formula": "SiHCl3",
    "cas": "10025-78-2",
    "aliases": [
      "TCS",
      "Trichlorosilane"
    ],
    "process": "증착 / Poly-Si",
    "state": "무색 액체 또는 기체",
    "stateCategory": "무기 실란 액체 (산성 유도)",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "🔥 인화성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "수분 접촉: 산성 생성 가능 (HCl 생성 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 4,
      "instability": 2,
      "special": "W",
      "code": "H3 F4 I2 W"
    },
    "odor": {
      "profile": "습기와 즉각 반응하여 발생하는 강력하고 찔러대는 염산취",
      "keywords": "염산취, 찌르는냄새, 자극취, 습기반응",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "5 ppm",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "10 ppm",
        "source": "대표 SDS 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "1.34 g/cm³",
      "vaporPressure": "높음",
      "boilingPoint": "31°C",
      "flashPoint": "-18°C"
    },
    "flammability": {
      "flashPoint": "-18°C",
      "autoIgnition": "설정 없음 (공정 확인)",
      "lel": "6%",
      "uel": "90%"
    },
    "mainHazards": [
      "가연성",
      "수분 반응 시 HCl 생성 가능",
      "폭발 가능성"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 격렬 반응 가능",
        "HCl 생성 가능"
      ],
      "decon": [
        "건식 차단 우선",
        "물 사용 전 반응성 검토"
      ]
    },
    "incompatible": [
      "물",
      "습기",
      "산화제"
    ],
    "neutralization": {
      "direction": [
        "생성 HCl 중화 검토"
      ],
      "waterUse": "초기 직접 물 사용 신중 판단",
      "waterUseJudge": "주의",
      "neutralizerNeed": "산성 생성물 중화 가능성 고려"
    },
    "ppe": [
      "공기호흡기",
      "화학보호복"
    ],
    "cautions": [
      "물반응성과 인화성 동시 고려"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 21,
    "nameKo": "TEOS",
    "nameEn": "Tetraethyl Orthosilicate",
    "formula": "Si(OC2H5)4",
    "cas": "78-10-4",
    "aliases": [
      "TEOS"
    ],
    "process": "산화막 증착",
    "state": "무색 액체",
    "stateCategory": "유기규소 화합물",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "🔥 인화성",
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "액체: 해당 없음 (가수분해 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 2,
      "instability": 1,
      "special": "",
      "code": "H2 F2 I1"
    },
    "odor": {
      "profile": "약간의 알코올 향 또는 달콤하고 자극적인 에스테르 냄새",
      "keywords": "알코올향, 에스테르취, 달콤한냄새, 자극취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "10 ppm",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "0.93 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "168°C",
      "flashPoint": "45°C"
    },
    "flammability": {
      "flashPoint": "45°C",
      "autoIgnition": "설정 없음 (공정 확인)",
      "lel": "설정 없음 (공정 확인)",
      "uel": "설정 없음 (공정 확인)"
    },
    "mainHazards": [
      "인화성 액체",
      "증기 흡입 자극 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "가수분해 가능"
      ],
      "decon": [
        "흡착 및 회수 우선"
      ]
    },
    "incompatible": [
      "산화제"
    ],
    "neutralization": {
      "direction": [
        "흡착 및 회수 우선"
      ],
      "waterUse": "물 사용 가능하나 확산 고려",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 대상 아님"
    },
    "ppe": [
      "유기증기용 호흡보호구",
      "보안경"
    ],
    "cautions": [
      "점화원 관리 필요"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 22,
    "nameKo": "사불화규소",
    "nameEn": "Silicon Tetrafluoride",
    "formula": "SiF4",
    "cas": "7783-61-1",
    "aliases": [
      "SiF4"
    ],
    "process": "Etch / 반응가스",
    "state": "무색 기체",
    "stateCategory": "무기 가스 (산성 유도)",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🧪 부식성",
      "☠️ 급성독성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "수분 접촉: 산성 생성 가능 (HF 생성 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 4,
      "flammability": 0,
      "instability": 1,
      "special": "W",
      "code": "H4 F0 I1 W"
    },
    "odor": {
      "profile": "질식할 것 같고 찔러대는 매캐한 불산/염산 계열의 자극취",
      "keywords": "매캐한냄새, 불산취, 염산취, 질식취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "2.5 ppm",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "5 ppm",
        "source": "대표 SDS 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-86°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "수분 반응 시 HF 생성 가능",
      "부식성"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 반응해 HF 생성 가능"
      ],
      "decon": [
        "건식 차단 우선"
      ]
    },
    "incompatible": [
      "물",
      "습기"
    ],
    "neutralization": {
      "direction": [
        "HF 생성물 중화 검토"
      ],
      "waterUse": "직접 물 사용 시 HF 생성 고려",
      "waterUseJudge": "주의",
      "neutralizerNeed": "칼슘계 중화 방향 검토"
    },
    "ppe": [
      "공기호흡기",
      "내산 장갑"
    ],
    "cautions": [
      "HF 생성 가능성 우선 고려"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": true,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 23,
    "nameKo": "사불화탄소",
    "nameEn": "Carbon Tetrafluoride",
    "formula": "CF4",
    "cas": "75-73-0",
    "aliases": [
      "CF4"
    ],
    "process": "Etch Gas",
    "state": "무색 기체",
    "stateCategory": "중성 가스",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (질식 위험 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 1,
      "flammability": 0,
      "instability": 0,
      "special": "",
      "code": "H1 F0 I0"
    },
    "odor": {
      "profile": "완벽한 무취 (고농도 체류 시에도 감각 인지 불가)",
      "keywords": "무취, 불연성가스, 후각인지불가",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "1000 ppm",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "단순 질식성",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-128°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "질식 위험",
      "밀폐공간 산소결핍 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물반응성 낮음"
      ],
      "decon": [
        "환기 우선"
      ]
    },
    "incompatible": [
      "고온"
    ],
    "neutralization": {
      "direction": [
        "가스 배기 우선"
      ],
      "waterUse": "물 사용 효과 제한적",
      "waterUseJudge": "확인 필요",
      "neutralizerNeed": "중화 대상 아님"
    },
    "ppe": [
      "공기호흡기"
    ],
    "cautions": [
      "산소결핍 위험 고려"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 24,
    "nameKo": "육불화에탄",
    "nameEn": "Hexafluoroethane",
    "formula": "C2F6",
    "cas": "76-16-4",
    "aliases": [
      "C2F6"
    ],
    "process": "Etch Gas",
    "state": "무색 기체",
    "stateCategory": "중성 가스",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (질식 위험 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 1,
      "flammability": 0,
      "instability": 0,
      "special": "",
      "code": "H1 F0 I0"
    },
    "odor": {
      "profile": "완벽한 무취 (질식성 가스)",
      "keywords": "무취, 질식성가스, 후각인지불가",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "1000 ppm",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "단순 질식성",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-78°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "질식 위험",
      "산소결핍 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물반응성 낮음"
      ],
      "decon": [
        "환기 우선"
      ]
    },
    "incompatible": [
      "고온"
    ],
    "neutralization": {
      "direction": [
        "가스 배기 우선"
      ],
      "waterUse": "물 사용 효과 제한적",
      "waterUseJudge": "확인 필요",
      "neutralizerNeed": "중화 대상 아님"
    },
    "ppe": [
      "공기호흡기"
    ],
    "cautions": [
      "밀폐공간 질식 위험 고려"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 25,
    "nameKo": "수산화나트륨",
    "nameEn": "Sodium Hydroxide",
    "formula": "NaOH",
    "cas": "1310-73-2",
    "aliases": [
      "NaOH",
      "가성소다"
    ],
    "process": "폐수 / 중화 / 세정",
    "state": "백색 고체 또는 수용액",
    "stateCategory": "강염기성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "50%: 강염기성 (강한 부식성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 1,
      "special": "",
      "code": "H3 F0 I1"
    },
    "odor": {
      "profile": "무취 (액체/고체 자체는 냄새가 없으나 에어로졸 유출 시 자극취)",
      "keywords": "무취, 에어로졸자극취, 염기성흄",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "2 mg/m³",
        "source": "OSHA Ceiling"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "2 mg/m³",
        "source": "OSHA"
      },
      "idlh": {
        "value": "10 mg/m³",
        "source": "NIOSH 대표값"
      }
    },
    "physical": {
      "density": "2.13 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "1388°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강염기성",
      "심한 피부 화상",
      "물 접촉 시 발열 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물 희석 시 발열 가능"
      ],
      "decon": [
        "대량 물 세척 가능",
        "인체 제독 우선"
      ]
    },
    "incompatible": [
      "산",
      "알루미늄"
    ],
    "neutralization": {
      "direction": [
        "산성 중화 검토"
      ],
      "waterUse": "물 사용 가능",
      "waterUseJudge": "주의",
      "neutralizerNeed": "산성 중화제 검토 가능"
    },
    "ppe": [
      "내화학 장갑",
      "보안면"
    ],
    "cautions": [
      "눈 손상 위험 큼"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 26,
    "nameKo": "PAC",
    "nameEn": "Polyaluminum Chloride",
    "formula": "PAC",
    "cas": "1327-41-9",
    "aliases": [
      "PAC",
      "폴리염화알루미늄"
    ],
    "process": "폐수처리",
    "state": "황색 액체",
    "stateCategory": "약산성",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 약산성 (제품별 상이)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 0,
      "instability": 0,
      "special": "",
      "code": "H2 F0 I0"
    },
    "odor": {
      "profile": "거의 무취 또는 약간의 약한 특이취",
      "keywords": "무취, 약한특이취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "약 1.3 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "제품별 상이",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "피부·눈 자극 가능",
      "응집제"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 혼합 사용"
      ],
      "decon": [
        "물 세척 가능"
      ]
    },
    "incompatible": [
      "강염기"
    ],
    "neutralization": {
      "direction": [
        "중화보다는 희석·세척"
      ],
      "waterUse": "물 사용 가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "보안경",
      "장갑"
    ],
    "cautions": [
      "미끄럼 위험"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 27,
    "nameKo": "PAM",
    "nameEn": "Polyacrylamide",
    "formula": "PAM",
    "cas": "9003-05-8",
    "aliases": [
      "PAM",
      "폴리아크릴아마이드"
    ],
    "process": "폐수처리",
    "state": "백색 분말",
    "stateCategory": "유기 고분자 / 중성",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 중성 부근 (제품별 상이)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-",
      "code": "H1 F1 I0"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취, 고체무취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음",
        "source": "-"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "약 1.3 g/cm³",
      "vaporPressure": "해당 없음",
      "boilingPoint": "해당 없음",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "분진 흡입 자극 가능",
      "미끄럼 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 혼합 시 미끄러움 증가"
      ],
      "decon": [
        "물 세척 가능"
      ]
    },
    "incompatible": [
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "중화 대상 아님"
      ],
      "waterUse": "물 세척 가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "보안경",
      "방진마스크"
    ],
    "cautions": [
      "바닥 미끄럼 주의"
    ],
    "flags": {
      "lowArea": true,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 28,
    "nameKo": "차아염소산나트륨",
    "nameEn": "Sodium Hypochlorite",
    "formula": "NaOCl",
    "cas": "7681-52-9",
    "aliases": [
      "NaOCl",
      "락스"
    ],
    "process": "폐수 / 살균",
    "state": "황색 액체",
    "stateCategory": "염기성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🧪 부식성",
      "🌊 환경유해"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 강염기성 (염소 발생 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 1,
      "special": "",
      "code": "H3 F0 I1"
    },
    "odor": {
      "profile": "일반 가정용 락스(소독제) 특유의 강한 염소취",
      "keywords": "락스냄새, 소독제냄새, 염소취",
      "volatilityGrade": "",
      "warningType": "후각 조기선행형 (독성농도 도달 전 후각인지 가능)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음",
        "source": "-"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.2 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해 가능",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "산 혼합 시 염소가스 발생 가능",
      "부식성"
    ],
    "waterReactivity": {
      "hazards": [
        "산과 반응 시 Cl2 발생 가능"
      ],
      "decon": [
        "물 세척 가능",
        "산 접촉 차단 우선"
      ]
    },
    "incompatible": [
      "산",
      "암모니아"
    ],
    "neutralization": {
      "direction": [
        "환원성 처리 검토"
      ],
      "waterUse": "물 사용 가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "산 접촉 금지"
    },
    "ppe": [
      "보안면",
      "내화학 장갑"
    ],
    "cautions": [
      "산 혼합 금지"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 29,
    "nameKo": "과산화수소",
    "nameEn": "Hydrogen Peroxide",
    "formula": "H2O2",
    "cas": "7722-84-1",
    "aliases": [
      "H2O2",
      "과산화수소"
    ],
    "process": "세정 / 산화",
    "state": "무색 액체",
    "stateCategory": "약산성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "⭕ 산화성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "35%: 약산성 (산화성 우선)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 1,
      "special": "OX",
      "code": "H3 F0 I1 OX"
    },
    "odor": {
      "profile": "약간 찔러대는 듯한 특이한 신취 (저농도는 무취)",
      "keywords": "신취, 특이신취, 저농도무취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "1 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "1 ppm",
        "source": "NIOSH"
      },
      "idlh": {
        "value": "75 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "1.39 g/cm³",
      "vaporPressure": "5 mmHg",
      "boilingPoint": "141°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강산화성",
      "유기물 반응 가능",
      "산소 발생 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "오염 시 급격 분해 가능"
      ],
      "decon": [
        "오염 제거 후 세척"
      ]
    },
    "incompatible": [
      "유기물",
      "금속"
    ],
    "neutralization": {
      "direction": [
        "분해·희석 관리 우선"
      ],
      "waterUse": "물 사용 가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화보다 분해 관리 우선"
    },
    "ppe": [
      "보안면",
      "내화학 장갑"
    ],
    "cautions": [
      "밀폐 시 압력 상승 가능"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 30,
    "nameKo": "에틸렌글리콜",
    "nameEn": "Ethylene Glycol",
    "formula": "C2H6O2",
    "cas": "107-21-1",
    "aliases": [
      "EG",
      "부동액"
    ],
    "process": "공조 / Chiller",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 부근 (독성 주의)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 1,
      "instability": 0,
      "special": "",
      "code": "H2 F1 I0"
    },
    "odor": {
      "profile": "완벽한 무취 (달콤한 맛이 나나 기화가 잘 안 되어 냄새 없음)",
      "keywords": "무취, 달콤한맛",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "50 ppm",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "100 ppm",
        "source": "대표 SDS 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "1.11 g/cm³",
      "vaporPressure": "0.06 mmHg",
      "boilingPoint": "197°C",
      "flashPoint": "111°C"
    },
    "flammability": {
      "flashPoint": "111°C",
      "autoIgnition": "410°C",
      "lel": "3.2%",
      "uel": "15.3%"
    },
    "mainHazards": [
      "섭취 독성",
      "고온 시 인화 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 가능"
      ],
      "decon": [
        "흡착 후 물 세척"
      ]
    },
    "incompatible": [
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "흡착·회수 우선"
      ],
      "waterUse": "물 사용 가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "보안경",
      "장갑"
    ],
    "cautions": [
      "누출 시 미끄럼 위험"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 31,
    "nameKo": "프로필렌글리콜",
    "nameEn": "Propylene Glycol",
    "formula": "C3H8O2",
    "cas": "57-55-6",
    "aliases": [
      "PG",
      "프로필렌글리콜"
    ],
    "process": "공조 / Chiller",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 부근 (저독성 부동액)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 0,
      "flammability": 1,
      "instability": 0,
      "special": "",
      "code": "H0 F1 I0"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "10 mg/m³",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.03 g/cm³",
      "vaporPressure": "0.1 mmHg",
      "boilingPoint": "188°C",
      "flashPoint": "99°C"
    },
    "flammability": {
      "flashPoint": "99°C",
      "autoIgnition": "371°C",
      "lel": "2.6%",
      "uel": "12.5%"
    },
    "mainHazards": [
      "고온 시 인화 가능",
      "미끄럼 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 가능"
      ],
      "decon": [
        "흡착 후 물 세척"
      ]
    },
    "incompatible": [
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "흡착·회수 우선"
      ],
      "waterUse": "물 사용 가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "보안경",
      "장갑"
    ],
    "cautions": [
      "바닥 미끄럼 주의"
    ],
    "flags": {
      "lowArea": true,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 34,
    "nameKo": "이소프로필알코올",
    "nameEn": "Isopropyl Alcohol",
    "formula": "C3H8O",
    "cas": "67-63-0",
    "aliases": [
      "IPA",
      "이소프로판올"
    ],
    "process": "세정 / 용제",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성",
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 (인화성 우선)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 3,
      "instability": 0,
      "special": "",
      "code": "H2 F3 I0"
    },
    "odor": {
      "profile": "병원 소독용 알코올 또는 문구용 마카펜 특유의 강한 알코올 취",
      "keywords": "알코올취, 소독약냄새, 마카펜냄새, 휘발취",
      "volatilityGrade": "",
      "warningType": "후각 조기선행형 (독성농도 도달 전 후각인지 가능)"
    },
    "exposure": {
      "twa": {
        "value": "200 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "400 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "2000 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "0.79 g/cm³",
      "vaporPressure": "45 mmHg",
      "boilingPoint": "82°C",
      "flashPoint": "12°C"
    },
    "flammability": {
      "flashPoint": "12°C",
      "autoIgnition": "399°C",
      "lel": "2%",
      "uel": "12%"
    },
    "mainHazards": [
      "고인화성",
      "정전기 점화 가능",
      "증기 흡입 자극"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 가능"
      ],
      "decon": [
        "흡착 및 환기 우선"
      ]
    },
    "incompatible": [
      "산화제",
      "점화원"
    ],
    "neutralization": {
      "direction": [
        "흡착·회수 우선"
      ],
      "waterUse": "물 사용 가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 대상 아님"
    },
    "ppe": [
      "유기증기용 호흡보호구",
      "방염 보호구"
    ],
    "cautions": [
      "LEL 도달 가능성 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 35,
    "nameKo": "질소",
    "nameEn": "Nitrogen",
    "formula": "N2",
    "cas": "7727-37-9",
    "aliases": [
      "N2",
      "질소"
    ],
    "process": "퍼지 / Utility",
    "state": "무색 기체",
    "stateCategory": "중성 가스",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (산소결핍 위험)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 0,
      "flammability": 0,
      "instability": 0,
      "special": "SA",
      "code": "H0 F0 I0 SA"
    },
    "odor": {
      "profile": "완벽한 무취 (누출 시 무증상 질식 위험 극도로 높음)",
      "keywords": "무취, 무색무취, 단순질식위험, 밀폐공간주의",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "단순 질식성",
        "source": "NIOSH"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "단순 질식성",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 약간 가벼움",
      "vaporPressure": "가스",
      "boilingPoint": "-196°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "산소결핍",
      "밀폐공간 질식 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "물반응성 낮음"
      ],
      "decon": [
        "환기 우선"
      ]
    },
    "incompatible": [],
    "neutralization": {
      "direction": [
        "중화 대상 아님"
      ],
      "waterUse": "물 사용 효과 없음",
      "waterUseJudge": "확인 필요",
      "neutralizerNeed": "산소농도 관리 우선"
    },
    "ppe": [
      "산소농도측정기",
      "공기호흡기"
    ],
    "cautions": [
      "무취·무색이라 감지 어려움"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 36,
    "nameKo": "헬륨",
    "nameEn": "Helium",
    "formula": "He",
    "cas": "7440-59-7",
    "aliases": [
      "He",
      "헬륨"
    ],
    "process": "Leak Test / Utility",
    "state": "무색 기체",
    "stateCategory": "중성 가스",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (질식 위험 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 0,
      "flammability": 0,
      "instability": 0,
      "special": "SA",
      "code": "H0 F0 I0 SA"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "단순 질식성",
        "source": "NIOSH"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "단순 질식성",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 매우 가벼움",
      "vaporPressure": "가스",
      "boilingPoint": "-269°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "산소결핍",
      "고압가스 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "반응성 낮음"
      ],
      "decon": [
        "환기 우선"
      ]
    },
    "incompatible": [],
    "neutralization": {
      "direction": [
        "중화 대상 아님"
      ],
      "waterUse": "효과 없음",
      "waterUseJudge": "확인 필요",
      "neutralizerNeed": "환기 우선"
    },
    "ppe": [
      "산소농도측정기"
    ],
    "cautions": [
      "밀폐공간 산소결핍 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 37,
    "nameKo": "아르곤",
    "nameEn": "Argon",
    "formula": "Ar",
    "cas": "7440-37-1",
    "aliases": [
      "Ar",
      "아르곤"
    ],
    "process": "퍼지 / 용접 / Utility",
    "state": "무색 기체",
    "stateCategory": "중성 가스",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (질식 위험)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 0,
      "flammability": 0,
      "instability": 0,
      "special": "SA",
      "code": "H0 F0 I0 SA"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취, 불활성질식",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "단순 질식성",
        "source": "NIOSH"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "단순 질식성",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-186°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "저지대 산소결핍",
      "밀폐공간 질식 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "반응성 낮음"
      ],
      "decon": [
        "환기 우선"
      ]
    },
    "incompatible": [],
    "neutralization": {
      "direction": [
        "중화 대상 아님"
      ],
      "waterUse": "효과 없음",
      "waterUseJudge": "확인 필요",
      "neutralizerNeed": "산소농도 관리 우선"
    },
    "ppe": [
      "산소농도측정기",
      "공기호흡기"
    ],
    "cautions": [
      "저지대 체류 가능"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 38,
    "nameKo": "산소",
    "nameEn": "Oxygen",
    "formula": "O2",
    "cas": "7782-44-7",
    "aliases": [
      "O2",
      "산소"
    ],
    "process": "Utility",
    "state": "무색 기체",
    "stateCategory": "중성 가스",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "⭕ 산화성",
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (산화성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 0,
      "flammability": 0,
      "instability": 0,
      "special": "OX",
      "code": "H0 F0 I0 OX"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "해당 없음",
        "source": "-"
      },
      "stel": {
        "value": "해당 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "해당 없음",
        "source": "-"
      },
      "idlh": {
        "value": "해당 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "공기보다 약간 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-183°C",
      "flashPoint": "산화성"
    },
    "flammability": {
      "flashPoint": "산화성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "연소 촉진",
      "산소농도 증가 시 화재 위험 급증"
    ],
    "waterReactivity": {
      "hazards": [
        "반응성 낮음"
      ],
      "decon": [
        "차단 및 환기 우선"
      ]
    },
    "incompatible": [
      "가연물",
      "유류"
    ],
    "neutralization": {
      "direction": [
        "산소농도 저감 우선"
      ],
      "waterUse": "일반적 사용 가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "중화 대상 아님"
    },
    "ppe": [
      "방염 보호구"
    ],
    "cautions": [
      "산소농도 상승 시 화재폭발 위험 증가"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 39,
    "nameKo": "이산화탄소",
    "nameEn": "Carbon Dioxide",
    "formula": "CO2",
    "cas": "124-38-9",
    "aliases": [
      "CO2",
      "이산화탄소"
    ],
    "process": "소화설비 / Utility",
    "state": "무색 기체",
    "stateCategory": "약산성 유도 가스",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 약산성 가능 (고농도 질식 위험)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 0,
      "instability": 0,
      "special": "SA",
      "code": "H2 F0 I0 SA"
    },
    "odor": {
      "profile": "무취 (고농도 흡입 시 코끝이 찡한 탄산수 느낌의 자극)",
      "keywords": "무취, 코찡함, 탄산취, 고농도자극",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "5000 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "30000 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "40000 ppm",
        "source": "NIOSH"
      },
      "idlh": {
        "value": "40000 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-78°C (승화)",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "산소결핍",
      "저지대 체류 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물에 녹아 약산성 가능"
      ],
      "decon": [
        "환기 우선"
      ]
    },
    "incompatible": [],
    "neutralization": {
      "direction": [
        "환기 및 산소농도 확보"
      ],
      "waterUse": "효과 제한적",
      "waterUseJudge": "가능",
      "neutralizerNeed": "중화 대상 아님"
    },
    "ppe": [
      "공기호흡기"
    ],
    "cautions": [
      "밀폐공간 질식 위험"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 40,
    "nameKo": "일산화탄소",
    "nameEn": "Carbon Monoxide",
    "formula": "CO",
    "cas": "630-08-0",
    "aliases": [
      "CO",
      "일산화탄소"
    ],
    "process": "연소 / Utility",
    "state": "무색 기체",
    "stateCategory": "중성 가스",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🔥 인화성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 해당 없음 (혈액 독성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 4,
      "instability": 0,
      "special": "",
      "code": "H3 F4 I0"
    },
    "odor": {
      "profile": "완벽한 무취, 무색 (자각 증상 없는 죽음의 가스취)",
      "keywords": "무취, 무색무취, 자각증상없음, 극독성질식",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "25 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "200 ppm",
        "source": "대표 참고값"
      },
      "ceiling": {
        "value": "200 ppm",
        "source": "NIOSH"
      },
      "idlh": {
        "value": "1200 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 약간 가벼움",
      "vaporPressure": "가스",
      "boilingPoint": "-191°C",
      "flashPoint": "가연성"
    },
    "flammability": {
      "flashPoint": "가연성",
      "autoIgnition": "609°C",
      "lel": "12.5%",
      "uel": "74%"
    },
    "mainHazards": [
      "헤모글로빈 결합 독성",
      "무취·무색",
      "가연성"
    ],
    "waterReactivity": {
      "hazards": [
        "반응성 낮음"
      ],
      "decon": [
        "환기 및 차단 우선"
      ]
    },
    "incompatible": [
      "산화제",
      "점화원"
    ],
    "neutralization": {
      "direction": [
        "환기 및 연소 차단"
      ],
      "waterUse": "효과 제한적",
      "waterUseJudge": "확인 필요",
      "neutralizerNeed": "중화 대상 아님"
    },
    "ppe": [
      "공기호흡기",
      "CO 측정기"
    ],
    "cautions": [
      "무취라 감지 어려움"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 41,
    "nameKo": "황화수소",
    "nameEn": "Hydrogen Sulfide",
    "formula": "H2S",
    "cas": "7783-06-4",
    "aliases": [
      "H2S",
      "황화수소"
    ],
    "process": "폐수 / Utility",
    "state": "무색 기체",
    "stateCategory": "무기 가스 / 약산성",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🔥 인화성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "가스: 약산성 가능 (고독성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-",
      "code": "H4 F4 I0"
    },
    "odor": {
      "profile": "구린내, 썩은 달걀 냄새 (고농도 시 후각 마비로 무취 인지 주의)",
      "keywords": "구린내, 썩은달걀, 똥냄새, 후각마비주의",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "1 ppm",
        "source": "ACGIH"
      },
      "stel": {
        "value": "5 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "10 ppm",
        "source": "NIOSH"
      },
      "idlh": {
        "value": "100 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-60°C",
      "flashPoint": "가연성"
    },
    "flammability": {
      "flashPoint": "가연성",
      "autoIgnition": "260°C",
      "lel": "4%",
      "uel": "44%"
    },
    "mainHazards": [
      "후각 마비 가능",
      "고독성",
      "저지대 체류"
    ],
    "waterReactivity": {
      "hazards": [
        "산성 조건 발생 가능"
      ],
      "decon": [
        "환기·차단 우선"
      ]
    },
    "incompatible": [
      "산화제"
    ],
    "neutralization": {
      "direction": [
        "가스 차단 및 스크러빙"
      ],
      "waterUse": "일부 가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "전용 처리 검토"
    },
    "ppe": [
      "공기호흡기",
      "H2S 측정기"
    ],
    "cautions": [
      "냄새 사라져도 안전 의미 아님"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 42,
    "nameKo": "이산화황",
    "nameEn": "Sulfur Dioxide",
    "formula": "SO2",
    "cas": "7446-09-5",
    "aliases": [
      "SO2",
      "이산화황"
    ],
    "process": "연소 / Utility",
    "state": "무색 기체",
    "stateCategory": "산성 유도 가스",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "수분 접촉: 산성 (자극성 가스)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-",
      "code": "H3 F0 I0"
    },
    "odor": {
      "profile": "성냥 탈 때 나는 매캐하고 찔러대는 불쾌한 황 자극취",
      "keywords": "성냥탄냄새, 황자극취, 불쾌취, 매캐한냄새",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "2 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "5 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "5 ppm",
        "source": "NIOSH"
      },
      "idlh": {
        "value": "100 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "공기보다 무거움",
      "vaporPressure": "가스",
      "boilingPoint": "-10°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "호흡기 자극",
      "산성 가스",
      "저지대 체류 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 반응해 산성화 가능"
      ],
      "decon": [
        "환기 및 물 세척 가능"
      ]
    },
    "incompatible": [
      "산화제"
    ],
    "neutralization": {
      "direction": [
        "알칼리 흡수 검토"
      ],
      "waterUse": "물 사용 가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "알칼리 중화 검토"
    },
    "ppe": [
      "공기호흡기",
      "내산 장갑"
    ],
    "cautions": [
      "저지대 체류 가능"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 43,
    "nameKo": "붕산",
    "nameEn": "Boric Acid",
    "formula": "H3BO3",
    "cas": "10043-35-3",
    "aliases": [
      "붕산",
      "Boric Acid"
    ],
    "process": "폐수 / 화학처리",
    "state": "백색 고체",
    "stateCategory": "약산성",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 약산성 (저농도 자극 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 1,
      "flammability": 0,
      "instability": 0,
      "special": "",
      "code": "H1 F0 I0"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "10 mg/m³",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.43 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "분진 자극 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "수용성"
      ],
      "decon": [
        "물 세척 가능"
      ]
    },
    "incompatible": [
      "강염기"
    ],
    "neutralization": {
      "direction": [
        "일반 희석 및 세척"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "보안경",
      "장갑"
    ],
    "cautions": [
      "분진 흡입 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 44,
    "nameKo": "불화수소암모늄",
    "nameEn": "Ammonium Bifluoride",
    "formula": "NH4HF2",
    "cas": "1341-49-7",
    "aliases": [
      "ABF",
      "불화수소암모늄"
    ],
    "process": "Etch / 세정",
    "state": "백색 고체",
    "stateCategory": "산성",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 산성 (HF 생성 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 1,
      "special": "",
      "code": "H3 F0 I1"
    },
    "odor": {
      "profile": "약간의 매캐한 불산 자극취 및 암모니아 혼합취",
      "keywords": "불산취, 암모니아취, 혼합자극취, 매캐한냄새",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "2.5 mg/m³",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "5 mg/m³",
        "source": "대표 SDS 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "1.5 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "HF 유사 위험성",
      "피부 침투 독성 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물에 용해됨"
      ],
      "decon": [
        "대량 물 세척 가능"
      ]
    },
    "incompatible": [
      "강산",
      "금속"
    ],
    "neutralization": {
      "direction": [
        "칼슘계 중화 검토"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "불소계 중화 검토"
    },
    "ppe": [
      "공기호흡기",
      "내산 장갑"
    ],
    "cautions": [
      "HF 대응 수준 고려"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": true,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 45,
    "nameKo": "인산",
    "nameEn": "Phosphoric Acid",
    "formula": "H3PO4",
    "cas": "7664-38-2",
    "aliases": [
      "인산",
      "H3PO4"
    ],
    "process": "세정 / Etch",
    "state": "무색 액체",
    "stateCategory": "강산성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "85%: 강산성 (부식성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 0,
      "special": "",
      "code": "H3 F0 I0"
    },
    "odor": {
      "profile": "상온에서 무취 (분무되거나 흄 발생 시 약간의 자극취)",
      "keywords": "무취, 흄발생시자극취",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "1 mg/m³",
        "source": "OSHA"
      },
      "stel": {
        "value": "3 mg/m³",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "3 mg/m³",
        "source": "NIOSH"
      },
      "idlh": {
        "value": "1000 mg/m³",
        "source": "대표 참고값"
      }
    },
    "physical": {
      "density": "1.88 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "158°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "부식성",
      "산 미스트 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "희석 시 발열 가능"
      ],
      "decon": [
        "물 세척 가능"
      ]
    },
    "incompatible": [
      "강염기"
    ],
    "neutralization": {
      "direction": [
        "알칼리 중화 검토"
      ],
      "waterUse": "가능",
      "waterUseJudge": "주의",
      "neutralizerNeed": "중화 가능"
    },
    "ppe": [
      "내산 장갑",
      "보안면"
    ],
    "cautions": [
      "산 미스트 흡입 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 46,
    "nameKo": "초산",
    "nameEn": "Acetic Acid",
    "formula": "CH3COOH",
    "cas": "64-19-7",
    "aliases": [
      "초산",
      "빙초산"
    ],
    "process": "세정 / 화학공정",
    "state": "무색 액체",
    "stateCategory": "유기산 / 약산성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "빙초산: 강산성 (자극성 증기)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 2,
      "instability": 0,
      "special": "",
      "code": "H3 F2 I0"
    },
    "odor": {
      "profile": "강력하고 시큼한 식초 고유의 자극취",
      "keywords": "식초냄새, 시큼한냄새, 자극취",
      "volatilityGrade": "",
      "warningType": "후각 조기선행형 (독성농도 도달 전 후각인지 가능)"
    },
    "exposure": {
      "twa": {
        "value": "10 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "15 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "50 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "1.05 g/cm³",
      "vaporPressure": "11 mmHg",
      "boilingPoint": "118°C",
      "flashPoint": "39°C"
    },
    "flammability": {
      "flashPoint": "39°C",
      "autoIgnition": "427°C",
      "lel": "4%",
      "uel": "19%"
    },
    "mainHazards": [
      "자극성 증기",
      "인화성"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 가능"
      ],
      "decon": [
        "흡착 후 물 세척"
      ]
    },
    "incompatible": [
      "산화제"
    ],
    "neutralization": {
      "direction": [
        "알칼리 중화 가능"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "중화 가능"
    },
    "ppe": [
      "유기증기용 호흡보호구",
      "보안면"
    ],
    "cautions": [
      "증기 흡입 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 47,
    "nameKo": "과불화암모늄",
    "nameEn": "Ammonium Fluoride Mixture",
    "formula": "NH4F 계열",
    "cas": "혼합물",
    "aliases": [
      "BOE",
      "Buffered Oxide Etch"
    ],
    "process": "Etch",
    "state": "액체",
    "stateCategory": "혼합물 / 자료 확인 필요",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "BOE: 산성 (HF 포함 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-",
      "code": "H2 F0 I1"
    },
    "odor": {
      "profile": "약간의 매캐한 불소계 특이취",
      "keywords": "불소계특이취, 매캐한냄새",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "HF 기준 적용 검토",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "HF 기준 적용 검토",
        "source": "대표 SDS 참고값"
      },
      "ceiling": {
        "value": "HF 기준 적용 검토",
        "source": "대표 SDS 참고값"
      },
      "idlh": {
        "value": "HF 기준 적용 검토",
        "source": "대표 SDS 참고값"
      }
    },
    "physical": {
      "density": "제품별 상이",
      "vaporPressure": "제품별 상이",
      "boilingPoint": "제품별 상이",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "HF 계열 위험성",
      "피부 침투 독성 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "수용성"
      ],
      "decon": [
        "대량 물 세척 가능"
      ]
    },
    "incompatible": [
      "강염기"
    ],
    "neutralization": {
      "direction": [
        "칼슘계 중화 검토"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "불소계 중화 검토"
    },
    "ppe": [
      "공기호흡기",
      "내산 장갑"
    ],
    "cautions": [
      "HF 대응 수준 고려"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 48,
    "nameKo": "크실렌",
    "nameEn": "Xylene",
    "formula": "C8H10",
    "cas": "1330-20-7",
    "aliases": [
      "Xylene",
      "자일렌"
    ],
    "process": "용제 / 세정",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성",
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 (유기용제)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 3,
      "instability": 0,
      "special": "",
      "code": "H2 F3 I0"
    },
    "odor": {
      "profile": "달콤한 듯하면서도 톡 쏘는 강한 휘발유/페인트 시너 냄새",
      "keywords": "휘발유냄새, 페인트냄새, 시너냄새, 달콤한석유취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "100 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "150 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "900 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "0.86 g/cm³",
      "vaporPressure": "8 mmHg",
      "boilingPoint": "138°C",
      "flashPoint": "27°C"
    },
    "flammability": {
      "flashPoint": "27°C",
      "autoIgnition": "465°C",
      "lel": "1%",
      "uel": "7%"
    },
    "mainHazards": [
      "인화성",
      "중추신경계 영향 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물에 잘 안녹음"
      ],
      "decon": [
        "흡착·환기 우선"
      ]
    },
    "incompatible": [
      "산화제",
      "점화원"
    ],
    "neutralization": {
      "direction": [
        "흡착·회수 우선"
      ],
      "waterUse": "확산 가능성 고려",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 대상 아님"
    },
    "ppe": [
      "유기증기용 호흡보호구",
      "방염 보호구"
    ],
    "cautions": [
      "정전기 점화 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 49,
    "nameKo": "황화나트륨",
    "nameEn": "Sodium Sulfide",
    "formula": "Na2S",
    "cas": "1313-82-2",
    "aliases": [
      "Na2S",
      "황화소다"
    ],
    "process": "폐수 / 중금속 처리",
    "state": "황색 고체",
    "stateCategory": "강염기성",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 강염기성 (산 접촉 시 H2S 발생 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 1,
      "instability": 1,
      "special": "",
      "code": "H3 F1 I1"
    },
    "odor": {
      "profile": "썩은 달걀 냄새 (습기나 산과 반응 시 황화수소 방출)",
      "keywords": "썩은달걀, 황화수소취, 습기반응",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "H2S 기준 적용 검토",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "H2S 기준 적용 검토",
        "source": "대표 SDS 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "H2S 기준 검토",
        "source": "NIOSH 참고"
      }
    },
    "physical": {
      "density": "1.86 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "H2S 발생 시 적용",
      "uel": "H2S 발생 시 적용"
    },
    "mainHazards": [
      "산 접촉 시 H2S 발생 가능",
      "부식성",
      "중금속 침전제"
    ],
    "waterReactivity": {
      "hazards": [
        "산 혼합 시 황화수소 발생 가능"
      ],
      "decon": [
        "환기 및 산 분리 우선"
      ]
    },
    "incompatible": [
      "산",
      "산화제"
    ],
    "neutralization": {
      "direction": [
        "산 접촉 차단 우선"
      ],
      "waterUse": "가능하나 H2S 발생 주의",
      "waterUseJudge": "주의",
      "neutralizerNeed": "산 혼합 금지"
    },
    "ppe": [
      "공기호흡기",
      "내화학 장갑"
    ],
    "cautions": [
      "산 접촉 절대 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 50,
    "nameKo": "황산제일철",
    "nameEn": "Ferrous Sulfate",
    "formula": "FeSO4",
    "cas": "7720-78-7",
    "aliases": [
      "FeSO4",
      "황산철"
    ],
    "process": "폐수 / Cr 환원",
    "state": "녹색 고체",
    "stateCategory": "약산성염",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 약산성 (환원제 역할)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 0,
      "instability": 0,
      "special": "",
      "code": "H2 F0 I0"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "1 mg/m³",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.9 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "분진 자극 가능",
      "폐수 환원제"
    ],
    "waterReactivity": {
      "hazards": [
        "수용성"
      ],
      "decon": [
        "물 세척 가능"
      ]
    },
    "incompatible": [
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "일반 희석 및 세척"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "보안경",
      "장갑"
    ],
    "cautions": [
      "분진 흡입 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 51,
    "nameKo": "염화제이철",
    "nameEn": "Ferric Chloride",
    "formula": "FeCl3",
    "cas": "7705-08-0",
    "aliases": [
      "FeCl3",
      "염화철"
    ],
    "process": "폐수 / 응집",
    "state": "갈색 액체",
    "stateCategory": "강산성염",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 강산성 (부식성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 0,
      "special": "",
      "code": "H3 F0 I0"
    },
    "odor": {
      "profile": "약간의 메마른 철 냄새 또는 약한 염산 취",
      "keywords": "철냄새, 약한염산취, 메마른취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "1 mg/m³",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "2 mg/m³",
        "source": "대표 SDS 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.4 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강한 부식성",
      "응집제"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 혼합 시 산성"
      ],
      "decon": [
        "대량 물 세척 가능"
      ]
    },
    "incompatible": [
      "강염기",
      "금속"
    ],
    "neutralization": {
      "direction": [
        "알칼리 중화 가능"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "중화 가능"
    },
    "ppe": [
      "내산 장갑",
      "보안면"
    ],
    "cautions": [
      "금속 부식 가능"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 52,
    "nameKo": "수산화칼슘",
    "nameEn": "Calcium Hydroxide",
    "formula": "Ca(OH)2",
    "cas": "1305-62-0",
    "aliases": [
      "소석회",
      "CaOH"
    ],
    "process": "폐수 / 중화",
    "state": "백색 분말",
    "stateCategory": "염기성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "포화용액: 강염기성 (중화제)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 0,
      "instability": 0,
      "special": "",
      "code": "H2 F0 I0"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "5 mg/m³",
        "source": "OSHA 대표값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "15 mg/m³",
        "source": "대표 참고값"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "2.2 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강염기성",
      "분진 자극"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 시 발열 가능"
      ],
      "decon": [
        "물 세척 가능"
      ]
    },
    "incompatible": [
      "산"
    ],
    "neutralization": {
      "direction": [
        "산성 폐수 중화"
      ],
      "waterUse": "가능",
      "waterUseJudge": "주의",
      "neutralizerNeed": "대표 중화제"
    },
    "ppe": [
      "방진마스크",
      "보안경"
    ],
    "cautions": [
      "분진 흡입 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 53,
    "nameKo": "EDTA",
    "nameEn": "Ethylenediaminetetraacetic Acid",
    "formula": "C10H16N2O8",
    "cas": "60-00-4",
    "aliases": [
      "EDTA",
      "킬레이트제"
    ],
    "process": "수처리 / 금속 제거",
    "state": "백색 분말",
    "stateCategory": "유기화합물 / 약산성",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 약산성 (금속 킬레이트)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 1,
      "instability": 0,
      "special": "",
      "code": "H2 F1 I0"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음",
        "source": "-"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "0.8 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "금속 이온 킬레이트",
      "분진 자극 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "수용성"
      ],
      "decon": [
        "물 세척 가능"
      ]
    },
    "incompatible": [
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "일반 희석 및 세척"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "보안경",
      "장갑"
    ],
    "cautions": [
      "분진 흡입 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 54,
    "nameKo": "과망간산칼륨",
    "nameEn": "Potassium Permanganate",
    "formula": "KMnO4",
    "cas": "7722-64-7",
    "aliases": [
      "KMnO4"
    ],
    "process": "Scrubber / 산화처리",
    "state": "보라색 고체",
    "stateCategory": "무기염 / 중성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "⭕ 산화성",
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 중성 부근 (강산화성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 1,
      "flammability": 0,
      "instability": 0,
      "special": "OX",
      "code": "H1 F0 I0 OX"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "0.2 mg/m³",
        "source": "OSHA 대표값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "0.2 mg/m³",
        "source": "NIOSH 참고"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "2.7 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "산화성"
    },
    "flammability": {
      "flashPoint": "산화성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강산화성",
      "유기물 반응 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "수용성"
      ],
      "decon": [
        "오염 제거 후 세척"
      ]
    },
    "incompatible": [
      "유기물",
      "환원제"
    ],
    "neutralization": {
      "direction": [
        "환원 처리 검토"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "산화성 관리 필요"
    },
    "ppe": [
      "보안면",
      "내화학 장갑"
    ],
    "cautions": [
      "유기물 접촉 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 55,
    "nameKo": "차아황산나트륨",
    "nameEn": "Sodium Bisulfite",
    "formula": "NaHSO3",
    "cas": "7631-90-5",
    "aliases": [
      "중아황산나트륨",
      "NaHSO3"
    ],
    "process": "UPW / 잔류염소 제거",
    "state": "백색 분말",
    "stateCategory": "약산성염",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 약산성 (환원제)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 0,
      "instability": 0,
      "special": "",
      "code": "H2 F0 I0"
    },
    "odor": {
      "profile": "성냥 탈 때 나는 듯한 자극적인 이산화황/황화 취",
      "keywords": "성냥탄냄새, 이산화황취, 황화취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "5 mg/m³",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.5 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "SO2 발생 가능",
      "환원제"
    ],
    "waterReactivity": {
      "hazards": [
        "산 접촉 시 SO2 발생 가능"
      ],
      "decon": [
        "환기 및 세척"
      ]
    },
    "incompatible": [
      "산화제",
      "산"
    ],
    "neutralization": {
      "direction": [
        "산 접촉 차단"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "보안경",
      "장갑"
    ],
    "cautions": [
      "산 혼합 시 SO2 발생 가능"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 56,
    "nameKo": "활성탄 슬러리",
    "nameEn": "Activated Carbon Slurry",
    "formula": "혼합물",
    "cas": "혼합물",
    "aliases": [
      "활성탄"
    ],
    "process": "VOC 제거 / Scrubber",
    "state": "검정 슬러리",
    "stateCategory": "혼합물 / 자료 확인 필요",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "슬러리: 중성 부근 (흡착제)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-",
      "code": "H1 F1 I0"
    },
    "odor": {
      "profile": "무취 또는 미미한 숯/흙 냄새",
      "keywords": "무취, 숯냄새, 흙냄새",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "분진 기준 적용",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "혼합물",
      "vaporPressure": "낮음",
      "boilingPoint": "해당 없음",
      "flashPoint": "분진 주의"
    },
    "flammability": {
      "flashPoint": "분진 주의",
      "autoIgnition": "제품별 상이",
      "lel": "분진 조건",
      "uel": "분진 조건"
    },
    "mainHazards": [
      "분진 폭발 가능",
      "흡착 포화 시 발열 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "슬러리 형태 사용"
      ],
      "decon": [
        "흡착 및 회수"
      ]
    },
    "incompatible": [
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "회수 및 폐기"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "방진마스크",
      "보안경"
    ],
    "cautions": [
      "건조 분진 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 57,
    "nameKo": "리튬브로마이드",
    "nameEn": "Lithium Bromide",
    "formula": "LiBr",
    "cas": "7550-35-8",
    "aliases": [
      "LiBr"
    ],
    "process": "흡수식 냉동기",
    "state": "무색 용액",
    "stateCategory": "무기염 / 중성",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 중성 부근 (흡수식 냉동기 사용)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 0,
      "instability": 0,
      "special": "",
      "code": "H2 F0 I0"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음",
        "source": "-"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.6 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "1265°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "흡수식 냉동기 사용",
      "누출 시 미끄럼 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "수용성"
      ],
      "decon": [
        "물 세척 가능"
      ]
    },
    "incompatible": [
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "희석 및 회수"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "보안경",
      "장갑"
    ],
    "cautions": [
      "대량 누출 시 미끄럼 위험"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 58,
    "nameKo": "R-123",
    "nameEn": "HCFC-123",
    "formula": "C2HCl2F3",
    "cas": "306-83-2",
    "aliases": [
      "R123",
      "HCFC-123"
    ],
    "process": "터보냉동기",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "냉매: 해당 없음 (밀폐공간 질식 위험)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 1,
      "instability": 0,
      "special": "",
      "code": "H2 F1 I0"
    },
    "odor": {
      "profile": "약간의 에테르와 유사한 달콤하고 희미한 클로로포름 냄새",
      "keywords": "에테르취, 클로로포름냄새, 달콤한향",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "50 ppm",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "1000 ppm",
        "source": "대표 참고값"
      }
    },
    "physical": {
      "density": "1.46 g/cm³",
      "vaporPressure": "높음",
      "boilingPoint": "27°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "산소결핍 가능",
      "고온 분해 시 유독가스 생성 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "반응성 낮음"
      ],
      "decon": [
        "환기 우선"
      ]
    },
    "incompatible": [
      "고온",
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "누출 차단 및 환기"
      ],
      "waterUse": "효과 제한적",
      "waterUseJudge": "확인 필요",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "공기호흡기"
    ],
    "cautions": [
      "밀폐공간 질식 위험"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 59,
    "nameKo": "R-134a",
    "nameEn": "HFC-134a",
    "formula": "C2H2F4",
    "cas": "811-97-2",
    "aliases": [
      "R134a"
    ],
    "process": "냉동기 / 공조",
    "state": "무색 액체 또는 기체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "냉매: 해당 없음 (질식 위험 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 1,
      "flammability": 1,
      "instability": 0,
      "special": "",
      "code": "H1 F1 I0"
    },
    "odor": {
      "profile": "거의 무취 또는 희미한 에테르 계열의 달콤한 향",
      "keywords": "무취, 에테르향, 달콤한향, 희미한유기취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "1000 ppm",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "1250 ppm",
        "source": "대표 SDS 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.2 g/cm³",
      "vaporPressure": "높음",
      "boilingPoint": "-26°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "산소결핍 가능",
      "고온 분해 시 HF 생성 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "반응성 낮음"
      ],
      "decon": [
        "환기 우선"
      ]
    },
    "incompatible": [
      "고온",
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "환기 및 차단"
      ],
      "waterUse": "효과 제한적",
      "waterUseJudge": "확인 필요",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "공기호흡기"
    ],
    "cautions": [
      "고온 분해 시 HF 가능"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": true,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 60,
    "nameKo": "R-410A",
    "nameEn": "R-410A",
    "formula": "혼합냉매",
    "cas": "혼합물",
    "aliases": [
      "R410A"
    ],
    "process": "공조",
    "state": "무색 액체 또는 기체",
    "stateCategory": "혼합물 / 자료 확인 필요",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "🧯 가스실린더"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "냉매: 해당 없음 (질식 위험 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-",
      "code": "H1 F0 I0"
    },
    "odor": {
      "profile": "거의 무취 또는 약간의 희미한 유기 가스 향",
      "keywords": "무취, 희미한유기취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "1000 ppm",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "1250 ppm",
        "source": "대표 SDS 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.1 g/cm³",
      "vaporPressure": "매우 높음",
      "boilingPoint": "-48°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "산소결핍 가능",
      "고압 냉매"
    ],
    "waterReactivity": {
      "hazards": [
        "반응성 낮음"
      ],
      "decon": [
        "환기 우선"
      ]
    },
    "incompatible": [
      "고온"
    ],
    "neutralization": {
      "direction": [
        "누출 차단 및 환기"
      ],
      "waterUse": "효과 제한적",
      "waterUseJudge": "확인 필요",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "공기호흡기"
    ],
    "cautions": [
      "고압 분출 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 61,
    "nameKo": "염화나트륨",
    "nameEn": "Sodium Chloride",
    "formula": "NaCl",
    "cas": "7647-14-5",
    "aliases": [
      "소금",
      "NaCl"
    ],
    "process": "UPW 재생",
    "state": "백색 고체",
    "stateCategory": "무기염 / 중성",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 중성 (재생용 염수)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 1,
      "flammability": 0,
      "instability": 0,
      "special": "",
      "code": "H1 F0 I0"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "10 mg/m³",
        "source": "분진 기준 참고"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "2.16 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "1413°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "분진 자극 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "수용성"
      ],
      "decon": [
        "물 세척 가능"
      ]
    },
    "incompatible": [],
    "neutralization": {
      "direction": [
        "일반 세척"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "불필요"
    },
    "ppe": [
      "보안경"
    ],
    "cautions": [
      "바닥 미끄럼 가능"
    ],
    "flags": {
      "lowArea": true,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 62,
    "nameKo": "황산나트륨",
    "nameEn": "Sodium Sulfate",
    "formula": "Na2SO4",
    "cas": "7757-82-6",
    "aliases": [
      "Na2SO4"
    ],
    "process": "수처리 / 재생",
    "state": "백색 고체",
    "stateCategory": "무기염 / 중성",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 중성 (수처리용)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 1,
      "flammability": 0,
      "instability": 0,
      "special": "",
      "code": "H1 F0 I0"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "10 mg/m³",
        "source": "분진 기준 참고"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "2.66 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "분진 자극 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "수용성"
      ],
      "decon": [
        "물 세척 가능"
      ]
    },
    "incompatible": [],
    "neutralization": {
      "direction": [
        "일반 세척"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "불필요"
    },
    "ppe": [
      "보안경"
    ],
    "cautions": [
      "분진 흡입 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 63,
    "nameKo": "구연산",
    "nameEn": "Citric Acid",
    "formula": "C6H8O7",
    "cas": "77-92-9",
    "aliases": [
      "Citric Acid"
    ],
    "process": "세정 / 수처리",
    "state": "백색 고체",
    "stateCategory": "유기산 / 약산성",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 산성 (유기산)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 1,
      "instability": 0,
      "special": "",
      "code": "H2 F1 I0"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "10 mg/m³",
        "source": "분진 기준 참고"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.66 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "눈 자극 가능",
      "약산성"
    ],
    "waterReactivity": {
      "hazards": [
        "수용성"
      ],
      "decon": [
        "물 세척 가능"
      ]
    },
    "incompatible": [
      "강염기"
    ],
    "neutralization": {
      "direction": [
        "알칼리 중화 가능"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 가능"
    },
    "ppe": [
      "보안경",
      "장갑"
    ],
    "cautions": [
      "분진 흡입 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 64,
    "nameKo": "질산암모늄",
    "nameEn": "Ammonium Nitrate",
    "formula": "NH4NO3",
    "cas": "6484-52-2",
    "aliases": [
      "질산암모늄"
    ],
    "process": "화학처리 / 산화성",
    "state": "백색 고체",
    "stateCategory": "무기염 / 약산성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "⭕ 산화성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 약산성 (산화성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 0,
      "instability": 3,
      "special": "OX",
      "code": "H2 F0 I3 OX"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "10 mg/m³",
        "source": "대표 참고값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.72 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "산화성"
    },
    "flammability": {
      "flashPoint": "산화성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강산화성",
      "고온 분해 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "수용성"
      ],
      "decon": [
        "물 냉각 가능"
      ]
    },
    "incompatible": [
      "유기물",
      "가연물"
    ],
    "neutralization": {
      "direction": [
        "냉각 및 격리"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "산화성 관리 우선"
    },
    "ppe": [
      "보안경",
      "방진마스크"
    ],
    "cautions": [
      "가연물 접촉 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 65,
    "nameKo": "수산화암모늄",
    "nameEn": "Ammonium Hydroxide",
    "formula": "NH4OH",
    "cas": "1336-21-6",
    "aliases": [
      "암모니아수"
    ],
    "process": "세정 / 폐수",
    "state": "무색 액체",
    "stateCategory": "염기성",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "25%: 강염기성 (강한 암모니아 냄새)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 1,
      "instability": 0,
      "special": "",
      "code": "H3 F1 I0"
    },
    "odor": {
      "profile": "찌르는 듯한 강력한 암모니아 자극취",
      "keywords": "암모니아취, 찌르는냄새, 소변냄새, 자극취",
      "volatilityGrade": "",
      "warningType": "후각 조기선행형 (독성농도 도달 전 후각인지 가능)"
    },
    "exposure": {
      "twa": {
        "value": "25 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "35 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "50 ppm",
        "source": "NIOSH"
      },
      "idlh": {
        "value": "300 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "0.9 g/cm³",
      "vaporPressure": "높음",
      "boilingPoint": "38°C",
      "flashPoint": "가연성 가능"
    },
    "flammability": {
      "flashPoint": "가연성 가능",
      "autoIgnition": "651°C",
      "lel": "15%",
      "uel": "28%"
    },
    "mainHazards": [
      "강한 호흡기 자극",
      "부식성"
    ],
    "waterReactivity": {
      "hazards": [
        "수용성"
      ],
      "decon": [
        "대량 물 세척 가능"
      ]
    },
    "incompatible": [
      "산",
      "염소"
    ],
    "neutralization": {
      "direction": [
        "산성 중화 검토"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "산 접촉 주의"
    },
    "ppe": [
      "공기호흡기",
      "내화학 장갑"
    ],
    "cautions": [
      "고농도 흡입 위험"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 66,
    "nameKo": "폴리염화비닐 접착제",
    "nameEn": "PVC Cement",
    "formula": "혼합물",
    "cas": "혼합물",
    "aliases": [
      "PVC 본드"
    ],
    "process": "배관 작업",
    "state": "무색 액체",
    "stateCategory": "혼합물 / 자료 확인 필요",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성",
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 (유기용제 포함)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-",
      "code": "H2 F3 I0"
    },
    "odor": {
      "profile": "강렬하고 톡 쏘는 아세톤 및 THF 혼합 유기용제 냄새",
      "keywords": "아세톤냄새, THF냄새, 유기용제취, 톡쏘는냄새",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "THF 기준 적용 가능",
        "source": "대표 SDS 참고값"
      },
      "stel": {
        "value": "THF 기준 적용 가능",
        "source": "대표 SDS 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "0.9 g/cm³",
      "vaporPressure": "높음",
      "boilingPoint": "혼합물",
      "flashPoint": "-10°C 이하"
    },
    "flammability": {
      "flashPoint": "-10°C 이하",
      "autoIgnition": "제품별 상이",
      "lel": "제품별 상이",
      "uel": "제품별 상이"
    },
    "mainHazards": [
      "고인화성",
      "유기용제 증기"
    ],
    "waterReactivity": {
      "hazards": [
        "물반응성 낮음"
      ],
      "decon": [
        "흡착 및 환기"
      ]
    },
    "incompatible": [
      "산화제",
      "점화원"
    ],
    "neutralization": {
      "direction": [
        "흡착 및 회수"
      ],
      "waterUse": "확산 가능성 고려",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "유기증기용 호흡보호구",
      "방염 보호구"
    ],
    "cautions": [
      "밀폐공간 증기 축적 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 67,
    "nameKo": "테트라하이드로푸란",
    "nameEn": "Tetrahydrofuran",
    "formula": "C4H8O",
    "cas": "109-99-9",
    "aliases": [
      "THF"
    ],
    "process": "용제 / PVC 작업",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "🔥 인화성",
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 (과산화물 생성 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 3,
      "instability": 1,
      "special": "",
      "code": "H2 F3 I1"
    },
    "odor": {
      "profile": "에테르와 유사한 톡 쏘는 강렬한 과일 향 및 용제 취",
      "keywords": "에테르취, 과일향, 톡쏘는냄새, 유기용제취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "200 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "250 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "2000 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "0.89 g/cm³",
      "vaporPressure": "143 mmHg",
      "boilingPoint": "66°C",
      "flashPoint": "-17°C"
    },
    "flammability": {
      "flashPoint": "-17°C",
      "autoIgnition": "321°C",
      "lel": "2%",
      "uel": "12%"
    },
    "mainHazards": [
      "고인화성",
      "과산화물 생성 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 가능"
      ],
      "decon": [
        "흡착 및 환기"
      ]
    },
    "incompatible": [
      "산화제",
      "점화원"
    ],
    "neutralization": {
      "direction": [
        "흡착 및 회수"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "유기증기용 호흡보호구",
      "방염 보호구"
    ],
    "cautions": [
      "장기 보관 시 과산화물 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 78,
    "nameKo": "과초산",
    "nameEn": "Peracetic Acid",
    "formula": "C2H4O3",
    "cas": "79-21-0",
    "aliases": [
      "PAA",
      "과초산"
    ],
    "process": "살균 / 폐수",
    "state": "무색 액체",
    "stateCategory": "혼합물 / 자료 확인 필요",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "⭕ 산화성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "15%: 강산성 (강산화성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-",
      "code": "H3 F2 I4 OX"
    },
    "odor": {
      "profile": "식초보다 훨씬 강렬하고 찔러대는 부식성 신취",
      "keywords": "식초냄새, 강력한신취, 부식성자극취",
      "volatilityGrade": "",
      "warningType": "후각 조기선행형 (독성농도 도달 전 후각인지 가능)"
    },
    "exposure": {
      "twa": {
        "value": "0.4 ppm",
        "source": "ACGIH 참고값"
      },
      "stel": {
        "value": "1 ppm",
        "source": "대표 참고값"
      },
      "ceiling": {
        "value": "0.4 ppm",
        "source": "NIOSH 참고"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "1.1 g/cm³",
      "vaporPressure": "14 mmHg",
      "boilingPoint": "분해 가능",
      "flashPoint": "산화성"
    },
    "flammability": {
      "flashPoint": "산화성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강산화성",
      "유기물 반응 가능",
      "부식성"
    ],
    "waterReactivity": {
      "hazards": [
        "분해 및 산화 반응 가능"
      ],
      "decon": [
        "희석 및 냉각"
      ]
    },
    "incompatible": [
      "유기물",
      "금속",
      "환원제"
    ],
    "neutralization": {
      "direction": [
        "희석 및 분해 관리"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "산화성 관리 필요"
    },
    "ppe": [
      "공기호흡기",
      "보안면"
    ],
    "cautions": [
      "밀폐 시 압력 상승 가능"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 69,
    "nameKo": "포름알데히드",
    "nameEn": "Formaldehyde",
    "formula": "CH2O",
    "cas": "50-00-0",
    "aliases": [
      "Formalin",
      "포르말린"
    ],
    "process": "살균 / 분석",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🔥 인화성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "37%: 약산성 (강한 자극성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 4,
      "instability": 0,
      "special": "",
      "code": "H3 F4 I0"
    },
    "odor": {
      "profile": "자극적이고 눈물이 핑 도는 특유의 메케한 박제/방부제 냄새",
      "keywords": "방부제냄새, 박제냄새, 매케한냄새, 눈물유발",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "0.75 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "2 ppm",
        "source": "OSHA"
      },
      "ceiling": {
        "value": "2 ppm",
        "source": "NIOSH 참고"
      },
      "idlh": {
        "value": "20 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "1.08 g/cm³",
      "vaporPressure": "높음",
      "boilingPoint": "96°C",
      "flashPoint": "50°C"
    },
    "flammability": {
      "flashPoint": "50°C",
      "autoIgnition": "300°C",
      "lel": "7%",
      "uel": "73%"
    },
    "mainHazards": [
      "발암성 가능",
      "강한 점막 자극",
      "인화성"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 가능"
      ],
      "decon": [
        "흡착 및 환기"
      ]
    },
    "incompatible": [
      "산화제",
      "강염기"
    ],
    "neutralization": {
      "direction": [
        "흡착 및 회수"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "공기호흡기",
      "유기증기용 보호구"
    ],
    "cautions": [
      "저농도에서도 자극 강함"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 70,
    "nameKo": "메틸에틸케톤",
    "nameEn": "Methyl Ethyl Ketone",
    "formula": "C4H8O",
    "cas": "78-93-3",
    "aliases": [
      "MEK"
    ],
    "process": "세정 / 용제",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 (고인화성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 3,
      "instability": 0,
      "special": "",
      "code": "H2 F3 I0"
    },
    "odor": {
      "profile": "아세톤과 유사하면서도 약간 더 시큼하고 강한 용제 냄새",
      "keywords": "아세톤냄새, 시큼한용제취, 휘발취",
      "volatilityGrade": "",
      "warningType": "후각 조기선행형 (독성농도 도달 전 후각인지 가능)"
    },
    "exposure": {
      "twa": {
        "value": "200 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "300 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "3000 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "0.8 g/cm³",
      "vaporPressure": "78 mmHg",
      "boilingPoint": "80°C",
      "flashPoint": "-9°C"
    },
    "flammability": {
      "flashPoint": "-9°C",
      "autoIgnition": "404°C",
      "lel": "1.4%",
      "uel": "11.4%"
    },
    "mainHazards": [
      "고인화성",
      "정전기 점화 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 가능"
      ],
      "decon": [
        "흡착 및 환기"
      ]
    },
    "incompatible": [
      "산화제",
      "점화원"
    ],
    "neutralization": {
      "direction": [
        "흡착 및 회수"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "유기증기용 호흡보호구",
      "방염 보호구"
    ],
    "cautions": [
      "증기 폭발 위험"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 71,
    "nameKo": "톨루엔",
    "nameEn": "Toluene",
    "formula": "C7H8",
    "cas": "108-88-3",
    "aliases": [
      "Toluene"
    ],
    "process": "세정 / 용제",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성",
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 (유기용제)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 3,
      "instability": 0,
      "special": "",
      "code": "H2 F3 I0"
    },
    "odor": {
      "profile": "벤젠/페인트 시너 특유의 강렬하고 달콤한 석유 화학 취",
      "keywords": "페인트냄새, 시너냄새, 석유화학취, 달콤한향",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "20 ppm",
        "source": "ACGIH"
      },
      "stel": {
        "value": "150 ppm",
        "source": "대표 참고값"
      },
      "ceiling": {
        "value": "300 ppm",
        "source": "OSHA 참고"
      },
      "idlh": {
        "value": "500 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "0.87 g/cm³",
      "vaporPressure": "28 mmHg",
      "boilingPoint": "111°C",
      "flashPoint": "4°C"
    },
    "flammability": {
      "flashPoint": "4°C",
      "autoIgnition": "480°C",
      "lel": "1.2%",
      "uel": "7.1%"
    },
    "mainHazards": [
      "중추신경계 영향",
      "고인화성"
    ],
    "waterReactivity": {
      "hazards": [
        "물에 잘 안녹음"
      ],
      "decon": [
        "흡착 및 환기"
      ]
    },
    "incompatible": [
      "산화제",
      "점화원"
    ],
    "neutralization": {
      "direction": [
        "흡착 및 회수"
      ],
      "waterUse": "확산 가능성 고려",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "유기증기용 호흡보호구",
      "방염 보호구"
    ],
    "cautions": [
      "정전기 점화 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 72,
    "nameKo": "디메틸설폭사이드",
    "nameEn": "Dimethyl Sulfoxide",
    "formula": "C2H6OS",
    "cas": "67-68-5",
    "aliases": [
      "DMSO"
    ],
    "process": "세정 / 연구",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "주의",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 (피부 침투성 높음)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 1,
      "instability": 0,
      "special": "",
      "code": "H2 F1 I0"
    },
    "odor": {
      "profile": "순수 물질은 무취이나 가열/분해 시 마늘 또는 썩은 양파 냄새",
      "keywords": "무취, 가열시마늘냄새, 썩은양파냄새",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "250 ppm",
        "source": "대표 참고값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "1.1 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "189°C",
      "flashPoint": "89°C"
    },
    "flammability": {
      "flashPoint": "89°C",
      "autoIgnition": "215°C",
      "lel": "2.6%",
      "uel": "28%"
    },
    "mainHazards": [
      "피부 침투성 높음",
      "오염물 체내 전달 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 가능"
      ],
      "decon": [
        "물 세척 가능"
      ]
    },
    "incompatible": [
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "흡착 및 세척"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "내화학 장갑",
      "보안경"
    ],
    "cautions": [
      "피부 흡수 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 73,
    "nameKo": "NMP",
    "nameEn": "N-Methyl-2-pyrrolidone",
    "formula": "C5H9NO",
    "cas": "872-50-4",
    "aliases": [
      "NMP"
    ],
    "process": "Strip / 세정",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 (피부 흡수 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 1,
      "instability": 0,
      "special": "",
      "code": "H2 F1 I0"
    },
    "odor": {
      "profile": "희미하고 온화한 아민/유기용제 냄새 (자극적이지 않음)",
      "keywords": "아민취, 유기용제취, 온화한냄새",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "1 ppm",
        "source": "ACGIH 참고"
      },
      "stel": {
        "value": "3 ppm",
        "source": "대표 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      }
    },
    "physical": {
      "density": "1.03 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "202°C",
      "flashPoint": "91°C"
    },
    "flammability": {
      "flashPoint": "91°C",
      "autoIgnition": "270°C",
      "lel": "1.3%",
      "uel": "9.5%"
    },
    "mainHazards": [
      "피부 흡수 가능",
      "생식독성 우려"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 가능"
      ],
      "decon": [
        "흡착 및 세척"
      ]
    },
    "incompatible": [
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "흡착 및 회수"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "내화학 장갑",
      "유기증기용 보호구"
    ],
    "cautions": [
      "피부 노출 최소화"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 74,
    "nameKo": "디메틸아세트아마이드",
    "nameEn": "Dimethylacetamide",
    "formula": "C4H9NO",
    "cas": "127-19-5",
    "aliases": [
      "DMAc"
    ],
    "process": "세정 / 용제",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 (피부 흡수 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 2,
      "instability": 0,
      "special": "",
      "code": "H2 F2 I0"
    },
    "odor": {
      "profile": "희미한 암모니아 또는 생선 비린내 같은 아민취",
      "keywords": "암모니아취, 비린내, 아민취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "10 ppm",
        "source": "OSHA 참고"
      },
      "stel": {
        "value": "20 ppm",
        "source": "대표 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "300 ppm",
        "source": "대표 참고값"
      }
    },
    "physical": {
      "density": "0.94 g/cm³",
      "vaporPressure": "2 mmHg",
      "boilingPoint": "166°C",
      "flashPoint": "63°C"
    },
    "flammability": {
      "flashPoint": "63°C",
      "autoIgnition": "345°C",
      "lel": "1.8%",
      "uel": "11.5%"
    },
    "mainHazards": [
      "피부 흡수 가능",
      "간 독성 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 가능"
      ],
      "decon": [
        "흡착 및 세척"
      ]
    },
    "incompatible": [
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "흡착 및 회수"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "내화학 장갑",
      "유기증기용 보호구"
    ],
    "cautions": [
      "피부 흡수 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 75,
    "nameKo": "디메틸포름아마이드",
    "nameEn": "Dimethylformamide",
    "formula": "C3H7NO",
    "cas": "68-12-2",
    "aliases": [
      "DMF"
    ],
    "process": "세정 / 용제",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "❗ 경고",
      "🔥 인화성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 (피부 흡수 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 2,
      "instability": 0,
      "special": "",
      "code": "H2 F2 I0"
    },
    "odor": {
      "profile": "희미한 생선 비린내 같은 특이 아민취",
      "keywords": "비린내, 특이아민취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "10 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "15 ppm",
        "source": "대표 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "500 ppm",
        "source": "대표 참고값"
      }
    },
    "physical": {
      "density": "0.94 g/cm³",
      "vaporPressure": "3 mmHg",
      "boilingPoint": "153°C",
      "flashPoint": "58°C"
    },
    "flammability": {
      "flashPoint": "58°C",
      "autoIgnition": "445°C",
      "lel": "2.2%",
      "uel": "15%"
    },
    "mainHazards": [
      "피부 흡수 가능",
      "간 독성 가능",
      "인화성"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 가능"
      ],
      "decon": [
        "흡착 및 세척"
      ]
    },
    "incompatible": [
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "흡착 및 회수"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "일반 중화 불필요"
    },
    "ppe": [
      "내화학 장갑",
      "유기증기용 보호구"
    ],
    "cautions": [
      "피부 노출 최소화"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 76,
    "nameKo": "과염소산",
    "nameEn": "Perchloric Acid",
    "formula": "HClO4",
    "cas": "7601-90-3",
    "aliases": [
      "과염소산"
    ],
    "process": "분석 / 세정",
    "state": "무색 액체",
    "stateCategory": "강산성",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "⭕ 산화성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "70%: 강산성 (폭발성 산화제 가능)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 3,
      "special": "OX",
      "code": "H3 F0 I3 OX"
    },
    "odor": {
      "profile": "상온에서 무취 (가열 분해 시 자극적인 염소 가스취)",
      "keywords": "무취, 가열시염소취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "1 mg/m³",
        "source": "OSHA 참고"
      },
      "stel": {
        "value": "3 mg/m³",
        "source": "대표 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "150 mg/m³",
        "source": "대표 참고값"
      }
    },
    "physical": {
      "density": "1.76 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "203°C",
      "flashPoint": "산화성"
    },
    "flammability": {
      "flashPoint": "산화성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "폭발성 산화제 가능",
      "강부식성"
    ],
    "waterReactivity": {
      "hazards": [
        "유기물과 격렬 반응 가능"
      ],
      "decon": [
        "냉각 및 희석"
      ]
    },
    "incompatible": [
      "유기물",
      "환원제",
      "금속"
    ],
    "neutralization": {
      "direction": [
        "냉각 및 격리 우선"
      ],
      "waterUse": "주의",
      "waterUseJudge": "주의",
      "neutralizerNeed": "산화성 관리 필요"
    },
    "ppe": [
      "공기호흡기",
      "보안면"
    ],
    "cautions": [
      "유기물 접촉 절대 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 77,
    "nameKo": "과산화벤조일",
    "nameEn": "Benzoyl Peroxide",
    "formula": "C14H10O4",
    "cas": "94-36-0",
    "aliases": [
      "BPO"
    ],
    "process": "화학공정 / 개시제",
    "state": "백색 고체",
    "stateCategory": "유기과산화물",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "⭕ 산화성",
      "🔥 폭발성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "고체: 해당 없음 (열분해 위험)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 1,
      "flammability": 3,
      "instability": 4,
      "special": "",
      "code": "H1 F3 I4"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "5 mg/m³",
        "source": "OSHA 참고"
      },
      "stel": {
        "value": "10 mg/m³",
        "source": "대표 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "700 mg/m³",
        "source": "대표 참고값"
      }
    },
    "physical": {
      "density": "1.3 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "폭발성"
    },
    "flammability": {
      "flashPoint": "폭발성",
      "autoIgnition": "80°C 이상 분해 가능",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "열분해 위험",
      "산화성",
      "폭발 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "열·충격 민감"
      ],
      "decon": [
        "냉각 및 격리"
      ]
    },
    "incompatible": [
      "환원제",
      "유기물",
      "금속분말"
    ],
    "neutralization": {
      "direction": [
        "냉각 및 격리 우선"
      ],
      "waterUse": "주의",
      "waterUseJudge": "주의",
      "neutralizerNeed": "산화성 관리 필요"
    },
    "ppe": [
      "보안면",
      "방염 보호구"
    ],
    "cautions": [
      "충격 및 마찰 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 80,
    "nameKo": "메탄올",
    "nameEn": "Methanol",
    "formula": "CH4O",
    "cas": "67-56-1",
    "aliases": [
      "MeOH"
    ],
    "process": "세정 / 용제",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "🔥 인화성",
      "☠️ 급성독성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 (독성 알코올)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 1,
      "flammability": 3,
      "instability": 0,
      "special": "",
      "code": "H1 F3 I0"
    },
    "odor": {
      "profile": "에탄올(술)과 유사하나 약간 더 날카롭고 자극적인 알코올 냄새",
      "keywords": "알코올취, 술냄새, 날카로운알코올취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "200 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "250 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "250 ppm",
        "source": "NIOSH 참고"
      },
      "idlh": {
        "value": "6000 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "0.79 g/cm³",
      "vaporPressure": "97 mmHg",
      "boilingPoint": "65°C",
      "flashPoint": "11°C"
    },
    "flammability": {
      "flashPoint": "11°C",
      "autoIgnition": "464°C",
      "lel": "6%",
      "uel": "36%"
    },
    "mainHazards": [
      "시신경 독성",
      "고인화성"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 가능"
      ],
      "decon": [
        "흡착 및 환기"
      ]
    },
    "incompatible": [
      "산화제",
      "점화원"
    ],
    "neutralization": {
      "direction": [
        "흡착 및 회수"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "불필요"
    },
    "ppe": [
      "공기호흡기",
      "유기증기용 보호구"
    ],
    "cautions": [
      "섭취 및 흡입 독성 위험"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 81,
    "nameKo": "아세톤",
    "nameEn": "Acetone",
    "formula": "C3H6O",
    "cas": "67-64-1",
    "aliases": [
      "Acetone"
    ],
    "process": "세정 / 용제",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 중성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "원액: 중성 (휘발성 용제)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 1,
      "flammability": 3,
      "instability": 0,
      "special": "",
      "code": "H1 F3 I0"
    },
    "odor": {
      "profile": "향긋하면서도 코를 찌르는 특유의 매니큐어 리무버 휘발 취",
      "keywords": "매니큐어리무버, 아세톤취, 향긋한톡쏘는냄새",
      "volatilityGrade": "",
      "warningType": "후각 조기선행형 (독성농도 도달 전 후각인지 가능)"
    },
    "exposure": {
      "twa": {
        "value": "250 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "500 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "1000 ppm",
        "source": "NIOSH 참고"
      },
      "idlh": {
        "value": "2500 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "0.79 g/cm³",
      "vaporPressure": "180 mmHg",
      "boilingPoint": "56°C",
      "flashPoint": "-20°C"
    },
    "flammability": {
      "flashPoint": "-20°C",
      "autoIgnition": "465°C",
      "lel": "2.6%",
      "uel": "12.8%"
    },
    "mainHazards": [
      "고인화성",
      "정전기 점화 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물 혼합 가능"
      ],
      "decon": [
        "흡착 및 환기"
      ]
    },
    "incompatible": [
      "산화제",
      "점화원"
    ],
    "neutralization": {
      "direction": [
        "흡착 및 회수"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "불필요"
    },
    "ppe": [
      "유기증기용 보호구",
      "방염 보호구"
    ],
    "cautions": [
      "증기 폭발 위험"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 82,
    "nameKo": "브롬",
    "nameEn": "Bromine",
    "formula": "Br2",
    "cas": "7726-95-6",
    "aliases": [
      "Br2"
    ],
    "process": "화학처리",
    "state": "적갈색 액체",
    "stateCategory": "무기 액체 (산성 유도)",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "☠️ 급성독성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 산성 (강한 자극성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 4,
      "flammability": 0,
      "instability": 0,
      "special": "OX",
      "code": "H4 F0 I0 OX"
    },
    "odor": {
      "profile": "염소보다 훨씬 무겁고 숨이 막히는 강렬하고 불쾌한 자극적 질식취",
      "keywords": "질식취, 불쾌한자극취, 염소보다강한취, 무거운냄새",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "0.1 ppm",
        "source": "OSHA"
      },
      "stel": {
        "value": "0.3 ppm",
        "source": "ACGIH"
      },
      "ceiling": {
        "value": "0.3 ppm",
        "source": "NIOSH 참고"
      },
      "idlh": {
        "value": "3 ppm",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "3.1 g/cm³",
      "vaporPressure": "높음",
      "boilingPoint": "59°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강한 부식성",
      "고독성 증기",
      "저지대 체류 가능"
    ],
    "waterReactivity": {
      "hazards": [
        "물과 반응 가능"
      ],
      "decon": [
        "환기 및 희석"
      ]
    },
    "incompatible": [
      "금속",
      "환원제"
    ],
    "neutralization": {
      "direction": [
        "격리 및 흡수"
      ],
      "waterUse": "주의",
      "waterUseJudge": "주의",
      "neutralizerNeed": "전용 처리 검토"
    },
    "ppe": [
      "공기호흡기",
      "보안면"
    ],
    "cautions": [
      "증기 흡입 위험"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 83,
    "nameKo": "질산은",
    "nameEn": "Silver Nitrate",
    "formula": "AgNO3",
    "cas": "7761-88-8",
    "aliases": [
      "AgNO3"
    ],
    "process": "분석 / 화학처리",
    "state": "무색 고체",
    "stateCategory": "무기염 / 약산성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "⭕ 산화성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 산성 (산화성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 0,
      "special": "OX",
      "code": "H3 F0 I0 OX"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "0.01 mg/m³",
        "source": "OSHA 참고"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "0.03 mg/m³",
        "source": "대표 참고값"
      },
      "idlh": {
        "value": "10 mg/m³",
        "source": "대표 참고값"
      }
    },
    "physical": {
      "density": "4.35 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "산화성"
    },
    "flammability": {
      "flashPoint": "산화성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "산화성",
      "피부 착색"
    ],
    "waterReactivity": {
      "hazards": [
        "수용성"
      ],
      "decon": [
        "회수 및 세척"
      ]
    },
    "incompatible": [
      "환원제",
      "유기물"
    ],
    "neutralization": {
      "direction": [
        "격리 및 회수"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "산화성 관리"
    },
    "ppe": [
      "보안면",
      "장갑"
    ],
    "cautions": [
      "빛 반응성 주의"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 84,
    "nameKo": "질산구리",
    "nameEn": "Copper Nitrate",
    "formula": "Cu(NO3)2",
    "cas": "3251-23-8",
    "aliases": [
      "CuNitrate"
    ],
    "process": "폐수 / 화학처리",
    "state": "청색 고체",
    "stateCategory": "무기염 / 약산성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "⭕ 산화성",
      "❗ 경고"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "용액: 산성 (산화성)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 0,
      "instability": 0,
      "special": "OX",
      "code": "H2 F0 I0 OX"
    },
    "odor": {
      "profile": "완벽한 무취",
      "keywords": "무취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "1 mg/m³",
        "source": "구리 기준 참고"
      },
      "stel": {
        "value": "2 mg/m³",
        "source": "대표 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "100 mg/m³",
        "source": "대표 참고값"
      }
    },
    "physical": {
      "density": "2.3 g/cm³",
      "vaporPressure": "낮음",
      "boilingPoint": "분해",
      "flashPoint": "산화성"
    },
    "flammability": {
      "flashPoint": "산화성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "산화성",
      "중금속 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "수용성"
      ],
      "decon": [
        "회수 및 세척"
      ]
    },
    "incompatible": [
      "환원제",
      "유기물"
    ],
    "neutralization": {
      "direction": [
        "회수 및 격리"
      ],
      "waterUse": "가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "중금속 처리 필요"
    },
    "ppe": [
      "보안경",
      "장갑"
    ],
    "cautions": [
      "중금속 폐기 기준 준수"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": true,
      "flammable": true,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 85,
    "nameKo": "폐황산구리",
    "nameEn": "Waste Copper Sulfate Solution",
    "formula": "CuSO4 + H2SO4 + H2O",
    "cas": "혼합물",
    "aliases": [
      "폐황산구리",
      "구리폐수",
      "Cu Waste"
    ],
    "process": "Plating (도금) / 폐수배출",
    "state": "청색 액체",
    "stateCategory": "강산성염 / 중금속 폐수",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🧪 부식성",
      "☠️ 급성독성",
      "🐟 환경유해성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "강산성 (pH 1~2 이하)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 0,
      "special": "설정 없음 (공정 확인)",
      "code": "H3 F0 I0"
    },
    "odor": {
      "profile": "금속성의 메마른 무취 액체",
      "keywords": "철냄새, 메마른취, 무취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "0.1 mg/m³",
        "source": "KOSHA (구리 흄/미스트 기준)"
      },
      "stel": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "100 mg/m³",
        "source": "NIOSH (Cu 기준)"
      }
    },
    "physical": {
      "density": "약 1.1~1.2 g/cm³",
      "vaporPressure": "해당 없음",
      "boilingPoint": "약 100°C (수용액)",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강산성 부식성",
      "중금속(구리)에 의한 수질오염 및 급성 중독 위험",
      "피부 접촉 시 심한 화상"
    ],
    "waterReactivity": {
      "hazards": [
        "낮음 (이미 수용액 상태이나 강산이므로 급격한 주수 주의)"
      ],
      "decon": [
        "대량 누출 시 흡착포로 회수 후 소다회 또는 소석회로 중화"
      ]
    },
    "incompatible": [
      "강염기",
      "금속 분말",
      "아지드화물"
    ],
    "neutralization": {
      "direction": [
        "알칼리계(소석회",
        "NaOH) 중화 후 구리 침전 처리"
      ],
      "waterUse": "초기 희석 및 제독 목적의 물 사용 가능하나 폐수량 증가 주의",
      "waterUseJudge": "가능",
      "neutralizerNeed": "중화 완료 판단 후 알칼리제 투입 검토 필요"
    },
    "ppe": [
      "공기호흡기 또는 산성가스용 방독면",
      "내산 장갑",
      "내산 화학보호복",
      "화학보안경"
    ],
    "cautions": [
      "중중금속인 구리가 포함되어 있으므로 우수관 유입을 절대 차단해야 하며",
      "방류벽 내 회수를 최우선으로 함"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 86,
    "nameKo": "폐황산",
    "nameEn": "Waste Sulfuric Acid",
    "formula": "H2SO4 + H2O",
    "cas": "7664-93-9 (혼합물)",
    "aliases": [
      "폐황산",
      "Waste H2SO4",
      "SPM 폐수"
    ],
    "process": "Cleaning / Etch / 폐수",
    "state": "무색 내지 갈색 점성 액체",
    "stateCategory": "강산성",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "🧪 부식성",
      "🫁 건강유해성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "강산성 (pH 1 이하)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 2,
      "special": "W",
      "code": "H3 F0 I2 W"
    },
    "odor": {
      "profile": "오염물 분해로 인한 탁하고 매캐한 황 화합물 자극취",
      "keywords": "매캐한냄새, 황화합물취, 탁한자극취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "1 mg/m³",
        "source": "KOSHA"
      },
      "stel": {
        "value": "3 mg/m³",
        "source": "대표 참고값"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "15 mg/m³",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "약 1.5~1.8 g/cm³ (농도별 상이)",
      "vaporPressure": "0.001 mmHg 미만",
      "boilingPoint": "약 290°C 이상",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강한 부식성",
      "유기물 접촉 시 탄화 및 발열",
      "물 접촉 시 격렬한 반응 및 수화열 발생"
    ],
    "waterReactivity": {
      "hazards": [
        "높음 (농축된 폐황산인 경우 물 접촉 시 폭발적 비산 위험)"
      ],
      "decon": [
        "중화제(소다회",
        "가성소다) 살포 전 반드시 흡착포로 최대한 회수"
      ]
    },
    "incompatible": [
      "강염기",
      "가연성 유기물",
      "물(대량 주수 제외)",
      "금속분"
    ],
    "neutralization": {
      "direction": [
        "알칼리계 중화 방향 검토 (발열 주의)"
      ],
      "waterUse": "소량의 물은 격렬한 발열을 유도하므로 흡착 회수 후 대량 주수로 희석·제독해야 함",
      "waterUseJudge": "주의",
      "neutralizerNeed": "알칼리계 중화제 사용 시 급격한 온도 상승 주의 필요"
    },
    "ppe": [
      "공기호흡기",
      "내산 장갑",
      "내산 화학보호복(Level B 권장)",
      "보안면"
    ],
    "cautions": [
      "원액 황산보다는 수분이 포함되어 있으나 여전히 고농도일 경우 발열 반응이 매우 격렬하므로 초기 살수는 극도 주의 필요"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 87,
    "nameKo": "폐인산",
    "nameEn": "Waste Phosphoric Acid",
    "formula": "H3PO4 + H2O",
    "cas": "7664-38-2 (혼합물)",
    "aliases": [
      "폐인산",
      "Waste H3PO4",
      "질인산 폐수"
    ],
    "process": "Nitride Etch (식각) / 폐수",
    "state": "무색 투명한 액체",
    "stateCategory": "강산성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "강산성 (pH 1~2 이하)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 0,
      "special": "설정 없음 (공정 확인)",
      "code": "H3 F0 I0"
    },
    "odor": {
      "profile": "상온 무취 또는 약간의 시큼한 유기물 혼합취",
      "keywords": "무취, 시큼한혼합취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "1 mg/m³",
        "source": "KOSHA"
      },
      "stel": {
        "value": "3 mg/m³",
        "source": "KOSHA"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "1000 mg/m³",
        "source": "NIOSH"
      }
    },
    "physical": {
      "density": "약 1.3~1.5 g/cm³",
      "vaporPressure": "0.03 mmHg",
      "boilingPoint": "약 158°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "눈",
      "피부",
      "점막에 심한 화상 및 부식성 유해성",
      "고온 폐수일 경우 흄(미스트) 흡입 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "낮음 내지 보통 (희석 시 일부 발열 발생)"
      ],
      "decon": [
        "제독 소화수 수집 조치",
        "소다회 또는 석회석을 이용한 흡착 및 중화"
      ]
    },
    "incompatible": [
      "강염기",
      "강산화제",
      "금속(수소가스 발생 가능)"
    ],
    "neutralization": {
      "direction": [
        "알칼리계(소석회 등) 중화 유도"
      ],
      "waterUse": "물과 혼합 가능하나 고농도일 경우 희석 열이 발생하므로 완충 살수 필요",
      "waterUseJudge": "주의",
      "neutralizerNeed": "인산염 침전을 유도할 수 있는 칼슘계 중화제(소석회) 활용 권장"
    },
    "ppe": [
      "방독면(산성가스/미스트용)",
      "내산 장갑",
      "화학보호복",
      "보안면"
    ],
    "cautions": [
      "식각 공정 후 배출되는 폐인산은 온도가 높을 수 있어 누출 시 흄 발생에 따른 흡입 위험을 차단해야 함"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 88,
    "nameKo": "PR",
    "nameEn": "Photoresist",
    "formula": "혼합물 (Polymers + Solvents)",
    "cas": "혼합물",
    "aliases": [
      "감광액",
      "포토레지스트",
      "PR"
    ],
    "process": "Photo (노광)",
    "state": "황색/적색 액체",
    "stateCategory": "유기 혼합물 / 인화성 액체",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성",
      "🧪 부식성",
      "🫁 건강유해"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "거의 중성 ~ 약산성",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 3,
      "instability": 1,
      "special": "-",
      "code": "H2 F3 I1"
    },
    "odor": {
      "profile": "에스테르 및 아세톤계 혼합 유기용제(PGMEA) 특유의 강한 시너 냄새",
      "keywords": "시너냄새, 유기용제취, 아세톤냄새, 에스테르취, PGMEA취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "제품별 상이 (약 100 ppm)",
        "source": "제조사 SDS"
      },
      "stel": {
        "value": "150 ppm",
        "source": "KOSHA 기준 유추"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.02 g/cm³",
      "vaporPressure": "3.7 mmHg",
      "boilingPoint": "146°C",
      "flashPoint": "42°C"
    },
    "flammability": {
      "flashPoint": "42°C",
      "autoIgnition": "354°C",
      "lel": "1.5%",
      "uel": "7.0%"
    },
    "mainHazards": [
      "인화성 액체 및 증기 유출",
      "눈 및 피부 접촉 시 자극성",
      "장기 노출 시 태아 유해성 우려"
    ],
    "waterReactivity": {
      "hazards": [
        "낮음"
      ],
      "decon": [
        "유기물 흡착포로 잔류물 수거 후 소량 소화수로 세척",
        "스파크 차단"
      ]
    },
    "incompatible": [
      "강산화제",
      "강염기"
    ],
    "neutralization": {
      "direction": [
        "해당 없음"
      ],
      "waterUse": "화재 시 알코올포 소화약제 권장, 누출 시 흡착포 수거 우선",
      "waterUseJudge": "가능",
      "neutralizerNeed": "아니오"
    },
    "ppe": [
      "유기화합물용 방독면",
      "보안경",
      "화학안전장갑"
    ],
    "cautions": [
      "인화성 증기 차단을 위해 방폭 장비 사용 필수"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 89,
    "nameKo": "HMDS",
    "nameEn": "Hexamethyldisilazane",
    "formula": "C6H19NSi2",
    "cas": "999-97-3",
    "aliases": [
      "HMDS",
      "접착증진제"
    ],
    "process": "Photo (Track 장비)",
    "state": "무색 액체",
    "stateCategory": "유기화합물 / 인화성 액체",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성",
      "🧪 부식성",
      "☠️ 급성독성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "해당 없음 (유기물)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 3,
      "instability": 1,
      "special": "-",
      "code": "H3 F3 I1"
    },
    "odor": {
      "profile": "유기 규소취 및 수분 반응 시 발생하는 톡 쏘는 암모니아 자극취",
      "keywords": "유기규소취, 암모니아취, 톡쏘는냄새, 자극취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "10 ppm",
        "source": "제조사 SDS 권고값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "200 ppm",
        "source": "NIOSH 유사치"
      }
    },
    "physical": {
      "density": "0.77 g/cm³",
      "vaporPressure": "20 mmHg",
      "boilingPoint": "125°C",
      "flashPoint": "11°C"
    },
    "flammability": {
      "flashPoint": "11°C",
      "autoIgnition": "380°C",
      "lel": "0.8%",
      "uel": "16.3%"
    },
    "mainHazards": [
      "고인화성",
      "인화성 증기 유출",
      "흡입 시 독성 및 피부 화상"
    ],
    "waterReactivity": {
      "hazards": [
        "보통 (물 반응성 미량 암모니아 발생)"
      ],
      "decon": [
        "흡착포 수거 후 밀폐용기 보관"
      ]
    },
    "incompatible": [
      "강산",
      "강산화제",
      "물"
    ],
    "neutralization": {
      "direction": [
        "해당 없음"
      ],
      "waterUse": "물과 반응하여 미량의 암모니아 가스 발생 가능, 흡착 수거 철저",
      "waterUseJudge": "주의",
      "neutralizerNeed": "아니오"
    },
    "ppe": [
      "방독면(유기화합물용)",
      "화학보호복",
      "내산장갑"
    ],
    "cautions": [
      "유출 시 물 분무를 가급적 억제하고 흡착포로 초기 회수 진행"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 90,
    "nameKo": "POK",
    "nameEn": "Polyketone",
    "formula": "[-CH2-CH2-CO-]n",
    "cas": "223155-24-4",
    "aliases": [
      "폴리케톤",
      "엔지니어링 플라스틱"
    ],
    "process": "케미컬 배관 / 밸브 재질",
    "state": "고체 수지 / 성형품",
    "stateCategory": "엔지니어링 플라스틱 (고분자 수지)",
    "hazardLevel": "안전",
    "ghsPictograms": [
      "해당 없음"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "해당 없음 (고체)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 0,
      "flammability": 1,
      "instability": 0,
      "special": "-",
      "code": "H0 F1 I0"
    },
    "odor": {
      "profile": "완벽한 무취 (고체 플라스틱 펠렛 재질)",
      "keywords": "무취, 고체플라스틱",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음",
        "source": "-"
      },
      "stel": {
        "value": "설정 없음",
        "source": "-"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "-"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "-"
      }
    },
    "physical": {
      "density": "1.24 g/cm³",
      "vaporPressure": "해당 없음",
      "boilingPoint": "해당 없음",
      "flashPoint": "해당 없음 (고체)"
    },
    "flammability": {
      "flashPoint": "해당 없음 (고체)",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "상온 고체 상태로 안정",
      "260°C 이상 열분해 시 일산화탄소 유독가스 배출 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "없음"
      ],
      "decon": [
        "고체 물리적 수거"
      ]
    },
    "incompatible": [
      "진한 황산"
    ],
    "neutralization": {
      "direction": [
        "해당 없음"
      ],
      "waterUse": "일반 고체 화재 표준 주수 소화 가능, 260°C 이상 열분해 시 유독가스 주의",
      "waterUseJudge": "가능",
      "neutralizerNeed": "아니오"
    },
    "ppe": [
      "일반 안전장갑",
      "보호경"
    ],
    "cautions": [
      "화재 진압 후 잔해물은 표준 플라스틱 폐기물 처리 절차 적용"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 91,
    "nameKo": "LTO520",
    "nameEn": "Low Temperature Oxide Precursor",
    "formula": "유기규소 화합물",
    "cas": "혼합물",
    "aliases": [
      "LTO 전구체",
      "디포지션 소스"
    ],
    "process": "CVD (박막 증착)",
    "state": "무색 액체",
    "stateCategory": "유기금속 전구체",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "해당 없음",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 3,
      "instability": 1,
      "special": "-",
      "code": "H2 F3 I1"
    },
    "odor": {
      "profile": "아미노실란 계열 특유의 톡 쏘는 생선 비린내 및 아민 자극취",
      "keywords": "비린내, 아민취, 자극취, 아미노실란취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "stel": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "0.82 g/cm³",
      "vaporPressure": "15 mmHg",
      "boilingPoint": "120°C",
      "flashPoint": "5°C"
    },
    "flammability": {
      "flashPoint": "5°C",
      "autoIgnition": "240°C",
      "lel": "1.0%",
      "uel": "9.5%"
    },
    "mainHazards": [
      "고인화성 액체",
      "증기는 공기와 혼합하여 폭발성 혼합물 형성",
      "소량 유출 시에도 화재 경계 철저"
    ],
    "waterReactivity": {
      "hazards": [
        "보통"
      ],
      "decon": [
        "질소 퍼지 차단 및 가연성 물질 격리",
        "모래 흡착 수거"
      ]
    },
    "incompatible": [
      "물",
      "강산화제",
      "알코올"
    ],
    "neutralization": {
      "direction": [
        "해당 없음"
      ],
      "waterUse": "인화점이 낮으므로 화재 시 살수보다 질식소화(CO2, 분말) 우선",
      "waterUseJudge": "주의",
      "neutralizerNeed": "아니오"
    },
    "ppe": [
      "공기호흡기(SCBA)",
      "방폭 화학보호복",
      "안전장갑"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 92,
    "nameKo": "nBA",
    "nameEn": "n-Butyl Acetate",
    "formula": "C6H12O2",
    "cas": "123-86-4",
    "aliases": [
      "초산부틸",
      "아세트산부틸",
      "nBA"
    ],
    "process": "세정 / 신너 배합",
    "state": "무색 액체 (과일향)",
    "stateCategory": "유기화합물 / 인화성 액체",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성",
      "🫁 건강유해 (마취성)"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "중성 수용성 낮음",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 3,
      "instability": 0,
      "special": "-",
      "code": "H2 F3 I0"
    },
    "odor": {
      "profile": "바나나 또는 사과가 썩은 듯한 달콤하면서도 강렬한 과일 향 용제취",
      "keywords": "바나나냄새, 썩은사과향, 과일향용제취, 달콤한향",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "150 ppm",
        "source": "KOSHA"
      },
      "stel": {
        "value": "200 ppm",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "1700 ppm",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "0.88 g/cm³",
      "vaporPressure": "15 mmHg",
      "boilingPoint": "126°C",
      "flashPoint": "22°C"
    },
    "flammability": {
      "flashPoint": "22°C",
      "autoIgnition": "420°C",
      "lel": "1.2%",
      "uel": "7.6%"
    },
    "mainHazards": [
      "인화성 액체",
      "증기 흡입 시 현기증 및 중추신경계 마취 작용"
    ],
    "waterReactivity": {
      "hazards": [
        "낮음"
      ],
      "decon": [
        "흡착포 및 모래로 방류둑 구축 후 수거"
      ]
    },
    "incompatible": [
      "강산화제",
      "강염기"
    ],
    "neutralization": {
      "direction": [
        "해당 없음"
      ],
      "waterUse": "인화성 증기 억제를 위해 소화용수 분무 가능하나 흡착포 제독이 효과적",
      "waterUseJudge": "가능",
      "neutralizerNeed": "아니오"
    },
    "ppe": [
      "방독면(유기화합물용)",
      "보호안경",
      "안전장갑"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 93,
    "nameKo": "ORG",
    "nameEn": "Organic Waste Stream",
    "formula": "혼합물",
    "cas": "혼합물",
    "aliases": [
      "유기계 폐수",
      "유기계 폐용제"
    ],
    "process": "폐수배출 라인",
    "state": "적갈색 내지 다양한 액체",
    "stateCategory": "유기 혼합물 폐수",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성",
      "🫁 건강유해"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "성분별 상이 (보통 중성 부근)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 2,
      "flammability": 3,
      "instability": 0,
      "special": "-",
      "code": "H2 F3 I0"
    },
    "odor": {
      "profile": "알코올, 에테르, 케톤류가 섞인 탁하고 매캐한 혼합 유기용제 냄새",
      "keywords": "혼합유기용제취, 매캐한냄새, 알코올취, 에테르취, 케톤취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "stel": {
        "value": "설정 없음 (공정 확인)",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음 (공정 확인)",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "약 0.85 ~ 0.95 g/cm³",
      "vaporPressure": "설정 없음 (공정 확인)",
      "boilingPoint": "약 80°C ~ 150°C",
      "flashPoint": "약 15°C ~ 40°C (가변)"
    },
    "flammability": {
      "flashPoint": "약 15°C ~ 40°C (가변)",
      "autoIgnition": "설정 없음 (공정 확인)",
      "lel": "설정 없음 (공정 확인)",
      "uel": "설정 없음 (공정 확인)"
    },
    "mainHazards": [
      "설정 없음 (공정 확인)"
    ],
    "waterReactivity": {
      "hazards": [
        "설정 없음 (공정 확인)"
      ],
      "decon": [
        "설정 없음 (공정 확인)"
      ]
    },
    "incompatible": [
      "설정 없음 (공정 확인)"
    ],
    "neutralization": {
      "direction": [
        "설정 없음 (공정 확인)"
      ],
      "waterUse": "화재 시 인화성 액체 표준 소화 방식 적용, 우수관 유입 절대 차단",
      "waterUseJudge": "가능",
      "neutralizerNeed": "설정 없음 (공정 확인)"
    },
    "ppe": [
      "설정 없음 (공정 확인)"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 94,
    "nameKo": "사염화규소",
    "nameEn": "Silicon Tetrachloride",
    "formula": "SiCl4",
    "cas": "10026-04-7",
    "aliases": [
      "SiCl4",
      "사염화실란"
    ],
    "process": "CVD / Epitaxy",
    "state": "무색 발연 액체/가스",
    "stateCategory": "무기 액체 (산성 유도 / 금수성)",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "🧪 부식성",
      "☠️ 급성독성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "물 접촉 시 강산성 변환",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 2,
      "special": "W",
      "code": "H3 F0 I2 W"
    },
    "odor": {
      "profile": "공기 중 습기와 반응하여 발생하는 강력하고 찔러대는 염산 매캐한 취",
      "keywords": "매캐한냄새, 염산취, 찌르는냄새, 자극취, 습기반응",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "1 ppm (Ceiling 권고)",
        "source": "제조사 가이드"
      },
      "stel": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "1 ppm",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "1.48 g/cm³",
      "vaporPressure": "194 mmHg",
      "boilingPoint": "57°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "물 반응 시 폭발적 발열 및 독성 염산(HCl) 가스 발생",
      "강력한 피부 부식"
    ],
    "waterReactivity": {
      "hazards": [
        "높음 (격렬한 가수분해)"
      ],
      "decon": [
        "소석회 또는 소다회로 건조 중화 후 흡착포 수거"
      ]
    },
    "incompatible": [
      "물",
      "알코올",
      "강염기",
      "금속분"
    ],
    "neutralization": {
      "direction": [
        "알칼리계 중화"
      ],
      "waterUse": "물과 격렬히 반응하여 염산(HCl) 가스를 분출하므로 원액에 직접 주수 금지, 수막 차단만 적용",
      "waterUseJudge": "주의",
      "neutralizerNeed": "예"
    },
    "ppe": [
      "공기호흡기(SCBA)",
      "내산 화학보호복",
      "내산장갑"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 95,
    "nameKo": "NCE2",
    "nameEn": "New Chemical Etchant Blend",
    "formula": "혼합물",
    "cas": "혼합물",
    "aliases": [
      "NCE2 세정액"
    ],
    "process": "Wet Etch / Cleaning",
    "state": "무색 액체",
    "stateCategory": "혼합 케미컬",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "강산성 또는 강염기성 (제품별 상이)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 1,
      "instability": 0,
      "special": "-",
      "code": "H3 F1 I0"
    },
    "odor": {
      "profile": "불산, 질산, 초산이 혼합되어 코를 찌르는 시큼하고 부식성 있는 산 자극취",
      "keywords": "시큼한냄새, 산자극취, 부식성취, 혼산취",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음 (공정 확인)",
        "source": "제조사 SDS"
      },
      "stel": {
        "value": "3 ppm",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "30 ppm",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "1.25 g/cm³",
      "vaporPressure": "25 mmHg",
      "boilingPoint": "105°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "혼산계 세정액으로 피부 접촉 시 깊은 화상 및 침투 독성 위험",
      "흄 흡입 시 기도 손상"
    ],
    "waterReactivity": {
      "hazards": [
        "보통"
      ],
      "decon": [
        "흡착 차단 및 소석회 중화 세척"
      ]
    },
    "incompatible": [
      "강염기",
      "가연성 물질"
    ],
    "neutralization": {
      "direction": [
        "칼슘계/알칼리계 중화"
      ],
      "waterUse": "중화 및 희석 목적의 물 사용 가능, 발열 여부 모니터링 필요",
      "waterUseJudge": "가능",
      "neutralizerNeed": "예"
    },
    "ppe": [
      "공기호흡기",
      "내산 화학보호복",
      "내산장갑",
      "보안면"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": true,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 96,
    "nameKo": "사염화티타늄",
    "nameEn": "Titanium Tetrachloride",
    "formula": "TiCl4",
    "cas": "7550-45-0",
    "aliases": [
      "TiCl4",
      "티타늄클로라이드"
    ],
    "process": "CVD / Metalization",
    "state": "무색 내지 황색 발연 액체",
    "stateCategory": "무기 액체 (산성 유도 / 금수성)",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "🧪 부식성",
      "☠️ 급성독성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "물 접촉 시 격렬한 강산성 유도",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 2,
      "special": "W",
      "code": "H3 F0 I2 W"
    },
    "odor": {
      "profile": "습기와 격렬히 반응하여 눈물과 기침을 유발하는 염화수소 질식취",
      "keywords": "염화수소취, 질식취, 눈물유발, 습기반응",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "0.5 mg/m³",
        "source": "제조사 권고값"
      },
      "stel": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "1.73 g/cm³",
      "vaporPressure": "10 mmHg",
      "boilingPoint": "136°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "물 접촉 시 격렬하게 반응하여 독성 염화수소(HCl) 가스 및 백색 티타늄 산화물 흄 생성"
    ],
    "waterReactivity": {
      "hazards": [
        "높음"
      ],
      "decon": [
        "건조 모래로 차단 후 중화제 흡착 수거"
      ]
    },
    "incompatible": [
      "물",
      "강염기"
    ],
    "neutralization": {
      "direction": [
        "알칼리계 중화"
      ],
      "waterUse": "물과 반응해 백색의 독성 염산 가스를 대량 유발하므로 직접 살수 절대 금지, 모래나 건조 분말 소화",
      "waterUseJudge": "주의",
      "neutralizerNeed": "예"
    },
    "ppe": [
      "공기호흡기(SCBA)",
      "고성능 화학보호복",
      "내산장갑"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 97,
    "nameKo": "사불화게르마늄",
    "nameEn": "Germanium Tetrafluoride",
    "formula": "GeF4",
    "cas": "7783-58-6",
    "aliases": [
      "GeF4"
    ],
    "process": "Implantation (이온주입)",
    "state": "무색 발연 가스",
    "stateCategory": "무기 가스 (가수분해 시 산성)",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "🧪 부식성",
      "☠️ 급성독성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "물 접촉 시 불산(HF) 변환",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 4,
      "flammability": 0,
      "instability": 1,
      "special": "W",
      "code": "H4 F0 I1 W"
    },
    "odor": {
      "profile": "가수분해로 인해 발생하는 불화수소($HF$) 특유의 찔러대는 신취",
      "keywords": "찔러대는신취, 불산취, 자극취, 가수분해",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "2.5 mg/m³ (F 기준)",
        "source": "KOSHA"
      },
      "stel": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "15 mg/m³ (Ge 기준 추정값)",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "3.15 g/cm³",
      "vaporPressure": "760 mmHg 이상",
      "boilingPoint": "-36.5°C (승화)",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "흡입 시 극독성",
      "물과 접촉 시 즉각 가수분해되어 유독하고 부식성이 강한 불산(HF) 및 불화수소 가스 방출"
    ],
    "waterReactivity": {
      "hazards": [
        "높음 (격렬한 부식성 가스 유도)"
      ],
      "decon": [
        "건조 소다회 또는 흡착포 수거 후 밀폐",
        "물 분무로 증기 제독(대령 살수)"
      ]
    },
    "incompatible": [
      "물",
      "습기",
      "강알칼리",
      "금속류"
    ],
    "neutralization": {
      "direction": [
        "알칼리계 및 칼슘계 중화"
      ],
      "waterUse": "누출 가스가 소방수와 만나면 불산 수용액이 되므로 대응 대원은 내산 보호복 및 SCBA 필수 착용",
      "waterUseJudge": "주의",
      "neutralizerNeed": "예"
    },
    "ppe": [
      "공기호흡기(SCBA)",
      "내산 전면 화학보호복",
      "내산장갑"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": true,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 98,
    "nameKo": "게르만",
    "nameEn": "Germane",
    "formula": "GeH4",
    "cas": "7782-65-2",
    "aliases": [
      "GeH4",
      "수화게르마늄"
    ],
    "process": "CVD / Epitaxy",
    "state": "무색 가스",
    "stateCategory": "무기 가스 / 극독성",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "🔥 인화성",
      "☠️ 급성독성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "해당 없음 (가스)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 4,
      "flammability": 4,
      "instability": 3,
      "special": "-",
      "code": "H4 F4 I3"
    },
    "odor": {
      "profile": "역겨우면서도 자극적인 찔러대는 마늘 탄 불쾌취",
      "keywords": "마늘냄새, 마늘탄냄새, 역겨운냄새, 불쾌취",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "0.2 ppm",
        "source": "KOSHA"
      },
      "stel": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "1.52 (공기=1)",
      "vaporPressure": "760 mmHg 이상",
      "boilingPoint": "-88°C",
      "flashPoint": "가연성 가스"
    },
    "flammability": {
      "flashPoint": "가연성 가스",
      "autoIgnition": "해당 없음 (상온 발화 가능성)",
      "lel": "설정 없음",
      "uel": "설정 없음"
    },
    "mainHazards": [
      "극독성 가스",
      "흡입 시 혈액 내 용혈 작용 및 신장 기능 마비",
      "화재 및 폭발 위험 극대"
    ],
    "waterReactivity": {
      "hazards": [
        "낮음"
      ],
      "decon": [
        "가스 공급 밸브 차단 및 방폭 환기"
      ]
    },
    "incompatible": [
      "강산화제",
      "할로겐"
    ],
    "neutralization": {
      "direction": [
        "해당 없음"
      ],
      "waterUse": "가스 밸브 차단 최우선, 주변 설비 냉각을 위한 살수 가능하나 방폭 조치 선행",
      "waterUseJudge": "가능",
      "neutralizerNeed": "아니오"
    },
    "ppe": [
      "공기호흡기(SCBA)",
      "방폭 화학보호복",
      "내산장갑"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 99,
    "nameKo": "디메틸아민",
    "nameEn": "Dimethylamine",
    "formula": "C2H7N",
    "cas": "124-40-3",
    "aliases": [
      "NH(CH3)2",
      "DMA"
    ],
    "process": "전구체 합성 원료",
    "state": "무색 가스 또는 액체 (생선비린내)",
    "stateCategory": "유기 가스 / 알칼리성",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성",
      "🧪 부식성",
      "☠️ 급성독성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "수용액 시 강염기성",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 4,
      "instability": 0,
      "special": "-",
      "code": "H3 F4 I0"
    },
    "odor": {
      "profile": "강렬한 생선 비린내와 암모니아가 섞인 듯한 톡 쏘는 아민취",
      "keywords": "비린내, 암모니아취, 톡쏘는냄새, 아민취",
      "volatilityGrade": "",
      "warningType": "후각 조기선행형 (독성농도 도달 전 후각인지 가능)"
    },
    "exposure": {
      "twa": {
        "value": "5 ppm",
        "source": "KOSHA"
      },
      "stel": {
        "value": "설정 없음 (공정 확인)",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음 (공정 확인)",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "설정 없음 (공정 확인)",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "0.68 g/cm³",
      "vaporPressure": "1300 mmHg",
      "boilingPoint": "7°C",
      "flashPoint": "-18°C"
    },
    "flammability": {
      "flashPoint": "-18°C",
      "autoIgnition": "설정 없음 (공정 확인)",
      "lel": "2.8%",
      "uel": "14.4%"
    },
    "mainHazards": [
      "설정 없음 (공정 확인)"
    ],
    "waterReactivity": {
      "hazards": [
        "설정 없음 (공정 확인)"
      ],
      "decon": [
        "설정 없음 (공정 확인)"
      ]
    },
    "incompatible": [
      "설정 없음 (공정 확인)"
    ],
    "neutralization": {
      "direction": [
        "설정 없음 (공정 확인)"
      ],
      "waterUse": "물에 매우 잘 녹으므로 수막 커튼(Water Curtain)을 이용한 증기 억제 효과적",
      "waterUseJudge": "가능",
      "neutralizerNeed": "설정 없음 (공정 확인)"
    },
    "ppe": [
      "설정 없음 (공정 확인)"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": false
    }
  },
  {
    "id": 100,
    "nameKo": "옥시염화인",
    "nameEn": "Phosphorus Oxychloride",
    "formula": "POCl3",
    "cas": "10025-87-3",
    "aliases": [
      "POCl3",
      "포스포릴클로라이드"
    ],
    "process": "Diffusion (확산 디퓨전)",
    "state": "무색 내지 황색 발연 액체",
    "stateCategory": "무기 액체 (산성 유도 / 금수성)",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "🧪 부식성",
      "☠️ 급성독성",
      "🫁 건강유해"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "물 반응 시 강산성 (인산+염산) 유도",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 4,
      "flammability": 0,
      "instability": 2,
      "special": "W",
      "code": "H4 F0 I2 W"
    },
    "odor": {
      "profile": "습기와 반응하여 염산취를 동반하는 찔러대고 목이 메는 자극취",
      "keywords": "염산취, 자극취, 목이메는냄새, 습기반응",
      "volatilityGrade": "",
      "warningType": "후각 마비/위험형 (인지순간 이미 독성노출 또는 후각마비)"
    },
    "exposure": {
      "twa": {
        "value": "0.1 ppm",
        "source": "KOSHA"
      },
      "stel": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "1.64 g/cm³",
      "vaporPressure": "28 mmHg",
      "boilingPoint": "105°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "물과 반응하여 인산 및 인화수소 가스",
      "염산 가스를 발생시키며 격렬히 발열"
    ],
    "waterReactivity": {
      "hazards": [
        "높음"
      ],
      "decon": [
        "건조 모래 차단 후 대량 살수로 완전 씻어냄(대량 주수 제한 조건)"
      ]
    },
    "incompatible": [
      "물",
      "알칼리",
      "금속분"
    ],
    "neutralization": {
      "direction": [
        "알칼리계 중화"
      ],
      "waterUse": "물과 만나면 폭발적 발열과 오염 가스가 뿜어져 나오므로 직접 살수 금지, 마른 모래로 방류둑 구축",
      "waterUseJudge": "주의",
      "neutralizerNeed": "예"
    },
    "ppe": [
      "공기호흡기(SCBA)",
      "최고등급 보호복",
      "내산장갑"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 101,
    "nameKo": "디플루오로메탄",
    "nameEn": "Difluoromethane",
    "formula": "CH2F2",
    "cas": "75-10-5",
    "aliases": [
      "R-32",
      "디플루오르메탄"
    ],
    "process": "Etch (식각)",
    "state": "무색 가스",
    "stateCategory": "유기화합물 / 플루오르계 가스",
    "hazardLevel": "중위험",
    "ghsPictograms": [
      "🔥 인화성",
      "🫁 고압가스"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "해당 없음",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 1,
      "flammability": 2,
      "instability": 0,
      "special": "-",
      "code": "H1 F2 I0"
    },
    "odor": {
      "profile": "거의 무취 또는 희미하고 달콤한 에테르 계열 유기 가스 향",
      "keywords": "무취, 에테르향, 유기가스향, 달콤한향",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "1000 ppm (제조사 권고)",
        "source": "AIHA WEEL"
      },
      "stel": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "설정 없음 (질식 주의)",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "0.96 g/cm³ (액화시)",
      "vaporPressure": "12800 mmHg",
      "boilingPoint": "-51.7°C",
      "flashPoint": "가연성 가스"
    },
    "flammability": {
      "flashPoint": "가연성 가스",
      "autoIgnition": "648°C",
      "lel": "13.8%",
      "uel": "29.9%"
    },
    "mainHazards": [
      "인화성 고압가스",
      "밀폐공간 누출 시 산소결핍 질식 위험",
      "연소 시 독성 불화수소(HF) 가스 유도"
    ],
    "waterReactivity": {
      "hazards": [
        "낮음"
      ],
      "decon": [
        "가스 밸브 차단 및 방폭형 환기 장치 전개"
      ]
    },
    "incompatible": [
      "강산화제",
      "알루미늄"
    ],
    "neutralization": {
      "direction": [
        "해당 없음"
      ],
      "waterUse": "가스 차단 우선, 화재 시 용기 냉각용 살수 가능하나 연소 시 불화수소(HF) 가스 발생 주의",
      "waterUseJudge": "가능",
      "neutralizerNeed": "아니오"
    },
    "ppe": [
      "송기마스크 또는 공기호흡기",
      "방폭형 안전장갑"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": true,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 102,
    "nameKo": "육불화부타디엔",
    "nameEn": "Hexafluorobutadiene",
    "formula": "C4F6",
    "cas": "685-63-2",
    "aliases": [
      "C4F6"
    ],
    "process": "Etch (식각)",
    "state": "무색 가스",
    "stateCategory": "유기화합물 / 불소계 식각 가스",
    "hazardLevel": "고위험",
    "ghsPictograms": [
      "🔥 인화성",
      "☠️ 급성독성",
      "🧪 부식성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "해당 없음",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 3,
      "instability": 1,
      "special": "-",
      "code": "H3 F3 I1"
    },
    "odor": {
      "profile": "희미하고 독특한 플루오르올레핀 계열의 유기 가스취",
      "keywords": "유기가스취, 희미한유기취, 특이취",
      "volatilityGrade": "",
      "warningType": "후각 지연형 (MSDS 및 물리센서 크로스체크 필요)"
    },
    "exposure": {
      "twa": {
        "value": "0.1 ppm (제조사 가이드)",
        "source": "제조사 SDS"
      },
      "stel": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "10 ppm 추정",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "1.60 g/cm³",
      "vaporPressure": "1450 mmHg",
      "boilingPoint": "6°C",
      "flashPoint": "가연성 가스"
    },
    "flammability": {
      "flashPoint": "가연성 가스",
      "autoIgnition": "410°C",
      "lel": "5.6%",
      "uel": "14.3%"
    },
    "mainHazards": [
      "고가연성",
      "흡입 시 심각한 독성",
      "연소 분해 시 최극독성 불화수소 및 포스겐 유사 불소 화합물 방출"
    ],
    "waterReactivity": {
      "hazards": [
        "낮음"
      ],
      "decon": [
        "원격 가스 차단",
        "누출 구역 가연성 가스 농도 모니터링 및 배기"
      ]
    },
    "incompatible": [
      "강산화제",
      "공기/산소 혼합물"
    ],
    "neutralization": {
      "direction": [
        "해당 없음"
      ],
      "waterUse": "독성과 인화성을 동시에 가지므로 비상 유출 시 방폭형 배기 장치 및 SCBA 대동 필수",
      "waterUseJudge": "가능",
      "neutralizerNeed": "아니오"
    },
    "ppe": [
      "공기호흡기(SCBA)",
      "방폭 화학보호복",
      "내산장갑"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": true,
      "oxidizerFlammable": false,
      "hfGeneration": true,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 103,
    "nameKo": "팔불화사이클로부탄",
    "nameEn": "Octafluorocyclobutane",
    "formula": "C4F8",
    "cas": "115-25-3",
    "aliases": [
      "C4F8",
      "RC318"
    ],
    "process": "Etch (식각)",
    "state": "무색 가스",
    "stateCategory": "유기화합물 / 불소계 식각 가스",
    "hazardLevel": "중위험",
    "ghsPictograms": [
      "🫁 고압가스"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "해당 없음",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 1,
      "flammability": 0,
      "instability": 0,
      "special": "-",
      "code": "H1 F0 I0"
    },
    "odor": {
      "profile": "완벽한 무취 (고온 분해 전까지 후각 인지 불가)",
      "keywords": "무취, 후각인지불가, 고온분해주의",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "stel": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "설정 없음 (질식 주의)",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "1.48 g/cm³",
      "vaporPressure": "2025 mmHg",
      "boilingPoint": "-6.0°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "비가연성 고압가스이나 밀폐 공간 체류 시 산소 결핍 질식 초래",
      "$400^\\circ\text{C}$ 이상 고온 노출 시 극독성 불소 가스 분해"
    ],
    "waterReactivity": {
      "hazards": [
        "낮음"
      ],
      "decon": [
        "가스 차단 및 자연 환기 유도",
        "밀폐공간 산소 농도 측정 필수"
      ]
    },
    "incompatible": [
      "실리콘",
      "알루미늄 파우더"
    ],
    "neutralization": {
      "direction": [
        "해당 없음"
      ],
      "waterUse": "화학적 반응성은 매우 낮으나 밀폐공간 누출 시 단순 질식 및 고온 화재 시 유독 불소 가스 유도 주의",
      "waterUseJudge": "가능",
      "neutralizerNeed": "아니오"
    },
    "ppe": [
      "공기호흡기(SCBA) - 밀폐공간 진입 시 필수",
      "안전장갑"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": true,
      "scba": true,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": true,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 104,
    "nameKo": "Coolant",
    "nameEn": "Fluorinated Heat Transfer Fluid",
    "formula": "Perfluorocarbons (PFCs)",
    "cas": "혼합물",
    "aliases": [
      "쿨런트",
      "Galden",
      "Fluorinert",
      "냉각액"
    ],
    "process": "Chiller (칠러 냉각)",
    "state": "무색 투명 액체",
    "stateCategory": "불소계 냉각 유체",
    "hazardLevel": "안전",
    "ghsPictograms": [
      "해당 없음"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "중성 불용성",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 1,
      "flammability": 0,
      "instability": 0,
      "special": "-",
      "code": "H1 F0 I0"
    },
    "odor": {
      "profile": "완벽한 무취 (불소계 퍼플루오로폴리에테르의 안정적인 성상)",
      "keywords": "무취, 불소계무취, 안정적성상",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "stel": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "1.70 g/cm³",
      "vaporPressure": "12 mmHg",
      "boilingPoint": "110°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "상온에서 화학적으로 지극히 안정하며 독성이 낮으나",
      "300°C 이상 열분해 시 불화수소(HF) 등 극독성 가스 발생"
    ],
    "waterReactivity": {
      "hazards": [
        "없음"
      ],
      "decon": [
        "중성 액체 흡착 수거 및 세척"
      ]
    },
    "incompatible": [
      "강한 루이스산",
      "리튬"
    ],
    "neutralization": {
      "direction": [
        "해당 없음"
      ],
      "waterUse": "상온 불연성 액체로 주수 가능, 단 고온 발열체에 노출되어 분해될 경우 HF 가스 감지 필요",
      "waterUseJudge": "가능",
      "neutralizerNeed": "아니오"
    },
    "ppe": [
      "일반 안전장갑",
      "보호경 (고온 노출 시 SCBA 필수)"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": true,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 105,
    "nameKo": "DSP300",
    "nameEn": "Diluted Sulfuric Acid Peroxide Blend",
    "formula": "H2SO4 + H2O2 + H2O",
    "cas": "혼합물",
    "aliases": [
      "DSP 세정액",
      "DSP300"
    ],
    "process": "Cleaning (세정)",
    "state": "무색 액체",
    "stateCategory": "강산성 / 혼합 케미컬",
    "hazardLevel": "매우 위험",
    "ghsPictograms": [
      "🧪 부식성",
      "☣️ 강산화성"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "강산성 (pH 1 이하)",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 3,
      "flammability": 0,
      "instability": 2,
      "special": "W",
      "code": "H3 F0 I2 W"
    },
    "odor": {
      "profile": "상온에서 거의 무취이나 유기물 오염 시 약간의 매캐한 황산 흄 취",
      "keywords": "무취, 황산흄취, 매캐한냄새, 오염시자극취",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "1 mg/m³ (황산 기준)",
        "source": "KOSHA"
      },
      "stel": {
        "value": "3 mg/m³",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "15 mg/m³",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "1.45 g/cm³",
      "vaporPressure": "0.1 mmHg 미만",
      "boilingPoint": "120°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "강산성 부식성 액체",
      "강력한 산화제 혼합물로 유기물(흡착포 등)과 접촉 시 발열 및 화재 유발 위험"
    ],
    "waterReactivity": {
      "hazards": [
        "보통"
      ],
      "decon": [
        "회수 펌프 이용 방류벽 내 수거",
        "소다회/중화제로 중화 처리 후 살수"
      ]
    },
    "incompatible": [
      "유기물",
      "환원제",
      "강염기"
    ],
    "neutralization": {
      "direction": [
        "알칼리계 중화"
      ],
      "waterUse": "과산화수소와 황산 혼합물로 유기물 접촉 시 폭발적 산화 반응 위험, 소량 유출은 흡착 후 다량의 물 희석",
      "waterUseJudge": "주의",
      "neutralizerNeed": "예"
    },
    "ppe": [
      "공기호흡기(SCBA)",
      "내산 전면 화학보호복(Level B)",
      "내산장갑"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": false,
      "scba": true,
      "oxidizer": true,
      "flammable": false,
      "oxidizerFlammable": true,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  },
  {
    "id": 106,
    "nameKo": "Poly-E",
    "nameEn": "Polyethylene Etch Waste Blend",
    "formula": "고분자 혼합물",
    "cas": "혼합물",
    "aliases": [
      "Poly-E 수지 배합액"
    ],
    "process": "배수 / 폴리머 처리",
    "state": "백색 슬러리 또는 액체",
    "stateCategory": "고분자 혼합물",
    "hazardLevel": "안전",
    "ghsPictograms": [
      "해당 없음"
    ],
    "ph": [
      {
        "concentration": "대표 기준",
        "value": "거의 중성",
        "note": ""
      }
    ],
    "nfpa": {
      "health": 0,
      "flammability": 1,
      "instability": 0,
      "special": "-",
      "code": "H0 F1 I0"
    },
    "odor": {
      "profile": "완벽한 무취 (수처리용 아민계 고분자 응집제 규격)",
      "keywords": "무취, 아민계고분자",
      "volatilityGrade": "",
      "warningType": "후각 인지불가 (무취 물질로 가스센서에만 의존필수)"
    },
    "exposure": {
      "twa": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "stel": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "ceiling": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      },
      "idlh": {
        "value": "설정 없음",
        "source": "설정 없음 (공정 확인)"
      }
    },
    "physical": {
      "density": "1.05 g/cm³",
      "vaporPressure": "17.5 mmHg",
      "boilingPoint": "100°C",
      "flashPoint": "비가연성"
    },
    "flammability": {
      "flashPoint": "비가연성",
      "autoIgnition": "해당 없음",
      "lel": "해당 없음",
      "uel": "해당 없음"
    },
    "mainHazards": [
      "수용성 고분자 혼합물로 독성은 매우 낮으나 누출 지역 바닥이 극도로 미끄러워져 대원 전도 사고 위험 유발"
    ],
    "waterReactivity": {
      "hazards": [
        "없음"
      ],
      "decon": [
        "모래 등으로 확산 방지 후 흡착포 및 흡입 차량 수거"
      ]
    },
    "incompatible": [
      "강산화제"
    ],
    "neutralization": {
      "direction": [
        "해당 없음"
      ],
      "waterUse": "표준 고체/슬러리 화재 진압 절차 적용 가능",
      "waterUseJudge": "가능",
      "neutralizerNeed": "아니오"
    },
    "ppe": [
      "일반 화학장갑",
      "안전화",
      "보호경"
    ],
    "cautions": [
      "설정 없음 (공정 확인)"
    ],
    "flags": {
      "lowArea": false,
      "scba": false,
      "oxidizer": false,
      "flammable": false,
      "oxidizerFlammable": false,
      "hfGeneration": false,
      "waterForbidden": false,
      "heavierThanAir": true
    }
  }
];
