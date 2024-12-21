import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  children,
  className,
  type = "button",
  variant = "primary",
  to,
  onClick,
}) {
  let Element = null;
  let backgroundColor = null;
  if (type === "link") {
    Element = Link;
  } else {
    Element = "button";
  }

  if (variant === "secondary") {
    backgroundColor = "#eaecef";
  }

  return (
    <Element
      to={to}
      className={cx("wrap", className)}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {children}
    </Element>
  );
}

export default Button;
