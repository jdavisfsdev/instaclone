import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import Home from '../pages';
import { signIn, signOut, useSession } from 'next-auth/react';

function Header() {
  const { data: session } = useSession();

  return (
    <header className="shadow-sm border-b bg-white sticky top-0 z-50">
      {/* Left */}
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            {/* Search */}
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navButton" />
          <MenuIcon className="h-6 md:hidden  cursor-pointer" />

          {session ? (
            <>
              <div className="relative navButton">
                <PaperAirplaneIcon className="navButton rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>

              <PlusCircleIcon className="navButton" />
              <UserGroupIcon className="navButton" />
              <HeartIcon className="navButton" />

              <img
                onClick={signOut}
                className="h-10 rounded-full cursor-pointer"
                src={session?.user?.image}
                alt="profile picture"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
