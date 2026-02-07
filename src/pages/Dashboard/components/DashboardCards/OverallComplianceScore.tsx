import type { FC } from 'react';
import TitledCard from '@/components/TitledCard';
import SemiRadialChart, { SEMI_RADIAL_CHART_CONTAINER_HEIGHT } from '@/components/SemiRadialChart';

const SCORE = 65;
const SUBTITLE = 'Basic Standards 2025';

const OverallComplianceScore: FC = () => (
    <TitledCard title="Overall Compliance Score" className="h-[283px] p-4">
        <div className="min-h-0" style={{ height: SEMI_RADIAL_CHART_CONTAINER_HEIGHT }}>
            <SemiRadialChart score={SCORE} subtitle={SUBTITLE} />
        </div>
    </TitledCard>
);

export default OverallComplianceScore;
