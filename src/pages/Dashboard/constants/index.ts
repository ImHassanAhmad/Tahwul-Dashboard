import type { DotColor } from '../../../components/Dot';

export const IconsVariant = {
    OverallProgress: 'overall-progress',
    TotalCriteria: 'total-criteria',
    CompletedCriteria: 'completed-criteria',
    EvidenceDocuments: 'evidence-documents',
    EvidenceCompleted: 'evidence-completed',
    UploadedToDGA: 'uploaded-to-dga',
} as const;

export type IconsVariant = (typeof IconsVariant)[keyof typeof IconsVariant];

export interface TimelineEvent {
    id: string;
    date: string;
    label: string;
    isCompleted: boolean;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
    { id: '1', date: 'Mar 17', label: 'Kickoff Workshop', isCompleted: true },
    { id: '2', date: 'March 18', label: 'Data Collection', isCompleted: true },
    { id: '3', date: 'May 8', label: 'Initial Phase', isCompleted: false },
    { id: '4', date: 'May 9-July 12', label: 'Verification', isCompleted: false },
    { id: '5', date: 'July 13', label: 'Completion Reviews', isCompleted: false },
    { id: '6', date: 'August 21', label: 'Cycle Conclusion', isCompleted: false },
];

export const CURRENT_PHASE_LABEL = 'Bilal Hassan';

export const TIMELINE_YEARS = ['2024', '2025', '2026', '2027'] as const;

export const DEFAULT_TIMELINE_YEAR = '2026';

export const TIMELINE_LAYOUT = {
    trackHeightPx: 14,
    pointSizePx: 10,
    insetLeftPx: 50,
    insetRightPx: 55,
    firstLabelOffsetLeftPx: 0,
    lastLabelInsetRightPx: 55,
    currentPhaseBadgeAtIndex: 1,
} as const;

const TOTAL_INSET_PX = TIMELINE_LAYOUT.insetLeftPx + TIMELINE_LAYOUT.insetRightPx;

export function getTimelinePositionCss(percent: number): string {
    return `calc(${TIMELINE_LAYOUT.insetLeftPx}px + (100% - ${TOTAL_INSET_PX}px) * ${percent} / 100)`;
}

export function getTimelineProgressPercent(events: TimelineEvent[]): number {
    const total = events.length;
    if (total <= 1) return 0;
    const completed = events.filter((e) => e.isCompleted).length;
    const segmentFraction = (completed - 0.5) / (total - 1);
    return Math.min(100, Math.max(0, segmentFraction * 100));
}

export function getMarkerVariantClasses(event: TimelineEvent): string {
    return event.isCompleted ? 'border-white bg-white' : 'border-[#EF4444] bg-[#EF4444]';
}

export interface MetricCardItem {
    id: string;
    value: string;
    label: string;
    icon: IconsVariant;
}

export const METRIC_CARDS: MetricCardItem[] = [
    { id: '1', value: '78.65%', label: 'Overall Progress', icon: IconsVariant.OverallProgress },
    { id: '2', value: '95', label: 'Total Criteria', icon: IconsVariant.TotalCriteria },
    { id: '3', value: '52', label: 'Completed Criteria', icon: IconsVariant.CompletedCriteria },
    { id: '4', value: '386', label: 'Evidence Documents', icon: IconsVariant.EvidenceDocuments },
    { id: '5', value: '302', label: 'Evidence (Completed)', icon: IconsVariant.EvidenceCompleted },
    { id: '6', value: '258', label: 'Uploaded To DGA', icon: IconsVariant.UploadedToDGA },
];

export interface ProgressStatusLegendItem {
    id: string;
    label: string;
    dotColor: DotColor;
}

export const PROGRESS_STATUS_LEGEND: ProgressStatusLegendItem[] = [
    { id: '1', label: 'Not Started', dotColor: 'gray' },
    { id: '2', label: 'In Progress', dotColor: 'yellow' },
    { id: '3', label: 'Completed', dotColor: 'green' },
    { id: '4', label: 'Partially Uploaded', dotColor: 'navy' },
    { id: '5', label: 'Fully Uploaded', dotColor: 'blue' },
    { id: '6', label: 'Delayed', dotColor: 'red' },
];

export interface ProgressStatusCategory {
    id: string;
    label: string;
    percentage: string;
}

