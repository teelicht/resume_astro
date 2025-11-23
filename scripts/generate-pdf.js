import { chromium } from "playwright";

const PORT = process.env.PORT || 4321;

const main = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Generate English PDF
  await page.setViewportSize({ width: 1600, height: 1200 });
  await page.goto(`http://localhost:${PORT}`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: "public/resume_thomas-lichtenecker.pdf",
    format: "A4",
    margin: { top: "20px", bottom: "40px", left: "20px", right: "20px" },
    printBackground: false,
    scale: 0.68,
  });

  // Generate German PDF
  await page.goto(`http://localhost:${PORT}/de`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: "public/lebenslauf_thomas-lichtenecker.pdf",
    format: "A4",
    margin: { top: "20px", bottom: "40px", left: "20px", right: "20px" },
    printBackground: false,
    scale: 0.68,
  });

  return browser.close();
};

main();