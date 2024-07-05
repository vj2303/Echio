import { BellDot, CircleUserRound, ClipboardList, Home, MessageCircleMore } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center shadow px-[40px] py-[10px] bg-white'>
            <img src="/logo.png" alt="logo" className='w-[40px] h-[40px] aspect-square' />
            <ul className='flex items-center gap-[12px]'>
                <li className='flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200'><Home size={20} /> Home</li>
                <li className='flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200 bg-gray-300'><img src="/check.png" alt="check" className='w-[20px] h-[20px]' />Campaign</li>
                <li className='flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200'><img src="/check.png" alt="check" className='w-[20px] h-[20px]' />Influencer Search</li>
                <li className='flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200'><img src="/check.png" alt="check" className='w-[20px] h-[20px]' />Campaign Analysis</li>
            </ul>
            <span className='flex items-center gap-2'>
                <img src="/chat.png" alt="check" className='w-[24px] h-[24px]' />
                <img src="/notification.png" alt="check" className='w-[28px] h-[28px]' />
                <img src="/avatar.png" alt="check" className='w-[24px] h-[24px]' />
            </span>
        </nav>
    )
}

export default Navbar