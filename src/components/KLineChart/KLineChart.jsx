import { createChart } from "lightweight-charts";
import { useEffect } from "react";

import classNames from "classnames/bind";
import socket from "~/config/socket";
import styles from "./KLineChart.module.scss";

const cx = classNames.bind(styles);

function KLineChart() {
  useEffect(() => {
    // Tạo biểu đồ
    const chartElement = document.getElementById("chart");
    const chart = createChart(chartElement, {
      width: chartElement.clientWidth,
      height: 400,
    });
    const candleSeries = chart.addCandlestickSeries();
    socket.emit("get_kline_data");
    socket.on("historical_kline", (data) => {
      candleSeries.setData(data); // Hiển thị dữ liệu lịch sử
    });
    // Lắng nghe nến đã hoàn thành
    socket.on("kline_update", (data) => {
      candleSeries.update(data); // Cập nhật nến đã hoàn thành
    });

    // Lắng nghe trạng thái nến hiện tại
    socket.on("current_candle_update", (data) => {
      candleSeries.update(data); // Cập nhật nến hiện tại
    });
    // Dọn dẹp khi component unmount
    return () => {
      socket.off("kline_update");
      socket.off("current_candle_update");
      socket.off("historical_kline");
      chart.remove(); // Dọn dẹp biểu đồ
    };
  }, []);

  return <div id="chart" style={{ width: "100%", height: "400px" }}></div>;
}

export default KLineChart;
