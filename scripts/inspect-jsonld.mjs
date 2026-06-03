import fs from "node:fs";

const html = fs.readFileSync(process.argv[2], "utf8");
const re = /<script type="application\/ld\+json">([^<]*)<\/script>/g;
let m;
let i = 0;
while ((m = re.exec(html))) {
  i++;
  const j = JSON.parse(m[1]);
  const types = [];
  const walk = (o) => {
    if (!o || typeof o !== "object") return;
    if (Array.isArray(o)) o.forEach(walk);
    else {
      if (o["@type"]) types.push(o["@type"]);
      Object.values(o).forEach(walk);
    }
  };
  walk(j);
  const faqCount = (Array.isArray(j) ? j : [j]).filter(
    (x) => x?.["@type"] === "FAQPage",
  ).length;
  console.log(
    `script ${i}: FAQPage×${faqCount} | types: ${[...new Set(types)].join(", ")}`,
  );
}
