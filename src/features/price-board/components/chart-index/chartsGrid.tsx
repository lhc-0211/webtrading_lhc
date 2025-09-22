import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoMdTrendingUp } from "react-icons/io";
import { IoTrendingDownSharp } from "react-icons/io5";
import { MdTrendingFlat } from "react-icons/md";

import type { DataIndexItem } from "../../../../types";
import { mapIdToNameIndex, numberFormat } from "../../../../utils";
import { dataListIndexChart, dataListIndexItem } from "./cfg";
import PriceChart from "./priceChart";

const ChartGrid = () => {
  return (
    <Swiper
      spaceBetween={4}
      modules={[Navigation]}
      pagination={{ clickable: true }}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        412: {
          slidesPerView: 2,
        },
        618: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 1,
        },
        820: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      className="w-full h-full"
    >
      {dataListIndexItem.map((item: DataIndexItem, index: number) => (
        <SwiperSlide key={index} className="!h-[160px]">
          <div className="p-1 rounded bg-gray-900 flex flex-col gap-1 w-full h-full min-w-[200px]">
            <div className="w-full h-[100px]">
              <PriceChart data={dataListIndexChart[item.indexsTypeCode]} />
            </div>
            <div>
              {/* Ten <-> Khoi luong CP  */}
              <div className="flex flex-row items-center justify-between">
                <h1 className="text-[10px] lg:text-xs font-medium text-gray-400 uppercase">
                  {mapIdToNameIndex(item.indexsTypeCode)}
                </h1>
                <span
                  className={`text-[10px] lg:text-xs font-normal flex flex-row gap-1 items-center justify-center ${item.status}`}
                >
                  <span>{numberFormat(item.valueIndexes)}</span>
                  <span className="text-[10px] lg:text-xs">
                    ({item.change} {item.percentChange}%)
                  </span>
                </span>
              </div>

              {/* Cp <-> Tien*/}
              <div className="flex flex-row items-center justify-between">
                <span className="text-[10px] lg:text-xs font-normal text-gray-400">
                  {numberFormat(item.totalVolumeTraded)} CP
                </span>
                <span className="text-[10px] lg:text-xs font-normal text-gray-400">
                  {numberFormat(item.grossTradeAmt / 10e8, 3)} Tỷ
                </span>
              </div>

              {/* Ma tang, giam */}
              <div className="flex flex-col justify-between">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-[10px] lg:text-xs font-normal text-green-500 flex flex-row items-center justify-center gap-[2px]">
                    <IoMdTrendingUp color="green" />
                    {item.fluctuationUpIssueCount}
                  </span>
                  <span className="text-[10px] lg:text-xs font-normal text-yellow-500 flex flex-row items-center justify-center gap-[2px]">
                    <MdTrendingFlat color="yellow" />
                    {item.fluctuationSteadinessIssueCount}
                  </span>
                  <span className="text-[10px] lg:text-xs font-normal text-red-500 flex flex-row items-center justify-center gap-[2px]">
                    <IoTrendingDownSharp color="red" />
                    {item.fluctuationDownIssueCount}
                  </span>
                  <span className="text-[10px] lg:text-xs font-medium text-gray-400">
                    Close
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ChartGrid;
