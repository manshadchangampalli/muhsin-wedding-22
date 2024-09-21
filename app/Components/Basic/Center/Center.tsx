import { IDivProps } from '@/types/basic/basicTypes.data';
import React from 'react';

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
