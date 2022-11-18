import { BiChevronLeft, BiRupee } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import ReferralCode from '../components/ReferralCode'
import CardData from '../utils/CardData'
const FriendReferred = () => {
  return (
    <main className='container refer-container'>
      <div className='refer-contant'>
        <div className='url-link'>
          <p>
            UI/UX
            <span>
              <BiChevronLeft />
            </span>
            <Link to={'/'}> Refer & Earn</Link>
            <span>
              <BiChevronLeft />
            </span>
            Friends Referred
          </p>
        </div>

        <div className='refer-code'>
          <ReferralCode />
          <div className='wallet-balance'>
            <p>Wallet Balance</p>
            <h1>
              <span>
                <BiRupee />
              </span>
              500
            </h1>
          </div>
        </div>

        <div className='cards'>
          <h1>Friends who enrolled(3)</h1>
          {CardData.map((data) => {
            return <Card key={data.id} data={data} />
          })}
        </div>
      </div>
    </main>
  )
}

export default FriendReferred