export const PROGRESS_STATUS_CATEGORIES: ProgressStatusCategory[] = [
    { id: '1', label: 'Strategy And Planning', percentage: '97.78%' },
    { id: '2', label: 'Organization And Culture', percentage: '70.83%' },
    { id: '3', label: 'Operations And Execution', percentage: '80.00%' },
    { id: '4', label: 'Business Continuity', percentage: '90.59%' },
    { id: '5', label: 'Information Technology', percentage: '75.00%' },
    { id: '6', label: 'Comprehensive Governance', percentage: '64.44%' },
    { id: '7', label: 'Channels And Services', percentage: '100%' },
    { id: '8', label: 'Beneficiary Centralization', percentage: '60.00%' },
    { id: '9', label: 'Government Data', percentage: '87.50%' },
    { id: '10', label: 'Research And Innovation', percentage: '17.65%' },
];

// Top performing leaders (for TopPerformingLeaders card)
export interface Leader {
    id: string;
    name: string;
    perspective: string;
    score: number;
    avatarInitials: string;
}

export const TOP_PERFORMING_LEADERS: Leader[] = [
    { id: '1', name: 'Ahmed Al-Ali', perspective: 'Strategy Perspective', score: 96, avatarInitials: 'AA' },
    { id: '2', name: 'Sarah Al-Khaled', perspective: 'Beneficiary Perspective', score: 94, avatarInitials: 'SK' },
    { id: '3', name: 'Mohammad Al-Mansour', perspective: 'IT Perspective', score: 92, avatarInitials: 'MM' },
];

// Dashboard bottom row cards (label + content key for rendering)
export interface DashboardCardItem {
    id: string;
    label: string;
}

export const DASHBOARD_CARDS: DashboardCardItem[] = [
    { id: '1', label: 'Overall Compliance Score' },
    { id: '2', label: 'Top Performing Perspective Leaders' },
    { id: '3', label: 'Recent Activities' },
];

export interface RecentActivityItem {
    id: string;
    description: string;
    timeAgo: string;
}

