import React, { useMemo, useState } from "react";
import {
  Search,
  ShieldCheck,
  AlertTriangle,
  Droplets,
  FlaskConical,
  Flame,
  BadgeAlert,
  Activity,
  Wind,
  ArrowDown,
  Waves,
  Skull,
  Diamond,
} from "lucide-react";

import { chemicals } from "./data/chemicals";

const levelColor = {
  "매우 위험": "#dc2626",
  고위험: "#ea580c",
  주의: "#ca8a04",
};

export default function App() {
  const PASSWORD = "13114";

  const AUTH_TIME_LIMIT = 30 * 60 * 1000; // 30분

  const [isAuthed, setIsAuthed] = useState(() => {
  const savedTime = Number(localStorage.getItem("ertchem_auth_time"));
  const now = Date.now();

  return savedTime && now - savedTime < AUTH_TIME_LIMIT;
  });
  const [password, setPassword] = useState("");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(chemicals[0]);
  const [showOdorGuide, setShowOdorGuide] = useState(false);

  if (!isAuthed) {
    return (
      <div style={styles.page}>
        <div style={styles.loginCard}>
          <div style={{ marginBottom: 20 }}>
            <ShieldCheck size={48} />
          </div>

          <div style={styles.loginTitle}>ERT CHEM</div>

          <div style={styles.loginSub}>
            내부 전용 시스템입니다.
            <br />
            비밀번호를 입력하세요.
          </div>

          <input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              ...styles.input,
              width: "100%",
              boxSizing: "border-box",
              background: "#f8fafc",
              color: "#000",
              border: "1px solid #cbd5e1",
              borderRadius: 14,
              padding: 14,
              marginBottom: 16,
            }}
          />

          <button
            onClick={() => {
              if (password === PASSWORD) {
                localStorage.setItem("ertchem_auth_time", String(Date.now()));
                setIsAuthed(true);
              } else {
                alert("비밀번호가 틀렸습니다.");
              }
            }}
            style={styles.loginButton}
          >
            접속
          </button>
        </div>
      </div>
    );
  }

  const filtered = useMemo(() => {
    if (!query) return chemicals;

    return chemicals.filter((c) => {
      const text = `
        ${c.nameKo}
        ${c.nameEn}
        ${c.formula}
        ${c.cas}
        ${(c.aliases || []).join(" ")}
        ${c.process}
      `.toLowerCase();

      return text.includes(query.toLowerCase());
    });
  }, [query]);

  const flags = getFlags(selected);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.stickyArea}>
          <header style={styles.header}>
            <div style={styles.titleWrap}>
              <ShieldCheck size={24} />
              <div>
                <div style={styles.title}>ERT CHEM</div>
                <div style={styles.subtitle}>반도체 화학물질 대응 플랫폼</div>
              </div>
            </div>

            <div style={styles.searchBox}>
              <Search size={18} color="#64748b" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="HF / 불산 / CAS 검색"
                style={{
                  ...styles.input,
                  color: "#000",
                  }}
              />
            </div>
          </header>

          <div style={styles.chemicalStickyList}>
            {filtered.map((chemical) => (
              <button
                key={chemical.id}
                onClick={() => setSelected(chemical)}
                style={{
                  ...styles.chemicalCard,
                  border:
                    selected.id === chemical.id
                      ? "2px solid #0f172a"
                      : "1px solid #e2e8f0",
                }}
              >
                <div style={styles.chemicalName}>{chemical.nameKo}</div>
                <div style={styles.chemicalSub}>{chemical.formula}</div>
                <div
                  style={{
                    ...styles.levelBadge,
                    background: levelColor[chemical.hazardLevel] || "#64748b",
                  }}
                >
                  {chemical.hazardLevel}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div style={styles.detailCard}>
          <div style={styles.topInfo}>
            <div
              style={{
                paddingTop: 8,
              }}
            >
              <div style={styles.bigName}>{selected.nameKo}</div>
              <div style={styles.engName}>{selected.nameEn}</div>
              <div style={styles.cas}>CAS No. {selected.cas}</div>
            </div>

            <NfpaDiamond nfpa={selected.nfpa} />
          </div>

          <TopSummary selected={selected} />

          <Section title="현장 핵심 경고" icon={<AlertTriangle size={18} />}>
            <CriticalFlags flags={flags} />
          </Section>

          <Section title="GHS 경고표지" icon={<BadgeAlert size={18} />}>
            <TagWrap items={selected.ghsPictograms || []} />
          </Section>

          <Section title="기본 정보" icon={<Activity size={18} />}>
            <InfoLine title="화학식" value={selected.formula} />
            <InfoLine title="상태" value={selected.state} />
            <InfoLine title="성상분류" value={selected.stateCategory} />
            <InfoLine title="냄새 키워드" value={selected.odor?.keywords} />
            <InfoLine title="공정" value={selected.process} />
          </Section>

          <Section title="노출 기준" icon={<Skull size={18} />}>
            <ExposureLine title="TWA" item={selected.exposure?.twa} />
            <ExposureLine title="STEL" item={selected.exposure?.stel} />
            <ExposureLine title="Ceiling" item={selected.exposure?.ceiling} />
            <ExposureLine title="IDLH" item={selected.exposure?.idlh} />
          </Section>

          <Section title="물리·화학 특성" icon={<Droplets size={18} />}>
            <InfoLine title="밀도" value={selected.physical?.density} />
            <InfoLine title="증기압" value={selected.physical?.vaporPressure} />
            <InfoLine title="끓는점" value={selected.physical?.boilingPoint} />
            <InfoLine title="인화점" value={selected.physical?.flashPoint} />
          </Section>

          <Section title="인화·폭발 특성" icon={<Flame size={18} />}>
            <InfoLine title="인화점" value={selected.flammability?.flashPoint} />
            <InfoLine
              title="자연발화"
              value={selected.flammability?.autoIgnition}
            />
            <InfoLine title="LEL" value={selected.flammability?.lel} />
            <InfoLine title="UEL" value={selected.flammability?.uel} />
          </Section>

          <Section title="주요 위험성" icon={<AlertTriangle size={18} />}>
            <BulletList items={selected.mainHazards || []} />
          </Section>

          <Section title="물 반응성" icon={<Waves size={18} />}>
            <WaterJudge value={flags.waterUse} />
            <BulletList items={selected.waterReactivity?.hazards || []} />
          </Section>

          <Section title="제독 방향" icon={<Droplets size={18} />}>
            <BulletList items={selected.waterReactivity?.decon || []} />
          </Section>

          <Section title="반응성 / 혼합 주의" icon={<FlaskConical size={18} />}>
            <TagWrap items={selected.incompatible || []} />
          </Section>

          <Section title="중화 방향" icon={<FlaskConical size={18} />}>
            <BulletList items={selected.neutralization?.direction || []} />

            <NoteBox
              title="물 사용 판단"
              value={selected.neutralization?.waterUse}
            />

            <NoteBox
              title="중화제 필요성"
              value={selected.neutralization?.neutralizerNeed}
            />
          </Section>

          <Section
              title={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>냄새 정보</span>

                  <button
                    onClick={() => setShowOdorGuide(!showOdorGuide)}
                    style={styles.infoButton}
                  >
                    {showOdorGuide ? "닫기" : "설명"}
                  </button>
                </div>
              }
              icon={<Wind size={18} />}
            >
             {showOdorGuide && (
                <div style={styles.odorGuide}>
                  <strong>
                    ① 휘발성등급 (증기압 기반 위험도)
                  </strong>

                  <br /><br />

                  <b>상시기체</b>
                  <br />
                  상온·상압에서 기체 상태인 물질로,
                  미세 누출로도 팹 전체로 냄새가
                  확산될 확률 100%
                  <br />
                  예) 암모니아, 포스핀, 실란

                  <br /><br />

                  <b>고휘발성</b>
                  <br />
                  액체 상태로 누출되어도
                  매우 빠르게 기화하여
                  증기 구름을 형성
                  <br />
                  예) 아세톤, HMDS, nBA, 사염화규소

                  <br /><br />

                  <b>저휘발성</b>
                  <br />
                  초기에는 국소 냄새만 발생하나
                  표면적 증가 또는 온도 상승 시
                  증기량 급증 가능
                  <br />
                  예) PR, NCE2, LTO520

                  <br /><br />

                  <b>비휘발성</b>
                  <br />
                  상온 기화 거의 없음
                  냄새보다 접촉 위험 주의
                  <br />
                  예) 황산, TMAH, 수산화나트륨

                  <hr style={{ margin: "16px 0" }} />

                  <strong>
                    ② 후각경보유형
                  </strong>

                  <br /><br />

                  <b>후각 조기선행형</b>
                  <br />
                  사람이 냄새를 맡는 농도가
                  독성 허용농도(TWA)보다 훨씬 낮아
                  위험농도 도달 전 냄새로
                  조기 인지가 가능한 물질
                  <br />
                  예) 암모니아, 수산화암모늄, 아세톤

                  <br /><br />

                  <b>후각 지연형</b>
                  <br />
                  유출 초기에는 FFU(공조) 영향이나
                  낮은 기화속도로 인해 냄새가
                  잘 감지되지 않다가,
                  액체가 넓게 퍼지거나
                  공정 열원에 의해 기화량이 증가하면서
                  뒤늦게 냄새가 급격히 올라오는 유형
                  <br />
                  냄새를 인지한 시점에는
                  이미 독성 허용농도(TWA)를
                  초과했거나 인화성 위험범위에
                  도달했을 가능성이 높아
                  후각만 신뢰하면
                  초기 골든타임을 놓칠 수 있음
                  <br />
                  예) PR, HMDS, nBA, LTO520, 과산화수소

                  <br /><br />

                  <b>후각 마비 / 위험형</b>
                  <br />
                  냄새 인지 시 이미 위험하거나
                  후각 마비를 유발
                  <br />
                  SCBA 착용 권고
                  <br />
                  예) 황화수소, 포스핀, 아르신,
                  게르만, 불산, NCE2

                  <br /><br />

                  <b>후각 인지불가</b>
                  <br />
                  무취 물질
                  <br />
                  후각 의존 금지
                  <br />
                  센서 및 검지기 의존
                  <br />
                  예) 질소, 일산화탄소,
                  삼불화질소, Coolant, DSP300, 황산
                </div>
              )}

            <InfoLine
              title="냄새 프로필"
              value={selected.odor?.profile}
            />

            <div style={styles.odorGrid}>
              <div style={styles.odorBox}>
                <div style={styles.odorTitle}>
                  휘발성 등급
                </div>

                <div
                  style={{
                    ...styles.odorBadge,
                    ...getVolatilityStyle(
                      selected.odor?.volatilityGrade || ""
                    ),
                  }}
                >
                  {selected.odor?.volatilityGrade || "-"}
                </div>
              </div>

              <div style={styles.odorBox}>
                <div style={styles.odorTitle}>
                  후각경보유형
                </div>

                <div
                  style={{
                    ...styles.odorBadge,
                    ...getWarningStyle(
                      selected.odor?.warningType || ""
                    ),
                  }}
                >
                  {selected.odor?.warningType || "-"}
                </div>
              </div>
            </div>
          </Section>

          <Section title="권장 보호구" icon={<ShieldCheck size={18} />}>
            <TagWrap items={selected.ppe || []} />
          </Section>

          <Section title="대응 주의사항" icon={<AlertTriangle size={18} />}>
            <BulletList items={selected.cautions || []} />
          </Section>
        </div>
      </div>
    </div>
  );
}

