import React, { useMemo, useState } from "react";
import {
  Search,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Droplets,
  FlaskConical,
  Flame,
  BadgeAlert,
} from "lucide-react";

import { chemicals } from "./data/chemicals";

const hazardColor = {
  "매우 위험": "#ef4444",
  고위험: "#f97316",
  주의: "#eab308",
};

export default function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(chemicals[0]);

  const results = useMemo(() => {
    if (!query) return chemicals;

    return chemicals.filter((c) => {
      const searchText = `
        ${c.nameKo}
        ${c.nameEn}
        ${c.formula}
        ${c.cas}
        ${c.aliases.join(" ")}
      `.toLowerCase();

      return searchText.includes(query.toLowerCase());
    });
  }, [query]);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <Header />

        <div style={styles.layout}>
          <aside>
            <SearchBox query={query} setQuery={setQuery} />

            {results.map((chemical) => (
              <button
                key={chemical.id}
                onClick={() => setSelected(chemical)}
                style={{
                  ...styles.resultCard,
                  border:
                    selected.id === chemical.id
                      ? "2px solid #0f172a"
                      : "1px solid #e2e8f0",
                }}
              >
                <div style={styles.resultTop}>
                  <div>
                    <div style={styles.resultName}>{chemical.nameKo}</div>
                    <div style={styles.subText}>{chemical.nameEn}</div>
                  </div>

                  <div
                    style={{
                      ...styles.hazardBadge,
                      background: hazardColor[chemical.hazardLevel],
                    }}
                  >
                    {chemical.hazardLevel}
                  </div>
                </div>

                <div style={styles.process}>{chemical.process}</div>
              </button>
            ))}
          </aside>

          <main>
            <ChemicalHeader selected={selected} />

            <Section title="기본 정보" icon={<FileText size={20} />}>
              <Grid>
                <InfoBox title="화학식" value={selected.formula} />
                <InfoBox title="CAS No." value={selected.cas} />
                <InfoBox title="상태" value={selected.state} />
                <InfoBox title="공정" value={selected.process} />
              </Grid>
            </Section>

            <Section title="GHS 경고표지" icon={<BadgeAlert size={20} />}>
              <PillWrap items={selected.ghsPictograms} />
            </Section>

            <Section title="pH 정보" icon={<Droplets size={20} />}>
              {selected.ph.map((p, index) => (
                <InfoBox
                  key={index}
                  title={`${p.concentration}`}
                  value={`${p.value} / ${p.note}`}
                />
              ))}
            </Section>

            <Section title="노출 기준" icon={<AlertTriangle size={20} />}>
              <InfoLine
                title="TWA"
                value={`${selected.exposure.twa.value} (${selected.exposure.twa.source})`}
              />
              <InfoLine
                title="STEL"
                value={`${selected.exposure.stel.value} (${selected.exposure.stel.source})`}
              />
              <InfoLine
                title="Ceiling"
                value={`${selected.exposure.ceiling.value} (${selected.exposure.ceiling.source})`}
              />
              <InfoLine
                title="IDLH"
                value={`${selected.exposure.idlh.value} (${selected.exposure.idlh.source})`}
              />
            </Section>

            <Section title="물리·화학적 특성" icon={<Droplets size={20} />}>
              <InfoLine title="밀도" value={selected.physical.density} />
              <InfoLine title="증기압" value={selected.physical.vaporPressure} />
              <InfoLine title="끓는점" value={selected.physical.boilingPoint} />
              <InfoLine title="인화점" value={selected.physical.flashPoint} />
            </Section>

            <Section title="인화·폭발 특성" icon={<Flame size={20} />}>
              <InfoLine title="인화점" value={selected.flammability.flashPoint} />
              <InfoLine
                title="자연발화온도"
                value={selected.flammability.autoIgnition}
              />
              <InfoLine title="LEL / 폭발하한" value={selected.flammability.lel} />
              <InfoLine title="UEL / 폭발상한" value={selected.flammability.uel} />
            </Section>

            <Section title="주요 위험성" icon={<AlertTriangle size={20} />}>
              <List items={selected.mainHazards} />
            </Section>

            <Section title="물 반응성" icon={<Droplets size={20} />}>
              <List items={selected.waterReactivity.hazards} />
            </Section>

            <Section title="제독 방향" icon={<Droplets size={20} />}>
              <List items={selected.waterReactivity.decon} />
            </Section>

            <Section title="반응성 / 혼합 주의" icon={<FlaskConical size={20} />}>
              <PillWrap items={selected.incompatible} />
            </Section>

            <Section title="중화 방향" icon={<FlaskConical size={20} />}>
              <List items={selected.neutralization.direction} />

              <div style={styles.noteBox}>
                <div style={styles.noteTitle}>물 사용 판단</div>
                <div>{selected.neutralization.waterUse}</div>
              </div>

              <div style={styles.noteBox}>
                <div style={styles.noteTitle}>중화제 필요성</div>
                <div>{selected.neutralization.neutralizerNeed}</div>
              </div>
            </Section>

            <Section title="권장 보호구" icon={<ShieldCheck size={20} />}>
              <PillWrap items={selected.ppe} />
            </Section>

            <Section title="대응 주의사항" icon={<FileText size={20} />}>
              <List items={selected.cautions} />
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div style={styles.header}>
      <div style={styles.headerTitle}>
        <ShieldCheck />
        <h1>반도체 화학물질 검색 시스템</h1>
      </div>
      <p style={styles.headerText}>
        STEL/TWA · GHS · 물 반응성 · 제독 · 중화 방향 · 인화/폭발 특성 조회
      </p>
    </div>
  );
}

