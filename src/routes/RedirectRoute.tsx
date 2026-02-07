import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '@/constants/routes';

export default function Redirect(): ReactNode {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(`/${RouteNames.DASHBOARD}`);
    }, [navigate]);

    return null;
}
