import type { HTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const dot = cva('h-1.75 w-1.75 rounded-full', {
    variants: {
        color: {
            red: 'bg-[#DB1F26]',
            green: 'bg-[#1EA54E]',
            gray: 'bg-[#8597A8]',
            blue: 'bg-[#0078D7]',
            yellow: 'bg-[#F59F0A]',
            navy: 'bg-[#004479]',
        },
    },
    defaultVariants: {
        color: 'red',
    },
});

export type DotColor = 'red' | 'green' | 'gray' | 'blue' | 'yellow' | 'navy';

export interface DotProps extends HTMLAttributes<HTMLDivElement> {
    color?: DotColor;
}

const Dot = ({ color, className = '', ...props }: DotProps) => {
    return <div {...props} className={twMerge(dot({ color }), className)} />;
};

export default Dot;
