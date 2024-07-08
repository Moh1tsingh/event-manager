import { getRsvp } from "@/app/actions";
import SideBar from "@/app/components/SideBar";
import UserProfile from "@/app/components/UserProfile";
import { Card } from "@/components/ui/card";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

import { unstable_noStore as noStore } from "next/cache";

async function RsvpPage({ params }: { params: { id: string } }) {
  noStore();
  const rsvpData = await getRsvp(params.id);
  return (
    <div className=" w-full flex">
      <div className=" w-[18%] h-screen border-r-2 border-zinc-200">
        <UserProfile />
        <SideBar />
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
        <div className=" px-20  flex justify-center items-center  py-4 flex-col gap-y-2 overflow-auto event-card-container ">
          {rsvpData.map((rsvp) => (
            <Card key={rsvp.id} className="flex flex-col w-full   p-3">
              <h1 className="font-bold text-lg">{rsvp.name}</h1>
              <h1 className="font-bold text-lg">{rsvp.phone}</h1>
              <h1 className="font-bold text-lg">{rsvp.email}</h1>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RsvpPage;
