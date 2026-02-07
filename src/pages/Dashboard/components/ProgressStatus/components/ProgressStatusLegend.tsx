import type { FC } from 'react';
import Dot from '@/components/Dot';
import type { ProgressStatusLegendItem } from '@/pages/Dashboard/constants';

export interface ProgressStatusLegendProps {
    items: ProgressStatusLegendItem[];
}

const ProgressStatusLegend: FC<ProgressStatusLegendProps> = ({ items }) => (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {items.map((item) => (
            <div key={item.id} className="flex items-center gap-1.5">
                <Dot color={item.dotColor} className="h-2 w-2 shrink-0" />
                <span className="text-sm font-normal leading-4 text-[#1D3557]">{item.label}</span>
            </div>
        ))}
    </div>
);

export default ProgressStatusLegend;
