import type { FC } from 'react';
import Dot from '@/components/Dot';

export interface ActivityItemProps {
    description: string;
    timeAgo: string;
}

const ActivityItem: FC<ActivityItemProps> = ({ description, timeAgo }) => (
    <li className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
        <Dot color="red" className="mt-2 h-1.5 w-1.5 shrink-0" />
        <div className="flex min-w-0 flex-1 items-start justify-between gap-2">
            <span className="relative bottom-0.5 text-base font-medium leading-6 text-[#1D3557]">{description}</span>
            <span className="text-nowrap text-xs font-normal leading-4 text-[#8597A8]">{timeAgo}</span>
        </div>
    </li>
);

export default ActivityItem;
