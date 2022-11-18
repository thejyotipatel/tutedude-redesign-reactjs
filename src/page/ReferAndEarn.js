import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import ReferralCode from '../components/ReferralCode'
import Withdraw from '../components/Withdraw'
import List from '../utils/List'

const ReferAndEarn = () => {
  return (
    <main className='container refer-earn-container'>
      <div className='refer-earn-contant'>
        <p className='flex-center'>
          UI/UX
          <span>
            <BiChevronLeft />
          </span>
          Refer & Earn
        </p>

        <div className='refere-earn-card flex-center'>
          <Withdraw />
          <ReferralCode />
        </div>

        <div className='lists-contant'>
          <h1>How does it work ?</h1>
          <svg width='0' height='0'>
            <linearGradient
              id='blue-gradien'
              x1='100%'
              y1='100%'
              x2='0%'
              y2='0%'
            >
              <stop stopColor='#800080' offset='0%' />
              <stop stopColor='#ff864c' offset='100%' />
            </linearGradient>
          </svg>
          <div className='lists  '>
            {List.map((item) => {
              const { id, header, text, logo } = item
              return (
                <div key={id} className='list flex-center'>
                  <h1 className='icons flex-center'>{logo}</h1>
                  <div className='list-text'>
                    <h1>{header}</h1>
                    <p>{text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <Link className='link' to={'/friend-referred'}>
          Friends Who Enrolled
        </Link>
      </div>
    </main>
  )
}

export default ReferAndEarn
