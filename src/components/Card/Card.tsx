import type { HTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const card = cva('border border-[#E0E8ED] rounded-[10px]', {
    variants: {
        variant: {
            light: 'bg-white ',
            dark: 'bg-[#F5F8FB]',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'light' | 'dark';
}

const Card = ({ variant, className = '', ...props }: CardProps) => {
    return <div {...props} className={twMerge(card({ variant }), className)} />;
};

export default Card;
