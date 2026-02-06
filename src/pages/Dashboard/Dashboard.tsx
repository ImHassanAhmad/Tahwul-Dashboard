import type { FC } from 'react';
import MetricCards from './components/MetricCards';
import ProgressStatus from './components/ProgressStatus';
import CategoryCardsGrid from './components/CategoryCardsGrid';
import ProjectTimeline from './components/ProjectTimeline';
import {
    OverallComplianceScore,
    TopPerformingLeaders,
    RecentActivities,
    DashboardCardPlaceholder,
    AuditReadinessScore,
} from './components/DashboardCards';
import Card from '../../components/Card';

const Dashboard: FC = () => {
    return (
        <>
            <ProjectTimeline />
            <MetricCards />
            <Card variant="light" className="p-4 sm:p-5 mt-4">
                <ProgressStatus />
                <CategoryCardsGrid />
            </Card>
            <div className="flex gap-4 mt-4">
                <OverallComplianceScore />
                <TopPerformingLeaders />
                <RecentActivities />
            </div>
            <div className="flex gap-4 mt-4">
                <DashboardCardPlaceholder />
                <AuditReadinessScore />
            </div>
        </>
    );
};

export default Dashboard;
