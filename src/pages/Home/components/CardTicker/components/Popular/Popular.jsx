import classNames from "classnames/bind";

import { useEffect, useState } from "react";
import socket from "~/config/socket";
import formatNumber from "~/utils/formatNumber";
import styles from "./Popular.module.scss";

const cx = classNames.bind(styles);

function Popular() {
  const [tickers, setTickers] = useState({});

  useEffect(() => {
    // Lắng nghe sự kiện "binance_update" từ server
    socket.on("ticker_update", (data) => {
      // console.log("TICKER ===>", data);
      setTickers((prev) => ({
        ...prev,
        [data.s]: data, // Cập nhật dữ liệu của cặp `data.s`
      }));
    });

    // Dọn dẹp sự kiện khi component bị unmount
    return () => {
      socket.off("ticker_update");
    };
  }, []);

  return (
    <div className={cx("ticker-list")}>
      {Object.keys(tickers).map((symbol) => {
        const ticker = tickers[symbol];
        return (
          <button key={symbol} className={cx("ticker-item")}>
            <p className={cx("ticker-symbol")}>
              <img
                src={`https://www.gate.io/images/coin_icon/64/${ticker.s
                  .split("USDT")[0]
                  .toLowerCase()}.png`}
                alt=""
                style={{ width: 28 }}
              />
              {ticker.s.split("USDT")[0]}
            </p>
            <p className={cx("ticker-price")}>${formatNumber(ticker.c)}</p>
            <p
              className={cx("ticker-volume", {
                up: ticker.P > 0,
                down: ticker.P < 0,
              })}
            >
              {formatNumber(ticker.P)}%
            </p>
          </button>
        );
      })}
    </div>
  );
}

export default Popular;
