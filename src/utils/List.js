import { IoIosPeople, IoMdWallet } from 'react-icons/io'
import { MdLocalOffer } from 'react-icons/md'
import { TbDiscount2 } from 'react-icons/tb'
import { FaRupeeSign } from 'react-icons/fa'

const List = [
  {
    id: 1,
    logo: <IoIosPeople />,
    header: 'Invite your Friends',
    text: 'Share the link tutedude.com with your friends',
  },
  {
    id: 2,
    logo: <MdLocalOffer />,
    header: 'Friend purchases any course',
    text: 'Using your REFERRAL CODE in the payments page',
  },
  {
    id: 3,
    logo: <FaRupeeSign />,
    header: 'You get ₹ 200 as referral money',
    text: 'On total purchase the friend makes, into your wallet',
  },
  {
    id: 4,
    logo: <TbDiscount2 />,
    header: 'Your Friend gets ₹ 200 Off ',
    text: 'On his overall fee on successful purchase using your referral code ',
  },
  {
    id: 5,
    logo: <IoMdWallet />,
    header: 'Transfer money from wallet',
    text: 'When the wallet balance reaches ₹200 or more, you can withdraw it',
  },
]
export default List
