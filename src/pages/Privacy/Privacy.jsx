import classNames from "classnames/bind";

import styles from "./Privacy.module.scss";

const cx = classNames.bind(styles);

function Privacy() {
  return <div className={cx("wrap")}>Privacy</div>;
}

export default Privacy;
