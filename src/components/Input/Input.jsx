import classNames from "classnames/bind";

import styles from "./Input.module.scss";
import { X } from "phosphor-react";
import { useState } from "react";
import { useId } from "react";
import { useRef } from "react";

const cx = classNames.bind(styles);

function Input({
  type = "text",
  placeholder,
  label,
  btnClearRight,
  style,
  className,
  classNameWrapInput,
  customRightButton,
  value = "",
  labelStyle,
  labelClassName,
  isDisabled = false,
  isError = false,
  errorText = "",
  name = "",

  onChange = () => {},
}) {
  const inputRef = useRef(null);
  const id = useId();
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className={cx("wrap", className)} style={{ ...style }}>
      {label && (
        <label
          className={cx("label", labelClassName)}
          style={{ ...labelStyle }}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div
        className={cx("wrap-input", classNameWrapInput, {
          active: isFocus,
          error: isError,
          disabled: isDisabled,
        })}
      >
        <input
          ref={inputRef}
          id={id}
          name={name}
          type={type}
          className={cx("input")}
          placeholder={placeholder}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          readOnly={isDisabled}
          disabled={isDisabled}
        />
        <div className={cx("right-btn")}>
          {btnClearRight && (
            <button
              className={cx("btn-clear-right", { active: value })}
              onClick={() => {
                inputRef.current.focus();
                onChange("");
              }}
            >
              <X className={cx("btn-clear-icon")} size={12} weight="fill" />
            </button>
          )}
          {customRightButton}
        </div>
      </div>

      <span className={cx("error")}>{errorText}</span>
    </div>
  );
}

export default Input;
