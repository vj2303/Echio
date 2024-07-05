import { Menu } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { InfluencerContext } from '../context/InfluencerState'

const Sort = () => {
    const { handleSort } = useContext(InfluencerContext)
    const [active, setActive] = useState(null)
    const sortCriterias = ["name", "price", "audience", "engagement rate", "avg. likes"]

    const handleSortChange = (criteria) => {
        if (active === criteria) {
            setActive(null)
            handleSort("")
            return;
        }
        handleSort(criteria)
        setActive(criteria)
    }

    return (
        <div className='flex flex-col gap-[20px]'>
            <div className='flex gap-4'>Sort by <img src="/menu.png" alt="menu" /></div>
            <div className='flex gap-2'>

                {
                    sortCriterias.map((ele) => {
                        return <p an className={`px-4 py-1 rounded-full capitalize text-[length:var(--sm-text)] ${active === ele ? "bg-[color:var(--sea-green)] hover:bg-[color:var(--blue)] text-white" : "bg-[color:var(--grey)] hover:bg-[color:var(--dark-grey)]"} `} onClick={() => handleSortChange(ele)}>{ele}</p>
                    })
                }

            </div>
        </div>
    )
}

export default Sort