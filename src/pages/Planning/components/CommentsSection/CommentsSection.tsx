import type { FC } from 'react';
import { useState } from 'react';
import Card from '../../../../components/Card';
import type { PlanningComment } from '../../constants';
import { Icons, IconsVariant } from '../../icons';

interface CommentsSectionProps {
    comments: PlanningComment[];
    onAddComment?: (text: string) => void;
}

const CommentsSection: FC<CommentsSectionProps> = ({ comments, onAddComment }) => {
    const [newComment, setNewComment] = useState('');

    const handlePost = () => {
        const trimmed = newComment.trim();
        if (!trimmed || !onAddComment) return;
        onAddComment(trimmed);
        setNewComment('');
    };

    return (
        <Card variant="light" className="flex w-full flex-col p-4">
            <p className="mb-4 text-base font-bold leading-4 text-[#1D3557]">Comments</p>
            <ul className="mb-4 flex flex-1 flex-col gap-3">
                {comments.map((c) => (
                    <li key={c.id}>
                        <div className="rounded-lg border border-[#E0E8ED] bg-white p-3">
                            <div className="mb-2 flex items-center gap-2">
                                <span
                                    className="w-[24px] h-[24px] flex shrink-0 items-center justify-center rounded-full bg-[#E0E8ED] text-[14px] font-extrabold text-[#8597A8]"
                                    aria-hidden
                                >
                                    {c.author.charAt(0)}
                                </span>
                                <span className="flex-1 text-[14px] leading-[16px] font-bold text-[#1D3557]">{c.author}</span>
                                <span className="text-[14px] leading-[16px] font-normal text-[#8597A8]">{c.date}</span>
                            </div>
                            <p className="text-[14px] leading-[20px] font-normal text-[#1D3557]">{c.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="min-h-[111px] w-full resize-y rounded-lg border border-[#E0E8ED] bg-white px-3 py-2 text-sm text-[#1D3557] placeholder:text-[#8597A8] focus:border-[#1D3557] focus:outline-none"
                    rows={3}
                />
                <button
                    type="button"
                    onClick={handlePost}
                    className="mt-[16px] inline-flex w-fit items-center gap-2 rounded-lg bg-[#1D3557] px-4 py-2 text-sm font-medium text-white hover:bg-[#152942]"
                >
                    <Icons variant={IconsVariant.Send} />
                    Post Comment
                </button>
            </div>
        </Card>
    );
};

export default CommentsSection;
