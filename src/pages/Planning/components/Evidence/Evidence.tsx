import type { FC } from 'react';
import Card from '../../../../components/Card';
import type { PlanningComment } from '../../constants';
import { EVIDENCE_TABLE_ROWS } from '../../constants';
import EvidenceTable from '../EvidenceTable';
import CommentsSection from '../CommentsSection';
import { RecentActivities } from '../../../Dashboard/components/DashboardCards';

interface EvidenceProps {
    comments: PlanningComment[];
    onAddComment: (text: string) => void;
}

const Evidence: FC<EvidenceProps> = ({ comments, onAddComment }) => {
    return (
        <>
            <Card variant="light" className="p-4 sm:p-5 mb-4">
                <EvidenceTable rows={EVIDENCE_TABLE_ROWS} />
            </Card>

            <div className="flex flex-col gap-4 lg:flex-row">
                <div className="min-w-0 flex-1">
                    <CommentsSection comments={comments} onAddComment={onAddComment} />
                </div>
                <RecentActivities className="w-full lg:w-[380px]" />
            </div>
        </>
    );
};

export default Evidence;
