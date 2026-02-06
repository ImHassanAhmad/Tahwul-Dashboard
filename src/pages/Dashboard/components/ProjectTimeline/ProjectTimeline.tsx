import type { FC } from 'react';
import { useMemo, useState } from 'react';
import Card from '../../../../components/Card';
import type { TimelineEvent } from '../../constants';
import {
    CURRENT_PHASE_LABEL,
    DEFAULT_TIMELINE_YEAR,
    getMarkerVariantClasses,
    getTimelinePositionCss,
    getTimelineProgressPercent,
    TIMELINE_EVENTS,
    TIMELINE_LAYOUT,
    TIMELINE_YEARS,
} from '../../constants';

const ChevronDownIcon: FC = () => (
    <svg
        className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7B9FC3]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

interface TimelineHeaderProps {
    selectedYear: string;
    onYearChange: (year: string) => void;
}

const TimelineHeader: FC<TimelineHeaderProps> = ({ selectedYear, onYearChange }) => (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-base font-bold leading-5 text-[#1D3557] sm:text-lg">Project Timeline</h2>
        <div className="relative w-fit">
            <select
                value={selectedYear}
                onChange={(e) => onYearChange(e.target.value)}
                className="h-9 appearance-none rounded-md border border-[#E0E8ED] bg-white px-3 pr-8 text-sm font-medium text-[#1D3557] outline-none focus:ring-2 focus:ring-[#7B9FC3]/30"
                aria-label="Select year"
            >
                {TIMELINE_YEARS.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
            <ChevronDownIcon />
        </div>
    </div>
);

interface TimelineMarkerProps {
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

interface TimelineLabelProps {
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

interface DesktopTimelineProps {
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

interface MobileTimelineProps {
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
