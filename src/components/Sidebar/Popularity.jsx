import React, { useContext, useState } from 'react'
import Checkbox from './Checkbox'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { InfluencerContext } from '../../context/InfluencerState';

const Popularity = () => {
    const [range, setRange] = useState([0, 1000000]);
    const { setFilters, filters } = useContext(InfluencerContext)
    const [isCustomRangeVisible, setIsCustomRangeVisible] = useState(false)
    const handleChange = (isChecked, e) => {
        const popularity = e.target.name;
        var range;
        if (popularity === "nano") {
            range = { min: 0, max: 9000 }
        } else if (popularity === "micro") {
            range = { min: 9000, max: 100000 }
        } else if (popularity === "macro") {
            range = { min: 100000, max: 1000000 }
        }
        setFilters(prevFilters => {
            let updatedRanges;
            if (isChecked) {
                updatedRanges = [...prevFilters.averageLikes, range];
            } else {
                updatedRanges = prevFilters.averageLikes.filter(r => r.min !== range.min);
            }
            return { ...prevFilters, averageLikes: updatedRanges };
        });
    }

    const handleRangeChange = (newRange) => {
        setRange(newRange);
        setFilters(prev => {
            return { ...prev, customAverageLikes: { min: newRange[0], max: newRange[1] } }
        })
    };


    const handleLowInputChange = (e) => {
        setRange(prev => [e.target.value, prev[1]])
        setFilters(prevFilters => {
            return { ...prevFilters, customAverageLikes: { min: e.target.value, max: range[1] } };
        });
    }

    const handleHighInputChange = (e) => {
        setRange(prev => [prev[0], e.target.value])
        setFilters(prevFilters => {
            return { ...prevFilters, customAverageLikes: { min: range[0], max: e.target.value } };
        });
    }


    return (
        <div className='bg-white basis-[25%] px-[12px] py-[15px]'>
            <div>
                <h2 className='text-[length:var(--md-text)] font-medium'>Popularity</h2>
                <div className='p-[10px] flex flex-col gap-[20px]'>
                        <Checkbox handleChangeCheckBox={handleChange} name={"nano"} label={"Nano(1k-9k)"} />
                        <Checkbox handleChangeCheckBox={handleChange} name={"micro"} label={"Micro(9k-100k)"} />
                        <Checkbox handleChangeCheckBox={handleChange} name={"macro"} label={"Macro(100k-1M)"} />
                        <Checkbox handleChangeCheckBox={(isChecked) => setIsCustomRangeVisible(isChecked)} label={"Custom"} />
                        
                    {
                        isCustomRangeVisible && <div className='flex flex-col gap-[20px]'>
                            <Slider
                                range
                                min={0}
                                max={1000000}
                                defaultValue={range}
                                value={range}
                                onChange={handleRangeChange}
                                className='slider'
                            // step={null}
                            />

                            <div className='flex justify-between gap-[40px]'>
                                <input type='number' onChange={handleLowInputChange} value={range[0]} className='bg-[color:var(--light-sea-green)] flex-grow p-[6px] rounded-lg text-black ' />
                                <input type='number' onChange={handleHighInputChange} value={range[1]} className='bg-[color:var(--light-sea-green)] flex-grow p-[6px] rounded-lg text-black ' />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Popularity