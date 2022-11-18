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
          <li>My Assignment</li>
          <li>Chat with Mentor</li>
          <li className='flex-center'>
            <span>
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
