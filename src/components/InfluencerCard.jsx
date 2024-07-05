import { Instagram, Youtube } from 'lucide-react'
import React from 'react'
import Button from './Button'

const InfluencerCard = ({ influencer }) => {
    return (
        <div className='flex justify-between bg-white gap-[20px] p-[10px]'>
            <img src={influencer.profilePicture} alt="logo" className='max-w-[20%] rounded-lg' />
            <div className='flex flex-col gap-4 mr-auto'>
                <p className='text-[length:var(--lg-text)] font-semibold'>{influencer.name}</p>
                <div className='flex gap-2'>
                    <span className='bg-[color:var(--light-grey)] font-medium text-[length:var(--base-text)] p-2 rounded-sm text-center'><span className='text-[length:var(--xl-text)] font-light'>{influencer.engagement}%</span> <br /> Engagement</span>
                    <span className='bg-[color:var(--light-grey)] font-medium text-[length:var(--base-text)] p-2 rounded-sm text-center'><span className='text-[length:var(--xl-text)] font-light'>{Intl.NumberFormat("en-US", { notation : "compact", compactDisplay: "short" }).format(influencer.averageLikes)}</span> <br /> Avg. Likes</span>
                    <span className='bg-[color:var(--light-grey)] font-medium text-[length:var(--base-text)] p-2 rounded-sm text-center'><span className='text-[length:var(--xl-text)] font-light'>{Intl.NumberFormat("en-US", { notation : "compact", compactDisplay: "short" }).format(influencer.averageViews)}</span> <br /> Avg. Views</span>
                </div>
                <div className='flex gap-2'>
                    <span className='flex items-center gap-2 bg-[color:var(--light-grey)] p-2 rounded-md'><img src="/instagram.png" alt="instagram" className='w-[20px] h-[20px]' /> Instagram {Intl.NumberFormat("en-US", { notation : "compact", compactDisplay: "short" }).format(influencer.instagramFollowers)}</span>
                    <span className='flex items-center gap-2 bg-[color:var(--light-grey)] p-2 rounded-md'><img src="/youtube.png" alt="youtube" className='w-[20px] h-[20px]'/> Youtube {Intl.NumberFormat("en-US", { notation : "compact", compactDisplay: "short" }).format(influencer.youtubeSubscribers)}</span>
                </div>
            </div>
            <div className='flex flex-col justify-around items-end'>
                <div className='text-[length:var(--base-text)]'>Reel Price <span className='text-[length:var(--2xl-text)]'>{Intl.NumberFormat("en-US", { style : "currency", currency : "INR" }).format(influencer.reelPrice)}</span></div>
                <div className='flex gap-2'>
                    <Button bg={"none"} border={"none"} text={"seaGreen"}>INVITE</Button>
                    <Button bg={"seaGreen"} border={"none"} text={"white"}>VIEW DETAILS</Button>
                </div>
            </div>
        </div>
    )
}

export default InfluencerCard