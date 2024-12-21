import classNames from "classnames/bind";

import styles from "./Wrapper.module.scss";

const cx = classNames.bind(styles);

function Wrapper({ children, attrs }) {
  return (
    <div {...attrs} className={cx("wrap")}>
      {children}
    </div>
  );
}

export default Wrapper;
