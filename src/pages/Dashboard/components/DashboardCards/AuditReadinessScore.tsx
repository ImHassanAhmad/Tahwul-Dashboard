import { type FC } from 'react';
import Card from '../../../../components/Card';
import SemiRadialChart, { SEMI_RADIAL_CHART_CONTAINER_HEIGHT } from '../../../../components/SemiRadialChart';

const SCORE = 80;
const SUBTITLE = 'Readiness Level';

const STAT_ITEMS = [
    { value: '12', label: 'Overdue Stds' },
    { value: '5', label: 'Missing Evidence' },
] as const;

const AuditReadinessScore: FC = () => {
    return (
        <Card variant="light" className="p-4 h-[322px] flex flex-col">
            <p className="text-base font-bold leading-4 text-[#1D3557] mb-5">Audit Readiness</p>
            <div className="min-h-0" style={{ height: SEMI_RADIAL_CHART_CONTAINER_HEIGHT }}>
                <SemiRadialChart score={SCORE} subtitle={SUBTITLE} />
            </div>
            <div className="flex justify-between border-t border-[#E0E8ED]">
                {STAT_ITEMS.map(({ value, label }) => (
                    <div key={label} className="mt-4">
                        <p className="text-base text-[#1D3557] text-center font-bold leading-6">{value}</p>
                        <p className="text-sm text-[#8597A8] text-center">{label}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default AuditReadinessScore;
