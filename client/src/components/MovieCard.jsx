import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeFormat'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  if (!movie) return null

  return (
    <div
      onClick={() => {
        navigate(`/movies/${movie._id || movie.id}`)
        window.scrollTo(0, 0)
      }}
      className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66'
    >
      <img
        src={movie.backdrop_path || movie.poster_path}
        alt={movie.title}
        className='rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer'
      />

      <p className='font-semibold mt-2 truncate'>
        {movie.title || "Untitled"}
      </p>

      <p className='text-sm text-gray-400 mt-2'>
        {movie.release_date
          ? new Date(movie.release_date).getFullYear()
          : "----"} ·{" "}
        {movie.genres?.slice(0, 2)?.map(g => g.name).join(" | ") || "Unknown"} ·{" "}
        {timeFormat(movie.runtime || 0)} min
      </p>

      <div className='flex items-center justify-between mt-4 pb-3'>
        <button
          onClick={(e) => {
            e.stopPropagation()
            navigate(`/movies/${movie._id || movie.id}`)
            window.scrollTo(0, 0)
          }}
          className='px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'
        style={{backgroundColor:"#D63854"}} >
          Buy Tickets
        </button>

        <p className='flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1'>
          <StarIcon className='w-4 h-4 text-primary fill-primary' />
          {movie.vote_average
            ? movie.vote_average.toFixed(1)
            : "N/A"}
        </p>
      </div>
    </div>
  )
}

export default MovieCard