function SearchBox({ query, setQuery }) {
  return (
    <div style={styles.searchCard}>
      <div style={styles.searchBox}>
        <Search size={20} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="HF, 불산, CAS No."
          style={styles.input}
        />
      </div>
    </div>
  );
}

function ChemicalHeader({ selected }) {
  return (
    <div style={styles.detailHeader}>
      <div>
        <div style={styles.chemicalName}>{selected.nameKo}</div>
        <div style={styles.subText}>{selected.nameEn}</div>
      </div>

      <div
        style={{
          ...styles.bigHazardBadge,
          background: hazardColor[selected.hazardLevel],
        }}
      >
        {selected.hazardLevel}
      </div>
    </div>
  );
}

function Section({ title, icon, children }) {
  return (
    <div style={styles.section}>
      <div style={styles.sectionTitle}>
        {icon}
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Grid({ children }) {
  return <div style={styles.grid}>{children}</div>;
}

function InfoBox({ title, value }) {
  return (
    <div style={styles.infoBox}>
      <div style={styles.infoTitle}>{title}</div>
      <div style={styles.infoValue}>{value}</div>
    </div>
  );
}

function InfoLine({ title, value }) {
  return (
    <div style={styles.infoLine}>
      <div style={styles.infoLineTitle}>{title}</div>
      <div style={styles.infoLineValue}>{value}</div>
    </div>
  );
}

function List({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={styles.listItem}>
          <span>•</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function PillWrap({ items }) {
  return (
    <div style={styles.pillWrap}>
      {items.map((item, index) => (
        <span key={index} style={styles.pill}>
          {item}
        </span>
      ))}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f1f5f9",
    padding: 20,
    fontFamily:
      "Arial, Pretendard, -apple-system, BlinkMacSystemFont, sans-serif",
    color: "#0f172a",
  },

  container: {
    maxWidth: 1500,
    margin: "0 auto",
  },

  header: {
    background: "white",
    borderRadius: 25,
    padding: 30,
    marginBottom: 20,
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },

  headerTitle: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  headerText: {
    color: "#475569",
    marginTop: 10,
  },

  layout: {
    display: "grid",
    gridTemplateColumns: "350px 1fr",
    gap: 20,
  },

  searchCard: {
    background: "white",
    borderRadius: 25,
    padding: 20,
    marginBottom: 20,
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    border: "1px solid #d4d4d8",
    borderRadius: 15,
    padding: 12,
  },

  input: {
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: 16,
    background: "transparent",
  },

  resultCard: {
    width: "100%",
    background: "white",
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
    textAlign: "left",
    cursor: "pointer",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },

  resultTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
  },

  resultName: {
    fontSize: 20,
    fontWeight: "bold",
  },

  subText: {
    color: "#64748b",
    marginTop: 5,
  },

  process: {
    marginTop: 10,
    color: "#475569",
  },

  hazardBadge: {
    color: "white",
    padding: "5px 10px",
    borderRadius: 10,
    height: 30,
    fontSize: 14,
    whiteSpace: "nowrap",
  },

  bigHazardBadge: {
    color: "white",
    padding: "10px 15px",
    borderRadius: 15,
    height: "fit-content",
    whiteSpace: "nowrap",
  },

  detailHeader: {
    background: "white",
    borderRadius: 25,
    padding: 30,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },

  chemicalName: {
    fontSize: 34,
    fontWeight: "bold",
  },

  section: {
    background: "white",
    borderRadius: 25,
    padding: 30,
    marginBottom: 20,
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },

  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 15,
  },

  infoBox: {
    background: "#f8fafc",
    padding: 15,
    borderRadius: 15,
    border: "1px solid #e2e8f0",
    marginBottom: 10,
  },

  infoTitle: {
    color: "#64748b",
    fontSize: 14,
    marginBottom: 5,
  },

  infoValue: {
    fontWeight: "bold",
    lineHeight: 1.5,
  },

  infoLine: {
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 15,
    paddingBottom: 10,
    borderBottom: "1px solid #e2e8f0",
  },

  infoLineTitle: {
    color: "#64748b",
    minWidth: 120,
  },

  infoLineValue: {
    fontWeight: "bold",
    textAlign: "right",
    lineHeight: 1.5,
  },

  listItem: {
    display: "flex",
    gap: 10,
    marginBottom: 10,
    lineHeight: 1.6,
  },

  pillWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },

  pill: {
    background: "#f1f5f9",
    border: "1px solid #e2e8f0",
    padding: "8px 12px",
    borderRadius: 999,
    fontSize: 14,
  },

  noteBox: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
    lineHeight: 1.6,
  },

  noteTitle: {
    fontWeight: "bold",
    marginBottom: 8,
  },
};