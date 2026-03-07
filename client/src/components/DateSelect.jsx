import React, { useState } from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const DateSelect = ({ dateTime = [], id }) => {

  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  const onBookHandler = () => {
    if (!selected) {
      toast.error("Please select a date")
      return
    }

    navigate(`/movies/${id}/${selected}`)
    window.scrollTo(0, 0)
  }

  return (
    <div id='dateselect' className='pt-30'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg'>

        <BlurCircle top='-100px' left='-100px' />
        <BlurCircle top='-100px' right='0px' />

        <div>
          <p className='text-lg font-semibold'>Choose Date</p>

          <div className='flex items-center gap-6 text-sm mt-5'>

            <ChevronLeftIcon width={28} className="cursor-pointer" />

            <div className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
              {dateTime.map((item, index) => {

                const dateObj = new Date(item.date)

                return (
                  <button
                    key={index}
                    onClick={() => setSelected(item.date)}
                    className={`flex flex-col items-center justify-center h-16 w-16 rounded-lg cursor-pointer transition
                      ${selected === item.date
                        ? "bg-primary text-white"
                        : "border border-primary/70 hover:bg-primary/20"
                      }`}
                  >
                    {/* Date Number */}
                    <span className='font-semibold'>
                      {dateObj.getDate()}
                    </span>

                    {/* Day Name (auto generated) */}
                    <span className='text-xs'>
                      {dateObj.toLocaleDateString("en-US", { weekday: "short" })}
                    </span>

                  </button>
                )
              })}
            </div>

            <ChevronRightIcon width={28} className="cursor-pointer" />

          </div>
        </div>

        <button
          onClick={onBookHandler}
          className='bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/90 transition-all cursor-pointer'
        >
          Book Now
        </button>

      </div>
    </div>
  )
}

export default DateSelect