import type { FC } from 'react';
import type { TimelineEvent } from '@/pages/Dashboard/constants';
import { CURRENT_PHASE_LABEL, TIMELINE_LAYOUT, getMarkerVariantClasses } from '@/pages/Dashboard/constants';

export interface MobileTimelineProps {
    progressPercent: number;
    events: TimelineEvent[];
}

const MobileTimeline: FC<MobileTimelineProps> = ({ progressPercent, events }) => (
    <div className="mt-6 md:hidden">
        <div className="mb-4 flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#E5E7EB]">
                <div className="h-full rounded-full bg-[#1EA54E]" style={{ width: `${progressPercent}%` }} />
            </div>
            <span className="text-xs font-medium text-[#1EA54E]">{CURRENT_PHASE_LABEL}</span>
        </div>

        <div className="relative">
            <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-[#E5E7EB]" aria-hidden />
            {events.map((event, index) => (
                <div key={event.id} className="relative flex gap-4 pb-6 last:pb-0">
                    <div
                        className={`relative z-10 mt-0.5 flex h-2.5 w-2.5 shrink-0 rounded-full border-2 ${getMarkerVariantClasses(event)}`}
                        style={{ marginLeft: '2px' }}
                    />
                    <div className="min-w-0 flex-1">
                        <p className="mb-1.5 text-sm font-normal leading-4 text-[#8597A8]">{event.date}</p>
                        <p className="text-sm font-medium leading-4 text-[#1D3557]">{event.label}</p>
                        {index === TIMELINE_LAYOUT.currentPhaseBadgeAtIndex && (
                            <span className="mt-1.5 inline-block rounded bg-[#1EA54E] px-2 py-0.5 text-xs font-medium text-white">
                                {CURRENT_PHASE_LABEL}
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default MobileTimeline;
