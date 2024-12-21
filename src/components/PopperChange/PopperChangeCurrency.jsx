import classNames from "classnames/bind";
import { X } from "phosphor-react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./PopperChange.module.scss";

const cx = classNames.bind(styles);

function PopperChangeCurrency() {
  const { t } = useTranslation();
  const currencyRef = useRef(null);
  const [currencyValue, setCurrencyValue] = useState("");

  return (
    <div className={cx("popper-lang-right")}>
      <p className={cx("popper-lang-title")}>{t("currency")}</p>
      <div className={cx("popper-lang-search")}>
        <input
          ref={currencyRef}
          type="text"
          className={cx("popper-lang-input")}
          value={currencyValue}
          onChange={(e) => setCurrencyValue(e.target.value)}
        />
        <button
          className={cx("popper-lang-clear-input", {
            active: currencyValue,
          })}
          onClick={() => {
            setCurrencyValue("");
            currencyRef.current.focus();
          }}
        >
          <X
            size={12}
            weight="bold"
            className={cx("popper-lang-clear-input-icon")}
          />
        </button>
      </div>
      <div className={cx("popper-lang-list")}>
        <button className={cx("popper-lang-item")}>
          <span>USD</span> <span>-</span> <span>$</span>
        </button>
        <button className={cx("popper-lang-item")}>
          <span>Việt Nam Đồng</span> <span>-</span> <span>VNĐ</span>
        </button>
      </div>
    </div>
  );
}

export default PopperChangeCurrency;
