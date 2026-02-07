import type { FC } from 'react';
import TitledCard from '@/components/TitledCard';
import { USER_IMG } from '@/assets';
import { TOP_PERFORMING_LEADERS } from '@/pages/Dashboard/constants';
import LeaderRow from './LeaderRow';

const TopPerformingLeaders: FC = () => (
    <TitledCard title="Top Performing Perspective Leaders" className="h-[283px] w-full p-4">
        <div className="flex flex-col">
            {TOP_PERFORMING_LEADERS.map((leader) => (
                <LeaderRow key={leader.id} leader={leader} avatarSrc={USER_IMG} />
            ))}
        </div>
    </TitledCard>
);

export default TopPerformingLeaders;
