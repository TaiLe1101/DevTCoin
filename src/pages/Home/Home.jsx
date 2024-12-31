import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import Button from "~/components/Button/Button";
import Container from "~/components/Container/Container";
import Input from "~/components/Input/Input";
import socket from "~/config/socket";
import { ROUTES } from "~/constants/routes";
import styles from "./Home.module.scss";
import CardTicker from "./components/CardTicker/CardTicker";

const cx = classNames.bind(styles);

function Home() {
  const { t } = useTranslation();
  const [emailValue, setEmailValue] = useState("");
  const [amount, setAmount] = useState(247884999);
  const prevAmountRef = useRef(amount); // Lưu giá trị trước đó

  useEffect(() => {
    const keyInterval = setInterval(() => {
      setAmount((prev) => prev + Math.floor(Math.random() * 250));
    }, 4000);

    return () => {
      clearInterval(keyInterval);
    };
  }, []);

  useEffect(() => {
    // Cập nhật giá trị trước đó sau mỗi lần amount thay đổi
    prevAmountRef.current = amount;
  }, [amount]);

  return (
    <Container>
      <section className={cx("section-1")}>
        <div className={cx("section-1-left")}>
          <div className={cx("section-1-heading-wrap")}>
            <div className={cx("section-1-heading-count")}>
              <CountUp
                className={cx("section-1-heading-count-up")}
                start={prevAmountRef.current} // Giá trị bắt đầu là giá trị trước đó
                end={amount} // Giá trị kết thúc là giá trị hiện tại
                duration={3} // Thời gian thực hiện tăng
                separator=","
              />
              <p className={cx("section-1-heading-count-up-text")}>USERS</p>
              <p className={cx("section-1-heading-count-up-text")}>TRUST US</p>
            </div>
            <div className={cx("section-1-heading-input-register-wrap")}>
              <Input
                type="email"
                btnClearRight
                placeholder={t("email_/_phone_(_without_country_code_)")}
                className={cx("section-1-heading-input-register-control-wrap")}
                classNameWrapInput={cx(
                  "section-1-heading-input-register-control"
                )}
                value={emailValue}
                onChange={(value) => setEmailValue(value)}
              />
              <Button
                type="link"
                to={ROUTES.SIGN_UP}
                className={cx("section-1-heading-input-register-btn")}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        <div className={cx("section-1-right")}>
          <CardTicker />
        </div>
      </section>
    </Container>
  );
}

export default Home;
