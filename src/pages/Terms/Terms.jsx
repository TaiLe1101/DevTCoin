import classNames from "classnames/bind";

import styles from "./Terms.module.scss";

const cx = classNames.bind(styles);

function Terms() {
  return <div className={cx("wrap")}>Terms</div>;
}

export default Terms;
