import { FaUserCircle } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi'
import { TfiBook } from 'react-icons/tfi'

const Header = () => {
  return (
    <header>
      <div className='header-contant flex-center'>
        <div className='logo flex-center'>
          <span className='bg-lg-color'>
            <TfiBook />
          </span>
          TuteDude
        </div>
        <div className='header-list'>
          <a className='dt-no-display'>My Assignment</a>
          <a className='dt-no-display'>Chat with Mentor</a>
          <a className='flex-center profile'>
            <span className='dt-no-display'>
              <FaUserCircle />
            </span>
            ProfileName
            <span>
              <BiChevronDown />
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
