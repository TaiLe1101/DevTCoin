import classNames from "classnames/bind";
import Lottie from "lottie-react";
import { Check, Eye, EyeSlash } from "phosphor-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import loadingBtnLottie from "~/assets/lotties/loading-btn.json";
import Input from "~/components/Input/Input";
import { ROUTES } from "~/constants/routes";
import styles from "./SignUp.module.scss";

const cx = classNames.bind(styles);

function InputPassword() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loadingBtnEmailNext, setLoadingBtnEmailNext] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");

  const [validatePassword, setValidatePassword] = useState({
    isMatch: false,
    isLength: false,
    isCharacter: false,
  });

  const handleInputPassword = (value) => {
    setPassword(value);

    // Cập nhật trạng thái validate
    setValidatePassword({
      ...validatePassword,
      isLength: value.length >= 6, // Kiểm tra độ dài
      isCharacter: /[!@#$%^&*?]/.test(value), // Kiểm tra có ký tự chữ
    });
  };

  const handleInputConfirmPassword = (value) => {
    setConfirmPassword(value);

    // Kiểm tra confirm password khớp
    setValidatePassword((prev) => ({
      ...prev,
      isMatch: value === password && value,
    }));
  };

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
            {t("enter_your_password")}
          </p>
        </div>

        <Input
          type={isVisiblePassword ? "text" : "password"}
          isDisabled={loadingBtnEmailNext}
          value={password}
          label={t("password")}
          className={cx("signup-from-input-custom")}
          placeholder={t("please_enter_your_password")}
          btnClearRight
          customRightButton={
            <button
              className={cx("signup-input-visible-password")}
              disabled={loadingBtnEmailNext}
              style={{
                cursor: loadingBtnEmailNext ? "not-allowed" : "pointer",
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
          onChange={(value) => handleInputPassword(value)}
        />

        <div className={cx("password-rules-wrap")}>
          <p
            className={cx("password-rules-item", {
              success: validatePassword.isLength,
            })}
          >
            <Check
              size={14}
              weight="bold"
              className={cx("password-rules-item-icon")}
            />{" "}
            <span className={cx("password-rules-item-text")}>
              {t("password_minimum_6_characters")}
            </span>
          </p>
          <p
            className={cx("password-rules-item", {
              success: validatePassword.isCharacter,
            })}
          >
            <Check
              size={14}
              weight="bold"
              className={cx("password-rules-item-icon")}
            />{" "}
            <span className={cx("password-rules-item-text")}>
              {t("password_must_contain_characters")}
            </span>
          </p>
        </div>

        <Input
          type={isVisibleConfirmPassword ? "text" : "password"}
          btnClearRight
          isDisabled={loadingBtnEmailNext}
          value={confirmPassword}
          label={t("confirm_password")}
          className={cx("signup-from-input-custom")}
          placeholder={t("please_enter_your_password_again")}
          customRightButton={
            <button
              className={cx("signup-input-visible-password")}
              disabled={loadingBtnEmailNext}
              style={{
                cursor: loadingBtnEmailNext ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() =>
                setIsVisibleConfirmPassword(!isVisibleConfirmPassword)
              }
            >
              {isVisibleConfirmPassword ? (
                <EyeSlash size={24} weight="bold" />
              ) : (
                <Eye size={24} weight="bold" />
              )}
            </button>
          }
          onChange={(value) => handleInputConfirmPassword(value)}
        />

        <div className={cx("password-rules-wrap")}>
          <p
            className={cx("password-rules-item", {
              success: validatePassword.isMatch,
            })}
          >
            <Check
              size={14}
              weight="bold"
              className={cx("password-rules-item-icon")}
            />{" "}
            <span className={cx("password-rules-item-text")}>
              {t("password_matches")}
            </span>
          </p>
        </div>

        <button
          className={cx("signup-button", { loading: loadingBtnEmailNext })}
          disabled={loadingBtnEmailNext}
          onClick={() => {
            setLoadingBtnEmailNext(!loadingBtnEmailNext);
            setTimeout(() => {
              navigate(ROUTES.HOME);
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

export default InputPassword;
