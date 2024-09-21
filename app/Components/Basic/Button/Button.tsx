import React from "react";
import Spinner from "../Spinner/Spinner";
import { IButtonProps } from "@/types/basic/basicTypes.data";

export default function Button({
  children,
  className = "btn-ghost",
  disabled,
  spinnerSize = 4,
  isLoading,
  ...events
}: IButtonProps) {
  return (
    <button
      className={`btn-common ${className || ""} ${isLoading ? "pointer-events-none" : ""
        }`}
      disabled={disabled}
      {...events}
    >
      {isLoading && <Spinner size={spinnerSize} />}
      {children}
    </button>
  );
}
