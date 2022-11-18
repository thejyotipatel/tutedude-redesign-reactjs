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
          {List.map((item) => {
            const { id, header, text, logo } = item
            return (
              <div key={id} className='list'>
                <span>{logo}</span>
                <div className='list-text'>
                  <h1>{header}</h1>
                  <p>{text}</p>
                </div>
              </div>
            )
          })}
        </div>

        <Link to={'/friend-referred'} className='fs-200 fw-semi-bold'>
          Friends Who Enrolled
        </Link>
      </div>
    </main>
  )
}

export default ReferAndEarn
