import { ArrowLeft, Search } from 'lucide-react'
import React, { useContext } from 'react'
import Button from './Button'
import { InfluencerContext } from '../context/InfluencerState'

const Topbar = () => {
  const { handleSearch } = useContext(InfluencerContext)
  return (
    <div className='flex justify-between items-center px-[40px] py-[24px]'>
      <span className='flex gap-2 text-[color:var(--sea-green)]'><ArrowLeft /> Back</span>
      <span className='flex items-center px-[12px] py-[6px] gap-2 bg-white shadow rounded-lg basis-[40%] ml-[20%]'>
        <Search />
        <input type="text" placeholder='Search' className='outline-none flex-grow' onChange={handleSearch} />
      </span>
      <span className='flex gap-[12px]'>
        <Button bg={"none"} text={"seaGreen"} border={"none"} >SHORT WITH AI</Button>
        <Button bg={"none"} text={"seaGreen"} border={"seaGreen"} >INVITE</Button>
        <Button bg={"seaGreen"} text={"white"} border={"none"} >COMPAIGN DETAILS</Button>
      </span>
    </div>
  )
}

export default Topbar