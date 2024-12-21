import classNames from "classnames/bind";
import { QrCode } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "~/constants/routes";

import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
  const { t } = useTranslation();

  return (
    <div className={cx("wrap")}>
      <div className={cx("login")}>
        <div className={cx("login-heading")}>
          <Link to={ROUTES.HOME}>
            <img
              className={cx("login-heading-img")}
              src="/images/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className={cx("login-subheading")}>
          <p className={cx("login-subheading-title")}>{t("log_in")}</p>
          <button className={cx("login-subheading-button")}>
            <QrCode
              size={32}
              weight="fill"
              className={cx("login-subheading-icon")}
            />
          </button>
        </div>
        <div className={cx("login-form")}>
          <label className={cx("login-form-label")} htmlFor="">
            {t("email_/_phone_number")}
          </label>
          <input
            className={cx("login-form-input")}
            type="email"
            placeholder={t("email_/_phone_(_without_country_code_)")}
          />
        </div>
        <button className={cx("login-button")}>{t("next")}</button>
      </div>
    </div>
  );
}

export default Login;
