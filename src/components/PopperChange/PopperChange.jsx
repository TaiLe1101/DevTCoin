import classNames from "classnames/bind";

import styles from "./PopperChange.module.scss";
import PopperChangeLang from "./PopperChangeLang";
import PopperChangeCurrency from "./PopperChangeCurrency";

const cx = classNames.bind(styles);

function PopperChange() {
  return (
    <div className={cx("popper-lang-wrap")}>
      <PopperChangeLang />
      <PopperChangeCurrency />
    </div>
  );
}

export default PopperChange;
