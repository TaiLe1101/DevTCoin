import classNames from "classnames/bind";
import Lottie from "lottie-react";
import { Eye, EyeSlash, QrCode } from "phosphor-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "~/constants/routes";

import loadingBtnLottie from "~/assets/lotties/loading-btn.json";
import Input from "~/components/Input/Input";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
  const { t } = useTranslation();
  const [btnLoading, setBtnLoading] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={cx("wrap")}>
      <div className={cx("login")}>
        <div className={cx("login-heading")}>
          <a href={ROUTES.HOME}>
            <img
              className={cx("login-heading-img")}
              src="/images/logo.png"
              alt="logo"
            />
          </a>
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

        <Input
          type="email"
          isDisabled={btnLoading}
          btnClearRight
          label={t("email_/_phone_number")}
          placeholder={t("email_/_phone_(_without_country_code_)")}
          className={cx("login-input")}
          value={email}
          onChange={(value) => setEmail(value)}
        />

        <Input
          type={isVisiblePassword ? "text" : "password"}
          isDisabled={btnLoading}
          btnClearRight
          label={t("password")}
          placeholder={t("please_enter_your_password")}
          className={cx("login-input")}
          value={password}
          onChange={(value) => setPassword(value)}
          customRightButton={
            <button
              className={cx("signup-input-visible-password")}
              disabled={btnLoading}
              style={{
                cursor: btnLoading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            >
              {isVisiblePassword ? (
                <EyeSlash size={24} weight="bold" />
              ) : (
                <Eye size={24} weight="bold" />
              )}
            </button>
          }
        />

        <button
          className={cx("login-button", { loading: btnLoading })}
          onClick={() => setBtnLoading(true)}
        >
          {btnLoading ? (
            <Lottie
              animationData={loadingBtnLottie}
              loop={true}
              style={{ width: 100, height: 48, margin: "0 auto" }}
            />
          ) : (
            <span>{t("next")}</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default Login;
