export const IconsVariant = {
    Back: 'back',
    TotalEvidence: 'total-evidence',
    UnderReviewEvidence: 'under-review-evidence',
    InProgressEvidence: 'in-progress-evidence',
    CompletedEvidence: 'completed-evidence',
    Send: 'send',
} as const;

export type IconsVariant = (typeof IconsVariant)[keyof typeof IconsVariant];
