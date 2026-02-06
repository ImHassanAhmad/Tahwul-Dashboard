import type { FC } from 'react';
import Card from '../../../../components/Card';
import { USER_IMG } from '../../../../assets';
import { OVERVIEW_ROWS, OVERVIEW_LEADERS } from '../../constants';

const Overview: FC = () => {
    return (
        <div className="flex flex-col gap-[16px]">
            <Card variant="light" className="relative p-[19px] grid gap-[16.41px] min-[960px]:grid-cols-[auto_1fr]">
                <div className="absolute top-0 left-[265px] h-full w-px bg-[#E0E8ED] hidden min-[960px]:block" />
                {OVERVIEW_ROWS.map((row) => (
                    <div key={row.label} className="contents">
                        <div className="rounded-[8px] bg-[#F5F8FB] px-4 py-3 text-[16px] leading-[16px] font-medium text-[#1D3557]">{row.label}</div>
                        <div className="rounded-[8px] bg-[#F5F8FB] px-4 py-3 text-[16px] leading-[16px] text-[#1D3557]">{row.content}</div>
                    </div>
                ))}
            </Card>

            <Card variant="light" className="p-[16px]">
                <p className="text-base font-bold leading-4 text-[#1D3557] mb-4">Leaders</p>
                <div className="flex gap-[16px]">
                    {OVERVIEW_LEADERS.map((leader) => (
                        <div key={leader.id} className="w-fit flex items-center gap-4 rounded-[8px] bg-[#F5F8FB] px-[13px] py-2">
                            <img src={USER_IMG} alt="" className="h-[47px] w-[47px] shrink-0 overflow-hidden rounded-full object-cover" />
                            <div className="min-w-0">
                                <p className="text-[16px] font-medium leading-[22px] text-[#1D3557]">{leader.name}</p>
                                <p className="text-[16px] font-medium leading-[22px] text-[#8597A8]">{leader.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Overview;
