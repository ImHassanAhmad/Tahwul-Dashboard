import React, { type ReactNode, useState } from 'react';
import Sidebar, { SIDEBAR_BREAKPOINT } from './Sidebar';
import TopBar from './TopBar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(() => (typeof window !== 'undefined' ? window.innerWidth >= SIDEBAR_BREAKPOINT : true));

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex min-h-screen w-full bg-gray-50">
            <a
                href="#main-content"
                className="absolute left-4 -top-12 z-50 rounded bg-white px-3 py-2 text-sm font-medium text-[#1D3557] shadow-md transition-[top] duration-150 focus:top-4 focus:outline-none focus:ring-2 focus:ring-[#0078D7] focus:ring-offset-2"
            >
                Skip to main content
            </a>
            <Sidebar open={sidebarOpen} onClose={handleSidebarToggle} />
            <div className="flex flex-1 flex-col min-h-screen min-w-0">
                <TopBar onMenuClick={handleSidebarToggle} />
                <main
                    id="main-content"
                    className="bg-[#F5F8FA] flex-1 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-56px)] px-6 py-4"
                    tabIndex={-1}
                >
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
