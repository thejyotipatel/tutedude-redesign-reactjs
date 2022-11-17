import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi'
import { TfiBook } from 'react-icons/tfi'
const links = [
  {
    label: 'My Assignment',
  },
  {
    label: 'Chat with Mentor',
  },
]

const Header = () => {
  return (
    <header>
      <div className='header-contant'>
        <div className='logo lg-color'>
          <TfiBook /> TuteDude
        </div>
        <ul>
          <li>My Assignment</li>
          <li>Chat with Mentor</li>
          <li>
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