function getChemicalTheme(value = "") {
  const text = value.toLowerCase();

  // 산
  if (
    text.includes("산") ||
    text.includes("acid")
  ) {
    return {
      border: "#fdc44a",
      bg: "#f8f18a",
    };
  }

  // 알칼리
  if (
    text.includes("알칼리") ||
    text.includes("염기") ||
    text.includes("base")
  ) {
    return {
      border: "#2369f7",
      bg: "#d1ddf8",
    };
  }

  // 유기
  if (
    text.includes("유기") ||
    text.includes("organic")
  ) {
    return {
      border: "#fd7777",
      bg: "#f8dada",
    };
  }

  return null;
}

function TopSummary({ selected }) {
  const phValue = selected.ph?.[0]?.value || "정보 없음";
  const state = selected.stateCategory || selected.state || "정보 없음";
  const stateTheme =
  getChemicalTheme(state);
  const phTheme =
    getChemicalTheme(
      selected.ph?.[0]?.value || ""
    );

  return (
    <div style={styles.summaryArea}>
      <div
          style={{
            ...styles.phWideBox,

            ...(phTheme && {
              background: phTheme.bg,
              border:
                "2px solid " + phTheme.border,
            }),
          }}
>
        <div style={styles.summaryTitle}>pH</div>
        <div style={styles.phValue}>{phValue}</div>
      </div>

      <div style={styles.summaryGrid2}>
        <SummaryBox
            title="성상"
            value={state}
            sub={selected.state}
            theme={stateTheme}
          />
        <GhsBox items={selected.ghsPictograms || []} />
      </div>
    </div>
  );
}

