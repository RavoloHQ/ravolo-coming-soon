import { RiMenuLine } from '@remixicon/react'
import logo from '../assets/logo-white.svg'

const Nav = () => {
  return (
    <nav className='px-5 py-5 md:px-10 md:py-10 flex justify-between items-center'>
      <div className='w-[25px] md:w-[35px] flex items-center'>
        <img src={logo} alt="" className='max-w-full'/>
        <span className='text-lg ml-2'>Ravolo</span>
      </div>
      <div className='hidden md:block'>
        <button className="bg-neutral-50 text-neutral-950 p-[1px] rounded active:scale-95 hover:bg-gradient-to-br hover:from-purple-900 hover:to-purple-500  hover:text-neutral-50 group duration-200 ">
            <div className="px-4 py-2 bg-neutral-50 text-neutral-950 group-hover:bg-neutral-900 group-hover:text-neutral-50 rounded duration-200">
                Join Waitlist               
            </div>
        </button>
      </div>
      <div className='md:hidden'>
        <button>
            <RiMenuLine/>
        </button>
      </div>
    </nav>
  )
}

export default Nav