export const RECENT_ACTIVITIES: RecentActivityItem[] = [
    { id: '1', description: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled', timeAgo: '5 Mins Ago' },
    { id: '2', description: 'Task "Review Compliance Files" Was Assigned To Mona Hamed', timeAgo: '20 Mins Ago' },
    { id: '3', description: 'New Criterion "5.3 Digital Identity" Was Created By Admin', timeAgo: '1 Hour Ago' },
];

// Category cards grid (title + numbered status dots)
export interface CategoryGridDot {
    number: number;
    color: DotColor;
}

export interface CategoryGridCard {
    id: string;
    label: string;
    dots: CategoryGridDot[];
}

export interface CategoryGridColumn {
    id: string;
    cards: CategoryGridCard[];
}

export const CATEGORY_GRID_COLUMNS_PER_CHUNK = 5;

// 10 columns, each with its category cards (column-first structure per design)
export const CATEGORY_GRID_COLUMNS: CategoryGridColumn[] = [
    // Column 1: 3 cards
    {
        id: 'col-1',
        cards: [
            {
                id: '1',
                label: 'Digital Transformation',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'green' },
                    { number: 3, color: 'green' },
                ],
            },
            {
                id: '2',
                label: 'Digital Governance',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'green' },
                    { number: 3, color: 'yellow' },
                ],
            },
            {
                id: '3',
                label: 'Enterprise Architecture',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'green' },
                    { number: 3, color: 'green' },
                    { number: 4, color: 'green' },
                ],
            },
        ],
    },
    // Column 2: 3 cards
    {
        id: 'col-2',
        cards: [
            {
                id: '4',
                label: 'Digital Culture And Environment',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'yellow' },
                    { number: 3, color: 'green' },
                ],
            },
            {
                id: '5',
                label: 'Leadership Development',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'green' },
                    { number: 3, color: 'green' },
                    { number: 4, color: 'green' },
                ],
            },
            {
                id: '6',
                label: 'Skills & Capacity Building',
                dots: [
                    { number: 1, color: 'yellow' },
                    { number: 2, color: 'yellow' },
                    { number: 3, color: 'yellow' },
                ],
            },
        ],
    },
    // Column 3: 1 card
    {
        id: 'col-3',
        cards: [
            {
                id: '7',
                label: 'Business Processes',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'yellow' },
                    { number: 3, color: 'yellow' },
                    { number: 4, color: 'green' },
                ],
            },
        ],
    },
    // Column 4: 2 cards
    {
        id: 'col-4',
        cards: [
            {
                id: '8',
                label: 'Risk Management',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'green' },
                    { number: 3, color: 'green' },
                    { number: 4, color: 'green' },
                    { number: 5, color: 'green' },
                ],
            },
            {
                id: '9',
                label: 'Business Continuity',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'gray' },
                    { number: 3, color: 'gray' },
                    { number: 4, color: 'green' },
                    { number: 5, color: 'green' },
                    { number: 6, color: 'gray' },
                    { number: 7, color: 'green' },
                ],
            },
        ],
    },
    // Column 5: 3 cards
    {
        id: 'col-5',
        cards: [
            {
                id: '10',
                label: 'Support Systems',
                dots: [
                    { number: 1, color: 'blue' },
                    { number: 2, color: 'green' },
                    { number: 3, color: 'green' },
                    { number: 4, color: 'green' },
                    { number: 5, color: 'green' },
                ],
            },
            {
                id: '11',
                label: 'IT Infrastructure',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'green' },
                    { number: 3, color: 'green' },
                    { number: 4, color: 'green' },
                    { number: 5, color: 'blue' },
                    { number: 6, color: 'green' },
                    { number: 7, color: 'green' },
                ],
            },
            {
                id: '12',
                label: 'Cloud Infrastructure',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'green' },
                    { number: 3, color: 'blue' },
                ],
            },
        ],
    },
    // Column 6: 1 card
    {
        id: 'col-6',
        cards: [
            {
                id: '13',
                label: 'Governance Platforms',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'green' },
                    { number: 3, color: 'green' },
                    { number: 4, color: 'gray' },
                    { number: 5, color: 'green' },
                    { number: 6, color: 'green' },
                    { number: 7, color: 'green' },
                    { number: 8, color: 'green' },
                    { number: 9, color: 'green' },
                ],
            },
        ],
    },
    // Column 7: 2 cards
    {
        id: 'col-7',
        cards: [
            {
                id: '14',
                label: 'Service Quality',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'green' },
                    { number: 3, color: 'green' },
                ],
            },
            {
                id: '15',
                label: 'Digital Channels',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'green' },
                    { number: 3, color: 'green' },
                    { number: 4, color: 'green' },
                ],
            },
        ],
    },
    // Column 8: 3 cards
    {
        id: 'col-8',
        cards: [
            {
                id: '16',
                label: 'User Engagement',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'yellow' },
                    { number: 3, color: 'yellow' },
                    { number: 4, color: 'yellow' },
                ],
            },
            {
                id: '17',
                label: 'User Relationship',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'yellow' },
                    { number: 3, color: 'yellow' },
                ],
            },
            {
                id: '18',
                label: 'User Experience',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'yellow' },
                    { number: 3, color: 'green' },
                    { number: 4, color: 'yellow' },
                    { number: 5, color: 'green' },
                ],
            },
        ],
    },
    // Column 9: 3 cards
    {
        id: 'col-9',
        cards: [
            {
                id: '19',
                label: 'Data Governance',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'yellow' },
                    { number: 3, color: 'yellow' },
                ],
            },
            {
                id: '20',
                label: 'Data Usage & Availability',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'yellow' },
                    { number: 3, color: 'yellow' },
                ],
            },
            {
                id: '21',
                label: 'Open Data',
                dots: [
                    { number: 1, color: 'green' },
                    { number: 2, color: 'green' },
                    { number: 3, color: 'green' },
                ],
            },
        ],
    },
    // Column 10: 2 cards
    {
        id: 'col-10',
        cards: [
            {
                id: '22',
                label: 'Innovation',
                dots: [
                    { number: 1, color: 'red' },
                    { number: 2, color: 'red' },
                    { number: 3, color: 'red' },
                    { number: 4, color: 'red' },
                ],
            },
            {
                id: '23',
                label: 'Creative Solutions',
                dots: [
                    { number: 1, color: 'yellow' },
                    { number: 2, color: 'red' },
                ],
            },
        ],
    },
];
