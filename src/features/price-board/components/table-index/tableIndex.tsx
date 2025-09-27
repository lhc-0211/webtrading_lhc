import { IoMdTrendingUp } from "react-icons/io";
import { IoTrendingDownSharp } from "react-icons/io5";
import { MdTrendingFlat } from "react-icons/md";
import { List, type RowComponentProps } from "react-window";
import type { DataIndex } from "../../../../types";
import { numberFormat } from "../../../../utils";

function RowComponent({
  index,
  dataIndexs,
  style,
}: RowComponentProps<{
  dataIndexs: DataIndex[];
}>) {
  const dataIndex = dataIndexs[index];
  return (
    <div
      className={`flex flex-row items-center gap-2 hover:bg-gray-600 ${
        index % 2 === 1 ? "bg-gray-800" : ""
      }`}
      style={style}
      key={dataIndex.indexId}
    >
      <div className="basis-[20%] text-[10px] lg:text-xs text-gray-300 font-normal text-left uppercase overflow-hidden pl-1">
        {dataIndex.indexId}
      </div>
      <div
        className={`basis-[14%] text-[10px] lg:text-xs font-normal text-right ${
          dataIndex.change < 0 ? "text-red-500" : "text-green-500"
        }`}
      >
        {numberFormat(dataIndex.indexValue, 2, "-")}
      </div>
      <div
        className={`basis-[10%] text-[10px] lg:text-xs font-normal text-right ${
          dataIndex.change < 0 ? "text-red-500" : "text-green-500"
        }`}
      >
        {numberFormat(dataIndex.change, 2, "-")}
      </div>
      <div className="basis-[19%] text-[10px] lg:text-xs text-gray-300 font-normal text-right">
        {numberFormat(dataIndex.allQty / 10e5, 3, "-")}
      </div>
      <div className="basis-[19%] text-[10px] lg:text-xs text-gray-300 font-normal text-right">
        {numberFormat(dataIndex.allValue / 10e8, 3, "-")}
      </div>
      <div className="basis-[28%] text-[10px] lg:text-xs text-gray-300 font-normal text-right pr-1">
        <div className="flex flex-row items-center justify-between">
          <span className="font-normal text-green-500 flex flex-row items-center justify-center gap-[2px]">
            <IoMdTrendingUp color="green" />
            {dataIndex.advances}
          </span>
          <span className="font-normal text-yellow-500 flex flex-row items-center justify-center gap-[2px]">
            <MdTrendingFlat color="yellow" />
            {dataIndex.nochanges}
          </span>
          <span className="font-normal text-red-500 flex flex-row items-center justify-center gap-[2px]">
            <IoTrendingDownSharp color="red" />
            {dataIndex.declines}
          </span>
        </div>
      </div>
    </div>
  );
}

function TableIndex({ dataIndex }: { dataIndex: DataIndex[] }) {
  return (
    <div className="flex flex-col h-full w-full ">
      <div className="flex flex-row border-b border-gray-700 p-1 w-full">
        <div className="grow flex flex-row items-center gap-2 font-bold">
          <div className="basis-[20%] text-[10px] lg:text-xs text-gray-400 font-normal text-left">
            Chỉ số
          </div>
          <div className="basis-[14%] text-[10px] lg:text-xs text-gray-400 font-normal text-right">
            Điểm
          </div>
          <div className="basis-[10%] text-[10px] lg:text-xs text-gray-400 font-normal text-right">
            + / -
          </div>
          <div className="basis-[19%] text-[10px] lg:text-xs text-gray-400 font-normal text-right whitespace-nowrap">
            KLGD (Triệu)
          </div>
          <div className="basis-[19%] text-[10px] lg:text-xs text-gray-400 font-normal text-right whitespace-nowrap">
            GTGD (Tỷ)
          </div>
          <div className="basis-[28%] text-[10px] lg:text-xs text-gray-400 font-normal text-right whitespace-nowrap">
            CK tăng/Giảm
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <List
          className="hide-scrollbar"
          rowComponent={RowComponent}
          rowCount={dataIndex?.length}
          rowHeight={25}
          rowProps={{ dataIndexs: dataIndex }}
        />
      </div>
    </div>
  );
}

export default TableIndex;
