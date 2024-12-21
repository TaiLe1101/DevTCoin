import classNames from "classnames/bind";
import { X } from "phosphor-react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./PopperChange.module.scss";
import langs from "~/data/langs.json";

const cx = classNames.bind(styles);

function PopperChangeLang() {
  const { t, i18n } = useTranslation();
  const langRef = useRef(null);
  const [langValue, setLangValue] = useState("");
  return (
    <div className={cx("popper-lang-left")}>
      <p className={cx("popper-lang-title")}>{t("lang")}</p>
      <div className={cx("popper-lang-search")}>
        <input
          ref={langRef}
          type="text"
          className={cx("popper-lang-input")}
          value={langValue}
          onChange={(e) => setLangValue(e.target.value)}
        />
        <button
          className={cx("popper-lang-clear-input", {
            active: langValue,
          })}
          onClick={() => {
            setLangValue("");
            langRef.current.focus();
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
        {langs.map((lang) => (
          <button
            key={lang.key}
            className={cx("popper-lang-item")}
            onClick={() => i18n.changeLanguage(lang.key)}
          >
            {lang.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PopperChangeLang;