function SummaryBox({ title, value, sub, theme }) {
  return (
    <div
        style={{
          ...styles.summaryBox,

          ...(theme && {
            background: theme.bg,
            border:
              "2px solid " + theme.border,
          }),
        }}
      >
      <div style={styles.summaryTitle}>{title}</div>
      <div style={styles.summaryValue}>{value}</div>
      {sub && <div style={styles.summarySub}>{sub}</div>}
    </div>
  );
}

function NfpaBox({ nfpa }) {
  return (
    <div style={styles.ghsBox}>
      <div style={styles.summaryTitle}>GHS</div>
      <TagWrapSmall items={nfpa?.ghsItems || []} />
    </div>
  );
}

function NfpaDiamond({ nfpa }) {
  return (
    <div style={styles.nfpaContainer}>
      <div style={styles.nfpaDiamondWrap}>
        <div style={{ ...styles.nfpaCell, ...styles.nfpaFire }}>
          <span style={styles.nfpaText}>
            {nfpa?.flammability ?? "-"}
          </span>
        </div>

        <div style={{ ...styles.nfpaCell, ...styles.nfpaHealth }}>
          <span style={styles.nfpaText}>
            {nfpa?.health ?? "-"}
          </span>
        </div>

        <div style={{ ...styles.nfpaCell, ...styles.nfpaInstability }}>
          <span style={styles.nfpaText}>
            {nfpa?.instability ?? "-"}
          </span>
        </div>

        <div style={{ ...styles.nfpaCell, ...styles.nfpaSpecial }}>
          <span style={styles.nfpaText}>
            {nfpa?.special || ""}
          </span>
        </div>
      </div>

      <div style={styles.nfpaLabel}>
        NFPA
      </div>
    </div>
  );
}

