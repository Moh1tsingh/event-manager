
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useState } from "react";
import CalendarCard from "./components/CalendarCard";
import ManageEventsCard from "./components/ManageEventsCard";
import DatePickerCard from "./components/DatePickerCard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import AuthButton from "./components/AuthButton";
{
  /* 
      <RegisterLink>Sign up</RegisterLink>
       */
}
export default function Home() {
  return (
    <div className=" w-full flex flex-col items-center ">
      <div className="  w-[900px] border-b-2 flex justify-between py-6 items-center px-3 ">
        <h1 className=" font-bold text-neutral-900 text-3xl tracking-tighter">
          EveMg
        </h1>
        <div>
          <LoginLink>
            <button className=" px-5 py-2 rounded-full bg-white shadow-lg font-semibold tracking-tighter hover:bg-black hover:text-white duration-200 ease-linear">
              Sign in
            </button>
          </LoginLink>
        </div>
      </div>
      <div className=" w-full flex flex-col  items-center min-h-[400px]">
        <h1 className=" font-medium text-[4rem] mt-12 tracking-tighter">
          Create. Attend. Remember
        </h1>
        <p className=" w-[620px] text-center text-muted-foreground font-medium tracking-tight">
          Creating meeting never was never this easy. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quos sequi culpa voluptatum nobis atque
          nam
        </p>

        <div className=" w-full mt-16 flex justify-center gap-x-8">
          <div className=" h-[280px] w-[300px] rounded-[3.3rem] shadow-2xl -mt-4 bg-[#F5F3F0]">
            <DatePickerCard />
          </div>
          <div className=" h-[320px] w-[400px] rounded-[3.3rem] shadow-2xl mt-4 overflow-hidden bg-[#F5F3F0]">
            <ManageEventsCard />
          </div>
          <div className=" h-[340px] w-[320px] rounded-[3.3rem] shadow-2xl overflow-hidden -mt-6 bg-[#F5F3F0] ">
            <CalendarCard />
          </div>
        </div>
      </div>
    </div>
  );
}
