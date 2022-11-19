import { BiRupee } from 'react-icons/bi'

const Card = ({ data }) => {
  return (
    <div className='card '>
      <div className='card-contant'>
        <div className='card-header flex-center'>
          <h1>{data.header}</h1>
          <p> {data.date}</p>
        </div>
        <div className='card-main'>
          <h3>Courses Enrolled({data.courses.length})</h3>
          <div className='flex-center curses-list'>
            {data.courses.map((item, index) => {
              return <p key={index}>{item}</p>
            })}
          </div>
          <h2 className='flex-center'>
            Referral Amount
            <span className='flex-center'>
              <BiRupee />
              {data.amount}
            </span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Card
