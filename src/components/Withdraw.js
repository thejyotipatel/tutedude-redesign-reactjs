import { BiRupee } from 'react-icons/bi'

const Withdraw = () => {
  return (
    <div className=' withdraw'>
      <div role='list' className='withdraw-list '>
        <p>
          Referral Earning
          <span>
            <BiRupee />
            2,500
          </span>
        </p>
        <p>
          Total Referrals
          <span>
            <BiRupee />7
          </span>
        </p>
        <p>
          Wallet Balance
          <span>
            <BiRupee />
            500
          </span>
        </p>
        <p>
          <button className='btn'>Withdraw Balance</button>
        </p>
      </div>
    </div>
  )
}

export default Withdraw
