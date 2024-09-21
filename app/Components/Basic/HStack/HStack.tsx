import React from 'react';
import { IDivProps } from "../../../types/basic/basicTypes.data";

export default function HStack({ children, className, ...events }: IDivProps) {
  return (
    <div
      className={`flex flex-row items-center ${className || ''}`}
      {...events}
    >
      {children}
    </div>
  );
}
