import { BiChevronLeft, BiRupee, BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import CardData from '../utils/CardData'

const FriendReferred = () => {
  return (
    <main className='container refer-container'>
      <div className='refer-contant'>
        <p className='flex-center '>
          UI/UX
          <span>
            <BiChevronLeft />
          </span>
          Refer & Earn
          <span>
            <BiChevronLeft />
          </span>
          Friends Referred
        </p>
        <Link to={'/'} className='flex-center go-back  '>
          <span>
            <BiArrowBack />
          </span>
          go back
        </Link>
        <div className='refer-code'>
          <div className='refer-code-contant'>
            <h2>Your Referral Code </h2>
            <p>EDCH54</p>
          </div>
          <div className='  wallet-bal'>
            <p>Wallet Balance</p>
            <h1 className=' '>
              <span>
                <BiRupee />
              </span>
              500
            </h1>
          </div>
        </div>
        <div className='cards'>
          <h1>Friends who enrolled(3)</h1>
          <div className='cards-contant'>
            {CardData.map((data) => {
              return <Card key={data.id} data={data} />
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default FriendReferred
