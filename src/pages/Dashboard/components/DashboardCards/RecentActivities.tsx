import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import TitledCard from '@/components/TitledCard';
import { RECENT_ACTIVITIES } from '@/pages/Dashboard/constants';
import ActivityItem from './ActivityItem';

interface RecentActivitiesProps {
    className?: string;
}

const RecentActivities: FC<RecentActivitiesProps> = ({ className }) => (
    <TitledCard title="Recent Activities" titleClassName="px-4" className={twMerge('h-[283px] w-full py-4', className)}>
        <ul className="flex h-[210px] flex-col divide-y divide-[#E0E8ED] overflow-y-auto px-4">
            {RECENT_ACTIVITIES.map((activity) => (
                <ActivityItem key={activity.id} description={activity.description} timeAgo={activity.timeAgo} />
            ))}
        </ul>
    </TitledCard>
);

export default RecentActivities;
