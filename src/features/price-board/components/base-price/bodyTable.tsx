import { HiOutlineBookmark } from "react-icons/hi";
import { List, type RowComponentProps } from "react-window";
import type { StockSnapshot } from "../../../../types";
import { colorFix, formatVolPrice, numberFormat } from "../../../../utils";
import { dataSnapShot } from "./cfg";

function RowComponent({
  index,
  dataIndexs,
  style,
}: RowComponentProps<{
  dataIndexs: StockSnapshot[];
}>) {
  const borderClass =
    "flex items-center justify-center border-l border-gray-600";

  const dataIndex = dataIndexs[index];

  return (
    <div
      className={`group flex w-full h-7 text-[10px] md:text-xs font-normal text-gray-300 border-b border-x border-gray-600 hover:!bg-gray-800`}
      style={style}
      key={dataIndex.symbol}
    >
      {/* Ghim + CK + Trần + Sàn + TC */}
      <div className={`w-[2%] flex items-center justify-center`}>
        <HiOutlineBookmark className="text-sm md:text-base" />
      </div>
      <div
        className={`w-[4%] ${borderClass} ${colorFix(
          dataIndex.lastPrice,
          dataIndex.ref,
          dataIndex.ceil,
          dataIndex.floor,
          dataIndex.ref
        )}`}
      >
        {dataIndex.symbol}
      </div>
      <div className="grid grid-cols-3 divide-x divide-gray-600 border-l border-gray-600 w-[10%] bg-gray-900 group-hover:bg-gray-800">
        <div className="flex items-center justify-center c">
          {dataIndex.ceil}
        </div>
        <div className="flex items-center justify-center f">
          {dataIndex.floor}
        </div>
        <div className="flex items-center justify-center r">
          {dataIndex.ref}
        </div>
      </div>

      {/* Bên mua */}
      <div className="grid grid-cols-6 divide-x divide-gray-600 w-[21%] border-l border-gray-600">
        {dataIndex?.orderEntries
          ?.slice(0, 6)
          .reverse()
          .filter((entry) => entry.side === "B")
          .map((entry, idx) => (
            <>
              <div
                key={`price-${idx}`}
                className={`flex items-center justify-center ${colorFix(
                  entry.price,
                  dataIndex.ref,
                  dataIndex.ceil,
                  dataIndex.floor,
                  dataIndex.ref
                )}`}
              >
                {numberFormat(entry.price, 2)}
              </div>
              <div
                key={`volume-${idx}`}
                className={`flex items-center justify-center ${colorFix(
                  entry.price,
                  dataIndex.ref,
                  dataIndex.ceil,
                  dataIndex.floor,
                  dataIndex.ref
                )}`}
              >
                {formatVolPrice(entry.volume)}
              </div>
            </>
          ))}
      </div>

      {/* Khớp lệnh */}
      <div className="grid grid-cols-4 divide-x divide-gray-600 w-[15%] border-l border-gray-600 bg-gray-900 group-hover:bg-gray-800">
        <div
          className={`flex items-center justify-center ${colorFix(
            dataIndex.lastPrice,
            dataIndex.ref,
            dataIndex.ceil,
            dataIndex.floor,
            dataIndex.ref
          )}`}
        >
          {numberFormat(dataIndex.lastPrice, 2)}
        </div>
        <div
          className={`flex items-center justify-center ${colorFix(
            dataIndex.lastPrice,
            dataIndex.ref,
            dataIndex.ceil,
            dataIndex.floor,
            dataIndex.ref
          )}`}
        >
          {formatVolPrice(dataIndex.lastVolume)}
        </div>
        <div
          className={`flex items-center justify-center ${colorFix(
            dataIndex.lastPrice,
            dataIndex.ref,
            dataIndex.ceil,
            dataIndex.floor,
            dataIndex.ref
          )}`}
        >
          {dataIndex.change}
        </div>
        <div
          className={`flex items-center justify-center ${colorFix(
            dataIndex.lastPrice,
            dataIndex.ref,
            dataIndex.ceil,
            dataIndex.floor,
            dataIndex.ref
          )}`}
        >
          {dataIndex.changePc}
        </div>
      </div>

      {/* Bên bán */}
      <div className="grid grid-cols-6 divide-x divide-gray-600 w-[21%] border-l border-gray-600">
        {dataIndex?.orderEntries
          ?.slice(0, 6)
          .filter((entry) => entry.side === "S")
          .map((entry, idx) => (
            <>
              <div
                key={`price-${idx}`}
                className={`flex items-center justify-center ${colorFix(
                  entry.price,
                  dataIndex.ref,
                  dataIndex.ceil,
                  dataIndex.floor,
                  dataIndex.ref
                )}`}
              >
                {numberFormat(entry.price, 2)}
              </div>
              <div
                key={`volume-${idx}`}
                className={`flex items-center justify-center ${colorFix(
                  entry.price,
                  dataIndex.ref,
                  dataIndex.ceil,
                  dataIndex.floor,
                  dataIndex.ref
                )}`}
              >
                {formatVolPrice(entry.volume)}
              </div>
            </>
          ))}
      </div>

      {/* Tổng KL, Cao, Thấp */}
      <div className="grid grid-cols-3 divide-x divide-gray-600 border-l border-gray-600 w-[12%] bg-gray-900 group-hover:bg-gray-800">
        <div className="flex items-center justify-center">
          {formatVolPrice(dataIndex.totalVolume)}
        </div>
        <div className="flex items-center justify-center i">
          {numberFormat(dataIndex.highestPrice, 2)}
        </div>
        <div className="flex items-center justify-center d">
          {numberFormat(dataIndex.lowestPrice, 2)}
        </div>
      </div>

      {/* ĐTNN */}
      <div className="grid grid-cols-3 divide-x divide-gray-600 w-[15%] border-l border-gray-600">
        <div className="flex items-center justify-center">
          {formatVolPrice(dataIndex.totalForeignBuyVolume)}
        </div>
        <div className="flex items-center justify-center">
          {formatVolPrice(dataIndex.totalForeignSellVolume)}
        </div>
        <div className="flex items-center justify-center">
          {formatVolPrice(dataIndex.availableForeignRoom)}
        </div>
      </div>
    </div>
  );
}

interface Props {
  remainingHeight: number | string | undefined;
}

const BodyTableBase = (props: Props) => {
  const { remainingHeight } = props;

  return (
    <div style={{ height: `${remainingHeight}px` }}>
      <List
        className="hide-scrollbar"
        rowHeight={28}
        rowComponent={RowComponent}
        rowCount={dataSnapShot?.length}
        rowProps={{ dataIndexs: dataSnapShot }}
      />
    </div>
  );
};

export default BodyTableBase;
