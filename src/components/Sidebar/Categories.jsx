import React, { useContext, useState } from 'react'
import Checkbox from './Checkbox'
import { InfluencerContext } from '../../context/InfluencerState'
import categories from '../../data/categories'

const Categories = () => {
    const { setFilters } = useContext(InfluencerContext)
    var data = categories
    const [filteredCategories, setFilteredCategories] = useState(data)
    const [isAllCategoriesVisible, setIsAllCategoriesVisible] = useState(false)
    const handleChange = (isChecked, e) => {
        const category = e.target.name;
        setFilters(prevFilters => {
            const updatedCategories = isChecked
                ? [...prevFilters.categories, category]
                : prevFilters.categories.filter(p => p !== category);
            return { ...prevFilters, categories: updatedCategories };
        });
    }

    const handleSearchCategory = (e) => {
        // setFilteredCategories()
        const searched = data.filter(cat => cat.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setFilteredCategories(searched)
    }

    return (
        <div className='bg-white basis-[25%] px-[12px] py-[15px]'>
            <div>
                <h2 className='text-[length:var(--md-text)] font-medium'>Categories</h2>
                <input type='text' placeholder='Search Category' className='px-4 py-2 border w-full placeholder:font-medium text-black my-2' onChange={handleSearchCategory} />
                <div className='p-[10px] flex flex-col gap-[20px]'>
                    {filteredCategories.map((category, i) => {
                        if(!isAllCategoriesVisible && i > 4) return;
                        return <Checkbox handleChangeCheckBox={handleChange} name={category} label={category} />
                            
                    })}
                </div>
                <p className='text-[color:var(--blue)] cursor-pointer' onClick={() => setIsAllCategoriesVisible(prev => !prev)}>Show {isAllCategoriesVisible ? "less" : "more"}</p>
            </div>
        </div>
    )
}

export default Categories