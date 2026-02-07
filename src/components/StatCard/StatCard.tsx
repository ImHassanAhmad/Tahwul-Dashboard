import type { FC, ReactNode } from 'react';
import Card from '@/components/Card';

export interface StatCardProps {
    value: string;
    label: string;
    icon?: ReactNode;
}

const StatCard: FC<StatCardProps> = ({ value, label, icon }) => (
    <Card variant="light" className="flex items-center justify-between gap-4 p-4">
        <div className="min-w-0">
            <p className="mb-1 font-bold text-2xl leading-8 text-[#1D3557]">{value}</p>
            <p className="font-normal text-sm leading-4 text-[#8597A8]">{label}</p>
        </div>
        {icon != null && <div className="shrink-0">{icon}</div>}
    </Card>
);

export default StatCard;
