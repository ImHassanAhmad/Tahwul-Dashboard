import type { FC } from 'react';
import Card from '../../../../components/Card';
import { USER_IMG } from '../../../../assets';
import { TOP_PERFORMING_LEADERS } from '../../constants';

const TopPerformingLeaders: FC = () => {
    return (
        <Card variant="light" className="h-[283px] w-full p-4">
            <p className="text-base font-bold leading-4 text-[#1D3557] mb-5">Top Performing Perspective Leaders</p>
            <div className="flex flex-col">
                {TOP_PERFORMING_LEADERS.map((leader) => (
                    <div key={leader.id} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0 border-b border-[#E0E8ED] last:border-b-0">
                        <img
                            src={USER_IMG}
                            className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#E5E7EB] flex items-center justify-center text-sm font-semibold text-[#6B7280]"
                        />
                        <div className="min-w-0 flex-1">
                            <p className="text-base font-medium leading-6 text-[#1D3557] truncate">{leader.name}</p>
                            <p className="text-base font-medium leading-6 text-[#8597A8] truncate">{leader.perspective}</p>
                        </div>
                        <span className="shrink-0 text-base font-bold leading-5 text-[#1D3557]">{leader.score}%</span>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default TopPerformingLeaders;
