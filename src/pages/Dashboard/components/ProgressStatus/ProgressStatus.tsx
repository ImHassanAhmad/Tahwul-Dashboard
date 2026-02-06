import type { FC } from 'react';
import Dot from '../../../../components/Dot';
import { PROGRESS_STATUS_CATEGORIES, PROGRESS_STATUS_LEGEND } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../../constants/routes';

const ProgressStatus: FC = () => {
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        navigate(`/${RouteNames.DASHBOARD_PLANNING}`);
    };

    return (
        <>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-base font-bold leading-5 text-[#1D3557] sm:text-lg">Progress Status</h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    {PROGRESS_STATUS_LEGEND.map((item) => (
                        <div key={item.id} className="flex items-center gap-1.5">
                            <Dot color={item.dotColor} className="h-2 w-2 shrink-0" />
                            <span className="font-normal text-sm leading-4 text-[#1D3557]">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {PROGRESS_STATUS_CATEGORIES.map((category) => (
                    <div
                        onClick={handleCategoryClick}
                        key={category.id}
                        className="cursor-pointer flex min-w-0 flex-col items-center justify-center gap-3 rounded-lg bg-[#1D3557] p-4"
                    >
                        <p className="text-center font-bold text-xs leading-4 text-white line-clamp-2 mb-1">{category.label}</p>
                        <span className="inline-flex rounded-lg bg-[#344A68] px-2.5 py-0.5 font-bold text-sm leading-4 text-white">
                            {category.percentage}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProgressStatus;
