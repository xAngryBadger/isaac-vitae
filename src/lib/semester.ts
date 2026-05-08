import type { Bilingual } from "./LanguageContext";

const COURSE_START_YEAR = 2024;
const COURSE_START_MONTH = 2;

const SEMESTER_START_MONTHS = [2, 8];

function getCurrentSemesterNumber(): number {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  let total = 0;

  for (let y = COURSE_START_YEAR; y <= year; y++) {
    const startMonth = y === COURSE_START_YEAR ? COURSE_START_MONTH : 1;
    const endMonth = y === year ? month : 12;

    for (const semStart of SEMESTER_START_MONTHS) {
      if (semStart >= startMonth && semStart <= endMonth) {
        total++;
      }
    }
  }

  return Math.max(total, 1);
}

const ordinalPt: Record<number, string> = {
  1: "1º", 2: "2º", 3: "3º", 4: "4º", 5: "5º",
  6: "6º", 7: "7º", 8: "8º", 9: "9º", 10: "10º",
};

const ordinalEn: Record<number, string> = {
  1: "1st", 2: "2nd", 3: "3rd", 4: "4th", 5: "5th",
  6: "6th", 7: "7th", 8: "8th", 9: "9th", 10: "10th",
};

export function getCurrentSemester(): Bilingual {
  const n = getCurrentSemesterNumber();
  return {
    pt: `${ordinalPt[n] ?? `${n}º`} Semestre`,
    en: `${ordinalEn[n] ?? `${n}th`} Semester`,
  };
}

export function getCurrentSemesterPeriod(): Bilingual {
  const sem = getCurrentSemester();
  return {
    pt: `${sem.pt} — Cursando`,
    en: `${sem.en} — In Progress`,
  };
}

export function getCurrentSemesterInline(): Bilingual {
  const n = getCurrentSemesterNumber();
  return {
    pt: `${ordinalPt[n] ?? `${n}º`} período`,
    en: `${ordinalEn[n] ?? `${n}th`} semester`,
  };
}
