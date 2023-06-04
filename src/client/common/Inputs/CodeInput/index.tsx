import React from "react";
import clsx from "clsx";

import "./CodeInput.scss";

interface ICodeInputProps {
  length: number;
  values: number[];
  onChange: (value: number, position: number) => number[];
  className?: string;
  label?: string;
  onSubmit?: (actualValue: number[]) => boolean;
  onClear?: () => void;
  onSuccess?: () => void;
}

const CodeInput: React.FC<ICodeInputProps> = ({
  length,
  values,
  className,
  label,
  onChange,
  onSubmit,
  onClear,
  onSuccess,
}) => {
  const itemsRef = React.useRef<Array<HTMLInputElement | null>>([]);

  React.useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, length);
  }, [length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, pos: number) => {
    const re = /[0-9]/;
    const value = e.target.value[e.target.value.length - 1];
    if (!value || !value.match(re)) return;

    const actualValue = onChange(+value, pos);

    const emptyField = checkInputsFilled(pos);
    if (emptyField !== -1) {
      itemsRef.current[emptyField]?.focus();
      return;
    }
    handleSubmitInput(actualValue);
  };

  const handleSubmitInput = (actualValue: number[]) => {
    if (onSubmit && !onSubmit(actualValue)) {
      onClear && onClear();
      itemsRef.current[0]?.focus();
    } else {
      onSuccess && onSuccess();
    }
  };

  const checkInputsFilled = (position: number = 0) => {
    for (let i = position + 1; i < length; i++) {
      if (values[i] === undefined) {
        return i;
      }
    }

    for (let i = 0; i < position - 1; i++) {
      if (values[i] === undefined) {
        return i;
      }
    }
    return -1;
  };

  return (
    <div className={clsx("input-code-container", className)}>
      {label && <label className="input-code-label">{label}</label>}
      <div className="input-code-base">
        {Array.from(Array(length), (_, index) => index + 1).map((_, index) => (
          <input
            style={{ width: `calc(100% / (${length} + 4)` }}
            ref={(el) => (itemsRef.current[index] = el)}
            key={index}
            onChange={(e) => {
              handleInputChange(e, index);
            }}
            className="input-code-item"
            type="text"
            value={values[index] !== undefined ? values[index] : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default CodeInput;
