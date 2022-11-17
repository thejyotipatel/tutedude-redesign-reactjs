import React from 'react'
import { BiRupee } from 'react-icons/bi'

const Card = ({ data }) => {
  return (
    <div className='card lg-color '>
      <div className='card-contant'>
        <div className='card-header'>
          <h1>{data.header}</h1>
          <p> {data.date}</p>
        </div>
        <div className='card-main'>
          <h3>Courses Enrolled({data.length})</h3>
          <ul>
            {data.courses.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
          <h2>
            Referral Amount
            <span>
              <BiRupee />
            </span>
            {data.amount}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Card
