"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LuPin } from "react-icons/lu";
import { RiHome6Line, RiMapPin5Line } from "react-icons/ri";

function SideBar() {
    const pathname = usePathname();
    const isActive = (path:string) => path === pathname;
  return (
    <div className=" w-full p-5 flex flex-col pl-7 gap-y-8">
      <div
        className={`flex items-center gap-x-2 text-[#81838C] py-2  ${
          isActive("/dashboard")
            ? "text-black border-2 bg-zinc-100 rounded-md"
            : ""
        }`}
      >
        <RiHome6Line className=" size-6 ml-2" />
        <Link href={"/dashboard"} className=" text-xl font-medium">
          Dashboard
        </Link>
      </div>
      <div
        className={`flex items-center gap-x-2 text-[#81838C] py-2 ${
          isActive("/events") ? "text-black border-2 bg-zinc-100  rounded-md" : ""
        }`}
      >
        <RiMapPin5Line className=" size-6 ml-2" />
        <Link href={"/events"} className=" text-xl font-medium">
          My Events
        </Link>
      </div>
      <div
        className={`flex items-center gap-x-2 text-[#81838C] py-2 ${
          isActive("/rsvp") ? "text-black border-2 bg-zinc-100  rounded-md" : ""
        }`}
      >
        <LuPin className=" size-6 ml-2" />
        <Link href={"/rsvp"} className=" text-xl font-medium">
          My RSVPs
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
