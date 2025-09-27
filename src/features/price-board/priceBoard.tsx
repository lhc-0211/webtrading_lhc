import { useEffect, useState } from "react";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BodyTableBase, HeaderTableBase } from "./components/base-price";
import ChartsGrid from "./components/chart-index";
import MenuPrice from "./components/menu-price";
import TableIndex from "./components/table-index";
import { dataIndex } from "./components/table-index/cfg";

const PriceBoard = () => {
  const [showAllPriceBoard, setShowAllPriceBoard] = useState<boolean>(() => {
    // Lấy giá trị ban đầu từ local storage
    return localStorage.getItem("showAllPriceBoard") === "true";
  });

  const [remainingHeight, setRemainingHeight] = useState<number>(
    window.innerHeight -
      38 -
      4 -
      (localStorage.getItem("showAllPriceBoard") === "true" ? 0 : 168) -
      32 -
      32 -
      60
  );

  const setAppHeight = () => {
    const newHeight =
      window.innerHeight -
      38 -
      4 -
      (showAllPriceBoard ? 0 : 168) -
      32 -
      32 -
      60;
    setRemainingHeight(newHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", setAppHeight);

    return () => window.removeEventListener("resize", setAppHeight);
  }, [showAllPriceBoard]);

  useEffect(() => {
    localStorage.setItem("showAllPriceBoard", String(showAllPriceBoard));
    setAppHeight(); // cập nhật height khi showAllPriceBoard thay đổi
  }, [showAllPriceBoard]);

  const handleShowAllPriceBoard = () => {
    setShowAllPriceBoard((pre) => !pre);
  };

  return (
    <div className="w-full flex flex-col gap-1 mt-1">
      {/* Check show all priceboard ẩn chart and table */}
      {!showAllPriceBoard && (
        <div className="grid grid-cols-6 gap-1 h-[160px] px-1">
          <div className="col-span-6 sm:col-span-3 xl:col-span-4">
            <ChartsGrid />
          </div>
          <div className="hidden sm:block sm:col-span-3 xl:col-span-2 h-[160px] w-full bg-gray-900 rounded ">
            <TableIndex dataIndex={dataIndex} />
          </div>
        </div>
      )}

      <div>
        <MenuPrice handleShowAllPriceBoard={handleShowAllPriceBoard} />
      </div>

      {/* ____PriceBoard____ */}
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
          <BodyTableBase remainingHeight={remainingHeight} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PriceBoard;
