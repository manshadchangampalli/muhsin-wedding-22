import { IDivProps } from '@/types/basic/basicTypes.data';
import React from 'react';

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
