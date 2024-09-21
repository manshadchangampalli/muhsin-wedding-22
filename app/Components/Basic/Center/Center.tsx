import React from 'react';
import { IDivProps } from "../../../types/basic/basicTypes.data";

export default function Center({ children, className, ...events }: IDivProps) {
  return (
    <div
      className={`flex items-center justify-center ${className || ''}`}
      {...events}
    >
      {children}
    </div>
  );
}
