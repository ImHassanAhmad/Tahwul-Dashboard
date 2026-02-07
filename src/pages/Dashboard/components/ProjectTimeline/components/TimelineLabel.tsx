import type { FC } from 'react';
import type { TimelineEvent } from '@/pages/Dashboard/constants';
import { getTimelinePositionCss, TIMELINE_LAYOUT } from '@/pages/Dashboard/constants';

export interface TimelineLabelProps {
    event: TimelineEvent;
    index: number;
    total: number;
}

const TimelineLabel: FC<TimelineLabelProps> = ({ event, index, total }) => {
    const leftPercent = total > 1 ? (index / (total - 1)) * 100 : 0;
    const isFirst = index === 0;
    const isLast = index === total - 1;
    const transform = isFirst ? `translateX(-50%) translateX(-${TIMELINE_LAYOUT.firstLabelOffsetLeftPx}px)` : 'translateX(-50%)';
    const left = isLast ? `calc(100% - ${TIMELINE_LAYOUT.lastLabelInsetRightPx}px)` : getTimelinePositionCss(leftPercent);

    return (
        <div className="absolute w-[18%] min-w-0 text-center" style={{ left, transform }}>
            <p className="mb-1.5 text-sm font-normal leading-4 text-[#8597A8]">{event.date}</p>
            <p className="text-sm font-medium leading-4 text-[#1D3557]">{event.label}</p>
        </div>
    );
};

export default TimelineLabel;
