/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import requests from '../../utils/requests'
import Image from 'next/image'

const MovieDetail = ({ results }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'

  const router = useRouter()

  const movieId = router.query.movieid
  console.log(router.query.movieid)

  const getMovie = (id) => {
    return results.find((movie) => movie.id == id)
  }

  const movie = getMovie(movieId)
  console.log(movie)
  return (
    <div className="text-white justify-center  items-center mt-20 flex flex-col">
      <div className="mt-5 text-2xl mb-5 font-bold">
        {movie.title || movie.original_name}
      </div>

      <div className="w-6/12 items-center justify-center">
        <Image
          src={
            `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
            `${BASE_URL}${movie.backdrop_path}`
          }
          height={1080}
          width={1920}
          layout="responsive"
          alt=""
        />
      </div>

      <div className="mt-8 font-semibold w-auto ">{movie.overview}</div>
      <div className="font-semibold">
        Stet no at eos et duo et sed, sea sit vero voluptua rebum amet
        consetetur, duo clita voluptua ea lorem.
      </div>
    </div>
  )
}

export default MovieDetail

export async function getServerSideProps(context) {
  const genre = context.query.genre
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    } `,
  ).then((res) => res.json())
  return {
    props: {
      results: request.results,
    },
  }
}
