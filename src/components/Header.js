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
        <ul role='list'>
          <li className='dt-no-display'>My Assignment</li>
          <li className='dt-no-display' s>
            Chat with Mentor
          </li>
          <li className='flex-center profile'>
            <span className='dt-no-display'>
              <FaUserCircle />
            </span>
            ProfileName
            <span>
              <BiChevronDown />
            </span>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
