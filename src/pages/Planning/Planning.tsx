import type { FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cva } from 'class-variance-authority';
import Card from '@/components/Card';
import StatCard from '@/components/StatCard';
import { RouteNames } from '@/constants/routes';
import type { PlanningComment } from './constants';
import { EVIDENCE_METRIC_CARDS, PLANNING_COMMENTS } from './constants';
import CircularProgress from './components/CircularProgress';
import Overview from './components/Overview';
import Evidence from './components/Evidence';
import { Icons, IconsVariant } from './icons';

const PLANNING_TABS = [
    { id: 'overview' as const, label: 'Overview' },
    { id: 'evidence' as const, label: 'Evidence' },
] as const;

const tabButton = cva('transition-colors duration-300 ease-in-out cursor-pointer rounded-lg m-[3px] px-[21px] text-sm font-normal', {
    variants: {
        active: {
            true: 'bg-white text-[#1D3557]',
            false: 'text-[#8597A8]',
        },
    },
    defaultVariants: { active: false },
});

const Planning: FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'overview' | 'evidence'>('overview');
    const [comments, setComments] = useState<PlanningComment[]>(PLANNING_COMMENTS);

    const handleAddComment = (text: string) => {
        const newComment: PlanningComment = {
            id: String(Date.now()),
            author: 'You',
            text,
            date: new Date().toISOString().slice(0, 10),
        };
        setComments((prev) => [...prev, newComment]);
    };

    return (
        <div className="mt-[17px]">
            <button
                type="button"
                onClick={() => navigate(`/${RouteNames.DASHBOARD}`)}
                className="cursor-pointer mb-[26px] inline-flex items-center gap-1 text-sm text-[#8597A8] hover:text-[#1D3557]"
                aria-label="Back to Dashboard"
            >
                <Icons variant={IconsVariant.Back} />
                <h1 className="text-base font-bold text-[#1D3557] leading-4">Digital Transformation Strategic Planning</h1>
            </button>
            <Card variant="light" className="p-4 mb-4 flex flex-col gap-3 min-[960px]:flex-row min-[960px]:items-start min-[960px]:justify-between">
                <div className="min-w-0">
                    <div className="mb-[8.42px] cursor-pointer border border-[#E0E8ED] py-[3px] px-2.5 rounded-[30px] w-fit mb-2">
                        <p className="text-xs leading-[22px] font-medium text-[#8597A8]">Strategy & Planning</p>
                    </div>
                    <p className="mb-[8.42px] text-base leading-4 font-bold text-[#1D3557]">Digital Transformation Strategic Planning</p>
                    <p className="text-sm leading-4 font-normal text-[#8597A8]">
                        Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals
                    </p>
                </div>
                <div className="flex shrink-0 justify-center min-[960px]:justify-end">
                    <CircularProgress percentage={100} size={80} />
                </div>
            </Card>

            <div className="mb-4 grid grid-cols-2 gap-4 min-[960px]:grid-cols-4">
                {EVIDENCE_METRIC_CARDS.map((item) => (
                    <StatCard key={item.id} value={item.value} label={item.label} icon={<Icons variant={item.icon} />} />
                ))}
            </div>

            <div className="bg-[#EAF0F3] mb-4 flex rounded-lg w-fit h-10">
                {PLANNING_TABS.map((tab) => (
                    <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={tabButton({ active: activeTab === tab.id })}>
                        {tab.label}
                    </button>
                ))}
            </div>
            {(() => {
                switch (activeTab) {
                    case 'overview':
                        return <Overview />;
                    case 'evidence':
                        return <Evidence comments={comments} onAddComment={handleAddComment} />;
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

export default Planning;
