import type { FC } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type { DotColor } from '../../../../components/Dot';
import { CATEGORY_GRID_COLUMNS, CATEGORY_GRID_COLUMNS_PER_CHUNK } from '../../constants';
import Card from '../../../../components/Card';

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

const NumberedDot: FC<{ number: number; color: DotColor }> = ({ number, color }) => (
    <div className={twMerge(numberedDotBg({ color }))} aria-hidden>
        {number}
    </div>
);

const CategoryCardsGrid: FC = () => {
    const firstChunk = CATEGORY_GRID_COLUMNS.slice(0, CATEGORY_GRID_COLUMNS_PER_CHUNK);
    const secondChunk = CATEGORY_GRID_COLUMNS.slice(CATEGORY_GRID_COLUMNS_PER_CHUNK, CATEGORY_GRID_COLUMNS_PER_CHUNK * 2);

    const renderColumn = (column: (typeof CATEGORY_GRID_COLUMNS)[number]) => (
        <div key={column.id} className="flex min-h-fit min-w-0 flex-1 flex-col gap-3 sm:gap-4 h-auto">
            {column.cards.map((card) => (
                <Card key={card.id} variant="dark" className="flex min-h-fit min-w-0 flex-1 flex-col gap-3 rounded-lg p-2 shadow-sm sm:gap-4 sm:p-4">
                    <h3
                        className="min-w-0 shrink-0 text-center font-normal text-xs leading-4 text-[#1D3557] wrap-break-word"
                        style={{ letterSpacing: 0 }}
                    >
                        {card.label}
                    </h3>
                    <div className="flex min-h-0 flex-1 items-center justify-center">
                        <div className="justify-center grid w-full min-w-0 grid-cols-[repeat(auto-fill,minmax(1.5rem,1.5rem))] grid-flow-dense gap-2 justify-items-start">
                            {card.dots.map((dot) => (
                                <NumberedDot key={`${card.id}-${dot.number}`} number={dot.number} color={dot.color} />
                            ))}
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );

    return (
        <div className="mt-6 flex flex-col gap-4 [@media(min-width:1394px)]:flex-row">
            <section className="flex flex-1 flex-row gap-4">{firstChunk.map(renderColumn)}</section>
            <section className="flex flex-1 flex-row gap-4">{secondChunk.map(renderColumn)}</section>
        </div>
    );
};

export default CategoryCardsGrid;
