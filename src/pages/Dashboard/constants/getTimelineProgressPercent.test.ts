import { describe, it, expect } from 'vitest';
import { getTimelineProgressPercent, type TimelineEvent } from './index';

describe('getTimelineProgressPercent', () => {
    it('returns 0 when total events <= 1', () => {
        expect(getTimelineProgressPercent([])).toBe(0);
        expect(getTimelineProgressPercent([{ id: '1', date: 'Mar 17', label: 'Kickoff', isCompleted: true }])).toBe(0);
    });

    it('returns 0 when no events are completed', () => {
        const events: TimelineEvent[] = [
            { id: '1', date: 'Mar 17', label: 'A', isCompleted: false },
            { id: '2', date: 'Mar 18', label: 'B', isCompleted: false },
        ];
        expect(getTimelineProgressPercent(events)).toBe(0);
    });

    it('returns 100 when all events are completed', () => {
        const events: TimelineEvent[] = [
            { id: '1', date: 'Mar 17', label: 'A', isCompleted: true },
            { id: '2', date: 'Mar 18', label: 'B', isCompleted: true },
        ];
        expect(getTimelineProgressPercent(events)).toBe(100);
    });

    it('returns correct percentage for partial completion', () => {
        const events: TimelineEvent[] = [
            { id: '1', date: 'Mar 17', label: 'A', isCompleted: true },
            { id: '2', date: 'Mar 18', label: 'B', isCompleted: false },
            { id: '3', date: 'Mar 19', label: 'C', isCompleted: false },
        ];
        expect(getTimelineProgressPercent(events)).toBe(25);
    });

    it('clamps result between 0 and 100', () => {
        const manyCompleted: TimelineEvent[] = Array.from({ length: 5 }, (_, i) => ({
            id: String(i),
            date: '',
            label: '',
            isCompleted: true,
        }));
        expect(getTimelineProgressPercent(manyCompleted)).toBeLessThanOrEqual(100);
        expect(getTimelineProgressPercent(manyCompleted)).toBeGreaterThanOrEqual(0);
    });
});
