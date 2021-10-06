/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import Link from 'next/link'
import detailsPage from '../pages/detailsPage'
import DetailPage from './DetailPage'

const ResultBox = ({ result }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className="p-3 mt-4  transition duration-100 ease-in sm:hover:scale-105 cursor-pointer  group">
      <Link href={`movies/${result.id}`}>
        <Image
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.backdrop_path}`
          }
          height={1080}
          width={1920}
          layout="responsive"
          alt=""
        />
      </Link>

      <div>
        <h1 className="mt-2 group-hover:font-bold group-hover:text-xl ">
          <Link href={`movies/${result.id}`}>
            {result.title || result.original_name}
          </Link>
        </h1>
        <p className=" truncate max-w-md opacity-0 group-hover:opacity-100">
          {result.overview}
        </p>
        <p className=" opacity-0 group-hover:opacity-100">
          On Air : {result.release_date}
        </p>
      </div>
    </div>
  )
}

export default ResultBox
