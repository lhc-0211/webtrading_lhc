const HeaderTableBase = () => {
  const titleClass = "text-xs font-normal text-gray-300";
  const borderClass =
    "flex items-center justify-center border-l border-gray-600";

  return (
    <div className="flex w-full h-[60px] text-[10px] lg:text-xs font-normal text-gray-300 border border-gray-600">
      {/* Ghim + CK + Trần + Sàn + TC */}
      <div className={`w-[2%] flex items-center justify-center`}>#</div>
      <div className={`w-[4%] ${borderClass}`}>CK</div>
      <div className="grid grid-cols-3 divide-x divide-gray-600 border-l border-gray-600 w-[10%] bg-gray-900">
        <div className="flex items-center justify-center">Trần</div>
        <div className="flex items-center justify-center">Sàn</div>
        <div className="flex items-center justify-center">TC</div>
      </div>

      {/* Bên mua */}
      <div className="flex flex-col w-[21%] border-l border-gray-600">
        <div
          className={`${titleClass} text-center border-b border-gray-600 h-1/2 flex items-center justify-center`}
        >
          Bên mua
        </div>
        <div className="grid grid-cols-6 divide-x divide-gray-600 h-1/2">
          {["Giá3", "KL3", "Giá2", "KL2", "Giá1", "KL1"].map((t) => (
            <div key={t} className="flex items-center justify-center">
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Khớp lệnh */}
      <div className="flex flex-col w-[15%] border-l border-gray-600 bg-gray-900">
        <div
          className={`${titleClass} text-center border-b border-gray-600 h-1/2 flex items-center justify-center`}
        >
          Khớp lệnh
        </div>
        <div className="grid grid-cols-4 divide-x divide-gray-600 h-1/2">
          {["Giá", "KL", "+/-", "% +/-"].map((t) => (
            <div key={t} className="flex items-center justify-center">
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Bên bán */}
      <div className="flex flex-col w-[21%] border-l border-gray-600">
        <div
          className={`${titleClass} text-center border-b border-gray-600 h-1/2 flex items-center justify-center`}
        >
          Bên bán
        </div>
        <div className="grid grid-cols-6 divide-x divide-gray-600 h-1/2">
          {["Giá1", "KL1", "Giá2", "KL2", "Giá3", "KL3"].map((t) => (
            <div key={t} className="flex items-center justify-center">
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Tổng KL, Cao, Thấp */}
      <div className="grid grid-cols-3 divide-x divide-gray-600 border-l border-gray-600 w-[12%] bg-gray-900">
        <div className="flex items-center justify-center">Tổng KL</div>
        <div className="flex items-center justify-center">Cao</div>
        <div className="flex items-center justify-center">Thấp</div>
      </div>

      {/* ĐTNN */}
      <div className="flex flex-col w-[15%] border-l border-gray-600">
        <div
          className={`${titleClass} text-center border-b border-gray-600 h-1/2 flex items-center justify-center`}
        >
          ĐTNN
        </div>
        <div className="grid grid-cols-3 divide-x divide-gray-600 h-1/2">
          {["NN mua", "NN bán", "Room"].map((t) => (
            <div key={t} className="flex items-center justify-center">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderTableBase;
