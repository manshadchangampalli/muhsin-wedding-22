import { ButtonHTMLAttributes, HTMLProps, ReactNode } from "react";

export type IButtonProps  = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
    spinnerSize?: number;
}

export type IDivProps = HTMLProps<HTMLDivElement> & {
    children: ReactNode,
    className?: string
}

export type IInputProps = HTMLProps<HTMLInputElement> & {
    label?: string,
    className?: string,
    required?: boolean,
    error?: string | undefined,
    register?: any,
    errorClass?:string
}

export type IToastPropType = {
    type: 'info' | 'success' | 'error' | 'warning';
    title: string;
    description: string;
}

