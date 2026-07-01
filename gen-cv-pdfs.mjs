import { chromium } from "playwright";
import { join } from "path";
import fs from "fs";

const OUT = "/home/badger/ProjetosBadger/isaac-vitae/public/cv";
const BASE = "http://localhost:3002/isaac-vitae";

async function gen(lang) {
  const browser = await chromium.launch({ 
    headless: true,
    args: ["--disable-gpu", "--no-sandbox"]
  });
  const ctx = await browser.newContext({ 
    viewport: { width: 794, height: 1123 },
  });
  
  // Set localStorage before navigation
  await ctx.addInitScript((lang) => {
    localStorage.setItem("lang", lang);
  }, lang);
  
  const page = await ctx.newPage();

  await page.goto(`${BASE}/cv`, { waitUntil: "networkidle" });
  await page.waitForSelector(".cv-sheet", { timeout: 10000 });
  await page.waitForTimeout(2000);

  // Extract only the cv-sheet HTML and its inline styles
  const extracted = await page.evaluate(() => {
    const sheet = document.querySelector(".cv-sheet");
    if (!sheet) return { html: "", styles: "" };
    
    sheet.querySelectorAll(".cv-actions, .cv-ats-note").forEach(el => el.remove());
    
    const styleTags = Array.from(document.querySelectorAll("style"))
      .map(s => s.textContent || "")
      .filter(s => s.includes(".cv-") || s.includes("@media"));
    
    return {
      html: sheet.outerHTML,
      styles: styleTags.join("\n"),
    };
  });

  const minHTML = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #fffdf3; font-family: Georgia, 'Times New Roman', serif; }
  ${extracted.styles}
  .cv-sheet { max-width: 100%; margin: 0; box-shadow: none; border: none; padding: 2rem 2.5rem; }
</style>
</head>
<body>
${extracted.html}
</body>
</html>`;

  await page.setContent(minHTML, { waitUntil: "load" });
  await page.waitForTimeout(500);

  const pdfBytes = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "8mm", bottom: "8mm", left: "8mm", right: "8mm" },
  });

  fs.writeFileSync(join(OUT, `Isaac-Nathan-CV-${lang.toUpperCase()}.pdf`), pdfBytes);
  console.log(`Done ${lang.toUpperCase()}: ${(pdfBytes.length / 1024).toFixed(0)} KB`);
  await browser.close();
}

await gen("pt");
await gen("en");
