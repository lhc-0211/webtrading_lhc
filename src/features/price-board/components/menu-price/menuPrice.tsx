import { IoMdSettings } from "react-icons/io";
import { PiFrameCorners } from "react-icons/pi";
import FormSearchStock from "./formSearchStock";

interface Props {
  handleShowAllPriceBoard: () => void;
}

const MenuPrice = (props: Props) => {
  const { handleShowAllPriceBoard } = props;

  return (
    <div className="px-2 py-1 w-full h-8 flex items-center justify-between">
      <FormSearchStock />
      <div className="flex flex-row">
        <div
          className="size-4 lg:size-5 hover:bg-gray-600 flex items-center justify-center rounded-full"
          data-tooltip-id="global-tooltip"
          data-tooltip-content="Cài đặt bảng giá"
        >
          <IoMdSettings className="text-gray-300 text-xs lg:text-sm cursor-pointer" />
        </div>
        <div
          className="size-4 lg:size-5 hover:bg-gray-600 flex items-center justify-center rounded-full"
          onClick={handleShowAllPriceBoard}
        >
          <PiFrameCorners className="text-gray-300 text-xs lg:text-sm cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MenuPrice;
