import ReactECharts, { type EChartsOption } from "echarts-for-react";
import * as _ from "lodash";
import { memo, useEffect, useRef, useState } from "react";
import type { DataIndexChart, VolumeItem } from "../../../../types";
import { generateTimeIntervals } from "../../../../utils";

function PriceChart({ data }: { data: DataIndexChart[] }): JSX.Element {
  const chartRef = useRef<ReactECharts>(null);

  const DEFAULT_OPTION = {
    grid: [
      { left: 10, right: 10, top: 0, height: "100%", containLabel: true },
      { left: 10, right: 10, bottom: 0, height: "30%" },
    ],
    xAxis: [
      {
        type: "category",
        show: true,
        boundaryGap: true,
        splitLine: {
          show: true,
          lineStyle: {
            type: "solid",
            color: "#2A2E3B",
            opacity: 0.3,
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          // color: "#FFFFFFA3",
          // fontSize: 10,
          // showMinLabel: true,
          // showMaxLabel: true,
          // formatter: function (value: string) {
          //   const h = value.split(":");
          //   return h[0] + ":" + h[1];
          // },
          show: false,
        },
        axisPointer: {
          show: true,
          label: {
            show: false,
          },
          lineStyle: {
            color: "#E6E8EC",
            width: 0.5,
            type: "dashed",
          },
        },
        data: generateTimeIntervals(),
      },
      {
        type: "category",
        boundaryGap: true,
        gridIndex: 1,
        show: false,
        data: generateTimeIntervals(),
      },
    ],
    yAxis: [
      {
        type: "value",
        show: true,
        splitNumber: 5,
        splitLine: {
          show: true,
          lineStyle: {
            type: "solid",
            color: "#2A2E3B",
            dashOffset: 10,
            opacity: 0.3,
          },
        },
        axisLabel: {
          show: false,
        },
        axisPointer: {
          show: true,
          label: {
            show: true,
            color: "#FFFFFF",
            fontSize: 10,
            backgroundColor: "#00BF52",
            borderRadius: 2.35,
          },
          lineStyle: {
            color: "#E6E8EC",
            width: 0.5,
            type: "dashed",
          },
        },
      },
      {
        type: "value",
        show: false,
        gridIndex: 1,
      },
    ],
    dataZoom: [
      {
        type: "inside",
        xAxisIndex: [0, 1],
        minSpan: 50,
      },
    ],
    series: [
      // {
      //   type: "candlestick",
      //   data: [],
      // },
      {
        type: "line",
        data: [],
        showSymbol: true,
        lineStyle: {
          width: 2,
        },
        markLine: {
          symbol: ["none", "none"],
          data: [],
          lineStyle: {
            color: "rgba(255, 243, 93, 0.5)",
            width: 1,
          },
          label: {
            show: true,
            position: "middle",
            color: "#FFF35D",
            fontSize: 10,
          },
          silent: true,
        },
      },
      {
        type: "bar",
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: [],
      },
    ],
    visualMap: {
      show: false,
      min: 0,
      max: 1,
      inRange: {
        color: ["#F23645", "#00BF52"],
      },
      calculable: true,
    },
  };
  const [option, setOption] = useState<EChartsOption>(DEFAULT_OPTION);

  useEffect(() => {
    if (data) {
      _mapDataToState(data);
    }
  }, [data]);

  function _mapDataToState(dt: DataIndexChart[]) {
    if (!dt.length || dt.length < 0) return;

    // const dataSeries: CandlestickItem[] = [];

    const closeData: { value: number; itemStyle: { color: string } }[] = [];

    const dataVolume: VolumeItem[] = [];
    const timeSeries = generateTimeIntervals();

    const newOption = _.cloneDeep(option);
    const _dt = [...dt];
    _.remove(_dt, (o) => !o.close || o.volume == 0);

    const _oIndex = _dt[0]?.openPrice;

    const _min = Math.floor(_.min(_.map(_dt, "low")) ?? 0);
    const _max = Math.ceil(_.max(_.map(_dt, "high")) ?? 0);

    newOption.yAxis[0].min = _min > _oIndex ? _oIndex : _min;
    newOption.yAxis[0].max = _max < _oIndex ? _oIndex : _max;

    let lastOpen = _dt.length > 0 ? _dt[0].open : 0; // giá mở cửa trước đó

    const EPSILON = 0.0001; // độ cao nhỏ cho nến bằng phẳng

    timeSeries.forEach((time) => {
      const element = _dt.find((d: DataIndexChart) => d.time === time);

      if (element) {
        const open = element.open;
        const close = element.close;
        // const low = element.low;
        // const high = element.high;

        const openPrice = element.open;

        // Nếu nến bằng phẳng, thêm epsilon để hiển thị chấm
        // const adjustedLow = low === high ? low - EPSILON : low;
        // const adjustedHigh = low === high ? high + EPSILON : high;

        // Nếu close = open = high = low, thêm EPSILON để hiển thị chấm
        const adjustedClose = close === openPrice ? close + EPSILON : close;

        closeData.push({
          value: adjustedClose,
          itemStyle: {
            color: adjustedClose >= open ? "#00BF52" : "#F23645",
          },
        });

        // dataSeries.push({
        //   value: [open, close, adjustedLow, adjustedHigh],
        //   itemStyle: {
        //     color: open > close ? "#00BF52" : "#F23645",
        //     borderColor: open > close ? "#00BF52" : "#F23645",
        //   },
        // });

        dataVolume.push({
          value: element.volume,
          itemStyle: {
            color: open > close ? "#D32F2F4D" : "#0F3F26",
          },
        });

        lastOpen = open; // lưu giá mở cửa mới nhất
      } else {
        // Khoảng trống: tạo nến giá mở cửa trước
        // dataSeries.push({
        //   value: [lastOpen, lastOpen, lastOpen, lastOpen],
        //   itemStyle: {
        //     color: "#CCCCCC33", // màu nhạt để phân biệt
        //     borderColor: "#CCCCCC33",
        //   },
        // });

        closeData.push({ value: lastOpen, itemStyle: { color: "#CCCCCC33" } });

        dataVolume.push({
          value: 0,
          itemStyle: { color: "#CCCCCC33" },
        });
      }
    });

    newOption.xAxis[0].data = timeSeries;
    newOption.xAxis[1].data = timeSeries;
    // newOption.series[0].data = dataSeries;
    newOption.series[0].data = closeData;
    newOption.series[1].data = dataVolume;

    const markLine = {
      name: _oIndex.toString(),
      yAxis: _oIndex,
    };

    newOption.visualMap.min = _oIndex;
    newOption.visualMap.max = _oIndex + 0.001;
    newOption.series[0].markLine.data = [markLine];

    setOption(newOption);
  }

  //ResizeObserver để fix Swiper + resize layout
  useEffect(() => {
    const chart = chartRef.current?.getEchartsInstance();
    if (!chart) return;

    const observer = new ResizeObserver(() => {
      chart.resize();
    });

    const dom = chartRef.current?.ele;
    if (dom) observer.observe(dom);

    return () => observer.disconnect();
  }, []);

  return (
    <ReactECharts
      ref={chartRef}
      option={option}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default memo(PriceChart);
