import SloganMarquee from "./sloganMarquee";

const Header = () => {
  return (
    <header className="h-[38px] px-1 sm:px-2 lg:px-4 bg-gray-900 flex flex-row gap-2 md:gap-4 items-center justify-between">
      <p className="flex items-center font-bold text-sm md:text-lg drop-shadow-md h-full">
        <span className="text-purple-500">L</span>
        <span className="text-blue-500">H</span>
        <span className="text-yellow-500">C</span>
      </p>

      <SloganMarquee />

      <div className="flex items-center h-full gap-2 md:gap-3">
        <span className="text-green-500 text-[10px] md:text-xs font-medium underline cursor-pointer whitespace-nowrap">
          Đăng kí
        </span>
        <span className="text-blue-500 text-[10px] md:text-xs font-medium underline cursor-pointer whitespace-nowrap">
          Đăng nhập
        </span>
      </div>
    </header>
  );
};

export default Header;
