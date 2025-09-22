import { useState } from "react";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BodyTableBase, HeaderTableBase } from "./components/base-price";
import ChartsGrid from "./components/chart-index";
import MenuPrice from "./components/menu-price";
import TableIndex from "./components/table-index";
import { dataIndex } from "./components/table-index/cfg";

type MobileView = "CHART" | "TABLE";

const PriceBoard = () => {
  const [current, setCurrent] = useState<MobileView>("CHART"); //Giao diện hiện tại của Mobile

  function changeViewCurrent() {
    const crt = current === "CHART" ? "TABLE" : "CHART";

    setCurrent(crt);
  }

  return (
    <div className="w-full flex flex-col gap-1 mt-1">
      {/* ____Chart and Table_____ */}
      {/* --- PC, Tablet: grid 6 chart_table --- */}
      <div className="grid grid-cols-6 gap-1 h-[160px] px-1">
        <div className="col-span-6 sm:col-span-3 xl:col-span-4">
          <ChartsGrid />
        </div>
        <div className="hidden sm:block sm:col-span-3 xl:col-span-2 h-[160px] w-full bg-gray-900 rounded ">
          <TableIndex dataIndex={dataIndex} />
        </div>
      </div>
      {/* --- Mobile, Tablet:chart or table --- */}
      {/* <div className="relative md:hidden gap-1 h-[160px] px-1 w-full">
        {current === "CHART" && (
          <div className="">
            <ChartsGrid />
          </div>
        )}
        {current === "TABLE" && (
          <div className="h-[160px] w-full bg-gray-900 rounded ">
            <TableIndex dataIndex={dataIndex} />
          </div>
        )}
        <div>
          <button
            className="absolute top-[2px] right-2"
            onClick={() => changeViewCurrent()}
          >
            <FaArrowRightArrowLeft className="text-sm text-gray-200" />
          </button>
        </div>
      </div> */}
      {/* end */}

      <div>
        <MenuPrice />
      </div>
      <Swiper
        direction="horizontal"
        slidesPerView="auto"
        freeMode={true}
        scrollbar={{ draggable: true }}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper w-full"
      >
        <SwiperSlide className="min-w-[1220px]">
          <HeaderTableBase />
          <BodyTableBase />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PriceBoard;
