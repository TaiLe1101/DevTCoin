import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingBtnLottie from "~/assets/lotties/loading-btn.json";

import { ROUTES } from "~/constants/routes";
import styles from "./SignUp.module.scss";
import { useState } from "react";
import Input from "~/components/Input/Input";

const cx = classNames.bind(styles);

function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loadingBtnEmailNext, setLoadingBtnEmailNext] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className={cx("wrap")}>
      <div className={cx("signup")}>
        <div className={cx("signup-heading")}>
          <a href={ROUTES.HOME}>
            <img
              className={cx("signup-heading-img")}
              src="/images/logo.png"
              alt="logo"
            />
          </a>
        </div>
        <div className={cx("signup-subheading")}>
          <p className={cx("signup-subheading-title")}>{t("welcome_to_app")}</p>
        </div>

        <Input
          type="email"
          btnClearRight
          isDisabled={loadingBtnEmailNext}
          label={t("email_/_phone_number")}
          className={cx("sign-input")}
          placeholder={t("email_/_phone_(_without_country_code_)")}
          value={email}
          onChange={(value) => setEmail(value)}
        />

        <div className={cx("signup-form")}>
          <div className={cx("signup-form-checkbox")}>
            <div className={cx("signup-form-checkbox-wrap")}>
              <input
                className={cx("signup-form-input-checkbox")}
                type="checkbox"
                id="chkConfirmRules"
              />
            </div>
            <label
              htmlFor="chkConfirmRules"
              className={cx("signup-form-label", "signup-form-label-checkbox")}
            >
              {t("by_creating_an_account_i_agree_to_app")}{" "}
              <Link
                target="_blank"
                to={ROUTES.TERMS}
                className={cx("signup-form-label-link")}
              >
                {t("terms_of_service")}
              </Link>{" "}
              <span>{t("and")}</span>{" "}
              <Link
                target="_blank"
                to={ROUTES.PRIVACY}
                className={cx("signup-form-label-link")}
              >
                {t("privacy_policy")}
              </Link>{" "}
              <span>.</span>
            </label>
          </div>
        </div>
        <button
          className={cx("signup-button", { loading: loadingBtnEmailNext })}
          disabled={loadingBtnEmailNext}
          onClick={() => {
            setLoadingBtnEmailNext(!loadingBtnEmailNext);
            setTimeout(() => {
              navigate(ROUTES.SIGN_UP_OTP);
            }, 1000);
          }}
        >
          {loadingBtnEmailNext ? (
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

export default SignUp;
