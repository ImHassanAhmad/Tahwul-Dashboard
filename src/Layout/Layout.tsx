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
            <Sidebar open={sidebarOpen} onClose={handleSidebarToggle} />
            <div className="flex flex-1 flex-col min-h-screen min-w-0">
                <TopBar onMenuClick={handleSidebarToggle} />
                <main className="bg-[#F5F8FA] flex-1 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-56px)] px-6 py-4">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
