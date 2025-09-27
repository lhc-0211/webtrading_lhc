import { Controller, useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";
import AsyncSelect from "react-select/async";
import { stockOptions } from "./cfg";

type FormSearchStockValues = {
  stock: {
    label: string;
    value: string;
  } | null;
};

type StockSelect = {
  label: string;
  value: string;
};

const FormSearchStock = () => {
  const { control, handleSubmit } = useForm<FormSearchStockValues>();

  const onSubmit = (data: FormSearchStockValues) => {
    console.log(data);
  };

  const filterColors = (inputValue: string) => {
    return stockOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<StockSelect[]>((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full flex items-center"
    >
      <Controller
        name="stock"
        control={control}
        render={({ field }) => (
          <AsyncSelect
            {...field}
            cacheOptions
            defaultOptions
            loadOptions={promiseOptions}
            placeholder="Tìm kiếm CK"
            noOptionsMessage={() => "Mã chứng khoán không hợp lệ"}
            loadingMessage={() => ""}
            formatOptionLabel={(option) => (
              <div className="grid grid-cols-[40px_auto] gap-1 items-center">
                <span className="font-semibold">{option.value}</span>
                <span className="text-gray-400">{option.label}</span>
              </div>
            )}
            components={{
              DropdownIndicator: (props) => (
                <div
                  {...props.innerProps}
                  className="p-1 text-gray-400 hover:text-white"
                >
                  <IoSearchOutline size={14} />
                </div>
              ),
              IndicatorSeparator: () => null,
            }}
            onChange={(selected) => {
              console.log("Đã chọn:", selected);
              field.onChange(null);
            }}
            classNames={{
              control: () =>
                "!bg-gray-900 !border !border-gray-700 !rounded-md !min-h-7 !h-7 !text-white !text-[10px] !lg:text-xs !w-[180px] !lg:w-[250px]",
              placeholder: () => "!text-gray-400 !text-[10px] !lg:text-xs",
              singleValue: () => "!text-white !text-[10px] !lg:text-xs ",
              menu: () =>
                "!z-[9999] !bg-gray-900 !border !border-gray-700 !rounded-md !mt-1",
              option: ({ isFocused }) =>
                `!px-1 !lg:px-2 !py-[2px] !lg:!py-1 !text-[10px] !lg:text-xs !cursor-pointer ${
                  isFocused
                    ? "!bg-gray-700 !text-white"
                    : "!bg-gray-900 !text-gray-200"
                }`,
              input: () => "!m-0 !p-0 !text-gray-200 !uppercase",
              valueContainer: () => "!h-7",
              noOptionsMessage: () =>
                "!text-white !text-[10px] !lg:text-xs !text-center !py-2",
              loadingMessage: () =>
                "!text-white !text-[10px] !lg:text-xs !text-center !py-2",
            }}
          />
        )}
      />
    </form>
  );
};

export default FormSearchStock;
