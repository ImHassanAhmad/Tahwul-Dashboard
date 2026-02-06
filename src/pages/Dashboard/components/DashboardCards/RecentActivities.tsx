import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Card from '../../../../components/Card';
import Dot from '../../../../components/Dot';
import { RECENT_ACTIVITIES } from '../../constants';

interface RecentActivitiesProps {
    className?: string;
}

const RecentActivities: FC<RecentActivitiesProps> = ({ className }) => {
    return (
        <Card variant="light" className={twMerge('h-72 w-full p-4', className)}>
            <p className="text-base font-bold leading-4 text-[#1D3557] mb-5">Recent Activities</p>
            <ul className="flex flex-col divide-y divide-[#E0E8ED]">
                {RECENT_ACTIVITIES.map((activity) => (
                    <li key={activity.id} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                        <Dot color="red" className="h-1.5 w-1.5 shrink-0 mt-2" />
                        <div className="flex flex-1 items-start justify-between gap-2 min-w-0">
                            <span className="text-base leading-6 text-[#1D3557] font-medium relative bottom-0.5">{activity.description}</span>
                            <span className="text-xs leading-4 text-[#8597A8] font-normal text-nowrap">{activity.timeAgo}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default RecentActivities;
