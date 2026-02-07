import type { FC } from 'react';
import { useMemo, useState } from 'react';
import Card from '@/components/Card';
import { DEFAULT_TIMELINE_YEAR, getTimelineProgressPercent, TIMELINE_EVENTS } from '@/pages/Dashboard/constants';
import { DesktopTimeline, MobileTimeline, TimelineHeader } from './components';

const ProjectTimeline: FC = () => {
    const [selectedYear, setSelectedYear] = useState(DEFAULT_TIMELINE_YEAR);

    const progressPercent = useMemo(() => getTimelineProgressPercent(TIMELINE_EVENTS), []);

    return (
        <Card variant="light" className="p-4 sm:p-5">
            <TimelineHeader selectedYear={selectedYear} onYearChange={setSelectedYear} />
            <DesktopTimeline progressPercent={progressPercent} events={TIMELINE_EVENTS} />
            <MobileTimeline progressPercent={progressPercent} events={TIMELINE_EVENTS} />
        </Card>
    );
};

export default ProjectTimeline;
