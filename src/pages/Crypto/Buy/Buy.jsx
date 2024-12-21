import classNames from "classnames/bind";

import styles from "./Buy.module.scss";

const cx = classNames.bind(styles);

function Buy() {
  return <div className={cx("wrap")}>Buy</div>;
}

export default Buy;
