import { type FC } from 'react';
import Card from '../../../../components/Card';
import ComplianceScoreChart from '../../../../components/ComplianceScoreChart';

const SCORE = 65;
const SUBTITLE = 'Basic Standards 2025';

const OverallComplianceScore: FC = () => {
    return (
        <Card variant="light" className="p-4 h-[283px]">
            <p className="text-base font-bold leading-4 text-[#1D3557] mb-5">Overall Compliance Score</p>
            <ComplianceScoreChart score={SCORE} subtitle={SUBTITLE} />
        </Card>
    );
};

export default OverallComplianceScore;
