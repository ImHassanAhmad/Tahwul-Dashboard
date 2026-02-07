import type { FC } from 'react';
import StatCard from '@/components/StatCard';
import { Icons } from '@/pages/Dashboard/icons';
import { METRIC_CARDS } from '@/pages/Dashboard/constants';

const MetricCards: FC = () => (
    <div className="mt-4 grid grid-cols-3 gap-4 xl:grid-cols-6">
        {METRIC_CARDS.map((item) => (
            <StatCard key={item.id} value={item.value} label={item.label} icon={<Icons variant={item.icon} />} />
        ))}
    </div>
);

export default MetricCards;
