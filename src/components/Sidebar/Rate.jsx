import Slider from 'rc-slider'
import React, { useContext, useState } from 'react'
import 'rc-slider/assets/index.css';
import { InfluencerContext } from '../../context/InfluencerState';

const Rate = () => {
    const [rate, setRate] = useState([0, 200000]);
    const { setFilters } = useContext(InfluencerContext)

    const handleRateChange = (newRate) => {
        setRate(newRate);
        setFilters(prevFilters => {
            return { ...prevFilters, reelPrice: rate };
        });
    };
    

    const handleLowInputChange = (e) => {
        setRate(prev => [e.target.value, prev[1]])
        setFilters(prevFilters => {
            return { ...prevFilters, reelPrice: [e.target.value, rate[1]] };
        });
    }

    const handleHighInputChange = (e) => {
        setRate(prev => [prev[0], e.target.value])
        setFilters(prevFilters => {
            return { ...prevFilters, reelPrice: [rate[0], e.target.value] };
        });
    }
    

    return (
        <div className='flex flex-col gap-[20px] p-[12px]'>
            <h2 className='text-[length:var(--md-text)] font-medium'>Rate</h2>
            <Slider
                range
                min={0}
                max={200000}
                defaultValue={rate}
                value={rate}
                onChange={handleRateChange}
                className='slider'
            />

            <div className='flex justify-between gap-[40px]'>
                <input type='number' onChange={handleLowInputChange} value={rate[0]} className='bg-[color:var(--light-sea-green)] flex-grow p-[6px] rounded-lg text-black ' />
                <input type='number' onChange={handleHighInputChange} value={rate[1]} className='bg-[color:var(--light-sea-green)] flex-grow p-[6px] rounded-lg text-black ' />     
            </div>
        </div>
    )
}

export default Rate