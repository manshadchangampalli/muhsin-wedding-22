import { IDivProps } from "@/types/basic/basicTypes.data";
import React from "react";

export default function VStack({ children, className, ...events }: IDivProps) {
  return (
    <div className={`flex flex-col ${className || ""}`} {...events}>
      {children}
    </div>
  );
}
