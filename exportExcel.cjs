const XLSX = require("xlsx");
const { chemicals } = require("./src/data/chemicals");

function joinArray(value) {
  if (!value) return "";
  if (Array.isArray(value)) return value.join(", ");
  return String(value);
}

function containsText(chemical, keywords) {
  const text = JSON.stringify(chemical).toLowerCase();
  return keywords.some((word) => text.includes(word.toLowerCase()));
}

function judgeWaterUse(chemical) {
  const text = `
    ${chemical.neutralization?.waterUse || ""}
    ${(chemical.waterReactivity?.hazards || []).join(" ")}
    ${(chemical.waterReactivity?.decon || []).join(" ")}
  `;

  if (
    text.includes("금지") ||
    text.includes("부적합") ||
    text.includes("직접 물 사용 부적합") ||
    text.includes("살수 금지")
  ) {
    return "금지";
  }

  if (
    text.includes("주의") ||
    text.includes("격렬") ||
    text.includes("발열") ||
    text.includes("HF 생성") ||
    text.includes("HCl 생성")
  ) {
    return "주의";
  }

  if (
    text.includes("가능") ||
    text.includes("물 세척") ||
    text.includes("대량 물")
  ) {
    return "가능";
  }

  return "확인 필요";
}

const rows = chemicals.map((c) => {
  const ghs = joinArray(c.ghsPictograms);
  const ph = (c.ph || [])
    .map((p) => `${p.concentration}: ${p.value}${p.note ? ` (${p.note})` : ""}`)
    .join(" / ");

  const lowArea = containsText(c, [
    "공기보다 무거움",
    "저지대",
    "바닥",
    "pit",
    "트렌치",
  ]);

  const scba = containsText(c, ["공기호흡기", "SCBA"]);
  const oxidizer = containsText(c, ["산화성", "oxidizer"]);
  const flammable = containsText(c, ["인화성", "가연성", "폭발", "LEL", "UEL"]);
  const hfGeneration = containsText(c, ["HF 생성", "불산 생성"]);
  const heavierThanAir = containsText(c, ["공기보다 무거움"]);
  const waterUse = judgeWaterUse(c);

  return {
    번호: c.id,
    한글명: c.nameKo,
    영문명: c.nameEn,
    화학식: c.formula,
    CAS: c.cas,
    별칭: joinArray(c.aliases),
    공정: c.process,
    상태: c.state,
    위험도: c.hazardLevel,

    GHS경고표지: ghs,
    pH정보: ph,

    TWA: c.exposure?.twa?.value || "",
    TWA출처: c.exposure?.twa?.source || "",
    STEL: c.exposure?.stel?.value || "",
    STEL출처: c.exposure?.stel?.source || "",
    Ceiling: c.exposure?.ceiling?.value || "",
    Ceiling출처: c.exposure?.ceiling?.source || "",
    IDLH: c.exposure?.idlh?.value || "",
    IDLH출처: c.exposure?.idlh?.source || "",

    밀도: c.physical?.density || "",
    증기압: c.physical?.vaporPressure || "",
    끓는점: c.physical?.boilingPoint || "",
    인화점: c.physical?.flashPoint || "",

    자연발화온도: c.flammability?.autoIgnition || "",
    LEL: c.flammability?.lel || "",
    UEL: c.flammability?.uel || "",

    주요위험성: joinArray(c.mainHazards),
    물반응성: joinArray(c.waterReactivity?.hazards),
    제독방향: joinArray(c.waterReactivity?.decon),
    반응금지물질: joinArray(c.incompatible),

    중화방향: joinArray(c.neutralization?.direction),
    물사용판단: waterUse,
    물사용상세: c.neutralization?.waterUse || "",
    중화제필요성: c.neutralization?.neutralizerNeed || "",

    권장보호구: joinArray(c.ppe),
    대응주의사항: joinArray(c.cautions),

    저지대체류여부: lowArea ? "Y" : "N",
    SCBA필요여부: scba ? "Y" : "N",
    산화성여부: oxidizer ? "Y" : "N",
    인화성여부: flammable ? "Y" : "N",
    산화성_인화성_동시주의: oxidizer && flammable ? "Y" : "N",
    HF생성가능: hfGeneration ? "Y" : "N",
    물사용금지여부: waterUse === "금지" ? "Y" : "N",
    공기보다무거움여부: heavierThanAir ? "Y" : "N",
  };
});

const worksheet = XLSX.utils.json_to_sheet(rows);

worksheet["!cols"] = [
  { wch: 6 },
  { wch: 18 },
  { wch: 28 },
  { wch: 14 },
  { wch: 16 },
  { wch: 30 },
  { wch: 24 },
  { wch: 18 },
  { wch: 12 },
  { wch: 28 },
  { wch: 35 },
  { wch: 14 },
  { wch: 22 },
  { wch: 14 },
  { wch: 22 },
  { wch: 14 },
  { wch: 22 },
  { wch: 14 },
  { wch: 22 },
  { wch: 18 },
  { wch: 18 },
  { wch: 18 },
  { wch: 18 },
  { wch: 18 },
  { wch: 12 },
  { wch: 12 },
  { wch: 45 },
  { wch: 45 },
  { wch: 45 },
  { wch: 35 },
  { wch: 35 },
  { wch: 14 },
  { wch: 35 },
  { wch: 35 },
  { wch: 35 },
  { wch: 35 },
  { wch: 12 },
  { wch: 12 },
  { wch: 12 },
  { wch: 12 },
  { wch: 18 },
  { wch: 14 },
  { wch: 16 },
];

const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "ERT_CHEM_DB");

XLSX.writeFile(workbook, "ERT_CHEM_DB.xlsx");

console.log("엑셀 파일 생성 완료: ERT_CHEM_DB.xlsx");