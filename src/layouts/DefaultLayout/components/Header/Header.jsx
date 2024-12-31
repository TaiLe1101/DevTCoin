import Tippy from "@tippyjs/react";
import TippyHeadless from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import {
  ArrowRight,
  CaretDown,
  Dog,
  DownloadSimple,
  Globe,
  MagnifyingGlass,
  Sun,
} from "phosphor-react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "~/components/Button/Button";
import PopperWrapper from "~/components/Popper/Wrapper/Wrapper";
import PopperChange from "~/components/PopperChange/PopperChange";
import PopperSearchHeader from "~/components/PopperSearchHeader/PopperSearchHeader";
import { ROUTES } from "~/constants/routes";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

export default function Header() {
  const { t } = useTranslation();
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <div className={cx("wrap")}>
      <div className={cx("left")}>
        <a
          href="/"
          className={cx("logo")}
          style={{ display: "inline-block", width: 120, height: 64 }}
        >
          <img
            src="/images/logo.png"
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </a>
        <nav className={cx("nav")}>
          <ul className={cx("nav-list")}>
            <li className={cx("nav-item")}>
              <Link to={ROUTES.CRYPTO_BUY} className={cx("nav-link")}>
                {t("buy_crypto")}
              </Link>
            </li>
            <li className={cx("nav-item")}>
              <Link to={ROUTES.MARKETS} className={cx("nav-link")}>
                {t("markets")}
              </Link>
            </li>
            <li className={cx("nav-item")}>
              <TippyHeadless
                interactive={true}
                hideOnClick={false}
                render={(attrs) => (
                  <PopperWrapper tabIndex={-1} {...attrs}>
                    <div className={cx("popper-trade-wrap")}>
                      <div>
                        <p className={cx("popper-trade-title")}>{t("basic")}</p>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className={cx("popper-trade-title")}>{t("basic")}</p>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopperWrapper>
                )}
              >
                <Link to={"#"} className={cx("nav-link")}>
                  {t("trade")}{" "}
                  <CaretDown size={14} className={cx("nav-icon")} />
                </Link>
              </TippyHeadless>
            </li>
            <li className={cx("nav-item")}>
              <TippyHeadless
                hideOnClick={false}
                interactive={true}
                render={(attrs) => (
                  <PopperWrapper tabIndex={-1} {...attrs}>
                    <div className={cx("popper-trade-wrap")}>
                      <div>
                        <p className={cx("popper-trade-title")}>{t("basic")}</p>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <Link
                            to={ROUTES.FUTURES}
                            className={cx("popper-trade-text")}
                          >
                            <p className={cx("popper-trade-text-title")}>
                              {t("futures")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </Link>
                        </div>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className={cx("popper-trade-title")}>{t("basic")}</p>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopperWrapper>
                )}
              >
                <Link to={"#"} className={cx("nav-link")}>
                  {t("futures")}{" "}
                  <CaretDown size={14} className={cx("nav-icon")} />
                </Link>
              </TippyHeadless>
            </li>
            <li className={cx("nav-item")}>
              <Link to={ROUTES.CRYPTO_BUY} className={cx("nav-link")}>
                {t("earn")}
              </Link>
            </li>
            <li className={cx("nav-item")}>
              <TippyHeadless
                hideOnClick={false}
                interactive={true}
                render={(attrs) => (
                  <PopperWrapper tabIndex={-1} {...attrs}>
                    <div className={cx("popper-trade-wrap")}>
                      <div>
                        <p className={cx("popper-trade-title")}>{t("basic")}</p>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className={cx("popper-trade-title")}>{t("basic")}</p>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopperWrapper>
                )}
              >
                <Link to={"#"} className={cx("nav-link")}>
                  {t("square")}{" "}
                  <CaretDown size={14} className={cx("nav-icon")} />
                </Link>
              </TippyHeadless>
            </li>
            <li className={cx("nav-item")}>
              <TippyHeadless
                hideOnClick={false}
                interactive={true}
                render={(attrs) => (
                  <PopperWrapper tabIndex={-1} {...attrs}>
                    <div className={cx("popper-trade-wrap")}>
                      <div>
                        <p className={cx("popper-trade-title")}>{t("basic")}</p>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className={cx("popper-trade-title")}>{t("basic")}</p>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className={cx("popper-trade-content")}>
                          <Dog size={20} className={cx("popper-trade-icon")} />
                          <div className={cx("popper-trade-text")}>
                            <p className={cx("popper-trade-text-title")}>
                              {t("spot")}
                              <ArrowRight
                                size={14}
                                weight="bold"
                                color="#FCD535"
                                className={cx("popper-trade-text-icon")}
                              />
                            </p>
                            <p className={cx("popper-trade-text-desc")}>
                              {t(
                                "buy_and_sell_on_the_spot_market_with_advanced_tools"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopperWrapper>
                )}
              >
                <Link to={"#"} className={cx("nav-link")}>
                  {t("more")} <CaretDown size={14} className={cx("nav-icon")} />
                </Link>
              </TippyHeadless>
            </li>
          </ul>
        </nav>
      </div>

      <div className={cx("right")}>
        <div className={cx("right-wrap")}>
          <TippyHeadless
            visible={activeSearch}
            interactive={true}
            placement="bottom-start"
            render={(attrs) => (
              <PopperSearchHeader
                attrs={attrs}
                activeSearch={activeSearch}
                setActiveSearch={setActiveSearch}
              />
            )}
          >
            <button
              id="search-button"
              className={cx("right-button", { active: activeSearch })}
              onClick={(e) => {
                e.stopPropagation();
                setActiveSearch((prev) => !prev);
              }}
            >
              <MagnifyingGlass size={24} weight="bold" />
            </button>
          </TippyHeadless>
          <Button type="link" variant="secondary" to={ROUTES.LOG_IN}>
            {t("log_in")}
          </Button>
          <Button type="link" to={ROUTES.SIGN_UP}>
            {t("sign_up")}
          </Button>

          <TippyHeadless
            interactive={true}
            render={(attrs) => (
              <PopperWrapper attrs={attrs}>
                <div className={cx("popper-download-app")}>
                  <div className={cx("popper-download-app-qr")}>
                    <img
                      className={cx("popper-download-app-qr-img")}
                      src="/images/qr.jpg"
                      alt=""
                    />
                  </div>
                  <p className={cx("popper-download-app-desc")}>
                    {t("scan_to_download_app_i_os_android")}
                  </p>
                  <Button
                    type="link"
                    to={ROUTES.DOWNLOAD}
                    className={cx("popper-download-app-btn")}
                  >
                    {t("more_down_options")}
                  </Button>
                </div>
              </PopperWrapper>
            )}
          >
            <button className={cx("right-button")}>
              <DownloadSimple size={24} weight="bold" />
            </button>
          </TippyHeadless>

          <TippyHeadless
            interactive={true}
            render={(attrs) => (
              <PopperWrapper attrs={attrs}>
                <PopperChange />
              </PopperWrapper>
            )}
          >
            <button className={cx("right-button")}>
              <Globe size={24} weight="bold" />
            </button>
          </TippyHeadless>

          <Tippy content={t("change_theme")}>
            <button className={cx("right-button")}>
              <Sun size={24} weight="bold" />
            </button>
          </Tippy>
        </div>
      </div>
    </div>
  );
}
