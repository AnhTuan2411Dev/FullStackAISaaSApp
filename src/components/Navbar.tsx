import React from 'react';
import { assets } from '../assets/assets';
import { ArrowRightIcon } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar: React.FC = () => {
    const { user } = useUser();
    const { openSignIn } = useClerk();

    return (
        <div className="fixed z-50 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer">
            <img
                className="w-32 sm:w-44"
                alt="Logo"
                src={assets.logo}
            />
            {user ? <UserButton /> :    
                <button onClick={() => openSignIn()} className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-10 py-2.5 transition-colors">
                    Get started
                    <ArrowRightIcon className="w-4 h-4" />
                </button>
            }
        </div>
    );
};

export default Navbar;
