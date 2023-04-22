import React, { useEffect, useState } from "react";
import { useField } from "formik";
import classNames from "classnames";

function Input({ label, type = "text", ...props }) {
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  const [field] = useField(props);

  useEffect(() => {
    if (show) {
      setInputType("text");
    } else if (type === "password") {
      setInputType("password");
    }
  }, [show]);
  return (
    <label className="relative flex border rounded-sm focus-within:border-gray-400">
      <input
        type={inputType}
        className={classNames({
          "px-2 outline-none text-xs w-full h-[38px]": true,
          "pt-[10px] ": field.value,
        })}
        {...props}
        {...field}
      />
      <small
        className={classNames({
          "absolute  left-[9px] cursor-text pointer-events-none  text-gray-400 -translate-y-1/2 transition-all ": true,
          "text-[10px] top-2.5": field.value,
          "text-xs top-1/2": !field.value,
        })}
      >
        {label}
      </small>
      {type === "password" && field.value && (
        <div
          onClick={() => setShow((show) => !show)}
          className="h-full flex items-center text-sm font-semibold pr-2 cursor-pointer bg-white"
        >
          {show ? "Gizle" : "Göster"}
        </div>
      )}
    </label>
  );
}

export default Input;
