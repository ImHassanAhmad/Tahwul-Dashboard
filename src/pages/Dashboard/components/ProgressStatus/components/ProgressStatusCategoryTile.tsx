import type { FC, KeyboardEvent } from 'react';
import type { ProgressStatusCategory } from '@/pages/Dashboard/constants';

export interface ProgressStatusCategoryTileProps {
    category: ProgressStatusCategory;
    onClick: () => void;
}

const ProgressStatusCategoryTile: FC<ProgressStatusCategoryTileProps> = ({ category, onClick }) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') onClick();
    };

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            className="flex min-w-0 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-[#1D3557] p-4"
        >
            <p className="mb-1 line-clamp-2 text-center text-xs font-bold leading-4 text-white">{category.label}</p>
            <span className="inline-flex rounded-lg bg-[#344A68] px-2.5 py-0.5 text-sm font-bold leading-4 text-white">{category.percentage}</span>
        </div>
    );
};

export default ProgressStatusCategoryTile;
