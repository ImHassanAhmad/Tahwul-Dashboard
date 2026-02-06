import { type FC } from 'react';
import Card from '../../../../components/Card';
import SemiRadialChart, { SEMI_RADIAL_CHART_CONTAINER_HEIGHT } from '../../../../components/SemiRadialChart';

const SCORE = 65;
const SUBTITLE = 'Basic Standards 2025';

const OverallComplianceScore: FC = () => {
    return (
        <Card variant="light" className="p-4 h-[283px] flex flex-col">
            <p className="text-base font-bold leading-4 text-[#1D3557] mb-5">Overall Compliance Score</p>
            <div className="min-h-0" style={{ height: SEMI_RADIAL_CHART_CONTAINER_HEIGHT }}>
                <SemiRadialChart score={SCORE} subtitle={SUBTITLE} />
            </div>
        </Card>
    );
};

export default OverallComplianceScore;
