import React, { useContext, useState } from 'react'
import Checkbox from './Checkbox'
import { InfluencerContext } from '../../context/InfluencerState'

const CampaignReference = () => {
    const { setFilters, filters } = useContext(InfluencerContext)
    const handleChange = (isChecked, e) => {
        const campaignRef = e.target.name;
        setFilters(prevFilters => {
            const updatedCampaignRefs = isChecked
                ? [...prevFilters.campaignRefs, campaignRef]
                : prevFilters.campaignRefs.filter(p => p !== campaignRef);
            return { ...prevFilters, campaignRefs: updatedCampaignRefs };
        });
    }
    return (
        <div className='bg-white basis-[25%] px-[12px] py-[15px]'>
            <div>
                <h2 className='text-[length:var(--md-text)] font-medium'>Campaign Reference</h2>
                <div className='p-[10px] flex flex-col gap-[20px]'>
                    <Checkbox handleChangeCheckBox={handleChange} name={"barter"} label={"Barter"} />
                    <Checkbox handleChangeCheckBox={handleChange} name={"paid"} label={"Paid"} />
                </div>
            </div>
        </div>
    )
}

export default CampaignReference