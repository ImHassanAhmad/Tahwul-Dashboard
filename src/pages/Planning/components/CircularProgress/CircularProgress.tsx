import type { FC } from 'react';

interface CircularProgressProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    className?: string;
}

const CircularProgress: FC<CircularProgressProps> = ({ percentage, size = 120, strokeWidth = 8, className = '' }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <svg width={size} height={size} className="-rotate-90" aria-hidden>
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#E0E8ED" strokeWidth={strokeWidth} />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#1EA54E"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="transition-[stroke-dashoffset] duration-500"
                />
            </svg>
            <span className="absolute text-[14px] font-bold leading-4 text-[#1D3557]">{percentage}%</span>
        </div>
    );
};

export default CircularProgress;
