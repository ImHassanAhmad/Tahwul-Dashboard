import { IconsVariant } from './icons';

export interface EvidenceMetricItem {
    id: string;
    value: string;
    label: string;
    icon: IconsVariant;
}

export const EVIDENCE_METRIC_CARDS: EvidenceMetricItem[] = [
    { id: '1', value: '4', label: 'Total Evidence', icon: IconsVariant.TotalEvidence },
    { id: '2', value: '3', label: 'Under Review Evidence', icon: IconsVariant.UnderReviewEvidence },
    { id: '3', value: '2', label: 'In Progress Evidence', icon: IconsVariant.InProgressEvidence },
    { id: '4', value: '1', label: 'Completed Evidence', icon: IconsVariant.CompletedEvidence },
];

export type EvidenceStatus = 'Approved' | 'Pending Review' | 'In Progress';

export interface EvidenceRow {
    id: string;
    documentNumber: string;
    documentName: string;
    documentLead: string;
    documentPreparer: string;
    date: string;
    dueDate: string;
    status: EvidenceStatus;
}

export const EVIDENCE_TABLE_ROWS: EvidenceRow[] = [
    {
        id: '1',
        documentNumber: '5.4.1.1',
        documentName: 'Digital_Transformation_Plan.Pdf',
        documentLead: 'Ahmed Khaled',
        documentPreparer: 'Ahmed Khaled',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'Approved',
    },
    {
        id: '2',
        documentNumber: '5.4.1.2',
        documentName: 'KPI_Framework.Xlsx',
        documentLead: 'Mona Hamed',
        documentPreparer: 'Mona Hamed',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'Pending Review',
    },
    {
        id: '3',
        documentNumber: '5.4.1.3',
        documentName: 'Roadmap_Version1.Docx',
        documentLead: 'Rami AlSharif',
        documentPreparer: 'Rami AlSharif',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'Pending Review',
    },
];

export interface PlanningComment {
    id: string;
    author: string;
    text: string;
    date: string;
}

export const PLANNING_COMMENTS: PlanningComment[] = [
    { id: '1', author: 'Sara Ibrahim', text: 'Ensure The Plan Includes A Clear Governance Model.', date: '2025-08-05' },
    { id: '2', author: 'Mona Hamed', text: 'Ensure The Plan Includes A Clear Governance Model.', date: '2025-08-05' },
];

export interface PlanningActivity {
    id: string;
    description: string;
    timeAgo: string;
}

// Overview section: label + content rows
export const OVERVIEW_ROWS: { label: string; content: string }[] = [
    {
        label: 'Objective',
        content: "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
    },
    {
        label: 'Implementation Requirements',
        content:
            'A. Define strategic objectives and initiatives. B. Identify resources and timelines. C. Establish governance and KPIs. D. Align with national vision and regulations.',
    },
    {
        label: 'Evidence Documents',
        content:
            'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
    },
    {
        label: 'Related Regulations',
        content: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
    },
    {
        label: 'Scope',
        content: 'All Government Entities.',
    },
];

export interface OverviewLeader {
    id: string;
    name: string;
    role: string;
}

export const OVERVIEW_LEADERS: OverviewLeader[] = [
    { id: '1', name: 'Ahmed Al-Ali', role: 'Strategy Perspective' },
    { id: '2', name: 'Ahmed Al-Ali', role: 'Strategy Perspective' },
];
