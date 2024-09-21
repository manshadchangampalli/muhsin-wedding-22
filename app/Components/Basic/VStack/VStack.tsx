import React from "react";
import { IDivProps } from "../../../types/basic/basicTypes.data";

export default function VStack({ children, className, ...events }: IDivProps) {
  return (
    <div className={`flex flex-col ${className || ""}`} {...events}>
      {children}
    </div>
  );
}
