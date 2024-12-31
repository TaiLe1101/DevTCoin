import classNames from "classnames/bind";

import styles from "./Container.module.scss";

const cx = classNames.bind(styles);

function Container({ children, fluid }) {
  return <div className={cx("wrap", { fluid })}>{children}</div>;
}

export default Container;
