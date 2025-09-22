import type { UTCTimestamp } from "lightweight-charts";

//Đổi định dạng chuỗi giờ thành UTCtime của chart
export function toTimestamp(timeStr: string): UTCTimestamp {
  const [h, m, s] = timeStr.split(":").map(Number);
  const now = new Date();
  now.setHours(h, m, s ?? 0, 0);
  return Math.floor(now.getTime() / 1000) as UTCTimestamp;
}

export function addZero(i: string) {
  if (Number(i) < 10) {
    i = "0" + i;
  }
  return i;
}

// Generate 5-minute intervals from 9:00:00 to 15:00:00
export function generateTimeIntervals() {
  const intervals: string[] = [];
  const currentTime = new Date();
  currentTime.setHours(9, 0, 0, 0); // Start at 9:00:00

  const endTime = new Date();
  endTime.setHours(15, 0, 0, 0); // End at 15:00:00

  while (currentTime <= endTime) {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    intervals.push(`${addZero(hours + "")}:${addZero(minutes + "")}:00`);
    currentTime.setMinutes(currentTime.getMinutes() + 5);
  }

  return intervals;
}
