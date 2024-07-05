import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import InfluencersList from '../components/InfluencersList'
import Sidebar from '../components/Sidebar'
import Sort from '../components/Sort'

const Home = () => {

  return (
    <div className='min-h-screen max-w-[1500px] mx-auto'>

      <Topbar />
      <h2 className='font-bold text-[length:var(--xl-text)] px-[40px] mb-[24px]'>Influencers List</h2>
      <div className='flex gap-4 px-[40px]'>
        <Sidebar />
        <div className='flex flex-col gap-8 basis-[75%]'>
          <Sort />
          <InfluencersList />
        </div>
      </div>
    </div>
  )
}

export default Home