function GhsBox({ items }) {
  return (
    <div style={styles.ghsBox}>
      <div style={styles.summaryTitle}>GHS</div>
      <div style={styles.ghsMiniWrap}>
        {items.map((item, index) => (
          <div key={index} style={styles.ghsMiniTag}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function getFlags(c) {
  if (c.flags) {
    let waterUse = c.neutralization?.waterUseJudge || c.neutralization?.waterUse || "주의";

    if (c.flags.waterForbidden) waterUse = "금지";
    else if (String(waterUse).includes("가능")) waterUse = "가능";
    else if (String(waterUse).includes("금지")) waterUse = "금지";
    else waterUse = "주의";

    return {
      waterUse,
      lowArea: c.flags.lowArea || c.flags.heavierThanAir,
      oxidizerAndFlammable: c.flags.oxidizerFlammable,
      hfGeneration: c.flags.hfGeneration,
      scba: c.flags.scba,
    };
  }

  const allText = JSON.stringify(c || {}).toLowerCase();
  const has = (words) => words.some((w) => allText.includes(w.toLowerCase()));
  const ghs = (c.ghsPictograms || []).join(" ");

  const isOxidizer = ghs.includes("산화성") || has(["산화성", "oxidizer"]);
  const isFlammable =
    ghs.includes("인화성") || has(["인화성", "가연성", "폭발", "lel", "uel"]);
  const hfGeneration = has(["hf 생성", "HF 생성", "불산 생성"]);
  const scba = has(["공기호흡기", "SCBA"]);
  const lowArea = has(["공기보다 무거움", "저지대", "바닥", "pit", "PIT", "트렌치"]);

  const waterText = `${c.neutralization?.waterUse || ""} ${
    c.waterReactivity?.hazards?.join(" ") || ""
  } ${c.waterReactivity?.decon?.join(" ") || ""}`;

  let waterUse = "주의";
  if (
    waterText.includes("금지") ||
    waterText.includes("부적합") ||
    waterText.includes("직접 물 사용 부적합") ||
    waterText.includes("살수 금지")
  ) {
    waterUse = "금지";
  } else if (
    waterText.includes("가능") ||
    waterText.includes("물 세척") ||
    waterText.includes("대량 물")
  ) {
    waterUse = "가능";
  }

  return {
    waterUse,
    lowArea,
    oxidizerAndFlammable: isOxidizer && isFlammable,
    hfGeneration,
    scba,
  };
}

function CriticalFlags({ flags }) {
  const items = [];

  items.push({
    label: `물 사용: ${flags.waterUse}`,
    icon: <Droplets size={16} />,
    type:
      flags.waterUse === "금지"
        ? "danger"
        : flags.waterUse === "주의"
        ? "warn"
        : "safe",
  });

  if (flags.lowArea) {
    items.push({
      label: "저지대 체류 가능",
      icon: <ArrowDown size={16} />,
      type: "danger",
    });
  }

  if (flags.oxidizerAndFlammable) {
    items.push({
      label: "산화성+인화성 동시 주의",
      icon: <Flame size={16} />,
      type: "danger",
    });
  }

  if (flags.hfGeneration) {
    items.push({
      label: "HF 생성 가능",
      icon: <FlaskConical size={16} />,
      type: "danger",
    });
  }

  if (flags.scba) {
    items.push({
      label: "SCBA 권고",
      icon: <Wind size={16} />,
      type: "danger",
    });
  }

  return (
    <div style={styles.flagWrap}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            ...styles.flag,
            ...(item.type === "danger"
              ? styles.flagDanger
              : item.type === "warn"
              ? styles.flagWarn
              : styles.flagSafe),
          }}
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function WaterJudge({ value }) {
  const style =
    value === "금지"
      ? styles.waterDanger
      : value === "주의"
      ? styles.waterWarn
      : styles.waterSafe;

  return (
    <div style={{ ...styles.waterJudge, ...style }}>
      <strong>물 사용 판단: {value}</strong>
      <div style={styles.waterJudgeText}>
        가능이어도 비산·발열·2차 오염 가능성은 별도 확인 필요
      </div>
    </div>
  );
}

function getVolatilityStyle(value = "") {
  if (value.includes("상시기체")) {
    return {
      background: "#f3e8ff",
      border: "1px solid #7c3aed",
      color: "#6b21a8",
    };
  }

  if (value.includes("고휘발성")) {
    return {
      background: "#fee2e2",
      border: "1px solid #dc2626",
      color: "#b91c1c",
    };
  }

  if (value.includes("저휘발성")) {
    return {
      background: "#fef3c7",
      border: "1px solid #f59e0b",
      color: "#92400e",
    };
  }

  if (value.includes("비휘발성")) {
    return {
      background: "#dcfce7",
      border: "1px solid #16a34a",
      color: "#166534",
    };
  }

  return {};
}

function getWarningStyle(value = "") {
  if (value.includes("조기선행")) {
    return {
      background: "#dcfce7",
      border: "1px solid #16a34a",
      color: "#166534",
    };
  }

  if (value.includes("지연")) {
    return {
      background: "#fef9c3",
      border: "1px solid #eab308",
      color: "#854d0e",
    };
  }

  if (value.includes("인지불가")) {
    return {
      background: "#ffedd5",
      border: "1px solid #f97316",
      color: "#9a3412",
    };
  }

  if (
    value.includes("마비") ||
    value.includes("위험")
  ) {
    return {
      background: "#fee2e2",
      border: "1px solid #dc2626",
      color: "#991b1b",
    };
  }

  return {};
}

function Section({ title, icon, children }) {
  return (
    <div style={styles.section}>
      <div style={styles.sectionTitle}>
        {icon}
        <div style={{ flex: 1 }}>{title}</div>
      </div>
      {children}
    </div>
  );
}

function InfoLine({ title, value }) {
  return (
    <div style={styles.infoLine}>
      <span style={styles.infoTitle}>{title}</span>
      <span style={styles.infoValue}>{value || "정보 없음"}</span>
    </div>
  );
}

function ExposureLine({ title, item }) {
  if (!item) return <InfoLine title={title} value="정보 없음" />;

  return (
    <div style={styles.exposureBox}>
      <div style={styles.exposureTop}>
        <span style={styles.infoTitle}>{title}</span>
        <span style={styles.infoValue}>{item.value}</span>
      </div>
      <div style={styles.exposureSource}>출처/기준: {item.source || "-"}</div>
      {item.note && <div style={styles.exposureNote}>{item.note}</div>}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={styles.bullet}>
          <span>•</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function TagWrap({ items }) {
  return (
    <div style={styles.tagWrap}>
      {items.map((item, index) => (
        <div key={index} style={styles.tag}>
          {item}
        </div>
      ))}
    </div>
  );
}

function NoteBox({ title, value }) {
  return (
    <div style={styles.noteBox}>
      <div style={styles.noteTitle}>{title}</div>
      <div style={styles.noteValue}>{value || "정보 없음"}</div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f1f5f9",
    padding: 10,
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, sans-serif",
    color: "#0f172a",
  },

  container: {
    maxWidth: 760,
    margin: "0 auto",
  },

  stickyArea: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "#f1f5f9",
    paddingTop: 6,
    paddingBottom: 8,
  },

  header: {
    background: "white",
    borderRadius: 20,
    padding: 12,
    marginBottom: 8,
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },

  titleWrap: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },

  title: {
    fontSize: 21,
    fontWeight: 800,
  },

  subtitle: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 14,
    padding: "11px 13px",
  },

  input: {
    border: "none",
    outline: "none",
    background: "transparent",
    width: "100%",
    fontSize: 15,
    color: "#000",
  },

  chemicalStickyList: {
    display: "flex",
    gap: 8,
    overflowX: "auto",
    paddingBottom: 4,
  },

  chemicalCard: {
    minWidth: 92,
    background: "white",
    borderRadius: 16,
    padding: 10,
    cursor: "pointer",
    textAlign: "left",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },

  chemicalName: {
    fontSize: 14,
    fontWeight: 800,
    marginBottom: 3,
    whiteSpace: "nowrap",
  },

  chemicalSub: {
    color: "#64748b",
    marginBottom: 7,
    fontSize: 12,
    whiteSpace: "nowrap",
  },

  levelBadge: {
    color: "white",
    borderRadius: 999,
    padding: "4px 8px",
    fontSize: 10,
    width: "fit-content",
    fontWeight: 800,
  },

  detailCard: {
    background: "white",
    borderRadius: 24,
    padding: 18,
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },

  topInfo: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 18,
  },

  bigName: {
    fontSize: 30,
    fontWeight: 800,
  },

  engName: {
    color: "#64748b",
    marginTop: 5,
    fontSize: 14,
  },

  cas: {
    marginTop: 7,
    fontSize: 13,
    color: "#94a3b8",
  },

  bigBadge: {
    color: "white",
    borderRadius: 18,
    padding: "10px 14px",
    height: "fit-content",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },

  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10,
    marginBottom: 24,
  },

  summaryBox: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 16,
    padding: 13,
    minWidth: 0,
  },

  summaryGrid2: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
    gap: 10,
  },

  summaryArea: {
    marginBottom: 24,
  },

  phWideBox: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 16,
    padding: "10px 13px",
    marginBottom: 10,
  },

  phValue: {
    fontSize: "clamp(15px, 4vw, 20px)",
    fontWeight: 800,
    lineHeight: 1.25,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  nfpaBox: {
    background: "#fef2f2",
    border: "1px solid #fecaca",
    borderRadius: 16,
    padding: 13,
    minWidth: 0,
  },

  summaryTitle: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    color: "#64748b",
    fontSize: 12,
    fontWeight: 800,
    marginBottom: 7,
  },

  summaryValue: {
    fontSize: 17,
    fontWeight: 800,
    lineHeight: 1.3,
  },

  summarySub: {
    fontSize: 11,
    color: "#64748b",
    marginTop: 5,
    lineHeight: 1.3,
  },

  nfpaRow: {
    display: "flex",
    gap: 5,
    flexWrap: "wrap",
  },

  nfpaChip: {
    color: "white",
    borderRadius: 8,
    padding: "5px 7px",
    fontSize: 12,
    fontWeight: 900,
  },

  section: {
    marginBottom: 26,
  },

  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 14,
    width: "100%",
  },

  infoLine: {
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    padding: "12px 0",
    borderBottom: "1px solid #e2e8f0",
  },

  infoTitle: {
    color: "#64748b",
    fontWeight: 600,
    minWidth: 90,
  },

  infoValue: {
    textAlign: "right",
    fontWeight: 700,
    lineHeight: 1.5,
  },

  exposureBox: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },

  exposureTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 8,
  },

  exposureSource: {
    fontSize: 13,
    color: "#64748b",
    marginBottom: 4,
  },

  exposureNote: {
    fontSize: 12,
    color: "#94a3b8",
    lineHeight: 1.5,
  },

  bullet: {
    display: "flex",
    gap: 10,
    marginBottom: 12,
    lineHeight: 1.6,
  },

  tagWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },

  tag: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    padding: "10px 14px",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 600,
  },

  noteBox: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 18,
    padding: 16,
    marginTop: 14,
  },

  noteTitle: {
    fontWeight: 700,
    marginBottom: 8,
  },

  noteValue: {
    lineHeight: 1.6,
    color: "#334155",
  },

  flagWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },

  flag: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    borderRadius: 999,
    padding: "9px 12px",
    fontSize: 13,
    fontWeight: 800,
  },

  flagDanger: {
    background: "#fee2e2",
    color: "#991b1b",
    border: "1px solid #fecaca",
  },

  flagWarn: {
    background: "#fef3c7",
    color: "#92400e",
    border: "1px solid #fde68a",
  },

  flagSafe: {
    background: "#dcfce7",
    color: "#166534",
    border: "1px solid #bbf7d0",
  },

  waterJudge: {
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    border: "1px solid",
  },

  waterDanger: {
    background: "#fee2e2",
    color: "#991b1b",
    borderColor: "#fecaca",
  },

  waterWarn: {
    background: "#fef3c7",
    color: "#92400e",
    borderColor: "#fde68a",
  },

  waterSafe: {
    background: "#dcfce7",
    color: "#166534",
    borderColor: "#bbf7d0",
  },

  waterJudgeText: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 1.5,
  },

  loginCard: {
    background: "white",
    borderRadius: 24,
    padding: 24,
    maxWidth: 420,
    margin: "80px auto",
    textAlign: "center",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },

  loginTitle: {
    fontSize: 28,
    fontWeight: 800,
    marginBottom: 10,
  },

  loginSub: {
    color: "#64748b",
    marginBottom: 24,
    lineHeight: 1.6,
  },

  loginInput: {
    width: "100%",
    boxSizing: "border-box",
    background: "#f8fafc",
    border: "1px solid #cbd5e1",
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
  },

  loginButton: {
    width: "100%",
    boxSizing: "border-box",
    background: "#0f172a",
    color: "white",
    border: "none",
    borderRadius: 14,
    padding: 14,
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
  },

  nfpaDiamondWrap: {
  position: "relative",
  width: 68,
  height: 68,
},

