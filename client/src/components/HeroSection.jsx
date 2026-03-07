import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/backgroundImage.png' // Make sure image exists here


const HeroSection = () => {

  const navigate = useNavigate()

  return (
    <div
      className="relative h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center gap-4 
      px-6 md:px-16 lg:px-36 h-full w-full text-white">

        <img
          src={assets.marvelLogo}
          alt="Marvel Logo"
          className="max-h-11 lg:h-11"
        />

        <h1 className="text-5xl md:text-[70px] md:leading-[80px] font-semibold max-w-[600px]">
          Guardians <br /> of the Galaxy
        </h1>

        <div className="flex items-center gap-4 text-gray-300 text-sm md:text-base flex-wrap">
          <span>Action | Adventure | Sci-Fi</span>

          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            2026
          </div>

          <div className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4" />
            2h 8m
          </div>
        </div>

        <p className="max-w-md text-gray-300">
          In a post-apocalyptic world where cities ride on wheels and consume
          each other to survive, two people meet in London and try to stop a conspiracy.
        </p>

        <button
          onClick={() => navigate('/movies')}
          className="flex items-center gap-2 px-6 py-3 text-sm
          bg-pink-600 hover:bg-pink-700 transition
          rounded-full font-medium cursor-pointer w-fit btn-color" style={{backgroundColor:"#D63854"}}
        >
          Explore Movies
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  )
}

export default HeroSection