import type { FC } from 'react';
import Card from '@/components/Card';
import NumberedDot from '@/components/NumberedDot';
import { CATEGORY_GRID_COLUMNS, CATEGORY_GRID_COLUMNS_PER_CHUNK, type CategoryGridColumn } from '@/pages/Dashboard/constants';

const CategoryCardsGrid: FC = () => {
    const firstChunk = CATEGORY_GRID_COLUMNS.slice(0, CATEGORY_GRID_COLUMNS_PER_CHUNK);
    const secondChunk = CATEGORY_GRID_COLUMNS.slice(CATEGORY_GRID_COLUMNS_PER_CHUNK, CATEGORY_GRID_COLUMNS_PER_CHUNK * 2);

    const renderColumn = (column: CategoryGridColumn) => (
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
                        <div className="justify-center w-max max-w-full grid min-w-0 grid-cols-[repeat(auto-fit,minmax(1.5rem,1.5rem))] grid-flow-dense gap-2 justify-items-center">
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
