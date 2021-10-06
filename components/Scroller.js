import { useRouter } from 'next/router'
import requests from '../utils/requests'

const Scroller = () => {
  const router = useRouter()
  return (
    <nav className="cursor-pointer">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-19
        overflow-x-scroll scrollbar-hide items-center justify-center cursor-pointer"
      >
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className="last:pr-15 cursor-pointer transition  duration-100 transform hover:scale-125 hover:text-white active:text-red-500 scrollbar-hide"
            >
              {title}
            </h2>
          )
        })}
      </div>
      <div></div>
    </nav>
  )
}

export default Scroller
