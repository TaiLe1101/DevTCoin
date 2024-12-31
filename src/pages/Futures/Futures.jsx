import classNames from "classnames/bind";

import styles from "./Futures.module.scss";
import KLineChart from "~/components/KLineChart/KLineChart";

const cx = classNames.bind(styles);

function Futures() {
  return (
    <div className={cx("wrap")}>
      <KLineChart />
    </div>
  );
}

export default Futures;
