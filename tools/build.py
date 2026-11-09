import json, re, sys
import os
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data") + "/"
out = sys.argv[1]
ex = []
for f in ["english", "romance", "europe", "asia"]:
    ex += json.load(open(D + f + ".json", encoding="utf-8"))

# merge duplicate OPIc (english + multi-language): keep multi entry, add any missing links
by = {}
merged = []
for e in ex:
    if e["id"] in by:
        a = by[e["id"]]
        keep, other = (e, a) if e.get("langs") else (a, e)
        for k in ("register", "practice", "fees"):
            seen = {json.dumps(x, sort_keys=True) for x in keep.get(k, [])}
            urls = {x.get("url") for x in keep.get(k, [])}
            for x in other.get(k, []):
                if (x.get("url") and x["url"] in urls) or json.dumps(x, sort_keys=True) in seen:
                    continue
                if k == "fees" and any(y["country"] == x["country"] for y in keep.get(k, [])):
                    continue
                keep.setdefault(k, []).append(x)
        for k, v in other.items():
            keep.setdefault(k, v)
        merged[merged.index(a)] = keep
        by[e["id"]] = keep
    else:
        by[e["id"]] = e
        merged.append(e)

C = ["A1", "A2", "B1", "B2", "C1", "C2"]
def same(levels): return {c: c for c in levels}
M = {
    "dele": same(C), "certit": same(C), "goethe": same(C), "telc": same(C), "osd": same(C),
    "polish": same(C), "ellinomatheia": same(C),
    "plida": same(C[1:]), "cce": same(C[:5]), "ecl": same(C[1:5]), "origo": same(C[1:5]),
    "cnavt": same(C[1:5]), "swedex": same(C[1:5]), "norskprove": same(C[:4]),
    "bergenstest": same(["B2", "C1"]), "nt2": {"B1": "Programma I", "B2": "Programma II"},
    "tys": same(["B2", "C1"]), "hamza": same(C[1:5]), "ukrainian": same(["B1"]),
    "delf-dalf": {"A1": "DELF A1", "A2": "DELF A2", "B1": "DELF B1", "B2": "DELF B2", "C1": "DALF C1", "C2": "DALF C2"},
    "cils": {"A1": "A1", "A2": "A2", "B1": "UNO", "B2": "DUE", "C1": "TRE", "C2": "QUATTRO"},
    "celi": {"A1": "Impatto", "A2": "CELI 1", "B1": "CELI 2", "B2": "CELI 3", "C1": "CELI 4", "C2": "CELI 5"},
    "caple": {"A1": "ACESSO", "A2": "CIPLE", "B1": "DEPLE", "B2": "DIPLE", "C1": "DAPLE", "C2": "DUPLE"},
    "catalan": {"A2": "Bàsic", "B1": "Elemental", "B2": "Intermedi", "C1": "Suficiència", "C2": "Superior"},
    "cambridge": {"A2": "Key", "B1": "Preliminary", "B2": "First", "C1": "Advanced", "C2": "Proficiency"},
    "trinity-ise": {"A1": "ISE A1", "A2": "Foundation", "B1": "ISE I", "B2": "ISE II", "C1": "ISE III", "C2": "ISE IV"},
    "torfl": {"A1": "ТЭУ", "A2": "ТБУ", "B1": "ТРКИ-1", "B2": "ТРКИ-2", "C1": "ТРКИ-3", "C2": "ТРКИ-4"},
    "tocfl": {"A1": "1급", "A2": "2급", "B1": "3급", "B2": "4급", "C1": "5급", "C2": "6급"},
    "jlpt": {"A1": "N5", "A2": "N4 · N3", "B1": "N3 · N2", "B2": "N2 · N1", "C1": "N1"},
    "toefl": {"A1": "1", "A2": "2", "B1": "3", "B2": "4", "C1": "5", "C2": "6"},
    "det": {"A1": "10–55", "A2": "10–55", "B1": "60–95", "B2": "100–125", "C1": "130–150", "C2": "155–160"},
    "pte": {"B2": "50–75", "C1": "59–82", "C2": "76–90"},
    "ielts": {"C1": "≈7.0+", "C2": "8.5+"},
    "tcf": {"A1": "100–199", "A2": "200–299", "B1": "300–399", "B2": "400–499", "C1": "500–599", "C2": "600–699"},
    "yki": {"A1": "1", "A2": "2", "B1": "3", "B2": "4", "C1": "5", "C2": "6"},
    "testdaf": {"B2": "TDN 3", "C1": "TDN 4 · 5"},
    "opic": {"A1": "NH", "A2": "IL", "B1": "IM · IH", "B2": "AL"},
}
for e in merged:
    if e["id"] in M:
        e["cefr_map"] = M[e["id"]]
    # drop empty fee rows
    e["fees"] = [f for f in e.get("fees", []) if f.get("amount")]
    e["register"] = [r for r in e.get("register", []) if r.get("url")]
    e["practice"] = [p for p in e.get("practice", []) if p.get("url")]

open(out, "w", encoding="utf-8").write(
    "/* 세계 외국어 시험 데이터 — 2026-11 조사. 응시료·일정은 변동되니 공식 사이트에서 확인하세요. */\n"
    "window.EXAMS = " + json.dumps(merged, ensure_ascii=False, indent=1) + ";\n")
print(len(merged), "exams;", sum(len(e["register"]) + len(e["practice"]) + 1 for e in merged), "links")
print("countries:", sorted({r["country"] for e in merged for r in e["register"]}))
