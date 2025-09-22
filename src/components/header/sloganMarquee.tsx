import { useEffect, useState } from "react";
import { FaChartLine, FaHandsHelping } from "react-icons/fa";
import style from "./header.module.css";

const slogans = [
  <span className="text-green-400">
    <FaChartLine className="inline text-green-400 mr-2" />
    Đầu tư thông minh hôm nay - Kiến tạo thành công bền vững mai sau.
  </span>,
  <span className="text-yellow-400">
    <FaHandsHelping className="inline text-yellow-400 mr-2" />
    LHC Webtrade - Đồng hành đáng tin cậy trên hành trình đầu tư.
  </span>,
];

const SloganMarquee = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slogans.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="overflow-hidden whitespace-nowrap w-2/3 h-full flex items-center justify-center">
      <span
        key={index}
        className={`inline-block ${style["animate-marquee"]} text-xs lg:text-sm font-normal`}
      >
        {slogans[index]}
      </span>
    </span>
  );
};

export default SloganMarquee;
