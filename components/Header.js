import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header>
      {/* Left */}
      <div className="flex justify-between max-w-6xl">
        <div className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Middle */}
      <div className="relative mt-1 p-3 rounded-md bg-red-500 ">
        {/* Search */}
        <div className="absolute inset-y-0 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input type="text" placeholder="search" />
      </div>

      {/* Right */}
      <div></div>
    </header>
  );
}

export default Header;
