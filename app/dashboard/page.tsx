
import React from 'react'
import UserProfile from '../components/UserProfile';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import SideBar from '../components/SideBar';
import CreateEventCard from '../components/CreateEventCard';



function Dashboard() {
  
  return (
    <div className=" w-full flex">
      <div className=" w-[18%] h-screen border-r-2 border-zinc-200">
        <UserProfile />
        <SideBar/>
      </div>
      <div className=" w-[82%] h-screen">
        <div className=" w-full h-[10%] flex justify-between items-center px-5 border-b-2 border-zinc-200">
          <h1 className=" text-2xl font-semibold tracking-tighter">
            Dashboard
          </h1>
          <button className=" px-5 py-2 rounded-full hover:bg-white shadow-lg font-semibold tracking-tighter bg-black hover:text-black text-white duration-200 ease-linear">
            <LogoutLink>Log out</LogoutLink>
          </button>
        </div>
        <div className=" w-full h-[90%] flex justify-center items-center">
            <CreateEventCard/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;