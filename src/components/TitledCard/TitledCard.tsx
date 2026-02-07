import type { FC, ReactNode } from 'react';
import Card from '@/components/Card';

export interface TitledCardProps {
    title: string;
    children: ReactNode;
    className?: string;
    titleClassName?: string;
}

const TitledCard: FC<TitledCardProps> = ({ title, children, className = '', titleClassName = '' }) => (
    <Card variant="light" className={`flex flex-col ${className}`.trim()}>
        <p className={`mb-5 text-base font-bold leading-4 text-[#1D3557] ${titleClassName}`.trim()}>{title}</p>
        {children}
    </Card>
);

export default TitledCard;
