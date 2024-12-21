import classNames from "classnames/bind";

import styles from "./Download.module.scss";

const cx = classNames.bind(styles);

function Download() {
  return <div className={cx("wrap")}>Download</div>;
}

export default Download;
