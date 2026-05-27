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
} from "lucide-react";

import { chemicals } from "./data/chemicals";

const levelColor = {
  "매우 위험": "#dc2626",
  고위험: "#ea580c",
  주의: "#ca8a04",
};

export default function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(chemicals[0]);

  const filtered = useMemo(() => {
    if (!query) return chemicals;

    return chemicals.filter((c) => {
      const text = `
        ${c.nameKo}
        ${c.nameEn}
        ${c.formula}
        ${c.cas}
        ${c.aliases.join(" ")}
      `.toLowerCase();

      return text.includes(query.toLowerCase());
    });
  }, [query]);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.titleWrap}>
            <ShieldCheck size={28} />
            <div>
              <div style={styles.title}>ERT CHEM</div>
              <div style={styles.subtitle}>
                반도체 화학물질 대응 플랫폼
              </div>
            </div>
          </div>

          <div style={styles.searchBox}>
            <Search size={20} color="#64748b" />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="HF / 불산 / CAS 검색"
              style={styles.input}
            />
          </div>
        </header>

        <div style={styles.horizontalScroll}>
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

              <div style={styles.chemicalSub}>
                {chemical.formula}
              </div>

              <div
                style={{
                  ...styles.levelBadge,
                  background: levelColor[chemical.hazardLevel],
                }}
              >
                {chemical.hazardLevel}
              </div>
            </button>
          ))}
        </div>

        <div style={styles.detailCard}>
          <div style={styles.topInfo}>
            <div>
              <div style={styles.bigName}>{selected.nameKo}</div>

              <div style={styles.engName}>
                {selected.nameEn}
              </div>

              <div style={styles.cas}>
                CAS No. {selected.cas}
              </div>
            </div>

            <div
              style={{
                ...styles.bigBadge,
                background: levelColor[selected.hazardLevel],
              }}
            >
              {selected.hazardLevel}
            </div>
          </div>

          <Section
            title="GHS 경고표지"
            icon={<BadgeAlert size={18} />}
          >
            <TagWrap items={selected.ghsPictograms} />
          </Section>

          <Section title="기본 정보" icon={<Activity size={18} />}>
            <InfoLine title="화학식" value={selected.formula} />
            <InfoLine title="상태" value={selected.state} />
            <InfoLine title="공정" value={selected.process} />
          </Section>

          <Section title="노출 기준" icon={<AlertTriangle size={18} />}>
            <InfoLine
              title="TWA"
              value={`${selected.exposure.twa.value}`}
            />

            <InfoLine
              title="STEL"
              value={`${selected.exposure.stel.value}`}
            />

            <InfoLine
              title="Ceiling"
              value={`${selected.exposure.ceiling.value}`}
            />

            <InfoLine
              title="IDLH"
              value={`${selected.exposure.idlh.value}`}
            />
          </Section>

          <Section title="물리·화학 특성" icon={<Droplets size={18} />}>
            <InfoLine
              title="밀도"
              value={selected.physical.density}
            />

            <InfoLine
              title="증기압"
              value={selected.physical.vaporPressure}
            />

            <InfoLine
              title="끓는점"
              value={selected.physical.boilingPoint}
            />

            <InfoLine
              title="인화점"
              value={selected.physical.flashPoint}
            />
          </Section>

          <Section title="인화·폭발 특성" icon={<Flame size={18} />}>
            <InfoLine
              title="인화점"
              value={selected.flammability.flashPoint}
            />

            <InfoLine
              title="자연발화"
              value={selected.flammability.autoIgnition}
            />

            <InfoLine
              title="LEL"
              value={selected.flammability.lel}
            />

            <InfoLine
              title="UEL"
              value={selected.flammability.uel}
            />
          </Section>

          <Section title="주요 위험성" icon={<AlertTriangle size={18} />}>
            <BulletList items={selected.mainHazards} />
          </Section>

          <Section title="물 반응성" icon={<Droplets size={18} />}>
            <BulletList items={selected.waterReactivity.hazards} />
          </Section>

          <Section title="제독 방향" icon={<Droplets size={18} />}>
            <BulletList items={selected.waterReactivity.decon} />
          </Section>

          <Section
            title="반응성 / 혼합 주의"
            icon={<FlaskConical size={18} />}
          >
            <TagWrap items={selected.incompatible} />
          </Section>

          <Section title="중화 방향" icon={<FlaskConical size={18} />}>
            <BulletList items={selected.neutralization.direction} />

            <NoteBox
              title="물 사용 판단"
              value={selected.neutralization.waterUse}
            />

            <NoteBox
              title="중화제 필요성"
              value={selected.neutralization.neutralizerNeed}
            />
          </Section>

          <Section title="권장 보호구" icon={<ShieldCheck size={18} />}>
            <TagWrap items={selected.ppe} />
          </Section>

          <Section title="대응 주의사항" icon={<AlertTriangle size={18} />}>
            <BulletList items={selected.cautions} />
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, icon, children }) {
  return (
    <div style={styles.section}>
      <div style={styles.sectionTitle}>
        {icon}
        <span>{title}</span>
      </div>

      {children}
    </div>
  );
}

function InfoLine({ title, value }) {
  return (
    <div style={styles.infoLine}>
      <span style={styles.infoTitle}>{title}</span>
      <span style={styles.infoValue}>{value}</span>
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
      <div style={styles.noteValue}>{value}</div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f1f5f9",
    padding: 12,
    fontFamily:
      "Pretendard, -apple-system, BlinkMacSystemFont, sans-serif",
    color: "#0f172a",
  },

  container: {
    maxWidth: 700,
    margin: "0 auto",
  },

  header: {
    background: "white",
    borderRadius: 24,
    padding: 18,
    marginBottom: 14,
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 8,
    zIndex: 100,
  },

  titleWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 800,
  },

  subtitle: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 3,
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 16,
    padding: "14px 16px",
  },

  input: {
    border: "none",
    outline: "none",
    background: "transparent",
    width: "100%",
    fontSize: 16,
  },

  horizontalScroll: {
    display: "flex",
    gap: 12,
    overflowX: "auto",
    paddingBottom: 10,
    marginBottom: 16,
  },

  chemicalCard: {
    minWidth: 120,
    background: "white",
    borderRadius: 20,
    padding: 16,
    cursor: "pointer",
    textAlign: "left",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },

  chemicalName: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 5,
  },

  chemicalSub: {
    color: "#64748b",
    marginBottom: 10,
    fontSize: 14,
  },

  levelBadge: {
    color: "white",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    width: "fit-content",
    fontWeight: 700,
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
    marginBottom: 24,
  },

  bigName: {
    fontSize: 32,
    fontWeight: 800,
  },

  engName: {
    color: "#64748b",
    marginTop: 6,
    fontSize: 15,
  },

  cas: {
    marginTop: 8,
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
};