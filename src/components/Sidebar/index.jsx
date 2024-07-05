import React from 'react'
import Popularity from './Popularity';
import CampaignReference from './CampaignReference';
import Platform from './Platform';
import EngagementRate from './EngagementRate';
import Rate from './Rate';
import Categories from './Categories';

const index = () => {

    return (
        <div className='bg-white basis-[25%] px-[12px] py-[15px]'>
            <Popularity />
            <CampaignReference />
            <Platform />
            <EngagementRate />
            <Rate />
            <Categories />
        </div>
    )
}

export default index