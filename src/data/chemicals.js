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
      "health": "4",
      "flammability": "0",
      "instability": "1",
      "special": ""
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
      "health": "3",
      "flammability": "0",
      "instability": "2",
      "special": "W"
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
      "health": "3",
      "flammability": "0",
      "instability": "1",
      "special": ""
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
      "health": "4",
      "flammability": "0",
      "instability": "0",
      "special": "OX"
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
      "health": "3",
      "flammability": "1",
      "instability": "0",
      "special": ""
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
      "health": "3",
      "flammability": "1",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "4",
      "instability": "3",
      "special": "W"
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
      "health": "4",
      "flammability": "4",
      "instability": "2",
      "special": "W"
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
      "health": "4",
      "flammability": "4",
      "instability": "2",
      "special": ""
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
      "health": "4",
      "flammability": "4",
      "instability": "3",
      "special": "W"
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
      "health": "3",
      "flammability": "0",
      "instability": "2",
      "special": "W"
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
      "health": "4",
      "flammability": "0",
      "instability": "3",
      "special": "W, OX"
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
      "health": "2",
      "flammability": "0",
      "instability": "0",
      "special": "OX"
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
      "health": "4",
      "flammability": "0",
      "instability": "3",
      "special": "W, OX"
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
      "health": "3",
      "flammability": "0",
      "instability": "0",
      "special": "OX"
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
      "health": "4",
      "flammability": "0",
      "instability": "2",
      "special": "OX"
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
      "health": "0",
      "flammability": "4",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "0",
      "instability": "0",
      "special": "OX"
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
      "health": "3",
      "flammability": "4",
      "instability": "2",
      "special": "W"
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
      "health": "3",
      "flammability": "4",
      "instability": "2",
      "special": "W"
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
      "health": "2",
      "flammability": "2",
      "instability": "1",
      "special": ""
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
      "health": "4",
      "flammability": "0",
      "instability": "1",
      "special": "W"
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
      "health": "1",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "health": "1",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "health": "3",
      "flammability": "0",
      "instability": "1",
      "special": ""
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
      "health": "2",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "special": "-"
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
      "health": "3",
      "flammability": "0",
      "instability": "1",
      "special": ""
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
      "health": "3",
      "flammability": "0",
      "instability": "1",
      "special": "OX"
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
      "health": "2",
      "flammability": "1",
      "instability": "0",
      "special": ""
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
      "health": "0",
      "flammability": "1",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "3",
      "instability": "0",
      "special": ""
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
      "health": "0",
      "flammability": "0",
      "instability": "0",
      "special": "SA"
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
      "health": "0",
      "flammability": "0",
      "instability": "0",
      "special": "SA"
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
      "health": "0",
      "flammability": "0",
      "instability": "0",
      "special": "SA"
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
      "health": "0",
      "flammability": "0",
      "instability": "0",
      "special": "OX"
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
      "health": "2",
      "flammability": "0",
      "instability": "0",
      "special": "SA"
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
      "health": "3",
      "flammability": "4",
      "instability": "0",
      "special": ""
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
      "special": "-"
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
      "special": "-"
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
      "health": "1",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "health": "3",
      "flammability": "0",
      "instability": "1",
      "special": ""
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
      "health": "3",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "health": "3",
      "flammability": "2",
      "instability": "0",
      "special": ""
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
      "special": "-"
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
      "health": "2",
      "flammability": "3",
      "instability": "0",
      "special": ""
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
      "health": "3",
      "flammability": "1",
      "instability": "1",
      "special": ""
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
      "health": "2",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "health": "3",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "1",
      "instability": "0",
      "special": ""
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
      "health": "1",
      "flammability": "0",
      "instability": "0",
      "special": "OX"
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
      "health": "2",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "special": "-"
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
      "health": "2",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "1",
      "instability": "0",
      "special": ""
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
      "health": "1",
      "flammability": "1",
      "instability": "0",
      "special": ""
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
      "special": "-"
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
      "health": "1",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "health": "1",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "1",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "0",
      "instability": "3",
      "special": "OX"
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
      "health": "3",
      "flammability": "1",
      "instability": "0",
      "special": ""
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
      "special": "-"
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
      "health": "2",
      "flammability": "3",
      "instability": "1",
      "special": ""
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
      "special": "-"
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
      "health": "3",
      "flammability": "4",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "3",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "3",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "1",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "1",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "2",
      "instability": "0",
      "special": ""
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
      "health": "2",
      "flammability": "2",
      "instability": "0",
      "special": ""
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
      "health": "3",
      "flammability": "0",
      "instability": "3",
      "special": "OX"
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
      "health": "1",
      "flammability": "3",
      "instability": "4",
      "special": ""
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
      "health": "1",
      "flammability": "3",
      "instability": "0",
      "special": ""
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
      "health": "1",
      "flammability": "3",
      "instability": "0",
      "special": ""
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
      "health": "4",
      "flammability": "0",
      "instability": "0",
      "special": "OX"
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
      "health": "3",
      "flammability": "0",
      "instability": "0",
      "special": "OX"
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
      "health": "2",
      "flammability": "0",
      "instability": "0",
      "special": "OX"
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
      "health": "3",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "health": "3",
      "flammability": "0",
      "instability": "2",
      "special": "W"
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
      "health": "3",
      "flammability": "0",
      "instability": "0",
      "special": ""
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
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
      "health": "-",
      "flammability": "-",
      "instability": "-",
      "special": "-"
    }
  }
];