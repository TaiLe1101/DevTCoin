import classNames from "classnames/bind";

import styles from "./Markets.module.scss";

const cx = classNames.bind(styles);

function Markets() {
  return <div className={cx("wrap")}>Market</div>;
}

export default Markets;
