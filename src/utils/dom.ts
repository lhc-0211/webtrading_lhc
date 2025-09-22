import { StringToDouble } from "./format";

export function setAppHeight() {
  const vh = window.innerHeight;
  document.documentElement.style.setProperty("--app-height", `${vh}px`);
}

export function colorFix(
  cPrice: number | string,
  oPrice: number,
  tran: number,
  san: number,
  tc: number
): string {
  if (typeof cPrice === "string") {
    cPrice = StringToDouble(cPrice);
  }
  if (cPrice == 0) return "preo";
  if (cPrice == tc) return "r";
  if (cPrice == tran) return "c";
  if (cPrice == san) return "f";
  if (cPrice - oPrice > 0) {
    return "i";
  } else if (cPrice - oPrice < 0) {
    return "d";
  }
  return "r";
}
