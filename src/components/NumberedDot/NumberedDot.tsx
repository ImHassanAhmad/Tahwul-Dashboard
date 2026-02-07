import type { FC } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type { DotColor } from '@/components/Dot';

const numberedDotBg = cva('flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white', {
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
        color: 'green',
    },
});

export interface NumberedDotProps {
    number: number;
    color?: DotColor;
}

const NumberedDot: FC<NumberedDotProps> = ({ number, color = 'green' }) => (
    <div className={twMerge(numberedDotBg({ color }))} aria-hidden>
        {number}
    </div>
);

export default NumberedDot;
