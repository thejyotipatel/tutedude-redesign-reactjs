import { BiRupee } from 'react-icons/bi'

const Withdraw = () => {
  return (
    <div className=' withdraw'>
      <ul role='list' className='flex-center'>
        <li>
          Referral Earning
          <span className='flex-center'>
            <BiRupee />
            2,500
          </span>
        </li>
        <li>
          Total Referrals
          <span className='flex-center'>
            <BiRupee />7
          </span>
        </li>
        <li>
          Wallet Balance
          <span className='flex-center'>
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
