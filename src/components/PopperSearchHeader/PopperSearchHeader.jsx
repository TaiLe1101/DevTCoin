import classNames from "classnames/bind";
import { MagnifyingGlass, X } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import PopperWrapper from "~/components/Popper/Wrapper/Wrapper";
import styles from "./PopperSearchHeader.module.scss";

const cx = classNames.bind(styles);

function PopperSearchHeader({ activeSearch, setActiveSearch, attrs }) {
  const { t } = useTranslation();
  const searchRef = useRef(null);
  const popperSearchRef = useRef(null);

  const [valueSearch, setValueSearch] = useState("");
  const [activeBorderSearch, setActiveBorderSearch] = useState(false);

  useEffect(() => {
    if (activeSearch) searchRef.current.focus();
  }, [activeSearch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popperSearchRef.current &&
        !popperSearchRef.current.contains(event.target) &&
        !document.querySelector("#search-button").contains(event.target)
      ) {
        setActiveSearch(false); // Đóng popper
      }
    };

    // Lắng nghe sự kiện click trên toàn bộ document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup event listener khi component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeSearch, setActiveSearch]);

  return (
    <div
      ref={popperSearchRef}
      tabIndex={-1}
      {...attrs}
      onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click lan sang ngoài popper
      style={{ maxWidth: 368, minWidth: 320 }}
    >
      <PopperWrapper>
        <div className={cx("popper-search-wrap")}>
          <div className={cx("popper-search-heading")}>
            <div
              className={cx("popper-search", {
                active: activeBorderSearch || !!valueSearch.length,
              })}
            >
              <MagnifyingGlass
                size={14}
                weight="bold"
                className={cx("popper-search-icon")}
              />
              <input
                ref={searchRef}
                type="text"
                placeholder="CTXC"
                onFocus={() => setActiveBorderSearch(true)}
                onBlur={() => setActiveBorderSearch(false)}
                onInput={(e) => setValueSearch(e.target.value)}
                value={valueSearch}
                className={cx("popper-search-input")}
              />
              <button
                className={cx("popper-search-clear-button", {
                  active: !!valueSearch.length,
                })}
                onClick={() => {
                  setValueSearch("");
                }}
              >
                <X
                  size={14}
                  weight="fill"
                  className={cx("popper-search-clear-button-icon")}
                />
              </button>
            </div>
            <button
              className={cx("popper-search-button")}
              onClick={() => setActiveSearch(false)}
            >
              {t("cancel")}
            </button>
          </div>
        </div>
      </PopperWrapper>
    </div>
  );
}

export default PopperSearchHeader;
