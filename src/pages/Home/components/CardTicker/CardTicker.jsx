import classNames from "classnames/bind";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { CaretDoubleRight } from "phosphor-react";
import { ROUTES } from "~/constants/routes";
import styles from "./CardTicker.module.scss";
import Popular from "./components/Popular/Popular";

const cx = classNames.bind(styles);

function CardTicker() {
  const { t } = useTranslation();
  const [tab, setTab] = useState("POPULAR");

  return (
    <div className={cx("wrap")}>
      <div className={cx("heading")}>
        <div className={cx("nav")}>
          <button
            className={cx("nav-item", {
              active: tab === "POPULAR",
            })}
            onClick={() => setTab("POPULAR")}
          >
            {t("popular")}
          </button>
          <button
            className={cx("nav-item", { active: tab === "NEW_LISTING" })}
            onClick={() => setTab("NEW_LISTING")}
          >
            {t("new_listing")}
          </button>
        </div>
        <Link to={ROUTES.MARKETS} className={cx("nav-link")}>
          {t("view_all_coin")}
          <CaretDoubleRight size={14} weight="light" />
        </Link>
      </div>
      {tab === "POPULAR" && <Popular />}
      {tab === "NEW_LISTING" && <Popular />}
    </div>
  );
}

export default CardTicker;
