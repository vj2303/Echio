import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import influencers from '../data/influencersData';

export const InfluencerContext = createContext(null)


const InfluencerState = ({ children }) => {
    const [data, setData] = useState(influencers)
    const [filters, setFilters] = useState({
        platforms: [],
        campaignRefs: [],
        popularity: [{
            max: 180000,
            min: 1000,
        }],
        reelPrice: [0, 200000],
        engagement: [0, 100],
        categories: [],
        averageLikes: [],
        customAverageLikes: { min: 0, max: 0 }
    })

    const handleFilter = () => {
        const filtered = influencers.filter(influencer =>
            (filters.platforms.length === 0 || filters.platforms.some(platform => influencer.platforms.includes(platform))) &&
            (filters.campaignRefs.length === 0 || filters.campaignRefs.some(campaignRef => influencer.campaignRefs.includes(campaignRef))) &&
            (filters.categories.length === 0 || filters.categories.includes(influencer.category)) &&
            (filters.averageLikes.length === 0 || filters.averageLikes.some(range =>
                influencer.averageLikes >= range.min && influencer.averageLikes <= range.max
            )) &&
            influencer.reelPrice >= filters.reelPrice[0] &&
            influencer.reelPrice <= filters.reelPrice[1] &&
            influencer.engagement >= filters.engagement[0] &&
            influencer.engagement <= filters.engagement[1] &&
            (filters.customAverageLikes.max === 0 || influencer.averageLikes <= filters.customAverageLikes.max && influencer.averageLikes >= filters.customAverageLikes.min)
        );

        setData(filtered);
    }

    const handleSearch = (e) => {
        if (!e.target.value) {
            return handleFilter()
        }
        const searched = data.filter(influencer => influencer.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setData(searched)
    };

    const handleSort = (criteria) => {
        var sorted;
        if (!criteria) return handleFilter();
        sorted = data.slice().sort((a, b) => {
            if (criteria === 'name') {
                return a.name.localeCompare(b.name);
            } else if (criteria === 'price') {
                return a.reelPrice - b.reelPrice;
            } else if (criteria === 'audience') {
                return b.youtubeSubscribers - a.youtubeSubscribers;
            } else if (criteria === 'engagement') {
                return b.engagement - a.engagement;
            } else if (criteria === 'averageLikes') {
                return b.averageLikes - a.averageLikes;
            } else if (criteria === 'averageViews') {
                return b.averageViews - a.averageViews;
            } else {
                return 0;
            }
        });

        setData(sorted)
    };

    useEffect(() => {
        handleFilter()
    }, [filters])

    return (
        <InfluencerContext.Provider value={{ data, setFilters, handleSearch, handleSort }}>
            {children}
        </InfluencerContext.Provider>
    )
}

export default InfluencerState