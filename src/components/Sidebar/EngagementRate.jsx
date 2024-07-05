import Slider from 'rc-slider'
import React, { useContext, useState } from 'react'
import 'rc-slider/assets/index.css';
import { InfluencerContext } from '../../context/InfluencerState';

const EngagementRate = () => {
    const [engagement, setEngagement] = useState([0, 100]);
    const { setFilters } = useContext(InfluencerContext)

    const handleEngagementChange = (newEngagement) => {
        setEngagement(newEngagement);
        setFilters(prevFilters => {
            return { ...prevFilters, engagement };
        });
    };

    
    const handleLowInputChange = (e) => {
        setEngagement(prev => [e.target.value, prev[1]])
        setFilters(prevFilters => {
            return { ...prevFilters, engagement: [e.target.value, engagement[1]] };
        });
    }

    const handleHighInputChange = (e) => {
        setEngagement(prev => [prev[0], e.target.value])
        setFilters(prevFilters => {
            return { ...prevFilters, engagement: [engagement[0], e.target.value] };
        });
    }
    
    return (
        <div className='flex flex-col gap-[20px] p-[12px]'>
            <h2 className='text-[length:var(--md-text)] font-medium'>Engagement Rate</h2>
            <Slider
                range
                min={0}
                max={100}
                defaultValue={engagement}
                value={engagement}
                onChange={handleEngagementChange}
                className='slider'
            // step={null}
            />

            <div className='flex justify-between gap-[40px]'>
                <input type='number' onChange={handleLowInputChange} value={engagement[0]} className='bg-[color:var(--light-sea-green)] flex-grow p-[6px] rounded-lg text-black ' />
                <input type='number' onChange={handleHighInputChange} value={engagement[1]} className='bg-[color:var(--light-sea-green)] flex-grow p-[6px] rounded-lg text-black ' />
            </div>
        </div>
    )
}

export default EngagementRate