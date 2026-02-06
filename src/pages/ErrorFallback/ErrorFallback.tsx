import type { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
    const navigate = useNavigate();

    const refresh = (): void => {
        resetErrorBoundary();
        navigate('/');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-[16px]" role="alert">
            <div className="max-w-[448px] w-full text-center space-y-[24px]">
                <div className="rounded-full bg-amber-100 w-[64px] h-[64px] flex items-center justify-center mx-auto">
                    <svg className="w-[32px] h-[32px] text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>
                <div>
                    <h1 className="text-[20px] font-semibold text-slate-800">Something went wrong</h1>
                    <p className="mt-[8px] text-slate-600 text-[14px]">{error instanceof Error ? error.message : String(error)}</p>
                </div>
                <button
                    type="button"
                    onClick={refresh}
                    className="inline-flex items-center justify-center rounded-[8px] bg-slate-800 px-[16px] py-[10px] text-[14px] font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-[2px] focus:ring-slate-500 focus:ring-offset-[2px]"
                >
                    Go to home
                </button>
            </div>
        </div>
    );
};

export default ErrorFallback;
