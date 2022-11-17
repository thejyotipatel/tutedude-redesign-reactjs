import { BiRupee } from 'react-icons/bi'

const Withdraw = () => {
  return (
    <div className=' withdraw'>
      <ul>
        <li>
          Referral Earning
          <span>
            <BiRupee />
            2,500
          </span>
        </li>
        <li>
          Total Referrals
          <span>
            <BiRupee />7
          </span>
        </li>
        <li>
          Wallet Balance
          <span>
            <BiRupee />
            500
          </span>
        </li>
      </ul>
      <button className='btn'>Withdraw Balance</button>
    </div>
  )
}

export default Withdraw
