import React, { useContext } from 'react'
import InfluencerCard from './InfluencerCard'
import { InfluencerContext } from '../context/InfluencerState'

const InfluencersList = () => {
  const { data } = useContext(InfluencerContext)
  return (
    <div className='flex flex-col gap-4'>
      {
        data.map((influencer) => {
          return <InfluencerCard influencer={influencer} />
        })
      }
    </div>
  )
}

export default InfluencersList