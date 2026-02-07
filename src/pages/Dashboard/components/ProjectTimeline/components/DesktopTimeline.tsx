import type { FC } from 'react';
import type { TimelineEvent } from '@/pages/Dashboard/constants';
import TimelineMarker from './TimelineMarker';
import TimelineLabel from './TimelineLabel';

export interface DesktopTimelineProps {
    progressPercent: number;
    events: TimelineEvent[];
}

const DesktopTimeline: FC<DesktopTimelineProps> = ({ progressPercent, events }) => {
    const total = events.length;
    return (
        <div className="mt-8 hidden md:block">
            <div className="relative">
                <div className="relative">
                    <div className="mx-1.5 flex h-3.5 overflow-hidden rounded-full bg-[#E5E7EB]">
                        <div className="h-full rounded-full bg-[#1EA54E]" style={{ width: `${progressPercent}%` }} />
                    </div>

                    {events.map((event, index) => (
                        <TimelineMarker key={event.id} event={event} index={index} total={total} />
                    ))}

                    <div className="relative mt-6 min-h-11">
                        {events.map((event, index) => (
                            <TimelineLabel key={event.id} event={event} index={index} total={total} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopTimeline;
