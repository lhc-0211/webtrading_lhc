import { useEffect, useState } from "react";
import TimeSkeleton from "../skeletons/timeSkeleton";

const TimeLine = () => {
  const [time, setTime] = useState<string>();
  const [date, setDate] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      // get time format hh:mm:ss
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const time24h = now.toLocaleTimeString("vi-VN", timeOptions);

      setTime(time24h);

      // get date format dd, mm yyyy
      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "narrow",
        day: "2-digit",
        month: "long",
      };
      const dateStr = now.toLocaleDateString("vi-VN", dateOptions);

      setDate(dateStr);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const isLoading = !time || !date;

  return (
    <div className="hidden sm:flex sm:flex-row md:gap-1 sm:items-center sm:justify-between text-gray-500">
      {isLoading ? (
        <TimeSkeleton />
      ) : (
        <>
          <div className="text-xs md:text-sm font-medium w-15">{time}</div>
          <div className="text-[10px] md:text-sm font-normal">{date}</div>
        </>
      )}
    </div>
  );
};

export default TimeLine;