nfpaCell: {
  position: "absolute",

  width: 30,
  height: 30,

  transform: "rotate(45deg)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  border: "2px solid #000",

  boxSizing: "border-box",
},

nfpaText: {
  transform: "rotate(-45deg)",

  fontSize: 14,
  fontWeight: 900,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100%",
},

nfpaFire: {
  top: 0,
  left: 19,
  background: "#dc2626",
  color: "white",
},

nfpaFire: {
  top: 0,
  left: 19,
  background: "#dc2626",
  color: "white",
},

nfpaHealth: {
  top: 19,
  left: 0,
  background: "#2563eb",
  color: "white",
},

nfpaInstability: {
  top: 19,
  right: 0,
  background: "#facc15",
  color: "#111827",
},

nfpaSpecial: {
  top: 38,
  left: 19,
  background: "#ffffff",
  color: "#111827",
},

nfpaContainer: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
},

nfpaLabel: {
  marginTop: 10,
  fontSize: 11,
  fontWeight: 700,
  color: "#64748b",
},

ghsBox: {
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: 16,
  padding: 13,
  minWidth: 0,
},

ghsMiniWrap: {
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
},

ghsMiniTag: {
  background: "white",
  border: "1px solid #e2e8f0",
  borderRadius: 999,
  padding: "5px 8px",
  fontSize: 11,
  fontWeight: 700,
  lineHeight: 1.2,
},
  
odorGrid: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 10,
  marginTop: 12,
},

odorBox: {
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: 14,
  padding: 14,
},

odorTitle: {
  fontSize: 12,
  color: "#64748b",
  marginBottom: 6,
  fontWeight: 700,
},

odorValue: {
  fontSize: 16,
  fontWeight: 800,
},

infoButton: {
  border: "1px solid #cbd5e1",
  background: "#ffffff",
  borderRadius: 8,
  padding: "4px 10px",
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 700,
  color: "#475569",
},

odorGuide: {
  background: "#f8fafc",
  border: "1px solid #cbd5e1",
  borderRadius: 14,
  padding: 16,
  marginBottom: 14,
  fontSize: 13,
  lineHeight: 1.8,
  color: "#334155",
},

odorBadge: {
  padding: "8px 10px",
  borderRadius: 999,
  fontSize: 13,
  fontWeight: 700,
  textAlign: "center",
},

};