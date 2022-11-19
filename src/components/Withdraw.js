import { BiRupee } from 'react-icons/bi'

const Withdraw = () => {
  return (
    <div className=' withdraw'>
      <ul role='list' className=' '>
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
        <li>
          <button className='btn'>Withdraw Balance</button>
        </li>
      </ul>
    </div>
  )
}

export default Withdraw
