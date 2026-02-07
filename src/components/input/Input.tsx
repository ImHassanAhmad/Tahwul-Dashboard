import type { InputHTMLAttributes, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const inputWrapper = cva('flex items-center gap-2 rounded-lg border border-[#E0E8ED] bg-[#F5F8FA] px-3 py-2.5');

const inputField = cva(
    'w-full min-w-0 border-0 bg-transparent p-0 placeholder-[#8597A8] focus:outline-none text-[#1D3557] font-normal text-sm leading-4'
);

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
}

const Input = ({ icon, className = '', type = 'text', id, ...props }: InputProps) => {
    const inputId = id ?? props.name;
    return (
        <div className={twMerge(inputWrapper(), className)}>
            {icon && (
                <span className="flex items-center justify-center shrink-0" aria-hidden>
                    {icon}
                </span>
            )}
            <input id={inputId} type={type} className={inputField()} {...props} />
        </div>
    );
};

export default Input;
