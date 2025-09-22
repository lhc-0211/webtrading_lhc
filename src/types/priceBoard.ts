export interface DataIndex {
  indexId: string; //Chỉ số
  indexValue: number; //Điểm
  change: number; //change
  changePercent: number; //changePC
  allQty: number; //KLGD
  allValue: number; //GTGD
  advances: number; //Mã tăng
  nochanges: number; //Mã không thay đổi
  declines: number; //Mã giảm
}

export interface DataIndexItem {
  grossTradeAmt: number; //GTGD
  totalVolumeTraded: number; //KLGD
  valueIndexes: number; //Điểm
  openIndexes: number; //Giá mở cửa
  change: number; //Thay đổi
  percentChange: number; //Phần trăm thay đổi
  fluctuationUpIssueCount: number; //Mã tăng
  fluctuationSteadinessIssueCount: number; //Mã không thay đổi
  fluctuationDownIssueCount: number; //Mã giảm,
  indexsTypeCode: string; //Loại index
  status: string; //Màu index
}

export interface DataIndexChart {
  close: number; //Giá đóng
  high: number; //Giá cao
  low: number; //Giá thấp
  open: number; //Giá mở
  openPrice: number; //Giá mở cửa
  time: string; //Thời gian
  value: number; //GTGD
  volume: number; //KLGD
}

export interface CandlestickItem {
  value: [number, number, number, number] | null; // [open, close, low, high]
  itemStyle?: {
    color?: string;
    borderColor?: string;
    [key: string]: unknown;
  };
}

export interface VolumeItem {
  value: number | null;
  itemStyle?: {
    color?: string;
    [key: string]: unknown;
  };
}

type OrderEntry = { side: string; price: number; volume: number };

export interface StockSnapshot {
  marketId: string;
  boardId: string;
  symbol: string;
  securityGroupId: string;
  symbolName: string;
  ceil: number;
  floor: number;
  ref: number;
  lastPrice: number;
  lastVolume: number;
  openPrice: number;
  lowestPrice: number;
  highestPrice: number;
  tradingSession: number;
  totalVolume: number;
  totalValue: number;
  sellTotalVolume: number;
  buyTotalVolume: number;
  totalForeignRoom: number;
  availableForeignRoom: number;
  foreignBuyVolume: number;
  foreignSellVolume: number;
  foreignBuyValue: number;
  foreignSellValue: number;
  totalForeignBuyVolume: number;
  totalForeignSellVolume: number;
  totalForeignBuyValue: number;
  totalForeignSellValue: number;
  orderEntries: OrderEntry[];
  change: number;
  changePc: number;
  avePrice: number;
  status: string;
}
