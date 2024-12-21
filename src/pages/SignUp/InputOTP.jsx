import classNames from "classnames/bind";
import Lottie from "lottie-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import loadingBtnLottie from "~/assets/lotties/loading-btn.json";
import { ROUTES } from "~/constants/routes";
import styles from "./SignUp.module.scss";
import Input from "~/components/Input/Input";

const cx = classNames.bind(styles);

function InputOTP() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loadingBtnEmailNext, setLoadingBtnEmailNext] = useState(false);
  const [otp, setOtp] = useState("");

  return (
    <div className={cx("wrap")}>
      <div className={cx("signup")}>
        <div className={cx("signup-heading")}>
          <Link to={ROUTES.HOME}>
            <img
              className={cx("signup-heading-img")}
              src="/images/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className={cx("signup-subheading")}>
          <p className={cx("signup-subheading-title")}>
            {t("verify_your_email")}
          </p>
        </div>
        <p className={cx("signup-subheading-desc")}>
          {t(
            "a_6_digit_code_has_been_sent_to_email_please_enter_it_within_the_next_30_minutes"
          )}
        </p>

        <Input
          isDisabled={loadingBtnEmailNext}
          value={otp}
          label={t("verification_code")}
          className={cx("signup-from-input-custom")}
          placeholder={t("please_enter_6_digit_code")}
          customRightButton={
            <button
              className={cx("signup-input-otp-resend")}
              disabled={loadingBtnEmailNext}
              style={{
                cursor: loadingBtnEmailNext ? "not-allowed" : "pointer",
              }}
            >
              {t("resend_otp")}
            </button>
          }
          onChange={(value) => setOtp(value)}
        />

        <button
          className={cx("signup-button", { loading: loadingBtnEmailNext })}
          disabled={loadingBtnEmailNext}
          onClick={() => {
            setLoadingBtnEmailNext(!loadingBtnEmailNext);
            setTimeout(() => {
              navigate(ROUTES.SIGN_UP_PASSWORD);
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

export default InputOTP;
