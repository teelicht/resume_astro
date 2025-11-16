import { chromium } from "playwright";

const PORT = process.env.PORT || 4321;

const main = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Generate English PDF
  await page.goto(`http://localhost:${PORT}`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: "public/resume.pdf",
    margin: { top: "50px", bottom: "80px" },
    printBackground: true,
  });

  // Generate German PDF
  await page.goto(`http://localhost:${PORT}/de`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: "public/resume-de.pdf",
    margin: { top: "50px", bottom: "80px" },
    printBackground: true,
  });

  return browser.close();
};

main();