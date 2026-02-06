import React from 'react';
import { Icons, IconsVariant } from './icons';
import Input from '../components/input';
import Dot from '../components/Dot';
import { USER_IMG } from '../assets';

interface TopBarProps {
    onMenuClick: () => void;
}

const TopBar: React.FC<TopBarProps> = () => {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between bg-white pl-14 pr-6 border-b border-slate-200">
            <div className="flex items-center">
                <Input icon={<Icons variant={IconsVariant.Search} />} placeholder="Search" className="w-80 h-9" />
            </div>
            <div className="ml-4 flex items-center">
                <button type="button" className="mr-7 relative flex items-center justify-center rounded cursor-pointer" aria-label="Notifications">
                    <Icons variant={IconsVariant.Notification} />
                    <span className="absolute -top-0.5 right-0">
                        <Dot color="red" />
                    </span>
                </button>
                <div className="bg-gray-100 rounded-3xl p-1 flex items-center gap-2">
                    <div className="h-6 w-6 overflow-hidden rounded-full bg-gray-300">
                        <img src={USER_IMG} alt="" className="h-full w-full object-cover" />
                    </div>
                    <span className="text-gray-800 text-right font-inter font-medium text-xs leading-4 align-middle capitalize">Mohamed</span>
                    <div className="ml-3 mr-1.5">
                        <Icons variant={IconsVariant.ArrowDown} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
