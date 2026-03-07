import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyShowsData, dummyDateTimeData } from '../assets/assets'
import BlurCircle from '../components/BlurCircle'
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react'
import timeFormat from '../lib/timeFormat'
import DateSelect from '../components/DateSelect'
import MovieCard from '../components/MovieCard'
import Loading from '../components/Loading'

const MovieDetails = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const [show, setShow] = useState(null)

  const getShow = () => {

    // ✅ Find selected movie
    const movie = dummyShowsData.find(item => item.id === Number(id))
    if (!movie) return

    // ✅ Do NOT filter dateTime (so date never disappears)
    setShow({
      movie: movie,
      dateTime: dummyDateTimeData
    })
  }

  useEffect(() => {
    getShow()
  }, [id])

  return show ? (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>

      {/* ================= MOVIE SECTION ================= */}
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>

        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'
        />

        <div className='relative z-20 flex flex-col gap-3'>
          <BlurCircle top="-100px" left="-100px" />

          <p className='text-primary uppercase'>
            {show.movie.original_language}
          </p>

          <h1 className='text-4xl font-semibold max-w-96'>
            {show.movie.title}
          </h1>

          <div className='flex items-center gap-2 text-gray-300'>
            <StarIcon className='w-5 h-5 text-primary fill-primary' />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>

          <p className='text-gray-400 mt-2 text-sm max-w-xl'>
            {show.movie.overview}
          </p>

          <p>
            {timeFormat(show.movie.runtime)} •{" "}
            {show.movie.genres.map(genre => genre.name).join(", ")} •{" "}
            {show.movie.release_date.split("-")[0]}
          </p>

          <div className='flex items-center flex-wrap gap-4 mt-4'>
            <button className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 rounded-md'>
              <PlayCircleIcon className='w-5 h-5' />
              Watch Trailer
            </button>

            <a
              href='#dateselect'
              className='px-10 py-3 text-sm bg-primary rounded-md'
            >
              Buy Tickets
            </a>

            <button className='bg-gray-700 p-2.5 rounded-full'>
              <Heart className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>

      {/* ================= DATE SELECT ================= */}
      <div id="dateselect" className='mt-20'>
        <DateSelect dateTime={show.dateTime} id={id} />
      </div>

      {/* ================= YOU MAY ALSO LIKE ================= */}
      <p className='text-lg font-medium mt-20 mb-8'>You May Also Like</p>

      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData
          .filter(movie => movie.id !== Number(id))
          .slice(0, 4)
          .map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
      </div>

      <div className='flex justify-center mt-20'>
        <button
          onClick={() => {
            navigate('/movies')
            scrollTo(0, 0)
          }}
          className='px-10 py-3 text-sm bg-primary rounded-md'
        >
          Show more
        </button>
      </div>

    </div>
  ) : (
    <Loading />
  )
}

export default MovieDetails