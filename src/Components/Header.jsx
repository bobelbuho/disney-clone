import React from 'react'
import logo from './../assets/Images/logo.png'
import { IconName,
HiMagnifyingGlass,
HiStar,
HiPlayCircle,
HiTv  } from "react-icons/hi";
import { HiPlus, HiDotsVertical } from "react-icons/hi";

function Header () {
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            
        }

    ]
  return (
    <div>
        <img src={logo} className='w-[80px]
         md:w-[115px] object-cover' />
    </div>
  )
}

export default Header