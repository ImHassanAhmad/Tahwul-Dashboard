import type { FC } from 'react';
import Card from '../../../../components/Card';
import { METRIC_CARDS } from '../../constants';
import { Icons } from '../../icons';

const MetricCards: FC = () => {
    return (
        <div className="grid grid-cols-3 gap-4 xl:grid-cols-6 mt-4">
            {METRIC_CARDS.map((item) => (
                <Card key={item.id} variant="light" className="flex justify-between p-4">
                    <div className="min-w-0">
                        <p className="mb-4 whitespace-nowrap font-bold text-2xl leading-4 text-[#1D3557]">{item.value}</p>
                        <p className="mt-1 whitespace-nowrap font-normal text-sm leading-4 text-[#8597A8]">{item.label}</p>
                    </div>
                    <Icons variant={item.icon} />
                </Card>
            ))}
        </div>
    );
};

export default MetricCards;
