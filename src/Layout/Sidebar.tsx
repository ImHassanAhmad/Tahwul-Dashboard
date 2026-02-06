import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cva } from 'class-variance-authority';
import { Icons, IconsVariant } from './icons';
import { LOGO_IMG } from '../assets';
import { getRouteForLabel, sidebarItems } from './constants';

const sidebar = cva('relative flex flex-col bg-[#1D3557] text-white transition-all duration-300 ease-in-out border-r border-[#F1F2F3]', {
    variants: {
        open: {
            true: 'w-64',
            false: 'w-18 min-w-18',
        },
    },
    defaultVariants: { open: true },
});

const nav = cva('flex-1 overflow-auto pb-10 overflow-x-hidden', {
    variants: {
        open: {
            true: 'px-6',
            false: 'flex flex-col items-center px-3.5',
        },
    },
    defaultVariants: { open: true },
});

const navItem = cva(
    'mb-2 flex h-10 px-6 py-2.5 w-full cursor-pointer items-center transition-colors duration-300 ease-in-out rounded-lg font-medium text-sm leading-4 tracking-tight',
    {
        variants: {
            open: {
                true: 'justify-start gap-2',
                false: 'justify-center p-0',
            },
            active: {
                true: 'bg-white/10 text-white',
                false: 'text-gray-300 hover:bg-white/5',
            },
        },
        defaultVariants: { open: true, active: false },
    }
);

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

const SIDEBAR_BREAKPOINT = 1000;

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const closeIfSmallScreen = () => {
            if (window.innerWidth < SIDEBAR_BREAKPOINT && open) {
                onClose();
            }
        };

        closeIfSmallScreen();

        window.addEventListener('resize', closeIfSmallScreen);
        return () => window.removeEventListener('resize', closeIfSmallScreen);
    }, []);

    const getActiveItem = (): string | null => {
        const pathname = location.pathname;
        const searchParams = new URLSearchParams(location.search);
        const itemParam = searchParams.get('item');
        if (itemParam) {
            const matchedItem = sidebarItems.find((item) => item.label.toLowerCase() === itemParam.toLowerCase());
            if (matchedItem) return matchedItem.label;
        }
        for (const item of sidebarItems) {
            const route = getRouteForLabel(item.label);
            if (pathname === route || pathname.startsWith(route + '/')) {
                return item.label;
            }
        }
        return null;
    };

    const activeItem = getActiveItem();

    const handleItemClick = (label: string) => {
        navigate(getRouteForLabel(label));
    };

    return (
        <aside className={sidebar({ open })} style={{ minHeight: '100vh' }}>
            <div className="flex h-full flex-col">
                <div className="mt-2.5 mb-6 flex h-10 shrink-0 items-center">
                    {open && <img src={LOGO_IMG} alt="Logo" className="ml-6 h-10 w-24" />}
                </div>
                <nav className={nav({ open })}>
                    {sidebarItems.map((item) => {
                        const isActive = activeItem === item.label;
                        return (
                            <button
                                key={item.label}
                                type="button"
                                onClick={() => handleItemClick(item.label)}
                                className={navItem({ open, active: isActive })}
                            >
                                <span className="shrink-0">
                                    <Icons variant={item.icon} color={isActive ? '#ffffff' : undefined} />
                                </span>
                                {open && <span className="truncate leading-snug">{item.label}</span>}
                            </button>
                        );
                    })}
                </nav>
            </div>

            <button
                type="button"
                onClick={onClose}
                className="absolute right-0 top-3.5 flex h-8 w-8 translate-x-1/2 items-center justify-center rounded-full bg-white shadow-sm transition-colors duration-300 ease-in-out hover:bg-gray-50 cursor-pointer"
                aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
            >
                <span className={`inline-flex transition-transform duration-300 ease-in-out ${open ? '' : 'rotate-180'}`}>
                    <Icons variant={IconsVariant.Menu} />
                </span>
            </button>
        </aside>
    );
};

export default Sidebar;
