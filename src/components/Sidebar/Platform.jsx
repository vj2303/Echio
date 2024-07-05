import React, { useContext, useState } from 'react'
import Checkbox from './Checkbox'
import { InfluencerContext } from '../../context/InfluencerState'

const Platform = () => {
    const { setFilters, filters } = useContext(InfluencerContext)
    const handleChange = (isChecked, e) => {
        const platform = e.target.name;
        setFilters(prevFilters => {
            const updatedPlatforms = isChecked
                ? [...prevFilters.platforms, platform]
                : prevFilters.platforms.filter(p => p !== platform);
            return { ...prevFilters, platforms: updatedPlatforms };
        });
    }

    return (
        <div className='bg-white basis-[25%] px-[12px] py-[15px]'>
            <div>
                <h2 className='text-[length:var(--md-text)] font-medium'>Platform</h2>
                <div className='p-[10px] flex flex-col gap-[20px]'>
                    <Checkbox handleChangeCheckBox={handleChange} name="youtube" label={"Youtube"} />
                    <Checkbox handleChangeCheckBox={handleChange} name="instagram" label={"Instagram"} />
                </div>
            </div>
        </div>
    )
}

export default Platform