import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '@/constants/routes';
import { PROGRESS_STATUS_CATEGORIES, PROGRESS_STATUS_LEGEND } from '@/pages/Dashboard/constants';
import { ProgressStatusCategoryTile, ProgressStatusLegend } from './components';

const ProgressStatus: FC = () => {
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        navigate(`/${RouteNames.DASHBOARD_PLANNING}`);
    };

    return (
        <>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-base font-bold leading-5 text-[#1D3557] sm:text-lg">Progress Status</h2>
                <ProgressStatusLegend items={PROGRESS_STATUS_LEGEND} />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {PROGRESS_STATUS_CATEGORIES.map((category) => (
                    <ProgressStatusCategoryTile key={category.id} category={category} onClick={handleCategoryClick} />
                ))}
            </div>
        </>
    );
};

export default ProgressStatus;
