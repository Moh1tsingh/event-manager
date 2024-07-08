import React from 'react'

import { getUserData } from "../actions";
import Image from 'next/image';
import { unstable_noStore as noStore } from "next/cache";

async function UserProfile() {
  noStore();
    const user = await getUserData();
  return ( user &&
    <div className=' flex w-full justify-start py-5 gap-x-2 items-center pl-7'>
      <Image src={user.profileImg as string} alt='profile image' width={40} height={30} className=' rounded-full'/>
      <h1 className=' text-2xl font-semibold tracking-tight'>{user.first_name} </h1>
    </div>
  )
}

export default UserProfile