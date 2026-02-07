import type { ChangeEvent, FC } from 'react';
import { TIMELINE_YEARS } from '@/pages/Dashboard/constants';

const ChevronDownIcon: FC = () => (
    <svg
        className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7B9FC3]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

export interface TimelineHeaderProps {
    selectedYear: string;
    onYearChange: (year: string) => void;
}

const TimelineHeader: FC<TimelineHeaderProps> = ({ selectedYear, onYearChange }) => {
    const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => onYearChange(e.target.value);

    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-base font-bold leading-5 text-[#1D3557] sm:text-lg">Project Timeline</h2>
            <div className="relative w-fit">
                <select
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="h-9 appearance-none rounded-md border border-[#E0E8ED] bg-white px-3 pr-8 text-sm font-medium text-[#1D3557] outline-none focus:ring-2 focus:ring-[#7B9FC3]/30"
                    aria-label="Select year"
                >
                    {TIMELINE_YEARS.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <ChevronDownIcon />
            </div>
        </div>
    );
};

export default TimelineHeader;
