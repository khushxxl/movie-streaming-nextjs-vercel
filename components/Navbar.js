import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'
import Icon from './Icon'
const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between m-5 items-center h-auto ">
      <div className="flex flex-col ml-10">
        <h1 className="font-semibold cursor-pointer  text-4xl text-yellow-200">
          Watch<span className="text-white">Now</span>
        </h1>
        <p>Watch trending stuff here⚡️</p>
      </div>

      <div className="text-white flex justify-between mt-5 sm:mt-0 ">
        <Icon title="Home" Icon={HomeIcon} />
        <Icon title="Search" Icon={SearchIcon} />
        <Icon title="Verified" Icon={BadgeCheckIcon} />
        <Icon title="Collections" Icon={CollectionIcon} />
        <Icon title="Trending" Icon={LightningBoltIcon} />
        <Icon title="Account" Icon={UserIcon} />
      </div>
    </div>
  )
}

export default Navbar
