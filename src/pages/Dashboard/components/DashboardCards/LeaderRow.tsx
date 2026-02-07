import type { FC } from 'react';
import type { Leader } from '@/pages/Dashboard/constants';

export interface LeaderRowProps {
    leader: Leader;
    avatarSrc: string;
}

const LeaderRow: FC<LeaderRowProps> = ({ leader, avatarSrc }) => (
    <div className="flex items-center gap-4 border-b border-[#E0E8ED] py-3 first:pt-0 last:border-b-0 last:pb-0">
        <img
            src={avatarSrc}
            alt=""
            className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#E5E7EB] text-sm font-semibold text-[#6B7280]"
        />
        <div className="min-w-0 flex-1">
            <p className="truncate text-base font-medium leading-6 text-[#1D3557]">{leader.name}</p>
            <p className="truncate text-base font-medium leading-6 text-[#8597A8]">{leader.perspective}</p>
        </div>
        <span className="shrink-0 text-base font-bold leading-5 text-[#1D3557]">{leader.score}%</span>
    </div>
);

export default LeaderRow;
