import type { FC } from 'react';
import type { TimelineEvent } from '@/pages/Dashboard/constants';
import { getTimelinePositionCss, getMarkerVariantClasses } from '@/pages/Dashboard/constants';

export interface TimelineMarkerProps {
    event: TimelineEvent;
    index: number;
    total: number;
}

const TimelineMarker: FC<TimelineMarkerProps> = ({ event, index, total }) => {
    const leftPercent = total > 1 ? (index / (total - 1)) * 100 : 0;

    return (
        <div className="absolute top-1.5 -translate-x-1/2 -translate-y-1/2" style={{ left: getTimelinePositionCss(leftPercent) }}>
            <div className={`h-2.5 w-2.5 rounded-full border-2 ${getMarkerVariantClasses(event)}`} />
        </div>
    );
};

export default TimelineMarker;
